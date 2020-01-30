import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  POST_ADD_REQUEST,
  POST_ADD_SUCCESS,
  POST_ADD_FAILURE,
} from '../modules/posts';
import * as firebase from 'firebase/app';

function postaddtAPI(action) {
  console.log(action);
  const {
    title,
    select,
    preview,
    content,
    CreateDate,
    createdAt,
    reserseCreatedAt,
  } = action;
  return firebase
    .firestore()
    .collection('post')
    .add({
      title,
      select,
      preview,
      content,
      CreateDate,
      createdAt,
      reserseCreatedAt,
    });
}

function* postadd(action) {
  try {
    console.log(action);
    yield call(postaddtAPI, action.data);
    yield put({
      type: POST_ADD_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: POST_ADD_FAILURE,
      error: e,
    });
  }
}

function* watchPostAdd() {
  yield takeLatest(POST_ADD_REQUEST, postadd);
}

export default function* postSaga() {
  yield all([fork(watchPostAdd)]);
}

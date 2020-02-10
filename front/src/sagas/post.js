import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  POST_ADD_REQUEST,
  POST_ADD_SUCCESS,
  POST_ADD_FAILURE,
  POST_LOAD_REQUEST,
  POST_LOAD_SUCCESS,
  POST_LOAD_FAILURE,
} from '../modules/posts';
import * as firebase from 'firebase/app';

function postaddtAPI(action) {
  // console.log(action);
  const { title, category, name, description, tags, content } = action;
  const id = category + '_' + name;
  const createdAt = new Date();
  const modifiedAt = new Date();
  firebase
    .firestore()
    .collection('docs')
    .doc(id)
    .set({ title, description, tags, createdAt });
  const cid = id + '/content/last';
  firebase
    .firestore()
    .collection('docs')
    .doc(cid)
    .set({ createdAt, modifiedAt, content });
}

function* postadd(action) {
  try {
    // console.log(action);
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

function postloadAPI() {
  return firebase
    .firestore()
    .collection('docs')
    .get();
}

function* postload() {
  try {
    const result = yield call(postloadAPI);
    console.log(result);
    yield put({
      type: POST_LOAD_SUCCESS,
      data: result,
    });
  } catch (e) {
    yield put({
      type: POST_LOAD_FAILURE,
      error: e,
    });
  }
}

function* watchPostLoad() {
  yield takeLatest(POST_LOAD_REQUEST, postload);
}

export default function* postSaga() {
  yield all([fork(watchPostAdd), fork(watchPostLoad)]);
}

import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_TODO_REQUEST,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAILURE,
} from '../modules/todos';

// function loadPostAPI() {

// }

function* loadPost() {
  try {
    yield delay(2000);
    console.log('asdasd');
    yield put({
      type: LOAD_TODO_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOAD_TODO_FAILURE,
      error: e,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_TODO_REQUEST, loadPost);
}

export default function* postSaga() {
  yield all([fork(watchLoadPost)]);
}

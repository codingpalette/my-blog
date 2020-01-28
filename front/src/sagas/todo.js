import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import * as firebase from 'firebase/app';
import {
  LOAD_TODO_REQUEST,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DEL_TODO_REQUEST,
  DEL_TODO_FAILURE,
  DEL_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
} from '../modules/todos';

//////////// Todo 로드 /////////

function loadPostAPI() {
  return firebase
    .firestore()
    .collection('todo')
    .get();
}

function* loadPost() {
  try {
    // yield delay(2000);
    const result = yield call(loadPostAPI);
    // console.log(result);
    yield put({
      type: LOAD_TODO_SUCCESS,
      data: result,
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

//////////// Todo 등록 /////////

function addTodoAPI(action) {
  // console.log(value);
  return firebase
    .firestore()
    .collection('todo')
    .add({
      text: action,
      done: false,
    });
}

function* addTodo(action) {
  try {
    // yield delay(2000);
    // console.log(action.data);
    const result = yield call(addTodoAPI, action.data);
    const list = [result.id, action.data, false];

    yield put({
      type: ADD_TODO_SUCCESS,
      data: list,
    });
  } catch (e) {
    yield put({
      type: ADD_TODO_FAILURE,
      error: e,
    });
  }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODO_REQUEST, addTodo);
}

//////////// Todo 수정 /////////

function* updateTodoAPI() {}

function* updateTodo(action) {
  try {
    console.log(action);
  } catch (e) {}
}

function* watchUpdateTodo() {
  yield takeLatest(UPDATE_TODO_REQUEST, updateTodo);
}

//////////// Todo 삭제 /////////

function delTodoAPI(action) {
  return firebase
    .firestore()
    .collection('todo')
    .doc(action)
    .delete();
}

function* delTodo(action) {
  try {
    // yield delay(2000);
    yield call(delTodoAPI, action.data);
    // console.log(action.data);
    yield put({
      type: DEL_TODO_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: DEL_TODO_FAILURE,
      error: e,
    });
  }
}

function* watchDelTodo() {
  yield takeLatest(DEL_TODO_REQUEST, delTodo);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPost),
    fork(watchAddTodo),
    fork(watchUpdateTodo),
    fork(watchDelTodo),
  ]);
}

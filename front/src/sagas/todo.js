import { all, delay, fork, call, put, takeLatest } from 'redux-saga/effects';
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
} from '../modules/todos';

// function loadPostAPI() {

// }

function* loadPost() {
  try {
    // yield delay(2000);
    // console.log('asdasd');
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

//////////// Todo 등록 /////////

function addTodoAPI(value) {
  // console.log(value);
  return firebase
    .firestore()
    .collection('todo')
    .add({
      text: value,
    });
}

function* addTodo(action) {
  try {
    // yield delay(2000);
    // console.log(action.data.value)
    const result = yield call(addTodoAPI, action.data);
    console.log(result);

    yield put({
      type: ADD_TODO_SUCCESS,
      data: action.data.value,
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

// function delTodoAPI() {

// }

function* delTodo(action) {
  try {
    // yield delay(2000);
    // console.log(action.data.value)
    // const result = yield call(delTodoAPI);
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
  yield all([fork(watchLoadPost), fork(watchAddTodo), fork(watchDelTodo)]);
}

import { all, fork } from 'redux-saga/effects';
import todo from './todo';
import auth from './auth';

export default function* rootSaga() {
  yield all([fork(todo), fork(auth)]);
}

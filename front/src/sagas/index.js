import { all, fork } from 'redux-saga/effects';
import todo from './todo';
import auth from './auth';
import post from './post';

export default function* rootSaga() {
  yield all([fork(todo), fork(auth), fork(post)]);
}

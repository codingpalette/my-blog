import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
} from '../modules/auths';
import * as firebase from 'firebase/app';

function signupAPI(action) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(action.idvalue, action.passvalue);
}

function* signup(action) {
  try {
    // console.log(action);
    yield call(signupAPI, action.data);
    firebase.auth().currentUser.getIdToken(true);
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (e) {
    // console.log(e);
    yield put({
      type: SIGNUP_FAILURE,
      error: e,
    });
  }
}

function* watchAuthSignup() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}

function loginAPI(action) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(action.idvalue, action.passvalue);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: result,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      error: e,
    });
  }
}

function* watchAuthLoing() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function logoutAPI() {
  return firebase.auth().signOut();
}

function* logout(action) {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
      error: e,
    });
  }
}

function* watchAuthLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

function googleloginAPI() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

function* googlelogin() {
  try {
    yield call(googleloginAPI);
    firebase.auth().currentUser.getIdToken(true);
    yield put({
      type: GOOGLE_LOGIN_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: GOOGLE_LOGIN_FAILURE,
      error: e,
    });
  }
}

function* watchAuthGoogleLogin() {
  yield takeLatest(GOOGLE_LOGIN_REQUEST, googlelogin);
}

export default function* authSaga() {
  yield all([
    fork(watchAuthLoing),
    fork(watchAuthSignup),
    fork(watchAuthLogout),
    fork(watchAuthGoogleLogin),
  ]);
}

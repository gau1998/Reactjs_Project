import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constants';
import { loginSuccess, loginFailed } from './actions';
import { loginRequestApi } from './api';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* requestLogin({ payload }) {
  try {
    const result = yield call(loginRequestApi, { payload });
    yield put(loginSuccess(result));
  } catch (e) {
    yield put(loginFailed(e));
  }
}

function* mySaga() {
  yield takeLatest(LOGIN, requestLogin);
}

export default mySaga;

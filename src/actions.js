import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailed(payload) {
  return {
    type: LOGIN_FAILED,
    payload,
  };
}

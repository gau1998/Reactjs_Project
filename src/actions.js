import { LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAILED,
  GET_COURSE_DETAILS,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAILED,
  GET_TUTORIAL_DETAILS,
  TUTORIAL_DETAILS_SUCCESS,
  TUTORIAL_DETAILS_FAILED,
  GET_SOURCES,
  SOURCES_SUCCESS,
  SOURCES_FAILED,
 } from './constants';

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
export function getCourseDetails(payload) {
  return {
    type: GET_COURSE_DETAILS,
    payload,
  };
}
export function courseDetailsLoaded(payload) {
  return {
    type: COURSE_DETAILS_SUCCESS,
    payload,
  };
}
export function courseDetailsFailed(payload) {
  return {
    type: COURSE_DETAILS_FAILED,
    payload,
  };
}
export function getTutorialDetails(payload) {
  return {
    type: GET_TUTORIAL_DETAILS,
    payload,
  };
}
export function tutorialDetailsLoaded(payload) {
  return {
    type: TUTORIAL_DETAILS_SUCCESS,
    payload,
  };
}
export function tutorialDetailsFailed(payload) {
  return {
    type: TUTORIAL_DETAILS_FAILED,
    payload,
  };
}
export function getSources(payload) {
  return {
    type: GET_SOURCES,
    payload,
  };
}
export function sourceLoaded(payload) {
  return {
    type: SOURCES_SUCCESS,
    payload,
  };
}
export function sourceFailed(payload) {
  return {
    type: SOURCES_FAILED,
    payload,
  };
}




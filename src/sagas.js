import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN, GET_COURSE_DETAILS, GET_TUTORIAL_DETAILS, GET_SOURCES, } from './constants';
import { loginSuccess, 
	loginFailed, 
	courseDetailsLoaded,
	courseDetailsFailed,
  tutorialDetailsLoaded,
  tutorialDetailsFailed,
  sourceLoaded,
  sourceFailed,
	} from './actions';
import { loginRequestApi, getCourseDetailsApi,getTutorialDetailsApi, getSourcesApi } from './api';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* requestLogin({ payload }) {
  try {
    const result = yield call(loginRequestApi, { payload });
    yield put(loginSuccess(result));
  } catch (e) {
    yield put(loginFailed(e));
  }
}
function* requestCourseDetails({ payload }) {
  try {
    const result = yield call(getCourseDetailsApi, { ...payload });
    yield put(courseDetailsLoaded(result));
  } catch (e) {
    yield put(tutorialDetailsFailed(e));
  }
}
function* requestTutorialDetails({ payload }) {
  try {
    const result = yield call(getTutorialDetailsApi, { ...payload });
    yield put(tutorialDetailsLoaded(result));
  } catch (e) {
    yield put(courseDetailsFailed(e));
  }
}
function* requestSources({ payload }) {
  try {
    const result = yield call(getSourcesApi, { payload });
    yield put(sourceLoaded(result));
  } catch (e) {
    yield put(sourceFailed(e));
  }
}
function* mySaga() {
  yield takeLatest(LOGIN, requestLogin);
  yield takeLatest(GET_COURSE_DETAILS, requestCourseDetails);
  yield takeLatest(GET_TUTORIAL_DETAILS, requestTutorialDetails);
  yield takeLatest(GET_SOURCES, requestSources);
}

export default mySaga;

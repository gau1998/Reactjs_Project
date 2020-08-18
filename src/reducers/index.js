import { LOGIN_SUCCESS, LOGIN_FAILED, COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAILED, TUTORIAL_DETAILS_SUCCESS,
  TUTORIAL_DETAILS_FAILED,
  SOURCES_SUCCESS, SOURCES_FAILED, } from '../constants';

const initialState = {
  loginSuccess: false,
  error: '',
  courseDetail: '',
  tutorialDetail: '',
  sourceDetail: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        error: '',
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload,
      };
    case COURSE_DETAILS_SUCCESS:
      return {
        ...state,
        courseDetail: action.payload.response[0],
        error: ''
      };
    case COURSE_DETAILS_FAILED:
      return {
        ...state,
        courseDetail: [],
        error: action.payload,
      };
    case TUTORIAL_DETAILS_SUCCESS:
      return {
        ...state,
        tutorialDetail: action.payload.response,
        error:'',
      };
    case TUTORIAL_DETAILS_FAILED:
      return {
        ...state,
        tutorialDetail: [],
        error: action.payload,
      };
    case SOURCES_SUCCESS:
      return {
        ...state,
        sourceDetail: action.payload.response,
        error:'',
      };
    case SOURCES_FAILED:
      return {
        ...state,
        sourceDetail: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;

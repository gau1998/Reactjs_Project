import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../constants';

const initialState = {
  loginSuccess: false,
  error: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
      ...state,
      loginSuccess: true,
      error: ''
    };
    case LOGIN_FAILED:
      return {
      ...state,
      loginSuccess: false,
      error: action.payload,
    };
    default:
      return state;
  }
}
export default rootReducer;

// 초기값 설정
const initialState = {
  isSignup: false,
  isLogin: false,
  isUser: '',
  isAuthError: '',
};

// 액션 type
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const STATE_USER_SUCCESS = 'STATE_USER_SUCCESS';

function auths(state = initialState, action) {
  switch (action.type) {
    // 회원가입
    case SIGNUP_REQUEST:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignup: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
      };
    // 로그인
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isUser: action.data.user.email,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthError: action.error.message,
      };
    // 로그아웃
    case LOGOUT_REQUEST:
      return {
        ...state,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        isUser: '',
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
      };
    case STATE_USER_SUCCESS:
      const user = action.data !== null ? action.data.email : '';
      return {
        ...state,
        isUser: user,
      };
    default:
      return state;
  }
}

export default auths;

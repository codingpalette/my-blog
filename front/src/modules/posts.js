// 초기값 설정
const initialState = {
  Title: '',
  Content: '',
};

// 액션 type
export const POST_ADD_REQUEST = 'POST_ADD_REQUEST';
export const POST_ADD_SUCCESS = 'POST_ADD_SUCCESS';
export const POST_ADD_FAILURE = 'POST_ADD_FAILURE';

function posts(state = initialState, action) {
  switch (action.type) {
    case POST_ADD_REQUEST:
      return {
        ...state,
      };
    case POST_ADD_SUCCESS:
      return {
        ...state,
      };
    case POST_ADD_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default posts;

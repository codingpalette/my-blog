// 초기값 설정
const initialState = {
  Title: '',
  Content: '',
  Items: [],
  TotalCount: null,
};

// 액션 type
export const POST_ADD_REQUEST = 'POST_ADD_REQUEST';
export const POST_ADD_SUCCESS = 'POST_ADD_SUCCESS';
export const POST_ADD_FAILURE = 'POST_ADD_FAILURE';

export const POST_LOAD_REQUEST = 'POST_LOAD_REQUEST';
export const POST_LOAD_SUCCESS = 'POST_LOAD_SUCCESS';
export const POST_LOAD_FAILURE = 'POST_LOAD_FAILURE';

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
    case POST_LOAD_REQUEST:
      return {
        ...state,
      };
    case POST_LOAD_SUCCESS:
      console.log(action);
      return {
        ...state,
      };
    case POST_LOAD_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default posts;

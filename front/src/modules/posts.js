// 초기값 설정
const initialState = {
  Items: [],
  TotalCount: null,
  meta: {},
  doc: {},
  viewLoding: true,
  Last: null,
};

// 액션 type
export const POST_ADD_REQUEST = 'POST_ADD_REQUEST';
export const POST_ADD_SUCCESS = 'POST_ADD_SUCCESS';
export const POST_ADD_FAILURE = 'POST_ADD_FAILURE';

export const POST_LOAD_REQUEST = 'POST_LOAD_REQUEST';
export const POST_LOAD_SUCCESS = 'POST_LOAD_SUCCESS';
export const POST_LOAD_FAILURE = 'POST_LOAD_FAILURE';

export const POST_SCROLL_REQUEST = 'POST_SCROLL_REQUEST';
export const POST_SCROLL_SUCCESS = 'POST_SCROLL_SUCCESS';
export const POST_SCROLL_FAILURE = 'POST_SCROLL_FAILURE';

export const POST_DETAIL_LOAD_REQUEST = 'POST_DETAIL_LOAD_REQUEST';
export const POST_DETAIL_LOAD_SUCCESS = 'POST_DETAIL_LOAD_SUCCESS';
export const POST_DETAIL_LOAD_FAILURE = 'POST_DETAIL_LOAD_FAILURE';

export const POST_RESET_VIEW_REQUEST = 'POST_RESET_VIEW_REQUEST';

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
        Items: [],
      };
    case POST_LOAD_SUCCESS:
      // console.log(action);
      const list = [];
      action.data.forEach(v => {
        const item = v.data();
        // console.log(v.id);
        item.id = v.id;
        item.category = v.id.split('_')[0];
        item.name = v.id.split('_')[1];

        list.push(item);
      });
      return {
        ...state,
        Items: [...state.Items, ...list],
        Last: action.data.docs[action.data.docs.length - 1],
      };
    case POST_LOAD_FAILURE:
      return {
        ...state,
      };
    case POST_DETAIL_LOAD_REQUEST:
      return {
        ...state,
      };
    case POST_DETAIL_LOAD_SUCCESS:
      const { metaRead, docRead } = action.data;
      // console.log(metaRead.data());
      // console.log(docRead);

      return {
        ...state,
        meta: metaRead.data(),
        doc: docRead.data(),
        viewLoding: false,
      };
    case POST_DETAIL_LOAD_FAILURE:
      return {
        ...state,
      };
    case POST_RESET_VIEW_REQUEST:
      return {
        ...state,
        meta: {},
        doc: {},
        viewLoding: true,
      };
    case POST_SCROLL_REQUEST:
      return {
        ...state,
      };
    case POST_SCROLL_SUCCESS:
      const aa = [];
      action.data.forEach(v => {
        const item = v.data();
        console.log(v.id);
        item.id = v.id;
        item.category = v.id.split('_')[0];
        item.name = v.id.split('_')[1];
        aa.push(item);
      });
      return {
        ...state,
        Items: [...state.Items, ...aa],
        Last: action.data.docs[action.data.docs.length - 1],
      };
    case POST_SCROLL_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default posts;

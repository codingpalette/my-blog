// 초깃값 설정
const initialState = {
  ListContent: [
    // { id: 1, text: '타입스크립트 배우기', done: true },
    // { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
    // { id: 3, text: '투두리스트 만들기', done: false }
  ],
  isTodoLoad: true,
  isTodoAdd: false,
  isTodoDell: false,
};

const dummyList = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

// 액션 type
export const LOAD_TODO_REQUEST = 'LOAD_TODO_REQUEST';
export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS';
export const LOAD_TODO_FAILURE = 'LOAD_TODO_FAILURE';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const DEL_TODO_REQUEST = 'DEL_TODO_REQUEST';
export const DEL_TODO_SUCCESS = 'DEL_TODO_SUCCESS';
export const DEL_TODO_FAILURE = 'DEL_TODO_FAILURE';

function todos(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODO_REQUEST:
      return {
        ...state,
      };
    case LOAD_TODO_SUCCESS:
      return {
        ...state,
        isTodoLoad: false,
        ListContent: dummyList,
      };
    case ADD_TODO_REQUEST:
      return {
        ...state,
      };
    case ADD_TODO_SUCCESS:
      const nextId = Math.max(...state.ListContent.map(todo => todo.id)) + 1;
      return {
        ...state,
        ListContent: [
          ...state.ListContent,
          {
            id: nextId,
            text: action.data,
            done: false,
          },
        ],
      };
    case DEL_TODO_REQUEST:
      return {
        ...state,
      };
    case DEL_TODO_SUCCESS:
      return {
        ...state,
        ListContent: state.ListContent.filter(todo => todo.id !== action.data),
      };
    default:
      return state;
  }
}

export default todos;
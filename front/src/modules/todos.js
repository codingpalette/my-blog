// 초깃값 설정
const initialState = {
  List: [
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
        List: [dummyList, ...state.List],
      };

    //   case TOGGLE_TODO:
    //     return state.map(todo =>
    //       todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    //     );
    //   case REMOVE_TODO:
    //     return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;

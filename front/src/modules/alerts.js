// 초기값 설정
const initialState = {
  isError: '',
};

// 액션 type
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_FAILURE = 'ALERT_FAILURE';

function alerts(state = initialState, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        ...state,
        isError: 'on',
      };
    case ALERT_FAILURE:
      return {
        ...state,
        isError: '',
      };
    default:
      return state;
  }
}

export default alerts;

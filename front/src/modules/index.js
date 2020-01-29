import { combineReducers } from 'redux';
import todos from './todos';
import auths from './auths';
import alerts from './alerts';

const rootReducer = combineReducers({
  todos,
  auths,
  alerts,
});

export default rootReducer;

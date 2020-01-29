import { combineReducers } from 'redux';
import todos from './todos';
import auths from './auths';

const rootReducer = combineReducers({
  todos,
  auths,
});

export default rootReducer;

import { combineReducers } from 'redux';
import todos from './todos';
import auths from './auths';
import alerts from './alerts';
import posts from './posts';

const rootReducer = combineReducers({
  todos,
  auths,
  alerts,
  posts,
});

export default rootReducer;

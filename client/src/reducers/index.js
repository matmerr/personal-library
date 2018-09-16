import { combineReducers } from 'redux';

import authentication from './authentication.reducer';
import registration from './registration.reducer';
import books from './books.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  books,
});

export default rootReducer;

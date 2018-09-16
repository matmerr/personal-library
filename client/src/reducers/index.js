import { combineReducers } from 'redux';

import authentication from './authentication.reducer';
import registration from './registration.reducer';
import users from './users.reducer';
import books from './books.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  books,
});

export default rootReducer;
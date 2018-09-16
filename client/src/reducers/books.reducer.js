
// manages the books
import { booksConstants } from '../actions/books.actions';

const initialState = {
  searching: false,
  items: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case booksConstants.SEARCH_REQUEST:
      return Object.assign({}, state, {
        searching: true,
      });
    case booksConstants.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        items: action.booksResults,
      });
    case booksConstants.SEARCH_FAILURE:
      return {};
    default:
      return state;
  }
}

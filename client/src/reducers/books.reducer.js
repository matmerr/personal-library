
// manages the books
import { booksConstants } from '../actions/books.actions';

let user = JSON.parse(localStorage.getItem('user'));

export function books(state = {}, action) {
  switch (action.type) {
    case booksConstants.SEARCH_REQUEST:
      return { searching: true };
    case booksConstants.SEARCH_SUCCESS:
      return { books: action.books };
    case booksConstants.SEARCH_FAILURE:
      return {};
    case booksConstants.ADD_BOOK:
      return { addingBook: true };
    case booksConstants.ADD_SUCCESS:
      return { };
    case booksConstants.ADD_FAILURE:
      return {};
    case booksConstants.LOAD_BOOKS:
      return { loading: true };
    case booksConstants.LOAD_SUCCESS:
      return { books: action.books };
    case booksConstants.LOAD_FAILURE:
      return{ error: action.error }
    default:
      return state
  }
}
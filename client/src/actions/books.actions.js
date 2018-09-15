import { booksService } from '../services/books.service';
import { history } from '../helpers/history';

// Book action types
export const booksConstants = {
  SEARCH_REQUEST: 'BOOKS_SEARCH_REQUEST',
  SEARCH_SUCCESS: 'BOOKS_SEARCH_SUCCESS',
  SEARCH_FAILURE: 'BOOKS_SEARCH_FAILURE',

  ADD_BOOK: 'BOOKS_ADD_BOOK',
  ADD_SUCCESS: 'BOOKS_ADD_SUCCESS',
  ADD_FAILURE: 'BOOKS_ADD_FAILURE',

  LOAD_BOOKS: 'BOOKS_LOAD_BOOKS',
  LOAD_SUCCESS: 'BOOKS_LOAD_SUCCESS',
  LOAD_FAILURE: 'BOOKS_LOAD_FAILURE',
};

export const bookActions = {
  search,
  addBook
};

function search(searchTerm){
  return dispatch => {
    dispatch(request({ searchTerm }));
    booksService.search(searchTerm)
      .then(
        books => {
          dispatch(success(books));
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
  };
  function request(books) { return { type: booksConstants.SEARCH_REQUEST, books } }
  function success(books) { return { type: booksConstants.SEARCH_SUCCESS, books } }
  function failure(error) { return { type: booksConstants.SEARCH_FAILURE, error } }
}

function addBook(user) {
  return dispatch => {
      dispatch(request(user));
      booksService.addBook(user)
          .then(
              user => { 
                  dispatch(success(user));
                  history.push('/');
              },
              error => {
                  dispatch(failure(error.toString()));
              }
          );
  };

  function request(user) { return { type: booksConstants.ADD_BOOK, user } }
  function success(user) { return { type: booksConstants.ADD_SUCCESS, user } }
  function failure(error) { return { type: booksConstants.ADD_FAILURE, error } }
}

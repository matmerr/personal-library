import { booksConstants } from '../constants/books.constants';
import { booksService } from '../services/books.service';

export const bookActions = {
  search,
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

/* function addBook(book) {
  return dispatch => {
      dispatch(request(book));
      booksService.addBook(book)
          .then(
              book => { 
                  dispatch(success());
                  history.push('/');
              },
              error => {
                  dispatch(failure(error.toString()));
              }
          );
  };

  function request(book) { return { type: booksConstants.ADD_BOOK, book } }
  function success(book) { return { type: booksConstants.ADD_SUCCESS, book } }
  function failure(error) { return { type: booksConstants.ADD_FAILURE, error } }
} */

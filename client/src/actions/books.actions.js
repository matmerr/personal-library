import { booksService } from '../services/books.service';

// Book action types
export const booksConstants = {
  SEARCH_REQUEST: 'BOOKS_SEARCH_REQUEST',
  SEARCH_SUCCESS: 'BOOKS_SEARCH_SUCCESS',
  SEARCH_FAILURE: 'BOOKS_SEARCH_FAILURE',
};

function searchGoogleBooks(searchTerm) {
  function request(searchTerm) { return { type: booksConstants.SEARCH_REQUEST, searchTerm }; }
  function success(booksResults) { return { type: booksConstants.SEARCH_SUCCESS, booksResults }; }
  function failure(error) { return { type: booksConstants.SEARCH_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request({ searchTerm }));
    booksService.search(searchTerm)
      .then(
        (books) => {
          dispatch(success(books));
        },
        (error) => {
          dispatch(failure(error.toString()));
        },
      );
  };
}


export const bookActions = {
  searchGoogleBooks,
};

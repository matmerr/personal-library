
// encapsulates all backend api calls for performing operations on book data
// import { authHeader } from '../helpers/auth-header';

// const apiUrl = 'http://localhost:3001';
const googleAPI = 'https://www.googleapis.com/books';
const keyAPI = process.env.REACT_APP_GOOGLE_BOOKS_KEY;

export const booksService = {
  search,
};

function search(searchTerm){
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${googleAPI}/v1/volumes?q=${searchTerm}&key=${keyAPI}`, requestOptions)
    .then(handleResponse)
    .then(books => {
      // login successful
      //console.log('books');
      localStorage.setItem('searchDisplay', JSON.stringify(books));
      console.log('storage:', localStorage.searchDisplay);
      return books;
    });
}

/* function addBook(book, user){
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(book.id)
  };

  return fetch(`${apiUrl}/users/${user.id}/addBook`, requestOptions).then(handleResponse);;

} */

function handleResponse(response){
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok){
      if (response.status === 401){
        // TODO: handle 401
        console.log('401 error');
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
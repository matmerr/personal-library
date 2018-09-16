
// encapsulates all backend api calls for performing operations on book data
const googleAPI = 'https://www.googleapis.com/books';
const keyAPI = process.env.REACT_APP_GOOGLE_BOOKS_KEY;

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // TODO: handle 401
        console.log('401 error');
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function search(searchTerm) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${googleAPI}/v1/volumes?q=${searchTerm}&key=${keyAPI}`, requestOptions)
    .then(handleResponse)
    .then((books) => {
      //localStorage.setItem('books.books', JSON.stringify(books));
      return books.items;
    });
}

export const booksService = {
  search,
};

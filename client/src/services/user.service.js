
// encapsulates all backend api calls for performing operations on user data
import { authHeader } from '../helpers/auth-header';

const apiUrl = 'http://localhost:3001';

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  // update,
  delete: _delete
};

function login(username, password){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if jwt token in response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}

// remove user from local storage to log the user out
function logout(){
  localStorage.removeItem('user');
}

function getAll(){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${apiUrl}/users/${id}`, requestOptions).then(handleResponse);

}

function register(user) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch(`${apiUrl}/users/register`, requestOptions).then(handleResponse);
}

/* function update(user) {
  const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch(`${apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
} */

function _delete(id) {
  const requestOptions = {
      method: 'DELETE',
      headers: authHeader()
  };

  return fetch(`${apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response){
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok){
      if (response.status === 401){
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
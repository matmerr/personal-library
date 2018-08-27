
// the auth header is used to make an authenticated HTTP request
// to the server api using JWT authentication
export function authHeader(){
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token){
    return { 'Authorization': 'Bearer ' + user.token };
  } else {
    return {};
  }
}
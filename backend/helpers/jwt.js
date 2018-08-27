
import expressJwt from 'express-jwt';
import { getSecrets } from '../secrets';
import userService from '../users/user.service';

export default function jwt() {
  const secret = getSecrets('secret');
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't need authentication
      '/users/authenticate',
      '/users/register'
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  // revoke token is user no long exists
  if (!user){
    return done(null, true);
  }
  done();
}

// manages the registration section of the application state

import { userConstants } from '../actions/user.actions';

export default function registration(state = {}, action){
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
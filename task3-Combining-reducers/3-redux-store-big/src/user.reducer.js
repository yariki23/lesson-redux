import { ADD_USER, REMOVE_USER } from './user.actions';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return  action.payload;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

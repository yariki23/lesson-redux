import { createStore } from 'redux';
import { actionCreators } from './users.actions';

export const addUser = () => {
  return {
    type: 'ADDUSER',
  };
};
export const deleteUser = () => {
  return {
    type: 'DELETEUSER',
  };
};

const initialState = {
  usersList: [],
};

const store = createStore(actionCreators);

export default store;

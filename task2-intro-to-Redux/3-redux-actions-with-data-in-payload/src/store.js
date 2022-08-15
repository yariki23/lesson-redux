import { createStore } from 'redux';
import { actionCreators } from './users.actions';

export const addUser = (id, name) => {
  return {
    type: 'ADDUSER',
    payload: {
      id,
      name,
    },
  };
};
export const deleteUser = id => {
  return {
    type: 'DELETEUSER',
    payload: {
      id,
    },
  };
};

export const initialState = {
  usersList: [],
};

const store = createStore(actionCreators);

export default store;

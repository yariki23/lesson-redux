import { ADDUSER, DELETEUSER, UPDATEUSER } from './users.actions';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    case UPDATEUSER:
      const newList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userNewData,
          };
        }

        return user;
      });
      return {
        ...state,
        usersList: newList,
      };
    default:
      return state;
  }
};

export const usersReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case 'ADDUSER':
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case 'DELETEUSER':
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

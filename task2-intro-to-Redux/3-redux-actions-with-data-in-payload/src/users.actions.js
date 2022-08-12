export const actionCreators = (state, action) => {
  switch (action.type) {
    case 'ADDUSER':
      return {
        ...state,
        usersList: state.history.concat(),
      };
    case 'DELETEUSER':
      return {
        ...state,
        usersList: state.history.concat(),
      };
    default:
      return state;
  }
};

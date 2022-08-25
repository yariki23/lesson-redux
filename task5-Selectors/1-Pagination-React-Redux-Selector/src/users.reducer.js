import users from './users';
import { PREV_PAGE, NEXT_PAGE } from './users.actions';

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
};

export default usersReducer;

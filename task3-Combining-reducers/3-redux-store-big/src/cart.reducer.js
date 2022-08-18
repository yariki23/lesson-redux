import { ADD_CARD, DELETE_CARD } from './cart.actions';

const initialState = {
  products: [],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case DELETE_CARD:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

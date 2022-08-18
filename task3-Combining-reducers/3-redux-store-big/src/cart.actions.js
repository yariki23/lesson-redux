export const ADD_CARD = 'CARD/ADD_CARD';
export const DELETE_CARD = 'CARD/DELETE_CARD';

export const addProduct = cardData => {
  return {
    type: ADD_CARD,
    payload: cardData,
  };
};

export const removeProduct = cardId => {
  return {
    type: DELETE_CARD,
    payload: cardId,
  };
};

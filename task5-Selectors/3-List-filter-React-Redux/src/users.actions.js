export const TOGGLE_OPTION = 'USERS/TOGGLE_OPTION';

export const toggleOption = optionId => {
  return {
    type: TOGGLE_OPTION,
    payload: {
      optionId,
    },
  };
};

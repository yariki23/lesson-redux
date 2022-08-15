export const addUser = (obj) => {
  return {
    type: 'ADDUSER',
    payload: obj
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

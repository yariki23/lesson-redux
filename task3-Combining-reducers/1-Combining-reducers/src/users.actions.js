export const ADDUSER = 'USER/ADDUSER';
export const DELETEUSER = 'USER/DELETEUSER';
export const UPDATEUSER = 'USER/UPDATEUSER';

export const addUser = userData => {
  return {
    type: ADDUSER,
    payload: userData,
  };
};

export const deleteUser = userId => {
  return {
    type: DELETEUSER,
    payload: {
      userId,
    },
  };
};

export const updateUser = (userId, userNewData) => {
  return {
    type: UPDATEUSER,
    payload: {
      userId,
      userNewData,
    },
  };
};

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const SHOW_DATA_RECIEVED = 'SHOW_DATA_RECIEVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecieved = userData => {
  return {
    type: SHOW_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = () => {
  return function() {
    console.log('I am async action');
  }
}
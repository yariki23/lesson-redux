import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './UsersList';
import store from './store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <UsersList />
      </Provider>
    </div>
  );
};

export default App;

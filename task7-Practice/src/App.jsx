import React from 'react';
import TodoList from './Task/TodoList.jsx';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;

//algo
//1. static version ++
//2. use state and props +
//3. store redux
//4. fetch with server

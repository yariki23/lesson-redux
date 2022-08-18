import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
};

export default App;

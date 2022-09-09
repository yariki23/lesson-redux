import { createStore, combineReducers } from 'redux';
import optionsReducer from './users.reducer';

const reducer = combineReducers({
  options: optionsReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

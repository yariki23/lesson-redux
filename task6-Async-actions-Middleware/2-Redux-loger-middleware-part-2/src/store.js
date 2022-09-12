import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import usersReducer from './users/users.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

export default store;

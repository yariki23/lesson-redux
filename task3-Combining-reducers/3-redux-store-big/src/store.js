import { createStore, combineReducers } from 'redux';
import { cardReducer } from './card.reducer';
import { userReducer } from './user.reducer';
import { languageReducer } from './language.reducer';

const appReducer = combineReducers({
  card: cardReducer,
  user: userReducer,
  language: languageReducer,
});

const store = createStore(appReducer);

export default store;

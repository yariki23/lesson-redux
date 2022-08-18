import { addProduct, removeProduct } from './card.actions';
import { setLanguage } from './language.actions';
import store from './store';
import { setUser, removeUser } from './user.actions';

const onAddProduct = userData => {
  store.dispatch(addProduct(userData));
};

const onRemoveProduct = id => {
  store.dispatch(removeProduct(id));
};

const onSetLanguage = language => {
  store.dispatch(setLanguage(language));
};

const onSetUser = (userData) => {
  store.dispatch(setUser(userData));
};

const onRemoveUser = () => {
  store.dispatch(removeUser());
};

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

onAddProduct({ id: 2, name: 'Flaer' });
onAddProduct({ id: 1, name: 'Luft' });
onRemoveProduct(1);
onAddProduct({ id: 1, name: 'Cersh' });
onSetLanguage('es');
onSetLanguage('jp');
onSetUser({ name: "Vlad" });
onSetUser({ name: "Dima" });
onRemoveUser();
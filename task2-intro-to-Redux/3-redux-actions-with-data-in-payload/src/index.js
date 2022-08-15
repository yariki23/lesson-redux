import store from './store';
import { addUser, deleteUser } from './users.actions';

const onAddUser = (id, name) => {
  store.dispatch(addUser(id, name));
};

const onDeleteUser = id => {
  store.dispatch(deleteUser(id));
};

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

onAddUser({ id: 2, name: 'Flaer' });
onAddUser({ id: 1, name: 'Luft' });
onDeleteUser(1);
onAddUser({ id: 1, name: 'Cersh' });

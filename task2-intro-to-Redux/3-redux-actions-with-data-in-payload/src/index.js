import store from './store';
import { addUser, deleteUser } from './users.actions'

const onAddUser = (id, name) => {
  store.dispatch(addUser(id, name));
};

const onDeleteUser = (id) => {
  store.dispatch(deleteUser(id));
};

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});


onAddUser(2, "Flaer");
onAddUser(1, "Luft");
onDeleteUser(1);
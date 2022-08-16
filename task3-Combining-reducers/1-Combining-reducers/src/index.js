import { decrement, increment, reset } from './counter.actions';
import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';

const onAddUser = userData => {
  store.dispatch(addUser(userData));
};

const onDeleteUser = id => {
  store.dispatch(deleteUser(id));
};

const onUpdateUser = (id, userDate) => {
  store.dispatch(updateUser(id, userDate));
};

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

onAddUser({ id: 2, name: 'Flaer' });
onAddUser({ id: 1, name: 'Luft' });
onDeleteUser(1);
onAddUser({ id: 1, name: 'Cersh' });
onUpdateUser(2, { name: 'Fork' });
onIncrement();
onDecrement();
onDecrement();
onReset();

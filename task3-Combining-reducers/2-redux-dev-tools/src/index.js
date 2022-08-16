import store, { decrement, increment} from './counter';

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

onIncrement();
onIncrement();
onIncrement();
onIncrement();
onIncrement();
onIncrement();
onDecrement();
onDecrement();

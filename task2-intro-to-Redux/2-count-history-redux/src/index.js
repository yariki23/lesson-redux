import store, { increment, decrement, reset } from './store';
import './index.scss';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

const addPlusHistory = history => {
  let historyStr = [...history];
  for (let i = 0; i < historyStr.length; i++) {
    if (historyStr[i + 1] === 1) {
      historyStr[i + 1] = '+1';
    }
  }
  return historyStr.join('');
};

store.subscribe(() => {
  const state = store.getState();
  const currentValue =
    state.history.length === 0 ? [] : state.history.reduce((acc, value) => acc + value);
  const historyString = addPlusHistory(state.history);
  resultElem.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});

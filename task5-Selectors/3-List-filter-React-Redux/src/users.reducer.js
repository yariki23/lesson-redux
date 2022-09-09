import { TOGGLE_OPTION } from './users.actions';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Justin',
  },
  {
    id: 'id-4',
    age: 45,
    name: 'Franklin',
  },
  {
    id: 'id-5',
    age: 45,
    name: 'John',
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Andrew',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Pol',
  },
  {
    id: 'id-8',
    age: 45,
    name: 'Ron',
  },
  {
    id: 'id-9',
    age: 45,
    name: 'Harry',
  },
  {
    id: 'id-10',
    age: 45,
    name: 'Anna',
  },
];

const initialState = {
  filterText: '',
  usersList: users,
};
console.log(initialState);

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const newSelectedIds = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : state.selected.concat(optionId);
      return {
        ...state,
        selected: newSelectedIds,
      };
    }
    default:
      return state;
  }
};

export default optionsReducer;

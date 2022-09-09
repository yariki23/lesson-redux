import { createSelector } from 'reselect';

export const usersListSelector = state => {
  console.log(state);
  return state.options.usersList;
};

export const filterTextSelector = state => {
  return state.options.filterText;
};

// export const selectedOptionsSelector = createSelector(
//   [optionsListSelector, selectedIdSelector],
//   (allOptionsList, selectedIds) => {
//     return allOptionsList.filter(option => selectedIds.includes(option.id));
//   },
// );

// export const availableOptionsSelector = createSelector(
//   [optionsListSelector, selectedIdSelector],
//   (allOptionsList, selectedIds) => {
//     return allOptionsList.filter(option => !selectedIds.includes(option.id));
//   },
// );

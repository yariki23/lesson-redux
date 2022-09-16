import { SHOW_TASK } from './tasks.action';

const initialData = {
  tasksList: [],
};

const tasksReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_TASK: {
      return {
        ...state,
        tasksList: action.payload.taskData,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;

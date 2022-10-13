import { getTasksData, addTaskData, deleteTask, updateTask } from './tasks.gateway';

export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SHOW_TASK = 'SHOW_TASK';

export const showTask = taskData => {
  return {
    type: SHOW_TASK,
    payload: {
      taskData,
    },
  };
};
export const getTasks = () => {
  return function (dispatch) {
    getTasksData().then(taskData => {
      dispatch(showTask(taskData));
    });
  };
};

export const fetchCreateTask = text => {
  return function (dispatch) {
    const dataTask = {
      text,
      done: false,
    };
    addTaskData(dataTask).then(() => dispatch(getTasks()));
  };
};

export const deleteTaskData = idTask => {
  return function (dispatch) {
    deleteTask(idTask).then(() => dispatch(getTasks()));
  };
};

export const updateTaskData = (idTask, text, done) => {
  return function (dispatch) {
    const updTask = {
      text,
      done: !done,
    };
    updateTask(idTask, updTask).then(() => dispatch(getTasks()));
  };
};

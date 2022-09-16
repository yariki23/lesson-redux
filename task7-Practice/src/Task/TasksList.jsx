import React, { useEffect } from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { tasksDataSelector } from './task.selector';
import * as tasksActions from './tasks.action';

const TasksList = ({ tasksStore, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

  const sortedList = tasksStore.slice().sort((a, b) => a.done - b.done);
  return (
    <ul className="list">
      {sortedList.map(task =>(<Task key={task._id} {...task} />))}
    </ul>
  );
};

const mapState = state => {
  return {
    tasksStore: tasksDataSelector(state),
  };
};

const mapDispatch = {
  getTasks: tasksActions.getTasks,
};

export default connect(mapState, mapDispatch)(TasksList);

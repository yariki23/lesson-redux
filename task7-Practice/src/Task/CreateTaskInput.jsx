import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from './tasks.action'

const CreateTaskInput = ({ createTask }) => {
  const [textTask, setTextTask] = useState('');

  const handleChange = event => {
    setTextTask(event.target.value);
  };

  const handleCreateTask = () => {
    if (!!textTask.replace(/ /g, '')) {
      createTask(textTask);
      setTextTask('');
    }
    setTextTask('');
  };

  return (
    <div className="create-task">
      <input className="create-task__input" type="text" value={textTask} onChange={handleChange} />
      <button className="btn create-task__btn" onClick={handleCreateTask}>
        Create
      </button>
    </div>
  );
};

const mapDispatch = {
  createTask: tasksActions.fetchCreateTask,
};

export default connect(null, mapDispatch)(CreateTaskInput);

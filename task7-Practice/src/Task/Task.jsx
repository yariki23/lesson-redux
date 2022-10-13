import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as tasksActions from './tasks.action';

const Task = ({ text, done, _id, updateTask, deleteTask }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => updateTask(_id, text, done)}
      />
      {text}
      <button className="list-item__delete-btn" onClick={() => deleteTask(_id)}></button>
    </li>
  );
};

const mapDispatch = {
  updateTask: tasksActions.updateTaskData,
  deleteTask: tasksActions.deleteTaskData,
};

export default connect(null, mapDispatch)(Task);

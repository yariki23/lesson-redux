import React from 'react';
import User from './User.jsx';
import { connect } from 'react-redux';
import { usersListSelector, filterTextSelector } from './users.selectors.js';

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <button className="btn"></button>

      <ul className="users">
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);

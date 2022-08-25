import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import {usersListSelector, currentPageSelector} from './users.selector'

const UsersList = ({ users, currentPage, prevPage, nextPage }) => {
  const itemsPerPage = 3;
  const startIndex = (currentPage) * 3;
  const endIndex = startIndex + itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        currentPage={currentPage + 1}
        goPrev={prevPage}
        goNext={nextPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  prevPage: usersActions.prevPage,
  nextPage: usersActions.nextPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;

import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const UsersList = ({ users, currentPage, prevPage, nextPage }) => {
  const itemsPerPage = 3;

  // prevBtnHandler = () => {
  //   this.setState({
  //     currentPage: this.state.currentPage - 1,
  //   });
  // };

  // nextBtnHandler = () => {
  //   this.setState({
  //     currentPage: this.state.currentPage + 1,
  //   });
  // };

  console.log(currentPage);

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
    users: state.usersList,
    currentPage: state.currentPage,
  };
};

const mapDispatch = {
  prevPage: usersActions.prevPage,
  nextPage: usersActions.nextPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;

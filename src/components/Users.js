import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, i) => 
      <li key={i}>
        {user.username}
      </li>)
    debugger;
    return (
      <div>
        <ul>
          Users!
          {users}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)

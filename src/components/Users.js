import React, { Component } from "react";
// needed imports here
import { connect } from "react-redux";
class Users extends Component {
  render() {
    const returnUsers = this.props.users.map((user) => {
      return <li>{user.username}</li>;
    });
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {returnUsers}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.userCount}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length,
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);

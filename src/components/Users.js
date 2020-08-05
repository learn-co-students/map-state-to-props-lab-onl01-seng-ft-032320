import React, { Component } from 'react';
import {connect} from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    console.log(this.props.users)
    const users = this.props.users.map((user, key) => <li key={key} >{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)

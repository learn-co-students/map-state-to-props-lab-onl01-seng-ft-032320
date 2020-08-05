import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here


class Users extends Component {

  users(){
    return this.props.users.map(user => <li>{user.username}, {user.hometown}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.users()}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);

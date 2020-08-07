import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user) => <li>{user.username}</li>)
    return (
      <div>
        Users!<br></br>
        {this.props.users.length}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);

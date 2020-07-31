import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <p>Total Users: {this.props.userCount}</p>
        <ul>
          Users!
          {this.props.users.map(user => {
            return <li key={user.username}>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
           userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);

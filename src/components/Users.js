import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    
    return (
      <div>
        <ul>
          Users!
         
    {this.props.users.map(user => <li>{user.username}</li>)}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux

const mapStateToProps = (state) => {
  debugger;
  return { users: state.users }
}
 
export default connect(mapStateToProps)(Users);



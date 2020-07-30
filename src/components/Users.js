import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {
            this.props.users.length > 0 ?
            this.props.users.map(user => <li>{user.username}</li>) :
            null  
          }
          {/* In addition, display the total number of users curently in the store */
            <p>{this.props.userCount}</p>
          }
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
export default connect(mapStateToProps)(Users)

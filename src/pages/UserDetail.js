import React, { Component } from 'react'

class UserDetail extends Component {
  render() {
    console.log(this.props.user)
    return (
      <>
        <h1> I am {this.props.user.name}</h1>
        <h2>This is my email id : {this.props.user.email}</h2>
      </>
    )
  }
}

export default UserDetail

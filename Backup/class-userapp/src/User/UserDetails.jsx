import React, { Component } from 'react'

 class UserDetails extends Component {
  render() {
    let {user} = this.props 
   return <>
   <h1>UserDetails </h1>
   <pre>{JSON.stringify(user)}</pre>
   <div className="card">
    <div className="card-header">
      <img src={user.image} alt="" />
    </div>
    <div className="card-body"></div>
   </div>
   </>
  }
}

export default UserDetails
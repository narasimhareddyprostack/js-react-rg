import React, { Component } from 'react'
import Employee from './Employee'
class User extends Component {
  user={
    name:"Rahul",
    email:"Rahul@gmail.com",
    loc:['wayanad','bangalore']
  }

  render() {
    return <div>
        <h2>User Component</h2>
        <hr />
        <Employee user={this.user}  eid={101}/>
    </div>

  }
}

export default User
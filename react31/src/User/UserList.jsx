import React, { Component } from 'react'

 class UserList extends Component {

  selectUser = (user)=>{
    //console.log(user.email)
    this.props.getusers(user)
  }
  render() {
   let {users} = this.props
   return <>
   <h1>UserList Component</h1>
   <pre>{JSON.stringify(users)}</pre>
   <table className='table'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email </th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=>{
          return  <tr key={index}  onMouseOver={this.selectUser.bind(this,user)}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
          </tr>
        })
      }
    </tbody>
   </table>
   </>
  }
}

export default UserList
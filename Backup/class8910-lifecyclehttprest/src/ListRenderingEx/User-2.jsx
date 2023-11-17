import React, { Component } from 'react'
import users from '../data/userdata'
export class User extends Component {
  constructor(props){
    super(props)
    this.state = { users:users}
  }
  render() {
    let {users}  = this.state
    return (
      <div>
        <h3>User Component</h3>
        <pre>{JSON.stringify(users)}</pre>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.name.first}</td>
                            <td>{user.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default User
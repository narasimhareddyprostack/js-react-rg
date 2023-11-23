import React, { Component } from 'react'
import Axios from 'axios'
import UserList from './UserList'
import UserDetails from './UserDetails'
class User extends Component {
  constructor(props){
    super(props)
    this.state={userData:{} , selUser:{}}
  }
  getSelectedUser = (user)=>{
    //console.log(user.email)
    this.setState({selUser:user})
  }
  componentDidMount(){
    Axios.get('https://dummyjson.com/users')
    .then((resp)=>{
      this.setState({userData:resp.data})
    })
    .catch((err)=>{})
  }
  componentWillUnmount(){
    console.log("Um Mouting time")
  }
  render() {
   return <>
        <h3>User Component</h3>
        <pre>{JSON.stringify(this.state.selUser)}</pre>
        <div className="container">
          <div className="row">
          <div className="col-8">
            {
              Object.keys(this.state.userData).length > 0 ? <>
              <UserList getusers={this.getSelectedUser} users={this.state.userData.users}/></>:null
            }
            
          </div>
          <div className="col-4">
            {
              Object.keys(this.state.selUser).length>0 ? <>   <UserDetails  user={this.state.selUser} /></> : <h3>No Data</h3>
            }
          
          </div>
          </div>  
        </div>    
    
   </>
  }
}

export default User
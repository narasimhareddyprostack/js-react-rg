import React, { Component } from 'react'
import Axios from 'axios'
 class User extends Component {
    state;
    constructor(props){
        super(props)
        console.log("First Constructor Method")
        this.state={
            users:[]
        }
    }
    getUserData = ()=>{
        console.log("About - get User Data method")
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            this.setState({ users:response.data })
        })
        .catch((err)=>{})
    }
    componentDidMount(){
        console.log("Third - component Did Mount method")

    }
    render() {
        console.log("Second Render method")
    return <div>
        <h3>User Componenent</h3>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <button onClick={this.getUserData}>Click-Get User Data</button>
    </div>
  }
}

export default User
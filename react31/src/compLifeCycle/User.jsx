import React from 'react'
import Axios from 'axios'
class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
            this.setState({users:resp.data})
        })
        .catch()
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state.users)}</pre>
            {
            this.state.users.length>0 ?<> 
                         <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <thead>
                    {
                     this.state.users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                     })
                    }
                </thead>
            </table>
             </>  : <h3>No Data</h3>
        }
        </div>
    }
}
export default User
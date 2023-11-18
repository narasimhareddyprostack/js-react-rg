import React, { Component } from 'react'
import Axios from 'axios'
class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
        console.log("First Const")
    }
    componentDidMount(){
        console.log("Third - componentDidMount method")
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=>{
            this.setState({posts:resp.data})
        })
        .catch((err)=>{})
    }
  render() {
    console.log("Second rednder method")
    return (
      <div className='container'>
        <h1>Post Component</h1>
        <pre>{JSON.stringify(this.state.posts)}</pre>
        <div className='row'>
            <div className="col-md-8">
 {
            this.state.posts.length>0?<> 
                <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>

                {
                    this.state.posts.map((post)=>{
                        return <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    })
                }
                </tbody>
                </table> </> : <h3>No Data</h3>
        }
            </div>
        </div>
       
      </div>
    )
  }
}

export default Post
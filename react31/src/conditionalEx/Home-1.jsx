import React, { Component } from 'react'

export class Home extends Component {
  state = {
    isLogin:false,
    message:""
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Home Comp</h3>
        <hr />
        {
            !this.state.isLogin ? <div> <button>Login</button></div>:
                                 <div><button>Logout</button></div>
        }
      
        
      </div>
    )
  }
}

export default Home
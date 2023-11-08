import React, { Component } from 'react'

export class Home extends Component {
  state = {
    isLogin:false,
    message:""
  }
  loginHandler = ()=>{
    this.setState({ isLogin:true , message:"Welcome - Buddy"})
  }
  logouthandler = ()=>{
    this.setState({ isLogin:false, message:"visit again"})
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Home Comp</h3>
        <hr />
        {
         !this.state.isLogin ?<> <button onClick={this.loginHandler}>Login</button> </>:
                              <><button onClick={this.logouthandler}>Logout</button> </>
        }

        <h4>{this.state.message}</h4>
        
      </div>
    )
  }
}

export default Home
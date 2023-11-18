import React, { Component } from 'react'

export class Home extends Component {
  state = {
    isLogin:false,
    message:""
  }
  updateHandler = ()=>{
    this.setState({
        isLogin:! this.state.isLogin,
        message:"Welcome"

    })
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Home Comp</h3>
        <hr />
        {
         !this.state.isLogin ?<> <button onClick={this.updateHandler}>Login</button> </>:
                              <><button onClick={this.updateHandler}>Logout</button> </>
        }

        <h4>{this.state.message}</h4>
        
      </div>
    )
  }
}

export default Home
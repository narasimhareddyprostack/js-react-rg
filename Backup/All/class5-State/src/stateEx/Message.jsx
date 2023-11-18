import React, { Component } from 'react'

class Message extends Component {
  //msg='Hello' - convert property as state objec property
  state={
    msg:"Hello",
    qty:1

  }

  gmHandler = ()=>{
        this.setState({msg:"GM"})
  }
  gnHandler = ()=>{
        this.setState({
            msg:"Good Night RG"
        })
  }
  resetHandler=()=>{
    this.setState({
        msg:"Hello"
    })
  }
  render() {
    console.log("Render method - executing")
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
       <h3>Wish Message:{this.state.msg}</h3>
       <button onClick={this.gmHandler}>GM</button>
       <button onClick={this.gnHandler}>GN</button>
       <button onClick={this.resetHandler}>Rest</button>
      </div>
    )
  }
}

export default Message
import React, { Component } from 'react'

class Message extends Component {
  msg='Hello'
  gmHandler=()=>{
    //alert("gM")
    this.msg = "Good Morning"
    console.log(this.msg)
    this.forceUpdate()
  }
  render() {
    return (
      <div>
        <h3>Message Component</h3>
        <h3>Message Value:{this.msg}</h3>
        <button onClick={this.gmHandler}>GM</button>
      </div>
    )
  }
}

export default Message
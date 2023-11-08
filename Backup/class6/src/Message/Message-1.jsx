import React, { Component } from 'react'

class Message extends Component {
  constructor(props){
    super(props)
    this.state = {
        msg:"Hello"
    }
  }
  gmHandler=()=>{
    this.setState({
        msg:"Good Morning"
    })
  }
  gaHandler=()=>{
    this.setState({
        msg:"Good Afternoon"
    })
  }
  geHandler=()=>{
    this.setState({
        msg:"Good Evening"
    })
  }
  gnHandler=()=>{
    this.setState({
        msg:"Good Night"
    })
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h4>Message Component</h4>
            <hr />
        <h3>Message Value:{this.state.msg}</h3>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.geHandler}>GE</button>
        <button onClick={this.gnHandler}>GN</button>
      </div>
    )
  }
}

export default Message
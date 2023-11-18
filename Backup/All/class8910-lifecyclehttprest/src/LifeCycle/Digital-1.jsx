import React, { Component } from 'react'

class Digital extends Component {
    constructor(props){
        super(props)
        //this.ct=new Date().toLocaleTimeString()
        this.state={
            ct:new Date().toLocaleTimeString()
        }
    }
    updateTime=()=>{
        setInterval(()=>{
            this.setState({
                ct:new Date().toLocaleTimeString()
            })
        },1000)
    }
  render() {
    setInterval(()=>{

    },1000)
    return (
      <div>
        <h2>Digital clock</h2>
        <h3>{this.state.ct}</h3>
        <button onClick={this.updateTime}>Click</button>
      </div>
    )
  }
}

export default Digital
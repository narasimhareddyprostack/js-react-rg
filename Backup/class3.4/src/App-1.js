import React, { Component } from 'react'

class App extends Component {
    msg="GM"
    emp={
        eid:101,
        ename:"Rahul"
    } 
  render() {
    
    return (
      <div>
        <pre>{JSON.stringify(this.emp)}</pre>
        <h1>App Component</h1>
        <h2>Message:{this.msg}</h2>
        <h3>Employee Id:{this.emp.eid}</h3>
        <h3>EMpployee Name:{this.emp.ename}</h3>
      </div>
    )
  }
}

export default App
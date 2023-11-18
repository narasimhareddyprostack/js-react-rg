import React, { Component } from 'react'

class Employee extends Component {
  render() {
    
    return <React.Fragment>
        <h2>Employee Componet</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee Name:{this.props.user.name}</h3>
        <h3>Location:{this.props.user.loc[1]}</h3>
        <h3>ID:{this.props.eid}</h3>
    </React.Fragment>
  }
}

export default Employee
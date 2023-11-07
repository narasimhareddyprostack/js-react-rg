import React, { Component } from 'react'

class Salary extends Component {
  state = {
    salary:850000
  }
  updateSalaryHandler = (hike)=>{
    this.setState({
        salary:this.state.salary + hike
    })
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>Salary Component</h2>
        <h3>Salary:{this.state.salary}</h3>
        <button onClick={this.updateSalaryHandler.bind(this,100000)}>Hike 100K</button>
        <button onClick={this.updateSalaryHandler.bind(this,50000)}>Hike 50K</button>
        <button onClick={this.updateSalaryHandler.bind(this,25000)}>Hike 25K</button>
        <button onClick={this.updateSalaryHandler.bind(this,1)}>Hike 0K</button>
      </div>
    )
  }
}

export default Salary
import React, { Component } from 'react'

class Product extends Component {
  
 state={
    qty:1
 }
 incrHandler=()=>{
    this.setState({ discount:10, qty:this.state.qty+1})
 }
 decrHandler=()=>{
    this.setState({qty:this.state.qty-1})
 }
render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h3>Product Component</h3>
        <button onClick={this.decrHandler}>-</button>
        {this.state.qty}
        <button onClick={this.incrHandler}>+</button>
      </div>
    )
  }
}

export default Product
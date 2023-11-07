import React, { Component } from 'react'

class Product extends Component {
 state={
  product:{
  name:'Lenovo ThinkPad',
  price:27000,
  qty:1,
  image:'https://rukminim2.flixcart.com/image/224/224/xif0q/computer/n/i/e/15amn7-thin-and-light-laptop-lenovo-original-imagsvykgkecffgr.jpeg?q=90'
  }
 
 }
 decrHandler=()=>{
  this.setState({
    product:{
      
    }
    
  })
 }
 incrHandler=()=>{
  this.setState({
   
  })
 }
render() {
   return <div className="container">
    <pre>{JSON.stringify(this.state.product)}</pre>

    <div className="row">
      <div className="col-8">
        <table className='table'>
          <thead>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total Price</th>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.product.name}</td>
              <td><img width="100px" src={this.state.product.image} alt="" /></td>
              <td>{this.state.product.price}</td>
              <td> <i onClick={this.decrHandler} className='fa fa-minus-circle'></i> {this.state.product.qty} <i onClick={this.incrHandler} className='fa fa-plus-circle'></i></td>
              <td>{this.state.product.qty *  this.state.product.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
  }
}

export default Product
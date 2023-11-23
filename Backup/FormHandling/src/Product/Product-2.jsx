import React, { Component } from 'react'

class Product extends Component {
  constructor(props){
    super(props)
    this.state={p_Name:"",price:"",qty:"",info:""}
  }
  updateHandler=(event)=>{
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler = (event)=>{
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return <>
    <pre>{JSON.stringify(this.state)}</pre>
       <form onSubmit={this.submitHandler} >
        <label >Name:</label>
        <input type="text" onChange={this.updateHandler} name="p_Name"/>  <br />
        <label >Price:</label>
        <input type="text" onChange={this.updateHandler} name="price"/> <br />
        <label >QTY:</label>
        <input type="text" onChange={this.updateHandler} name="qty"/> <br /> 
        <label >Info:</label>
        <input type="text" onChange={this.updateHandler} name="info"/> <br /> 
        <input type="submit" value="Upload" />
       </form>
    
    </>
  }
}

export default Product
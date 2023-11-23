import React, { Component } from 'react'

class Product extends Component {
  constructor(props){
    super(props)
    this.state={p_Name:"",price:"",qty:"",info:""}
  }
  updateHandler=(event)=>{
    this.setState({
        p_Name:event.target.value
    })
  }
  render() {
    return <>
    <pre>{JSON.stringify(this.state)}</pre>
       <form >
        <label >Name:</label>
        <input type="text" onChange={this.updateHandler}/>  <br />
        <label >Price:</label>
        <input type="text" onChange={this.updateHandler}/> <br />
        <label >QTY:</label>
        <input type="text" onChange={this.updateHandler} /> <br /> 
        <label >Info:</label>
        <input type="text" onChange={this.updateHandler} /> <br /> 
        <input type="submit" value="Upload" />
       </form>
    
    </>
  }
}

export default Product
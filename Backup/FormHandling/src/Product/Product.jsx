import { useState } from "react"

let Product = ()=>{

    let [product,setProduct]=useState({p_Name:"",price:"",qty:"",info:""})
    let updateHandler=(event)=>{
        console.log(event.target.value)
       setProduct({ ...product, [event.target.name]:event.target.value })
    }
    let submitHandler=(event)=>{
         event.preventDefault();
        console.log(product)
    }

    return <div>
             <pre>{JSON.stringify(product)}</pre>
       <form onSubmit={submitHandler} >
        <label >Name:</label>
        <input type="text" onChange={updateHandler} name="p_Name"/>  <br />
        <label >Price:</label>
        <input type="text" onChange={updateHandler} name="price"/> <br />
        <label >QTY:</label>
        <input type="text" onChange={updateHandler} name="qty"/> <br /> 
        <label >Info:</label>
        <input type="text" onChange={updateHandler} name="info"/> <br /> 
        <input type="submit" value="Upload" />
       </form>
    </div>
}

export default Product
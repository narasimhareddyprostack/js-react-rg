import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
const CreateProuduct = () => {
  let navigate = useNavigate()
  let [submited,setSubmited]=useState(false)
  let [product,setProduct]=useState({name:'',price:"",image:"",qty:'',info:""})
 let updateHandler=(event)=>{
  setProduct({
    ...product,
    [event.target.name]:event.target.value
  })
 }
 let updateImage = (event)=>{
  let imageFile = event.target.files[0]
  let reader=new FileReader();
  reader.readAsDataURL(imageFile);
  reader.addEventListener("load",()=>{
    if(reader.result){
        
        setProduct({
          ...product, image:reader.result
        })
    }
    else{
      console.log("Unable to convert")
    }

  })
 }
 let submitHandler = (event)=>{
  event.preventDefault();
  Axios.post('http://127.0.0.1:8080/api/products',product)
       .then((resp)=>{

        setSubmited(true)
        //get the result
       })
       .catch(()=>{
        //display error
       })
 }
return <div className='container'>
  
    <pre>{JSON.stringify(product)}</pre>
    {
 submited ?navigate("/admin")  : <>
        <div className="row">
    
      <div className="col-md-4">
        <div className="card">
          <div className="card-header"><h3>New Project</h3></div>
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                 <input  className='form-control' placeholder='Product Name' type='text' name="name"  onChange={updateHandler}/>
              </div>
           <div className='form-group'>
              <input className='form-control' placeholder='Price' type='text' name="price"  onChange={updateHandler}/>
           </div>
           <div className='form-group'>
              <input className='form-control' placeholder='Image' type='file' name="image"  onChange={updateImage}/>
           </div>
           <div className='form-group'>
              <input className='form-control' placeholder='Info' type='text' name="info"  onChange={updateHandler}/>
           </div>
           <div className='form-group'>
              <input className='form-control' placeholder='QTY' type='text' name="qty"  onChange={updateHandler}/>
           </div>
          
            <input type='submit' value="upload" className='btn btn-warning'/> 
          </form>
          </div>
        </div>
      </div>
    </div>
          
         
    </>

    }
   
  </div>
}

export default CreateProuduct
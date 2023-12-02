import React, { useState } from 'react'
import Axios from 'axios'
const CreateProuduct = () => {
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
       .then(()=>{
        //get the result
       })
       .catch(()=>{
        //display error
       })
 }
return <div>
          <pre>{JSON.stringify(product)}</pre>
          <form onSubmit={submitHandler}>
            Name:<input type='text' name="name"  onChange={updateHandler}/> <br />
            Price:<input type='text' name="price"  onChange={updateHandler}/> <br />
            image:<input type='file' name="image"  onChange={updateImage}/> <br />
            info:<input type='text' name="info"  onChange={updateHandler}/> <br />
            QTY:<input type='text' name="qty"  onChange={updateHandler}/> <br />
            <input type='submit' value="upload"/> 
          </form>
  </div>
}

export default CreateProuduct
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const Products = () => {
  let [products,setProducts]=useState([])
  useEffect(()=>{
    Axios.get('http://127.0.0.1:8080/api/products')
    .then((response)=>{
      setProducts(response.data)
    })
    .catch()
  },[])
  return <>
  <pre>{JSON.stringify(products)}</pre>
  {
    products.length>0 ? <> <h3>Data</h3> </> : <h3>No Data</h3>
  }
  
  </>
}

export default Products
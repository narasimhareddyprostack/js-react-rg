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
  <h2>Products</h2>
  
  </>
}

export default Products
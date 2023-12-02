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
  return <div className='container'>
    <div className="row">
      <pre>{JSON.stringify(products)}</pre>
      {
          products.length>0 ? <> {
            products.map((product)=>{
              return <div className="col-md-3">
                <div className="card">
                  <div className="card-header">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="card-body">
                    <ul className='list-group'>
                      <li className='list-group-item'>{product.name}</li>
                      <li className='list-group-item'>{product.price}</li>
                      <li className='list-group-item'><button className='btn btn-warning'>Add2Cart</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            })
          } </> : <h3>No Data</h3>
        }
    </div>  
  </div>
}

export default Products
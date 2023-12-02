import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
const Admin = () => {
  let [products,setProducts]=useState([])
  useEffect(()=>{
    getAllProducts();
  },[])
  let getAllProducts = ()=>{
    Axios.get('http://127.0.0.1:8080/api/products')
    .then((resp)=>{
      setProducts(resp.data)
    })
    .catch(()=>{})
  }
  let deleteProduct=(productId)=>{
      //alert(productId)
      let url=`http://127.0.0.1:8080/api/products/${productId}`
      //alert(url)
      Axios.delete(url)
      .then((resp)=>{
        getAllProducts()
      })
      .catch(()=>{})
  }
  return <>
  <div className="container mt-5">
    <pre>{JSON.stringify(products)}</pre>
    <div className="row">
      <div className="col-3">
        <button className='btn btn-danger'>Create</button>
      </div>
    </div>
    <div className="row">
      <div className="col-8">
        {
          products.length > 0 ? <>
          <table className='table'>
            <thead className='bg-primary text-white'>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Info</th>
                  <th>Image</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product)=>{
                  return <tr>
                    <td>{product._id.substr(product._id.length-4)}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>{product.info}</td>
                    <td><img src={product.image} width="50px" alt="" /></td>
                    <td>
                      <button><Link to={`/update/${product._id}`}>Update</Link></button>
                      <button onClick={deleteProduct.bind(null,product._id)}>Delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
          
          </> :<> <h3> No Data</h3></>
        }
      </div>
    </div>
  </div>
  </>
}

export default Admin
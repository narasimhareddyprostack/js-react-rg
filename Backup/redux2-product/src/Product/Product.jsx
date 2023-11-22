import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {incrAction,decrAction} from '../redux/Product/product.action'
const Product = () => {
  let product=useSelector((state)=>{
    return state
  })
  let dispatch = useDispatch()
  let incrHander=()=>{
    dispatch(incrAction())
  }
  let decrHander=()=>{
    dispatch(decrAction())
  }

  return (
    <div>
        <h3>Product Component</h3>
        <pre>{JSON.stringify(product)}</pre>
        <button onClick={decrHander}>-</button>
        {product.qty}
        <button onClick={incrHander}>+</button>
    </div>
  )
}

export default Product
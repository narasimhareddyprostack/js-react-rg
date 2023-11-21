import React, { useState } from 'react'

const Product = () => {
   let [qty,setQty] =useState(1)
  return (
    <div>
        <h2>Product Component</h2>
       
        <button onClick={()=>{setQty(qty -1)}}>DECR</button>
            <span>{qty}</span>
        <button onClick={()=>{setQty(qty +1
            )}}>INCR</button>
    </div>
  )
}

export default Product
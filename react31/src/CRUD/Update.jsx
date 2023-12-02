import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
const Update = () => {
    let [productId] = useState(useParams().id)
  return (
    <div>
        <h3>{productId}</h3>
        <h3>Update Comp</h3>
    </div>
  )
}

export default Update
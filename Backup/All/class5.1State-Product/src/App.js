import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import Product from './products/Product'
import Test from './products/Test'
const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <hr/>
     
    <Product/>
    </Fragment>
  )
}

export default App
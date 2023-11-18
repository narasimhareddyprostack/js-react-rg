import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Salary from './Message/Salary'
import Product from './Message/Product'
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
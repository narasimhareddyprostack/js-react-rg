import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Employee from './component/Employee'
import Product from './component/Product'
import Contact from './component/Contact'

class App extends Component {
  render() {
    return <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/serivce" element={<Service/>}/> 
          <Route path="/employee" element={<Employee/>}/> 
          <Route path="/product" element={<Product/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>
      </Router>
    </div>
  }
}

export default App
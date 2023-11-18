import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'


import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Employee from './component/Employee'
import Product from './component/Product'
import Contact from './component/Contact'

const App = () => {
 return <>
        <Router>
          <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
               <Link to="/home" className='navbar-brand'>Company Logo</Link>
            <div className='ml-auto'>

                  <ul className='navbar-nav'>
                  <li><Link to="/home" className='nav-link'>Home</Link></li>
                  <li><Link to="/about"  className='nav-link'>About</Link></li>
                  <li><Link to="/service"  className='nav-link'>Service</Link></li>
                  <li><Link to="/employee"  className='nav-link'>Employee</Link></li>
                  <li><Link to="/product"  className='nav-link'>Product</Link></li>
                  <li><a href="/contact"  className='nav-link'>Contact</a></li>
                  </ul>
            </div>
          </nav>
        <Routes>
              <Route path="/home" element={<Home/>}/> 
              <Route path="/about" element={<About/>}/> 
              <Route path="/serivce" element={<Service/>}/> 
              <Route path="/employee" element={<Employee/>}/> 
              <Route path="/product" element={<Product/>}/> 
              <Route path="/contact" element={<Contact/>}/> 
        </Routes>
        </Router>
      </>
}

export default App
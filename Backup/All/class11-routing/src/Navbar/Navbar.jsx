import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    
    return <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
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
  }
}

export default Navbar
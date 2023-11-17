import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    
    return <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
        <a href="/home" className='navbar-brand'>Company Logo</a>
        <div className='ml-auto'>

            <ul className='navbar-nav'>
                <li><a href="/home" className='nav-link'>Home</a></li>
                <li><a href="/about"  className='nav-link'>About</a></li>
                <li><a href="/service"  className='nav-link'>Service</a></li>
                <li><a href="/employee"  className='nav-link'>Employee</a></li>
                <li><a href="/product"  className='nav-link'>Product</a></li>
                <li><a href="/contact"  className='nav-link'>Contact</a></li>
            </ul>
        </div>
    </nav>
  }
}

export default Navbar
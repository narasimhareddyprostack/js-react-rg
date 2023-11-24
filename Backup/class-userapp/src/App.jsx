import React, { Component } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './User/Home'
import Contact from './User/Contact'
import User from './User/User'

class App extends Component {
  render() {
    
    return <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
           </Router>
          </>
  }
}

export default App
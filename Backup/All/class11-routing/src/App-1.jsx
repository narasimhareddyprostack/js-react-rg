import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Product from './component/Product'
import Employee from './component/Employee'
import Contact from './component/Contact'

class App extends Component {
  render() {
    return <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/home" component={Home}/> 
          <Route path="/about" component={About}/> 
          <Route path="/serivce" component={Service}/> 
          <Route path="/employee" component={Employee}/> 
          <Route path="/product" component={Product}/> 
          <Route path="/contact" component={Contact}/> 
        </Switch>
      </Router>
    </div>
  }
}

export default App
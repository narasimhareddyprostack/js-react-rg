import React, { Component } from 'react'
import Message from './components/Message'
import Product from './components/Product'
class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <hr />
        <Product/>
      </div>
    )
  }
}

export default App
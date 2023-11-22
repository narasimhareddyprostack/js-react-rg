import React, { Component } from 'react'
import Product from './Product/Product'
import {store} from './redux/store'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <h3>App Component</h3>
        <hr />
          <Product/>
        </Provider>
      </div>
    )
  }
}

export default App
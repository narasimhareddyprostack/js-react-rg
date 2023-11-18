import React, { Component } from 'react'
import Message from './Message/Message'
import {store}  from './redux/store'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <h3>App Component</h3>
        <hr />
        <Message/>
      </Provider>
      </div>
    )
  }
}

export default App
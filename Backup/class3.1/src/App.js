import React from 'react'

import Message from './Message/Message'

class App extends React.Component{

    render(){
        return <div>
            <h1>App Compoennbt</h1>
            <hr />
            <Message/>
              <hr />
              <Message/>
        </div>
    }
}

export default App
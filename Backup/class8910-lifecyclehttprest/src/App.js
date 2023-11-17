import React from 'react'
import Navbar from './navbar/Navbar'
//import User from './ListRenderingEx/User'
import User from './compLifeCycle/User'
import Digital from './LifeCycle/Digital'
import Post from './compLifeCycle/Post'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Post/>
    </div>
  )
}

export default App
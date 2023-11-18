import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './conditionalEx/Home'
import Employee from './listRendering/Employee'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Employee/>
    </div>
  )
}

export default App
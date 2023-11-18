import React from 'react'

function App() {

  let msg="GM"

  let emp={
    eid:101,
    ename:"Rahul",
    esal:45000,
    eloc:['wayanad','bangalore']
  }
  return (
    <div>
        <h1>App Component</h1>
        <h2>Message={msg}</h2>
        <h3>{10+30}</h3>
        <h3>{JSON.stringify(emp)}</h3>
        <h4>Employee Name:{emp.ename}</h4>
        <h3>Emp Loc:{emp.eloc[0]}</h3>
    </div>
  )
}

export default App
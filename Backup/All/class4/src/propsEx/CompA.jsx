import React from 'react'
import CompB from './CompB'
const CompA = () => {
    let ename="Rahul Gandhi"
    return <div>
        <pre>{ename}</pre>
        <h1>Component A</h1>
        <hr />
        <CompB  name={ename} id={101} msg={"GM"}/>
    </div>
}

export default CompA
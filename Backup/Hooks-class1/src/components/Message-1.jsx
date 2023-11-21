import React, {useState} from 'react'

const Message = () => {
 
  let [qty,setQyt]=  useState(10)
  let [msg,setmsg]=  useState("Hello")
  let [users,setUsers]=  useState([{},{},{}])
  let [avail,setAvail]=  useState(true)
  let [emp,setEmp]=  useState({})

    return <div>
        <h1>Message Component</h1>
        <h3>Qty:{qty}</h3>
        <h3>Message Value:{msg}</h3>
        <h3>Users:{JSON.stringify(users)}</h3>
        <h3>Employee:{JSON.stringify(emp)}</h3>
    </div>
}

export default Message
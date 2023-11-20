import React, {useState} from 'react'

const Message = () => {
 
    let [msg,setMsg]=  useState("Hello")
    return <div>
        <h1>Message Component</h1>
     
        <h3>Message Value:{msg}</h3>
        <button onClick={()=>{setMsg("Good Night")}}>GM</button>
        <button onClick={()=>{setMsg("Good Night")}}>GN</button>
       
    </div>
}

export default Message
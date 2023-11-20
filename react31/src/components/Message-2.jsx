import React, {useState} from 'react'

const Message = () => {
 
    let [msg,setmsg]=  useState("Hello")

    let gmHandler =()=>{
        setmsg("Good Morning")
    }
  


    return <div>
        <h1>Message Component</h1>
     
        <h3>Message Value:{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={()=>{setmsg("Good Night")}}>GN</button>
       
    </div>
}

export default Message
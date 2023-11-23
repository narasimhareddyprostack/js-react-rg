import React, { useState } from 'react'

const Login = () => {
   /*  let email="";
    let password=""; */
    let [user,setUser]=useState({email:"",password:""})
    let emailHandler=(event)=>{
       /*  console.log(event)
        console.log(event.target)
        console.log(event.target.value) */
        setUser({...user, email:event.target.value})
    }
    let passwordHandler=(event)=>{
            setUser({...user,password:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault();
        console.log(user)
        //send user object to back.
        //axios.post(url,user).then().catch()
    }   
    return (
    <div>
        <h3>Login Component</h3>
        <pre>{JSON.stringify(user)}</pre>
        <hr />
        <form onSubmit={submitHandler}>
            <label>Email Id:::::</label>
            <input type="text" onChange={emailHandler}/>  <br />
            
            <label>Password:</label>
            <input type="text" onChange={passwordHandler} /> <br />
            
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login
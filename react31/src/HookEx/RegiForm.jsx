import React, { useRef } from 'react'

const RegiForm = () => {
    let btnRef=useRef(null)
    let termscondHandler =(event)=>{
        //console.log(event.target.checked)
        btnRef.current.disabled = !event.target.checked
    }
    return <>
    <h1>Registration Page</h1>
    <form >
        <label >Email Id:</label>
        <input type="text" /> <br /><br />
        <label >Mobile No:</label>
        <input type="number" /> <br /><br />
        <label >Password</label>
        <input type="password" /> <br /><br />
        <input type="checkbox" onClick={termscondHandler}  /> Please Accept Terms & Conditions
        <br />
        <br />
        <input type="submit" value="Registration" disabled ref={btnRef}/>
        
    </form>
    </>
}

export default RegiForm
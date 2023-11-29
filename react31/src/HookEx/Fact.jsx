import React, { useState,useEffect } from 'react'

const Fact = () => {
    //let result=1
    let [qty,setQty]=useState(1)
    let [num,setNumber]=useState(5)
    let [result] = useState(0)
                    
    useEffect(()=>{
      factNumber(num)
    },[])

  return <>
  <div>
        <h1>Factorial Ex</h1>
        Qty:{qty}  <button onClick={()=>{
            setQty(qty +1)
        }}>+</button>
        <hr />
        Fact of {num}: {result} <button onClick={()=>{
            setNumber(num+1)
        }}>+</button>
    </div>
  </>
}
let factNumber = (n)=>{

    let result=1

    for(let i=n; i>=1;i--){
        result = result*i
    }
    console.log("Factorial of Given is "+ result)
    return result
}
export default Fact
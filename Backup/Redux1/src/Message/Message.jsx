import React from 'react'
import {gmAction,gnAction} from '../redux/message/message.action'

import {useDispatch,useSelector} from 'react-redux'

const Message = () => {

  let dispatch = useDispatch()
  let message = useSelector((state)=>{
    return state
  })
  let gmHandler= ()=>{
    //dispatch redux action
    dispatch(gmAction())
  }
  let gnHandler= ()=>{
    //dispatch redux action
    dispatch(gnAction())
  }

  return (
    <div>
        <h3>Message Component</h3>
        <pre>{JSON.stringify(message)}</pre>
        <h2>Value:{message.msg}</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message
import React, { useEffect,useState } from 'react'
import {user_Action} from '../redux/user/user.action'
import {useDispatch,useSelector} from 'react-redux'
const User = () => {
  let dispatch = useDispatch()
  let users = useSelector((state)=>{
    return state.users;
  })
  let [user,setUser]=useState([])
  
  useEffect(()=>{
    dispatch(user_Action())
  },[]);
  return (
    <div>
      <h3>User Component</h3>
      <pre>{JSON.stringify(users)}</pre>
    </div>
  )
}

export default User
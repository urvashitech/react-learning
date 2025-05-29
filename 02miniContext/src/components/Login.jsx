import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <div>
    <div className='bg-gray-500 text-center py-4 my-4 px-12 mx-12'>
     <h2>Login</h2> 
     <input type='text' placeholder='UserName' value={userName} onChange={(e)=> setUserName(e.target.value)}/>
     <input type='text' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
     <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default Login

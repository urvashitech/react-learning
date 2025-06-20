import React, { useState } from 'react'

function State() {
    const initial = {
        name : "",
        email : "",
        password : ""
    }
    let [form,setForm] = useState(initial)
    const onNameChange = (e)=>{
        setForm({...form, name : e.target.value})
    }
    const onEmailChange = (e)=>{
        setForm({...form, email : e.target.value})
    }
    const onPasswordChange = (e)=>{
        setForm({...form, password : e.target.value})
    }
    console.log(form)
  return (
    
    <div className='App'>
      <h1>Learning useState in this component </h1>
      
      <label> Name: 
        <input onChange={onNameChange} style={{marginLeft : "20px" , width : "250px"}} placeholder='Enter your name'/>
      </label>
      <label> Email: 
        <input onChange={onEmailChange} style={{marginLeft : "20px" , width : "250px"}} placeholder='Enter your Email'/>
      </label>
      <label> Password: 
        <input onChange={onPasswordChange} style={{marginLeft : "20px" , width : "250px"}} placeholder='Enter your Password'/>
      </label>
    </div>
  )
}

export default State

import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    <UserContextProvider> 
      <h1 className='text-4xl bg-orange-500 text-white text-center'>Hello there mate</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
     
    </>
  )
}

export default App

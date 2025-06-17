
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './component/index'
import './App.css'

function App() {
  
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentSession()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      }
      else dispatch(logout())
    })
    .finally(()=>{setLoading(false)})
  },[])
  return !loading ? (
     <div className="min-h-screen flex flex-col bg-gray-400 items-center justify-center">
    <Header />
    <main className="flex-grow">
      {/* Your routes/pages or content go here */}
    </main>
    <Footer />
  </div>
    ) : null
}

export default App

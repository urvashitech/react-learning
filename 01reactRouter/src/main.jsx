import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
//const router = createBrowserRouter([
//  {
//    path : "/",
//    element : <Layout/>,
//    children : [
//      { 
//        path : "",
//        element : <Home/>
//      },
//      {
//        path : "about",
//        element : <About/>
//      }
//    ]
//  }
//])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = "" element ={<Home/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "user/:userid" element = {<User/>}/>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

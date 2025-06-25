import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const onCartClick = ()=>{
        navigate('/cart')
    }
  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <button onClick={onCartClick}>Go to cart</button>
    </div>
  )
}

export default Home

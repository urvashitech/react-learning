import React, { useEffect, useState } from 'react'

function Effect() {
    const [count,setCount] = useState(1)
    
    useEffect(()=>{
        const url = `https://dummyjson.com/products/${count}`
        fetch(url).then(res=>res.json()).then(data=>console.log(data))
    },[count])
  return (
    <div className='App'>
      <h1>Learing about useEffect hook </h1>
      <button onClick={()=> setCount(count+ 1)}>Click - {count}</button>
    </div>
  )
}

export default Effect

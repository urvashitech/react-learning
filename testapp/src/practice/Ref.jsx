import React, { useRef, useState } from 'react'
function Ref() {
    const [count,setCount] = useState(0)
    const ref = useRef(0)
    const handleOnStart = ()=>{
        ref.current = setInterval(() => {
           setCount(count => count + 1)
        }, 100);
    }
    const handleOnStop = ()=>{
        clearInterval(ref.current)
    }
  return (
    <div className='App'>
      <h1>Welcome to Learning Useref hook </h1>
      <p>{count}</p>
      
      <button onClick={handleOnStart}>Start</button>
      <button onClick={handleOnStop}>Stop</button>
    </div>
  )
}

export default Ref

import React,{useState} from 'react'
import Text from '../text/Text'

function Button() {
    const [count,setCount] = useState(0)
    const handelOnClick = ()=>{
  setCount(count+1)
    }
  return (
    <div>
      <button onClick={handelOnClick} count = {count}>Click To Increment</button>
      <Text/>
    </div>
  )
}

export default Button

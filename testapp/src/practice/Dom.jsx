import React, { forwardRef, useRef } from 'react'

const MyButton = forwardRef((props,ref)=>{
    return(
        <input ref={ref} placeholder='Search....'/>
    )
})
function Dom() {
    const ref = useRef()
    const onFocusClick = ()=>{
        ref.current.focus()
    }
  return (
    <div className='App'>
        <h1>Learning about manipulating Dom using useref</h1>
        <MyButton placeholder = "search...." ref={ref}/>
        <button onClick={onFocusClick}>Click To Type</button>
    </div>
  )
}

export default Dom

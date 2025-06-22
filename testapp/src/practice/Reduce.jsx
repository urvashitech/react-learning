import React, { useReducer } from 'react'

function Reduce() {
  const initialState = {
    count: 0
  }

  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 }
      case 'DECREMENT':
        return { ...state, count: state.count - 1 }
      default:
        return state
    }
  }

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>Learning useReducer Hook</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default Reduce

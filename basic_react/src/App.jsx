import { useState } from "react"
function App() {
  
  let [counter,setCounter] = useState(15)

  const addValue = () => {

    if (counter < 20){
      setCounter(counter+1)
    }
  }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
    <h1>Chai or Code</h1>
    <h2> Counter Value {counter}</h2>
    <button onClick={addValue}>Add A number {counter}</button>
    <button onClick={removeValue}>Remove a number {counter}</button>
    </div>
    </>
  )
}

export default App

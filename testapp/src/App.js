import logo from './logo.svg';
import './App.css';


const  Header = ()=>{
  return (
    <>
    <h2>I am Header </h2>
    <p>I should go on the top </p>
    </>
  
)

}
function App() {
  let count = 0 
  const handleClickIncrement = ()=>{
    count+=1
    console.log(count)
  }
  const handleTextChange = (e)=>{
    console.log(e.target.value)
  }
  const name = "Urvashi"
  return (
    <div className='App'>
      <Header/>
      <h1>Hello {name} i am learning react</h1>
      <button onClick={handleClickIncrement} style={{background : "blue" , color: "white" , borderRadius : "20px"}}> Increment+</button>
      <input style={{background : "black" , color: "white" , marginLeft: "10px", marginTop: "10px", borderRadius : "15px"}} onChange={handleTextChange} placeholder='Type anything to print in the console '/>
      
    </div>
  );
}

export default App;

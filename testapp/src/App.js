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
  
  const name = "Urvashi"
  return (
    <div className='App'>
      <Header/>
      <h1>Hello {name} i am learning react</h1>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes , NavLink} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import { Private } from './components/PrivateRoute/Private';

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
  const getStyle = ({ isActive }) => {
  return {
    color: isActive ? "red" : "",
    margin: "10px"
  };
};
  return (
    <div className='App'>
      {/* 
      <Header/>
      <h1>Hello {name} i am learning react</h1>
      <button onClick={handleClickIncrement} style={{background : "blue" , color: "white" , borderRadius : "20px"}}> Increment+</button>
      <input style={{background : "black" , color: "white" , marginLeft: "10px", marginTop: "10px", borderRadius : "15px"}} onChange={handleTextChange} placeholder='Type anything to print in the console '/>
      */}
      <NavLink to='/' style ={ getStyle}>Home</NavLink> || 
      <NavLink to='/cart' style ={ getStyle}>Cart</NavLink> || 
      <NavLink to='/about' style ={ getStyle}>About</NavLink> ||
      <NavLink to='/login' style ={ getStyle}>Login</NavLink> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Private><Route path='/cart' element={<Cart/>}/></Private>
        
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

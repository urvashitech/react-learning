import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './practice/State';
import Exercise1 from './practice/Exercise1';
import Ref from './practice/Ref';
import Dom from './practice/Dom';
import Effect from './practice/Effect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/>
    <State/> 
    <Exercise1/>
    <Ref/>
    <Dom/>
    */}
    <Effect/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

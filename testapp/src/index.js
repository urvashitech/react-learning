import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './practice/State';
import Exercise1 from './practice/Exercise1';
import Ref from './practice/Ref';
import Dom from './practice/Dom';
import Effect from './practice/Effect';
import Reduce from './practice/Reduce';
import Button from './component/button/Button';
import {CounterContext} from './practice/context/Context'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { store } from './redux/store'; 
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <React.StrictMode>
    {/* <App/>
    <State/> 
    <Exercise1/>
    <Ref/>
    <Dom/>
    <Effect/>
    <Reduce/>
    <Button />
    <CounterContext.Provider>
    </CounterContext.Provider>   
    <BrowserRouter>
    <AuthProvider>
    <App/>
    </AuthProvider>
    </BrowserRouter>
    */}
    <Provider store={store}>
      <App />
    </Provider>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

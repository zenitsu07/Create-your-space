import React from 'react';
//enables routing for the client side of app
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/account/Login';
import Home from './components/home/Home';

import DataProvider, { DataContext } from './context/DataProvider'

import './App.css';
// import Menu from './components/account/AccountMenu';
function App() {

  return (
      <div>
        <DataProvider>

          <BrowserRouter context = {DataContext}>
            <div style = {{marginTop: 64}}>

              <Routes>
                  <Route path='/login' element = {<Login />} />
                  <Route path='/' element = { <Home /> } />
              </Routes>

            </div>
          </BrowserRouter>
          <Login />
        </DataProvider>
        
        <Login />
      </div>
    
  );
}

export default App; 

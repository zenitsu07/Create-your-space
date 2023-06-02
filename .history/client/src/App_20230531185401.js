import React from 'react';
//enables routing for the client side of app
import {BrowserRouter} from 'react-router-dom'
import Login from './components/account/Login';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider'

import './App.css';
// import Menu from './components/account/AccountMenu';
function App() {

  return (
      <DataProvider>

        <BrowserRouter>
        <div style = {{marginTop: 64}}>

            <Login />
            <Home />

        </div>
        </BrowserRouter>

      </DataProvider>
     
  );
}

export default App; 

import React from 'react';
import './App.css';

import Login from './components/account/Login';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider'
// import Menu from './components/account/AccountMenu';
function App() {

  return (
      <DataProvider>

        <div style = {{marginTop: 64}}>

            <Login />
            <Home />
            
        </div>

      </DataProvider>
     
  );
}

export default App; 

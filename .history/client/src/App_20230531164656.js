import React from 'react';
import './App.css';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider'
import Home from './components/home/Home';
// import Menu from './components/account/AccountMenu';
function App() {
  return (
    <div style = {{marginTop: 64}}>

      <DataProvider
      
      >

      </DataProvider>
     <Login />
    
    </div>
  );
}

export default App; 

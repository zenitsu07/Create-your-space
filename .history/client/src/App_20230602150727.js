import React from 'react';
import { useState } from 'react';
//enables routing for the client side of app
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import DataProvider, { DataContext } from './context/DataProvider'

import './App.css';

const PrivateRoute = ({isUserAuthenticated}, ...props) =>{
  return isAuthenticated?
  <>
  <Outlet />
  </>:
  //If not loggedin send user back to login route
  <Navigate replace to='/login' />
}


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (

          <BrowserRouter context = {DataContext}>

            <Header />
            <div style = {{marginTop: 64}}>
 
              <Routes>
                  <Route path='/login' element = {<Login isUserAuthenticated = {isUserAuthenticated} /> } />
                  <Route path = '/' element ={<PrivateRoute isAuthenticated = {isAuthenticated}/>} />
                  <Route path='/' element = { <Home /> } />
              </Routes>

            </div>
          </BrowserRouter>
    
  );

}

export default App; 

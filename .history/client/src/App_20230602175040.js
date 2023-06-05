import React from 'react';
import { useState } from 'react';
//enables routing for the client side of app
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import DataProvider, { DataContext } from './context/DataProvider'

import './App.css';
import Banner from './components/banner/banner';

const PrivateRoute = ({isAuthenticated}, ...props) =>{
  return isAuthenticated
  ?<>
    <Header />
    <Outlet />
  </>
  :
  //If not loggedin send user back to login route
  <Navigate replace to='/login' />
}


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (

          <BrowserRouter context = {DataContext}>

            <div style = {{marginTop: 64}}>
            <Banner />
              <Routes>
                  <Route path='/login' element = {<Login isUserAuthenticated = {isUserAuthenticated} /> } />
                  
                  //send to privateRoute
                  <Route path = '/' element ={<PrivateRoute isAuthenticated = {isAuthenticated} />} >
                    //If user Authenticated then user is sent to Outlook ie.e the child components below
                    <Route path='/' element = { <Home /> } />  
                  </Route> 
                  
              </Routes>

            </div>
          </BrowserRouter>
    
  );

}

export default App; 

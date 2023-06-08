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
import Categories from './components/home/Categories';
import CreatePost from './components/create/CreatePost';

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
            
              <Routes>
                  <Route path='/login' element = {<Login isUserAuthenticated = {isUserAuthenticated} /> } />
                  
                  //send to privateRoute
                  //Home path will redirect to PrivateRoute if loggedin else to '/login' path
                  {/* <Route path = '/' element ={<PrivateRoute isAuthenticated = {isAuthenticated} />} >
                    </Route>  */}
                  //If user Authenticated then user is sent to Outlook ie.e the child components below
                    <Route path='/' element = { 
    
                        <div>
                          {/* using components to display while login still contain bugs */}
                          
                          <Home />
                          {/* use for privateRouting when fixe errors in logging in and navigating  */}
                          
                        </div>
                        
                    } />  

                    {/* Once fixed login bugs uncomment below */
                      /* <Route path = '/' element ={<PrivateRoute isAuthenticated = {isAuthenticated} />} >
                    </Route>  */}

                    <Route path='/create'     
                      element = {
                        <>
                          <Header />
                          <CreatePost />
                        </>
                      }
                    />
                  
              </Routes>

            </div>
          </BrowserRouter>
    
  );

}

export default App; 

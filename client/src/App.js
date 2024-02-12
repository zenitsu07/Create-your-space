import React, { useContext } from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import DataProvider from './context/DataProvider'

import './App.css';
import CreatePost from './components/create/CreatePost';
import About from './components/about/About';
import Contact from './components/contact/Contact1';
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';

//PrivateRoute

const PrivateRoute = ({isAuthenticated}, ...props) =>{

  return isAuthenticated
  ?<>
    <Header />
    <Home />
  </>
  :
  //If not loggedin send user back to login route
  <Navigate replace to='/login' />
  
}


function App(){

  const [isAuthenticated, isUserAuthenticated] = useState(false);
 
  return (

          <DataProvider >
            <BrowserRouter >

              <div style = {{marginTop: 64}}>

                <Routes>

                    <Route path='/login' element = {<Login isUserAuthenticated = {isUserAuthenticated} /> } />
                    
                    {/* //send to privateRoute , Home path will redirect to PrivateRoute if loggedin else to '/login' path */}
                    {/* <Route path = '/' element ={<PrivateRoute isAuthenticated = {isAuthenticated} />} >
                      </Route>  If user Authenticated then user is sent to Outlook ie.e the child components below*/}

                    <Route path='/' element = { <PrivateRoute isAuthenticated = {isAuthenticated} />} />

                      <Route path ='/Home' element = {<Home />}/>

                      <Route path='/create' element = {
                          <>
                            <Header />
                            <CreatePost />
                          </>
                        }
                      />
                    
                      <Route path = '/about'>
                          <Route path='/about' element = {<About />} />
                      </Route>

                      <Route path='/contact' >
                          <Route path='/contact' element={<Contact />} />
                      </Route>

                      

                </Routes>

              </div>
              </BrowserRouter>
          </DataProvider>
  );

}

export default App; 
            
{/* Once fixed login bugs uncomment below */ /* <Route path = '/' element ={<PrivateRoute isAuthenticated = {isAuthenticated} />} >  </Route>  */ }
          
{/* <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >  <Route path='/about' element={<About />} /> </Route> */}
{/* <Route path = '/create/categorytype' element = { <>     <Header /> <CreatePost /> </>} /> */}

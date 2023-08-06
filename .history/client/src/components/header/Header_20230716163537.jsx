import React from 'react'
import { AppBar, Toolbar,styled, Typography , Box, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './createyourspace-high-resolution-logo-black-on-transparent-background.png'
import logo from 'createyourspace-high-resolution-logo-color-on-transparent-background/png'
const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
    // changes
    display:flex;
    flex-direction:row;
`;

const Container = styled(Toolbar)`

    justify-content: center;
   
    & > a {

        padding: 20px;
        color: #000;
        text-decoration: none;

    }
`

const Bar = styled(Avatar)`
    
    width: 200px;
    // height: 200px;
    marginLeft: 20px;
    margin: 1em 3em;

`;
const Header = () => {
 
  return (  

    <Component>
         <Bar src={logo} alt="Logo" ></Bar>
         
        <Container> 
        
         
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login">LOGOUT</Link>
        
        </Container>
    </Component>
  )
}

export default Header;
import React from 'react'
import { AppBar, Toolbar,styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../../public/createyourspace-high-resolution-logo-black-on-transparent-background.png'

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`
const Header = () => {
 
  return (

    <Component>
        <Container>
            <img src={logo}>
            </img>
            <Link to = '/' >HOME</Link>
            <Link to = '/about' >ABOUT</Link>
            <Link to = '/contact' >CONTACT</Link>
            <Link to = '/login' >LOGOUT</Link>

        </Container>
    </Component>
  )
}

export default Header;
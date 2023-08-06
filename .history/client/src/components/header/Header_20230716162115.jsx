import React from 'react'
import { AppBar, Toolbar,styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './createyourspace-high-resolution-logo-black-on-transparent-background.png'

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & >img{
        marginLeft: 0px;
        float:left;
    }
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Bar = styled(Toolbar)`
  display: flex;
  align-items: center;
  & > img {
    margin-left: 0;
  }
`;
const Header = () => {
 
  return (

    <Component>
        <Container> 
        <Bar>
          <img src={logo} width={80} height={100} alt="Logo" />
          <div>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login">LOGOUT</Link>
          </div>
        </Bar>

        </Container>
    </Component>
  )
}

export default Header;
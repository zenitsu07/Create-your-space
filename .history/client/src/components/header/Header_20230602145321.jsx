import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


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

            <Link to = '/' >HOME</Link>
            <Link to = '/' >ABOUT</Link>
            <Link to = '/' >CONTACT</Link>
            <Link to = '/' >LOGOUT</Link>

        </Container>
    </Component>
  )
}

export default Header;
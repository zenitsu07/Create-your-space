import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

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
    <AppBar>
        <Toolbar>
            <Typography>HOME</Typography>
            <Typography>ABOUT</Typography>
            <Typography>CONTACT</Typography>
            <Typography>LOGOUT</Typography>

        </Toolbar>
    </AppBar>
  )
}

export default Header;
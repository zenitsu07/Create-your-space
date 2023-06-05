import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

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
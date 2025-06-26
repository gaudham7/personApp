import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
const Navbar = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User app
          </Typography>
          <link to={'/'}><Button color="inherit">Home</Button></link>
          <link to={'/Add'}><Button color="inherit">Add</Button></link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
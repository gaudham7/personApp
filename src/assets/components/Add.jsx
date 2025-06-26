import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
  return ( 
     <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="user id" variant="outlined" />
      <TextField id="filled-basic" label="name" variant="filled" />
      <TextField id="standard-basic" label="email" variant="standard" />
      <TextField id="standard-basic" label="contact" variant="standard" />
       <Button variant="text">submit</Button>
    </Box>
  )
}

export default Add
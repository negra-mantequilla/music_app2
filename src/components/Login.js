import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login({login}) {

  const {loggedin, setLoggedin} = login

  console.log(login)
  // const [loggedin, setLoggedin] = useState(false)
  // const [shrek, donkey] = useState('ogre')

  function loginClick(event) {
    setLoggedin(!loggedin) 
    // donkey(shrek == 'ogre' ? 'donkey' : 'ogre')
  }
  
  return (
    <div>
      {/* {console.log(loggedin)} */}
      {console.log(loggedin)}
      {/* {console.log(shrek)} */}
      <Box
        className='login'
        component="form"
        autoComplete="off"
        onSubmit={loginClick}
      >
        <TextField required id="outlined-basic1" label="Username" variant="outlined" />
        <TextField required type="password" id="outlined-basic2" label="Password" variant="outlined" />
        <Button variant="contained" type="submit" >Login</Button>
      </Box>
    </div>
  )
}

export default Login 
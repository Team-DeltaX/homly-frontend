import React from 'react'
import { Paper,TextField,Box } from '@mui/material'



const Input = ({label,icon}) => {
  return (
    <Paper elevation={6} className="custom_input_outer_container" >
    <form>
        <Box className="custom_input_container">
            {/* <SearchIcon /> */}
            <Box className="input_icon">{icon}</Box>
            <TextField  placeholder={label} className='custom_input'  id="outlined-basic"  variant="outlined" size='small' />
        </Box>
    </form>
    </Paper>
  )
}

export default Input
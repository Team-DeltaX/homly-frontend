import React from 'react'
import { Box,Typography} from '@mui/material'
const CustomefileInput = ({required,label}) => {
  return (
    <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',gap:'1em',marginBottom:'12px'}}>
         <Box sx={{minWidth:'100px',maxWidth:'100px'}} className="label_container">
            {required ? 
            <Typography variant='p'  sx={{color:'red'}}>*</Typography>
            :''}
            <Typography variant='p' sx={{color:'black'}}>{label}</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'flex-start'}}>

        <input type="file" />
        </Box>
    </Box>
    
  )
}

export default CustomefileInput
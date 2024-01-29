import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function CustomInput({placeholder}) {
  return (
    <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
        <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
            <Typography  variant='p' sx={{color:'black'}}></Typography>
        </Box>
        <TextField fullWidth     id="fullWidth" size='small' placeholder={placeholder} required />
    </Box>
  );
}
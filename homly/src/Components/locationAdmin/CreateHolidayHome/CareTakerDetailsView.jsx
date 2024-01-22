import React from 'react'
import { Box,Typography,TextField} from '@mui/material'


const CareTakerDetailsView = () => {
  return (
    <Box>

        <fieldset style={{borderRadius:'16px',color:'grey'}}>
        <legend>Caretaker Details</legend>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Name</Typography>
              </Box>
              <TextField required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Contact No</Typography>
              </Box>
              <TextField required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                <Box sx={{minWidth:'100px',maxWidth:'100px'}} className="label_container">
                    <Typography variant='p' sx={{color:'black'}}>Gender</Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'flex-start',width:"100%",alignItems:'center'}}>
                  <label>Male</label><input type='radio' name='gender' value={'male'}></input>
                  <label htmlFor="">Female</label><input type='radio' value={'female'} name='gender'></input>
              </Box>
            </Box>
        
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Address</Typography>
              </Box>
              <TextField id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Description</Typography>
              </Box>
              <TextField id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'100px'}} className="label_container">
                  <Typography variant='p' sx={{color:'black'}}>Image</Typography>
              </Box>
              <Box sx={{display:'flex',justifyContent:'flex-start'}}>

              <input type="file" />
            </Box>
           </Box>
            
        
        </fieldset>

    </Box>
  )
}

export default CareTakerDetailsView
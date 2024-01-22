import React from 'react'
import { Box,Button,Input,TextField,Typography} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const HomeDetailsView = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>

        <fieldset style={{borderRadius:'16px',color:'grey'}}>
        <legend>Holiday Home Details</legend>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Name</Typography>
              </Box>
              <TextField required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Address</Typography>
              </Box>
              <TextField required id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>District</Typography>
              </Box>
              <Box sx={{width:"100%"}} >
                <FormControl sx={{  width: '100%', }}>
                  <InputLabel id="demo-simple-select-label">District</InputLabel>
                  <Select
                    required
                    xs={{width:"5%"}}
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Description</Typography>
              </Box>
              <TextField id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Contact No 1</Typography>
              </Box>
              <TextField required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
              <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                  <Typography  variant='p' sx={{color:'black'}}>Contact No 2</Typography>
              </Box>
              <TextField  id="outlined-required" label="Enter Contact No2" placeholder='Enter Contact No2' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                <Box sx={{minWidth:'100px',maxWidth:'100px'}} className="label_container">
                    <Typography variant='p' sx={{color:'black'}}>Status</Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'flex-start',width:"100%",alignItems:'center'}}>
                  <label>Active</label><input type='radio' name='gender' value={'active'}></input>
                  <label htmlFor="">Inactive</label><input type='radio' value={'inactive'} name='gender'></input>
              </Box>
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

export default HomeDetailsView
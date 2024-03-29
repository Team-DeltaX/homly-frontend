import React, { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const HomeDetailsView = ({ setSubmit }) => {

  const [value, setValue] = useState({
    name: 'Nipun Resort', address: 'Nuwara Eliya,pundaluoya', district: 'Matale', description: 'Holidayhome description is here mulitple lines can be insert', contactNo1: '0712345321', contactNo2: ' ', category: 'exclusive', status: 'Active'
  })




  return (
    <Box>

      <fieldset style={{ borderRadius: '16px', color: 'grey' }}>
        <legend>Holiday Home Details</legend>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
          </Box>
          <TextField value={value.name} className='input_field' required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' disabled />
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Address</Typography>
          </Box>
          <TextField value={value.address} required id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small' disabled />
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>District</Typography>
          </Box>
          <Box sx={{ width: "100%" }} >
            <FormControl sx={{ width: '100%', }}>
              <InputLabel required id="demo-simple-select-label">District</InputLabel>
              <Select

                xs={{ width: "5%" }}
                size='small'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value.district}
                label="Age"
                disabled={true}

              >
                <MenuItem value={"Colombo"}>Colombo</MenuItem>
                <MenuItem value={"Gampaha"}>Gampaha</MenuItem>
                <MenuItem value={"Kalutara"}>Kalutara</MenuItem>
                <MenuItem value={"Kandy"}>Kandy</MenuItem>
                <MenuItem value={"Matale"}>Matale</MenuItem>
                <MenuItem value={"Nuwara Eliya"}>Nuwara Eliya</MenuItem>
                <MenuItem value={"Galle"}>Galle</MenuItem>
                <MenuItem value={"Matara"}>Matara</MenuItem>
                <MenuItem value={"Hambantota"}>Hambantota</MenuItem>
                <MenuItem value={"Jaffna"}>Jaffna</MenuItem>
                <MenuItem value={"Kilinochchi"}>Kilinochchi</MenuItem>
                <MenuItem value={"Mannar"}>Mannar</MenuItem>
                <MenuItem value={"Vavuniya"}>Vavuniya</MenuItem>
                <MenuItem value={"Mullaitivu"}>Mullaitivu</MenuItem>
                <MenuItem value={"Batticaloa"}>Batticaloa</MenuItem>
                <MenuItem value={"Ampara"}>Ampara</MenuItem>
                <MenuItem value={"Trincomalee"}>Trincomalee</MenuItem>
                <MenuItem value={"Kurunegala"}>Kurunegala</MenuItem>
                <MenuItem value={"Puttalam"}>Puttalam</MenuItem>
                <MenuItem value={"Anuradhapura"}>Anuradhapura</MenuItem>
                <MenuItem value={"Polonnaruwa"}>Polonnaruwa</MenuItem>
                <MenuItem value={"Badulla"}>Badulla</MenuItem>
                <MenuItem value={"Monaragala"}>Monaragala</MenuItem>
                <MenuItem value={"Ratnapura"}>Ratnapura</MenuItem>
                <MenuItem value={"Kegalle"}>Kegalle</MenuItem>

              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Description</Typography>
          </Box>
          <TextField value={value.description} required multiline id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small' disabled />
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Contact No 1</Typography>
          </Box>
          <TextField value={value.contactNo1} required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small' disabled />
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Contact No 2</Typography>
          </Box>
          <TextField value={value.contactNo2} id="outlined-required" label="Enter Contact No2" placeholder='Enter Contact No2' fullWidth size='small' disabled/>
        </Box>

        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Category</Typography>
          </Box>
          <Box sx={{ width: "100%" }} >
            <FormControl sx={{ width: '100%', }}>
              <InputLabel id="demo-simple-select-label">select</InputLabel>
              <Select
                required
                xs={{ width: "5%" }}
                size='small'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value.category}
                label="Age"
                disabled={true}

              >
                <MenuItem value={"exclusive"}>Exclusive</MenuItem>
                <MenuItem value={"nonExclusive"}>Non-Exclusive</MenuItem>

              </Select>
            </FormControl>
          </Box>
        </Box>



        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
            <Typography variant='p' sx={{ color: 'black' }}>Status</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "100%", alignItems: 'center' }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value.status}


            >
              <FormControlLabel value="Active" control={<Radio />} label="Active" />
              <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
            </RadioGroup>
          </Box>
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
            <Typography variant='p' sx={{ color: 'black' }}>Image</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <input type="file" disabled={true} />
          </Box>
        </Box>


      </fieldset>

    </Box>
  )
}

export default HomeDetailsView
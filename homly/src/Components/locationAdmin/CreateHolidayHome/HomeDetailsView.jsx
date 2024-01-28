import React, { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const HomeDetailsView = () => {

  const [value, setValue] = useState({
    name: '', address: '', district: '', description: '', contactNo1: '', contactNo2: '', category: '', status: ''
  })

  const [error, setError] = useState({
    name: false, address: false, description: false, contactNo1: false, contactNo2: false
  });


  const handleNameChange = (e) => {
    setValue({ ...value, name: e.target.value });
    const name_regex = /^[a-zA-Z]+$/;


    if (e.target.value.length > 0) {
      if (!name_regex.test(e.target.value)) {
        setError({ ...error, name: true });
      } else {
        setError({ ...error, name: false });
      }
    }
  }


  const handleAddressChange = (e) => {
    setValue({ ...value, address: e.target.value });
  }


  const handleDistrictChange = (e) => {
    setValue({ ...value, district: e.target.value });
  }

  const handleDisriptionChange = (e) => {
    setValue({ ...value, description: e.target.value });
  }

  const handleContactNo1Change = (e) => {
    setValue({ ...value, contactNo1: e.target.value });
    const phone_regex = /^\d{10}$/;
    if (e.target.value.length > 0) {
      if (!phone_regex.test(e.target.value)) {
        setError({ ...error, contactNo1: true });
      } else {
        setError({ ...error, contactNo1: false });
      }
    }
  }

  const handleContactNo2Change = (e) => {
    setValue({ ...value, contactNo2: e.target.value });
    const phone_regex = /^\d{10}$/;
    if (e.target.value.length > 0) {
      if (!phone_regex.test(e.target.value)) {
        setError({ ...error, contactNo2: true });
      } else {
        setError({ ...error, contactNo2: false });
      }
    }
  }

  const handlestatusChange = (e) => {
    setValue({ ...value, status: e.target.value });
  }

  const handleCategoryChange = (e) => {
    setValue({ ...value, category: e.target.value });
  }



  return (
    <Box>

      <fieldset style={{ borderRadius: '16px', color: 'grey' }}>
        <legend>Holiday Home Details</legend>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
          </Box>
          <TextField error={error.name} className='input_field' required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' onChange={handleNameChange} helperText={error.name ? "Invalid Input" : ''} />
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Address</Typography>
          </Box>
          <TextField required id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small' onChange={handleAddressChange} />
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
                onChange={handleDistrictChange}
              >
                <MenuItem value={"January"}>January</MenuItem>
                <MenuItem value={"February"}>February</MenuItem>
                <MenuItem value={"March"}>March</MenuItem>
                <MenuItem value={"April"}>April</MenuItem>
                <MenuItem value={"May"}>May</MenuItem>
                <MenuItem value={"June"}>June</MenuItem>
                <MenuItem value={"July"}>July</MenuItem>
                <MenuItem value={"August"}>August</MenuItem>
                <MenuItem value={"September"}>September</MenuItem>
                <MenuItem value={"October"}>October</MenuItem>
                <MenuItem value={"November"}>November</MenuItem>
                <MenuItem value={"December"}>December</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Description</Typography>
          </Box>
          <TextField required multiline id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small' onChange={handleDisriptionChange} />
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Contact No 1</Typography>
          </Box>
          <TextField error={error.contactNo1} required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small' onChange={handleContactNo1Change} helperText={error.contactNo1 ? "There should be 10 digits" : ''} />
        </Box>
        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
          <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
            <Typography variant='p' sx={{ color: 'black' }}>Contact No 2</Typography>
          </Box>
          <TextField error={error.contactNo2} id="outlined-required" label="Enter Contact No2" placeholder='Enter Contact No2' fullWidth size='small' onChange={handleContactNo2Change} helperText={error.contactNo2 ? "There should be 10 digits" : ''} />
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
                value={value.catogery}
                label="Age"
                onChange={handleCategoryChange}
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
              onChange={handlestatusChange}

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
            <input type="file" />
          </Box>
        </Box>


      </fieldset>

    </Box>
  )
}

export default HomeDetailsView
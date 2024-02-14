import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const CareTakerDetailsView = () => {
  const [value, setValue] = useState({
    caretakerName: 'Kamal', caretakerContactNo: '0713456782', caretakerStatus: 'Active', caretakerAddress: 'Kegalle', caretakerDescription: 'example description here',
  })

  const [valueSecond, setValueSecond] = useState({
    caretakerName: '', caretakerContactNo: '', caretakerStatus: '', caretakerAddress: '', caretakerDescription: '',
  })





  const [showSecondCaretaker, setShowSecondCaretaker] = useState(false);

  const handleAddMoreClick = () => {
    setShowSecondCaretaker(true);
  };

  const handleRemoveClick = () => {
    setShowSecondCaretaker(false);
  }







  return (
    <Box>

      <fieldset style={{ borderRadius: '16px', color: 'grey' }}>
        <legend>Caretaker Details</legend>
        <Box className="first_caretaker">
          <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
              <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
            </Box>
            <TextField value={value.caretakerName} required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' />
          </Box>
          <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
              <Typography variant='p' sx={{ color: 'black' }}>Contact No</Typography>
            </Box>
            <TextField value={value.caretakerContactNo} required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small'  />
          </Box>
          <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
            <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
              <Typography variant='p' sx={{ color: 'black' }}>Status</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "100%", alignItems: 'center' }}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value.caretakerStatus}
              
              >
                <FormControlLabel value="Active" control={<Radio />} label="Active" />
                <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
              </RadioGroup>
            </Box>
          </Box>

          <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
              <Typography variant='p' sx={{ color: 'black' }}>Address</Typography>
            </Box>
            <TextField value={value.caretakerAddress} multiline id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small' required  />
          </Box>
          <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
              <Typography variant='p' sx={{ color: 'black' }}>Description</Typography>
            </Box>
            <TextField value={value.caretakerDescription} id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small'  />
          </Box>
          <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1em', marginBottom: '12px' }}>
            <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
              <Typography variant='p' sx={{ color: 'black' }}>Image</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>

              <input type="file" disabled={true} />
            </Box>
          </Box>
        </Box>



        {showSecondCaretaker && (
          <Box className="second_caretaker" sx={{ marginTop: '2em' }} >
            <hr style={{ width: "300px", marginBottom: "2em" }}></hr>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
              </Box>
              <TextField value={valueSecond.caretakerName} required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Contact No</Typography>
              </Box>
              <TextField value={valueSecond.caretakerContactNo} required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small'/>
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
                <Typography variant='p' sx={{ color: 'black' }}>Status</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "100%", alignItems: 'center' }}>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={valueSecond.caretakerStatus}
                
                >
                  <FormControlLabel value="Active" control={<Radio />} label="Active" />
                  <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                </RadioGroup>
              </Box>
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Address</Typography>
              </Box>
              <TextField value={valueSecond.caretakerAddress} multiline id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small' required />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Description</Typography>
              </Box>
              <TextField value={valueSecond.caretakerDescription} id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small'  />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
                <Typography variant='p' sx={{ color: 'black' }}>Image</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>

                <input type="file" disabled={true} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
              <Button variant="contained" size="small" onClick={handleRemoveClick}>Remove</Button>
            </Box>
          </Box>



        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '1em' }}>
          {!showSecondCaretaker && (
            <Button variant="outlined" size="small" onClick={handleAddMoreClick}>Add More</Button>
          )}
        </Box>



      </fieldset>

    </Box>
  )
}

export default CareTakerDetailsView
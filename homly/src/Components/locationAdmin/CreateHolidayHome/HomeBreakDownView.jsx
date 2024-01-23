import React, { useState } from 'react'
import { Box, TextField, Typography, Grid, Button, Paper } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



import RoomBreakdown from './RoomBreakdown';
import UnitBreakDown from './UnitBreakDown';
import HallBreakDown from './HallBreakDown';




function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const HomeBreakDownView = () => {
  const [values, setValues] = useState({
    RoomCode: '', Ac: '', RoomType: '', NoOfBeds: '', Remarks: '', Rental: ''
  })

  const [error, setError] = useState({
    ctName: false, ctAddress: false, ctDescription: false, ctContactNo: false
  });

  const handleRoomCodeChange = (e) => {
    setValues({ ...values, RoomCode: e.target.value });

  }
  const handleAcChange = (e) => {
    setValues({ ...values, Ac: e.target.value });
  }

  const handleRoomTypeChange = (e) => {
    setValues({ ...values, RoomType: e.target.value });
  }

  const handleNoOfBedsChange = (e) => {
    setValues({ ...values, NoOfBeds: e.target.value });
  }

  const handleRemarksChange = (e) => {
    setValues({ ...values, Remarks: e.target.value });
  }

  const handleRentalChange = (e) => {
    setValues({ ...values, Rental: e.target.value });
  }

  const [rental, setRental] = useState({
    district: '', weekDays: '', weekEnds: ''
  });

  const handleDistrict = (e) => {
    setRental({ ...rental, district: e.target.value });
  }

  const handleWeedays = (e) => {
    setRental({ ...rental, weekDays: e.target.value });
  }

  const handleWeekends = (e) => {
    setRental({ ...rental, weekEnds: e.target.value });
  }

  console.log(rental);


  const [rentalArray, setRentalArray] = useState([]);
  const handleAdd = () => {
    if (rental.district === '' || rental.weekDays === '' || rental.weekEnds === '') return;
    setRentalArray([...rentalArray, rental]);

  };



  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <Box>
      <fieldset style={{ borderRadius: '16px', color: 'grey', padding: '1.2em', paddingBottom: '0px' }}>
        <legend>Holiday Home Breakdown</legend>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Maximum Adults</Typography>
              </Box>
              <TextField type='number' id="outlined-required" label="Maximum Adults" placeholder='Maximum Adults' fullWidth size='small' />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Maximum Childern</Typography>
              </Box>
              <TextField type='number' id="outlined-required" label="Maximum Children" placeholder='Maximum Children' fullWidth size='small' />
            </Box>
            <FormGroup sx={{ display: 'flex', width: '100%' }}>
              <FormControlLabel control={<Checkbox />} label="Free wifi" />
              <FormControlLabel control={<Checkbox />} label="AC" />
              <FormControlLabel control={<Checkbox />} label="Parking" />
              <FormControlLabel control={<Checkbox />} label="Kitchen" />

            </FormGroup>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Other Charges</Typography>
              </Box>
              <TextField type='number' id="outlined-required" label="Other Charges" placeholder='Other Charges' fullWidth size='small' />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Service Charges</Typography>
              </Box>
              <TextField type='number' id="outlined-required" label="Service Charges" placeholder='Service Charges' fullWidth size='small' />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Total Rental</Typography>
              </Box>
              <TextField type='number' id="outlined-required" label="Total Rental" placeholder='Total Rental' fullWidth size='small' required />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Enter facilities</Typography>
              </Box>
              <TextField id="outlined-required" label="Facilities" placeholder='Enter Facilities' fullWidth size='small' />
            </Box>
          </Grid>


        </Grid>
        <Grid container spacing={3}>

          <Grid item md={12} sm={12} xs={12} sx={{ marginTop: '2em' }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Rooms/Units" {...a11yProps(0)} />
                  <Tab label="Halls" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Box>
                  <fieldset style={{ borderRadius: '8px' }}>
                    <legend>Rooms Breakdown</legend>
                    <RoomBreakdown />
                    <RoomBreakdown />
                    <RoomBreakdown />
                  </fieldset>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "12px" }}>

                    <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpen}>Add Room</Button>
                  </Box>

                </Box>

                <Box>
                  <fieldset style={{ borderRadius: '8px' }}>
                    <legend>Units Breakdown</legend>
                    <UnitBreakDown />
                    <UnitBreakDown />
                    <UnitBreakDown />
                  </fieldset>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "12px" }}>
                    <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }}>Add Unit</Button>
                  </Box>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box>
                  <fieldset style={{ borderRadius: '8px' }}>
                    <legend>Halls Breakdown</legend>
                    <HallBreakDown />
                    <HallBreakDown />
                    <HallBreakDown />

                  </fieldset>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "12px" }}>
                    <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }}>Add Hall</Button>
                  </Box>
                </Box>
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </fieldset>


      <React.Fragment>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}

        >
          <DialogTitle>Add New Room</DialogTitle>
          <form>
            <DialogContent sx={{ maxHeight: "350px" }}>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
                </Box>
                <TextField error={error.ctName} required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' onChange={handleAcChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>AC/Non-AC</Typography>
                </Box>

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
                    onChange={handleRoomTypeChange}
                  >
                    <MenuItem value={"exclusive"}>AC</MenuItem>
                    <MenuItem value={"nonExclusive"}>Non-AC</MenuItem>

                  </Select>
                </FormControl>
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Room Type</Typography>
                </Box>

                <FormControl sx={{ width: '100%', }}>
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    required
                    xs={{ width: "5%" }}
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value.catogery}
                    label="Age"
                    onChange={handleAcChange}
                  >
                    <MenuItem value={"exclusive"}>Single Room</MenuItem>
                    <MenuItem value={"nonExclusive"}></MenuItem>

                  </Select>
                </FormControl>
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Number Of Beds</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of beds' fullWidth size='small' onChange={handleNoOfBedsChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>

              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Remark</Typography>
                </Box>
                <TextField error={error.ctName} required id="outlined-required" label="Remark" placeholder='Enter Remark' fullWidth size='small' onChange={handleRemarksChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Rental</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="Rental" placeholder='Rental' fullWidth size='small' onChange={handleRemarksChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="rental_container">
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Add Rental</Typography>
                </Box>

                <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                  <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} >
                    <FormControl sx={{}}>
                      <InputLabel id="demo-simple-select-label">District</InputLabel>
                      <Select
                        required

                        size='small'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value.district}
                        label="Age"
                        sx={{ width: "150px" }}
                        onChange={handleDistrict}


                      >
                        <MenuItem value={"january"}>January</MenuItem>
                        <MenuItem value={"february"}>February</MenuItem>
                        <MenuItem value={"march"}>March</MenuItem>
                        <MenuItem value={"april"}>April</MenuItem>
                        <MenuItem value={"may"}>May</MenuItem>
                        <MenuItem value={"june"}>June</MenuItem>
                        <MenuItem value={"july"}>July</MenuItem>
                        <MenuItem value={"august"}>August</MenuItem>
                        <MenuItem value={"september"}>September</MenuItem>
                        <MenuItem value={"october"}>October</MenuItem>
                        <MenuItem value={"november"}>November</MenuItem>
                        <MenuItem value={"december"}>December</MenuItem>

                      </Select>
                    </FormControl>
                    <TextField type='number' id="outlined-required" label="WeekDays" placeholder='WeekDays' size='small' onChange={handleWeedays} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <TextField type='number' id="outlined-required" label="Weekend" placeholder='Weekend' size='small' onChange={handleWeekends} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <Button variant='contained' size='small' onClick={handleAdd} >Add</Button>


                  </Box>
                </Box>


                {rentalArray.map((item, index) => {
                  return (
                    <Box>
                      <Paper sx={{ display: 'flex', padding: "1.2em 2em", justifyContent: 'space-between', marginBottom: "1em" }}>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black' }}>Month</Typography>
                          <Typography variant='p' sx={{ color: 'grey' }}>{item.district}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black' }}>WeekDays</Typography>
                          <Typography variant='p' sx={{ color: 'grey' }}>{item.weekDays}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black' }}>WeekEnd</Typography>
                          <Typography variant='p' sx={{ color: 'grey' }}>{item.weekEnds}</Typography>
                        </Box>

                      </Paper>
                    </Box>
                  )

                })}

              </Box>





            </DialogContent>
            <DialogActions>
              <Button type='submit' variant='contained' onClick={handleClose}>Save</Button>
              <Button variant='outlined' onClick={handleClose}>Close</Button>
            </DialogActions>

          </form>
        </Dialog>
      </React.Fragment>





    </Box>
  )
}

export default HomeBreakDownView
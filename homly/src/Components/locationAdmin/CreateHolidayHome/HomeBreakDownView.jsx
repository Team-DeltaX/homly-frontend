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
    roomCode: '', roomAc: '', RoomType: '', NoOfBeds: '', NoOfAdults: '', NoOfChildren: '', roomRemarks: '', roomRental: '',
  })


  const [roomArray, setRoomArray] = useState([]);

  const handleSaveRoom = () => {
    if (values.roomCode === '' || values.roomAc === '' || values.RoomType === '' || values.NoOfBeds === '' || values.NoOfAdults === '' || values.NoOfChildren === '' || values.roomRemarks === '' || values.roomRental === '') return;
    setRoomArray([...roomArray, values]);
    setOpen(false);
  };

  const [error, setError] = useState({
    ctName: false, ctAddress: false, ctDescription: false, ctContactNo: false
  });

  const handleRoomCodeChange = (e) => {
    setValues({ ...values, roomCode: e.target.value });

  }
  const handleAcChange = (e) => {
    setValues({ ...values, roomAc: e.target.value });
  }

  const handleRoomTypeChange = (e) => {
    setValues({ ...values, RoomType: e.target.value });
  }

  const handleNoOfBedsChange = (e) => {
    setValues({ ...values, NoOfBeds: e.target.value });
  }

  const handleNoOfAdults = (e) => {
    setValues({ ...values, NoOfAdults: e.target.value });
  }

  const handleNoOfChildren = (e) => {
    setValues({ ...values, NoOfChildren: e.target.value });
  }


  const handleRemarksChange = (e) => {
    setValues({ ...values, roomRemarks: e.target.value });
  }

  const handleRentalChange = (e) => {
    setValues({ ...values, roomRental: e.target.value });
  }

  const [rental, setRental] = useState({
    district: '', weekDays: '', weekEnds: ''
  });

  const handleDistrict = (e) => {
    setRental({ ...rental, district: e.target.value });
  }

  const handleWeekdays = (e) => {
    setRental({ ...rental, weekDays: e.target.value });
  }

  const handleWeekends = (e) => {
    setRental({ ...rental, weekEnds: e.target.value });
  }



  const [rentalArray, setRentalArray] = useState([]);
  const handleAdd = () => {
    if (rental.district === '' || rental.weekDays === '' || rental.weekEnds === '') return;
    setRentalArray([...rentalArray, rental]);

  };



  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const [openUnit, setOpenUnit] = useState(false);
  const [openHall, setOpenHall] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenUnit = () => {
    setOpenUnit(true);
  };

  const handleClickOpenHall = () => {
    setOpenHall(true);
  };

  const handleCloseUnit = () => {
    setOpenUnit(false);
  };

  // unit popup

  const [unitValues, setUnitValues] = useState({
    unitCode: '', unitAc: '', floorLevel: '', unitRemark: '', unitRental: '',
  })
  const handleUnitCodeChange = (e) => {
    setUnitValues({ ...unitValues, unitCode: e.target.value });

  }

  const handleUnitAcChange = (e) => {
    setUnitValues({ ...unitValues, unitAc: e.target.value });
  }

  const handleFloorLevelChange = (e) => {
    setUnitValues({ ...unitValues, floorLevel: e.target.value });
  }

  const handleUnitRemarkChange = (e) => {
    setUnitValues({ ...unitValues, unitRemark: e.target.value });
  }

  const handleUnitRentalChange = (e) => {
    setUnitValues({ ...unitValues, unitRental: e.target.value });
  }


  const [unitRental, setUnitRental] = useState({
    district: '', weekDays: '', weekEnds: ''
  });

  const handleUnitDistrict = (e) => {
    setUnitRental({ ...unitRental, district: e.target.value });
  }

  const handleUnitWeedays = (e) => {
    setUnitRental({ ...unitRental, weekDays: e.target.value });
  }

  const handleUnitWeekends = (e) => {
    setUnitRental({ ...unitRental, weekEnds: e.target.value });
  }



  const [unitRentalArray, setUnitRentalArray] = useState([]);
  const handleUnitAdd = () => {
    if (unitRental.district === '' || unitRental.weekDays === '' || unitRental.weekEnds === '') return;
    setUnitRentalArray([...unitRentalArray, unitRental]);

  };


  // Hall pop up


  const [hallValues, setHallValues] = useState({
    hallCode: '', hallAc: '', floorLevel: '', hallRemark: '', hallRental: '', hallNoOfAdults: '', hallNoOfChildren: '',
  })
  const handleHallCodeChange = (e) => {
    setHallValues({ ...hallValues, hallCode: e.target.value });

  }

  const handleHallAcChange = (e) => {
    setHallValues({ ...hallValues, hallAc: e.target.value });
  }

  const handleHallFloorChange = (e) => {
    setHallValues({ ...hallValues, floorLevel: e.target.value });
  }

  const handleHallRemarksChange = (e) => {
    setHallValues({ ...hallValues, hallRemark: e.target.value });
  }

  const handleHallRentalChange = (e) => {
    setHallValues({ ...hallValues, hallRental: e.target.value });
  }

  const handleHallNoOfAdultsChange = (e) => {
    setHallValues({ ...hallValues, hallNoOfAdults: e.target.value });
  }

  const handleHallNoOfChildrenChange = (e) => {
    setHallValues({ ...hallValues, hallNoOfChildren: e.target.value });
  }



  const [hallArray, setHallArray] = useState([]);

  const handleSaveHall = () => {
    if (hallValues.hallCode === '' || hallValues.hallAc === '' || hallValues.floorLevel === '' || hallValues.hallRemark === '' || hallValues.hallRental === '') return;
    setHallArray([...hallArray, hallValues]);
    setOpenHall(false);
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
                    {roomArray.length === 0
                      ?
                      <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                        <Typography variant='p' sx={{ color: 'grey' }}>No Rooms Added Yet</Typography>
                      </Box>
                      :
                      roomArray.map((item, index) => {
                        return (
                          <RoomBreakdown key={index} roomCode={item.roomCode} roomAc={item.roomAc} roomType={item.RoomType} noOfBeds={item.NoOfBeds} noOfAdults={item.NoOfAdults} noOfChildren={item.NoOfChildren} roomRemarks={item.roomRemarks} roomRental={item.roomRental} />
                        )
                      })}
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
                    <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpenUnit}>Add Unit</Button>
                  </Box>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box>
                  <fieldset style={{ borderRadius: '8px' }}>
                    <legend>Halls Breakdown</legend>
                    {hallArray.length === 0
                      ?
                      <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                        <Typography variant='p' sx={{ color: 'grey' }}>No Halls Added Yet</Typography>
                      </Box>
                      :
                      hallArray.map((item, index) => {
                        return (
                    
                          <HallBreakDown key={index} hallCode={item.hallCode} hallAc={item.hallAc} floorLevel={item.floorLevel} hallNoOfAdults={item.hallNoOfAdults} hallNoOfChildren={item.hallNoOfChildren} hallRemarks={item.hallRemarks} hallRental={item.hallRental} />
                        )
                      })}

                  </fieldset>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "12px" }}>
                    <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpenHall}>Add Hall</Button>
                  </Box>
                </Box>
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </fieldset>

      {/* Add new room popup */}
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
                <TextField error={error.ctName} required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' onChange={handleRoomCodeChange} helperText={error.ctName ? "Invalid Input" : ''} />
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
                    onChange={handleAcChange}
                  >
                    <MenuItem value={"AC"}>AC</MenuItem>
                    <MenuItem value={"Non-Ac"}>Non-AC</MenuItem>

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
                    onChange={handleRoomTypeChange}
                  >
                    <MenuItem value={"SingleRoom"}>Single Room</MenuItem>
                    <MenuItem value={"DoubleRoom"}>Double Room</MenuItem>
                    <MenuItem value={"TripleRoom"}>Triple Room</MenuItem>

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
                  <Typography variant='p' sx={{ color: 'black' }}>Number Of Adults</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Adults' fullWidth size='small' onChange={handleNoOfAdults} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Number Of Children</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Children' fullWidth size='small' onChange={handleNoOfChildren} helperText={error.ctName ? "Invalid Input" : ''} />
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
                <TextField type='number' error={error.ctName} required id="outlined-required" label="Rental" placeholder='Rental' fullWidth size='small' onChange={handleRentalChange} helperText={error.ctName ? "Invalid Input" : ''} />
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
                    <TextField type='number' id="outlined-required" label="WeekDays" placeholder='WeekDays' size='small' onChange={handleWeekdays} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <TextField type='number' id="outlined-required" label="Weekend" placeholder='Weekend' size='small' onChange={handleWeekends} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <Button variant='contained' size='small' onClick={handleAdd} >Add</Button>


                  </Box>
                </Box>


                {rentalArray.map((item, index) => {
                  return (
                    <Box>
                      <Paper sx={{ display: 'flex', padding: "1.2em 2em", justifyContent: 'space-between', marginBottom: "1em" }}>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>Month</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.district}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>WeekDays</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekDays}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: 'bold' }}>WeekEnd</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekEnds}</Typography>
                        </Box>

                      </Paper>
                    </Box>
                  )

                })}

              </Box>

            </DialogContent>
            <DialogActions>
              <Button variant='contained' onClick={handleSaveRoom}>Save</Button>
              <Button variant='outlined' onClick={handleClose}>Close</Button>
            </DialogActions>

          </form>
        </Dialog>
      </React.Fragment>


      {/* Add new Unit popup */}
      <React.Fragment>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openUnit}
          onClose={handleCloseUnit}

        >
          <DialogTitle>Add New Unit</DialogTitle>
          <form>
            <DialogContent sx={{ maxHeight: "350px" }}>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Unit Code</Typography>
                </Box>
                <TextField required id="outlined-required" placeholder='Enter Unit Code' fullWidth size='small' onChange={handleUnitCodeChange} />
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
                    onChange={handleUnitAcChange}
                  >
                    <MenuItem value={"exclusive"}>AC</MenuItem>
                    <MenuItem value={"nonExclusive"}>Non-AC</MenuItem>

                  </Select>
                </FormControl>
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Floor Level</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='Floor Level' fullWidth size='small' onChange={handleFloorLevelChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>


              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Remark</Typography>
                </Box>
                <TextField error={error.ctName} required id="outlined-required" label="Remark" placeholder='Enter Remark' fullWidth size='small' onChange={handleUnitRemarkChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Rental</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="Rental" placeholder='Rental' fullWidth size='small' onChange={handleUnitRentalChange} helperText={error.ctName ? "Invalid Input" : ''} />
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
                        onChange={handleUnitDistrict}


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
                    <TextField type='number' id="outlined-required" label="WeekDays" placeholder='WeekDays' size='small' onChange={handleUnitWeedays} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <TextField type='number' id="outlined-required" label="Weekend" placeholder='Weekend' size='small' onChange={handleUnitWeekends} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <Button variant='contained' size='small' onClick={handleUnitAdd} >Add</Button>


                  </Box>
                </Box>


                {unitRentalArray.map((item, index) => {
                  return (
                    <Box>
                      <Paper sx={{ display: 'flex', padding: "1.2em 2em", justifyContent: 'space-between', marginBottom: "1em" }}>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>Month</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.district}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>WeekDays</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekDays}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: 'bold' }}>WeekEnd</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekEnds}</Typography>
                        </Box>

                      </Paper>
                    </Box>
                  )

                })}

              </Box>

            </DialogContent>
            <DialogActions>
              <Button variant='contained' onClick={handleCloseUnit}>Save</Button>
              <Button variant='outlined' onClick={handleCloseUnit}>Close</Button>
            </DialogActions>

          </form>
        </Dialog>
      </React.Fragment>

      {/* Add new Hall popup */}
      <React.Fragment>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openHall}
          onClose={handleClose}

        >
          <DialogTitle>Add New Hall</DialogTitle>
          <form>
            <DialogContent sx={{ maxHeight: "350px" }}>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Hall Code</Typography>
                </Box>
                <TextField error={error.ctName} required id="outlined-required" label="Hall Name" placeholder='Hall Name/Code' fullWidth size='small' onChange={handleHallCodeChange} helperText={error.ctName ? "Invalid Input" : ''} />
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
                    onChange={handleHallAcChange}
                  >
                    <MenuItem value={"AC"}>AC</MenuItem>
                    <MenuItem value={"Non-Ac"}>Non-AC</MenuItem>

                  </Select>
                </FormControl>
              </Box>

              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Floor Level</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of beds' fullWidth size='small' onChange={handleHallFloorChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Number Of Adults</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Adults' fullWidth size='small' onChange={handleHallNoOfAdultsChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Number Of Children</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Children' fullWidth size='small' onChange={handleHallNoOfChildrenChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>

              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Remark</Typography>
                </Box>
                <TextField error={error.ctName} required id="outlined-required" label="Remark" placeholder='Enter Remark' fullWidth size='small' onChange={handleHallRemarksChange} helperText={error.ctName ? "Invalid Input" : ''} />
              </Box>
              <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                  <Typography variant='p' sx={{ color: 'black' }}>Rental</Typography>
                </Box>
                <TextField type='number' error={error.ctName} required id="outlined-required" label="Rental" placeholder='Rental' fullWidth size='small' onChange={handleHallRentalChange} helperText={error.ctName ? "Invalid Input" : ''} />
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
                    <TextField type='number' id="outlined-required" label="WeekDays" placeholder='WeekDays' size='small' onChange={handleWeekdays} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <TextField type='number' id="outlined-required" label="Weekend" placeholder='Weekend' size='small' onChange={handleWeekends} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                    <Button variant='contained' size='small' onClick={handleUnitAdd} >Add</Button>


                  </Box>
                </Box>


                {rentalArray.map((item, index) => {
                  return (
                    <Box>
                      <Paper sx={{ display: 'flex', padding: "1.2em 2em", justifyContent: 'space-between', marginBottom: "1em" }}>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>Month</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.district}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>WeekDays</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekDays}</Typography>
                        </Box>
                        <Box>
                          <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: 'bold' }}>WeekEnd</Typography>
                          <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekEnds}</Typography>
                        </Box>

                      </Paper>
                    </Box>
                  )

                })}

              </Box>

            </DialogContent>
            <DialogActions>
              <Button variant='contained' onClick={handleSaveHall}>Save</Button>
              <Button variant='outlined' onClick={handleClose}>Close</Button>
            </DialogActions>

          </form>
        </Dialog>
      </React.Fragment>

    </Box>
  )
}

export default HomeBreakDownView
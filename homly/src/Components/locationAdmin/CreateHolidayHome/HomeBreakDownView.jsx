import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography, Grid } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import EditRoom from './EditHolidayHomes/EditRoom';
import EditUnit from './EditHolidayHomes/EditUnit';
import EditHall from './EditHolidayHomes/EditHall';


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
const HomeBreakDownView = ({ setSubmit, setAllValues, submitClicked }) => {

  const [value, setValue] = useState(0);

  const [roomArray, setRoomArray] = useState([]);
  const [unitArray, setUnitArray] = useState([]);
  const [hallArray, setHallArray] = useState([]);
  const [adultsCount, setAdultsCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [otherCharges, setOtherCharges] = useState();
  const [serviceCharges, setServiceCharges] = useState();
  const [totalRental, setTotalRental] = useState();
  const [facilities, setFacilities] = useState('');
  const [gym, setGym] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [park, setPark] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [pool, setPool] = useState(false);
  const [bar, setBar] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOtherChargesChange = (e) => {
    setOtherCharges(e.target.value);
  }


  const handleServiceChargesChange = (e) => {
    setServiceCharges(e.target.value);
  }

  const handleTotalRentalChange = (e) => {
    setTotalRental(e.target.value);
  }

  const handlefacilityChange = (e) => {
    setFacilities(e.target.value);
  }

  const hangleGymChange = (e) => {
    setGym(e.target.checked);
  }

  const handleKitchenChange = (e) => {
    setKitchen(e.target.checked);
  }

  const handleParkChange = (e) => {

    setPark(e.target.checked);
  }

  const handleWifiChange = (e) => {
    setWifi(e.target.checked);
  }

  const handlePoolChange = (e) => {
    setPool(e.target.checked);
  }

  const handleBarChange = (e) => {
    setBar(e.target.checked);

  }

  useEffect(() => {
    if (totalRental !== undefined && roomArray.length > 0 && unitArray.length > 0) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [totalRental, roomArray, unitArray, setSubmit]);


  useEffect(() => {
    if (submitClicked) {
      const details = { "adultsCount": adultsCount, "childCount": childCount, "otherCharges": otherCharges, "serviceCharges": serviceCharges, "totalRental": totalRental, "facilities": facilities, "gym": gym, "kitchen": kitchen, "park": park, "wifi": wifi, "pool": pool, "bar": bar }
      setAllValues((prev) => {
        return { ...prev, "homeBreakDown": details, "roomArray": roomArray, "unitArray": unitArray, "hallArray": hallArray }
      });
    }
  }, [submitClicked]);




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
              <TextField value={adultsCount} type='number' id="outlined-required" label="Maximum Adults" placeholder='Maximum Adults' fullWidth size='small' />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Maximum Childern</Typography>
              </Box>
              <TextField value={childCount} type='number' id="outlined-required" label="Maximum Children" placeholder='Maximum Children' fullWidth size='small' />
            </Box>
            <FormGroup sx={{ display: 'flex', width: '100%', gap: "0.5em ", marginTop: "1em" }}>
              <Box sx={{ display: "flex", gap: "1em" }}>

                <FormControlLabel control={<Checkbox />} label="Gym" checked={gym} onChange={hangleGymChange} />
                <FormControlLabel control={<Checkbox />} label="Park" checked={park} onChange={handleParkChange} />
                <FormControlLabel control={<Checkbox />} label="Kitchen" checked={kitchen} onChange={handleKitchenChange} />
              </Box>
              <Box sx={{ display: "flex", gap: "1em" }}>
                <FormControlLabel control={<Checkbox />} label="Bar" checked={bar} onChange={handleBarChange} />
                <FormControlLabel control={<Checkbox />} label="Wifi" checked={wifi} onChange={handleWifiChange} />
                <FormControlLabel control={<Checkbox />} label="Pool" checked={pool} onChange={handlePoolChange} />

              </Box>

            </FormGroup>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Other Charges</Typography>
              </Box>
              <TextField value={otherCharges} type='number' id="outlined-required" label="Other Charges" placeholder='Other Charges' fullWidth size='small' onChange={handleOtherChargesChange} />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Service Charges</Typography>
              </Box>
              <TextField value={serviceCharges} type='number' id="outlined-required" label="Service Charges" placeholder='Service Charges' fullWidth size='small' onChange={handleServiceChargesChange} />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Total Rental</Typography>
              </Box>
              <TextField value={totalRental} type='number' id="outlined-required" label="Total Rental" placeholder='Total Rental' fullWidth size='small' required onChange={handleTotalRentalChange} />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography value={facilities} variant='p' sx={{ color: 'black' }}>Enter facilities</Typography>
              </Box>
              <TextField id="outlined-required" label="Facilities" placeholder='Enter Facilities' fullWidth size='small' onChange={handlefacilityChange} />
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

                <EditRoom roomArray={roomArray} setRoomArray={setRoomArray} adultsCount={adultsCount} childCount={childCount} setAdultsCount={setAdultsCount} setChildCount={setChildCount} />


                <EditUnit roomArray={roomArray} setRoomArray={setRoomArray} unitArray={unitArray} setUnitArray={setUnitArray} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <EditHall hallArray={hallArray} setHallArray={setHallArray} />
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </fieldset>





    </Box>
  )
}

export default HomeBreakDownView
import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography, Grid } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import axios from 'axios';
import { useParams } from 'react-router';


import ViewRoom from './ViewRoom';
import ViewUnit from './ViewUnit';
import ViewHall from './ViewHall';



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
const HomeBreakDownViewOnly = ({ setAllValues }) => {

  const { homeId } = useParams();


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

  useEffect(() => {

    console.log(homeId);
    axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/${homeId}`)
      .then((res) => {
        if (Response) {
          const roomDetails = res.data.room;
          console.log("roomdetails", roomDetails);
          setRoomArray(roomDetails);


        } else {
          console.log("No data found");
        }
      })

    axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/${homeId}`)
      .then((res) => {
        if (Response) {
          const unitDetails = res.data.unit;
          setUnitArray(unitDetails);
          console.log(unitDetails);



        } else {
          console.log("No data found");
        }
      })



    axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/${homeId}`)
      .then((res) => {
        if (Response) {
          const hallDetails = res.data.hall;
          console.log(hallDetails);
          setHallArray(hallDetails);


        } else {
          console.log("No data found");
        }
      })


    axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/${homeId}`)
      .then((res) => {
        if (Response) {
          const homeDetails = res.data.homeDetails[0];
          console.log(homeDetails);
          setAdultsCount(homeDetails.MaxNoOfAdults);
          setChildCount(homeDetails.MaxNoOfChildren);
          setOtherCharges(homeDetails.OtherCharge);
          setServiceCharges(homeDetails.ServiceCharge);
          setTotalRental(homeDetails.TotalRental);
          setFacilities(homeDetails.Facilities);
          setGym(homeDetails.Gym);
          setKitchen(homeDetails.Kitchen);
          setPark(homeDetails.Park);
          setWifi(homeDetails.Wifi);
          setPool(homeDetails.Pool);
          setBar(homeDetails.Bar);
        } else {
          console.log("No data found");
        }
      })


  }, [homeId])









  const handleChange = (event, newValue) => {
    setValue(newValue);
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

                <FormControlLabel control={<Checkbox />} label="Gym" checked={gym === "1" ? true : gym === "0" ? false : undefined} />
                <FormControlLabel control={<Checkbox />} label="Park" checked={park === "1" ? true : park === "0" ? false : undefined} />
                <FormControlLabel control={<Checkbox />} label="Kitchen" checked={kitchen === 1 ? true : kitchen === 0 ? false : undefined} />
              </Box>
              <Box sx={{ display: "flex", gap: "1em" }}>
                <FormControlLabel control={<Checkbox />} label="Bar" checked={bar === "1" ? true : bar === "0" ? false : undefined} />
                <FormControlLabel control={<Checkbox />} label="Wifi" checked={wifi === "1" ? true : wifi === "0" ? false : undefined} />
                <FormControlLabel control={<Checkbox />} label="Pool" checked={pool === "1" ? true : pool === "0" ? false : undefined} />

              </Box>

            </FormGroup>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Other Charges</Typography>
              </Box>
              <TextField value={otherCharges} type='number' id="outlined-required" placeholder='Other Charges' fullWidth size='small' />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Service Charges</Typography>
              </Box>
              <TextField value={serviceCharges} type='number' id="outlined-required" placeholder='Service Charges' fullWidth size='small' />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Total Rental</Typography>
              </Box>
              <TextField value={totalRental} type='number' id="outlined-required" placeholder='Total Rental' fullWidth size='small' required />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Enter facilities</Typography>
              </Box>
              <TextField value={facilities} id="outlined-required" placeholder='Enter Facilities' fullWidth size='small' />
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

                <ViewRoom roomArray={roomArray} setRoomArray={setRoomArray} adultsCount={adultsCount} childCount={childCount} setAdultsCount={setAdultsCount} setChildCount={setChildCount} />


                <ViewUnit roomArray={roomArray} setRoomArray={setRoomArray} unitArray={unitArray} setUnitArray={setUnitArray} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <ViewHall hallArray={hallArray} setHallArray={setHallArray} />
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </fieldset>





    </Box>
  )
}

export default HomeBreakDownViewOnly
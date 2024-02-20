import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, TextField, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import EditRoom from './EditRoom';
import EditUnit from './EditUnit';
import EditHall from './EditHall';

import { useParams } from 'react-router-dom';
import axios from 'axios';


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


const EditHolidayHomeBreakdown = ({ roomArray, setRoomArray, unitArray, setUnitArray, hallArray, setHallArray }) => {

    const [value, setValue] = useState(0);

    const [adultsCount, setAdultsCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [otherCharges, setOtherCharges] = useState(0);
    const [serviceCharges, setServiceCharges] = useState(0);
    const [totalRental, setTotalRental] = useState(0);
    const [facilities, setFacilities] = useState('');
    const [gym, setGym] = useState(false);
    const [kitchen, setKitchen] = useState(false);
    const [park, setPark] = useState(false);
    const [wifi, setWifi] = useState(false);



    const { homeId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3002/locationadmin/holidayhome/${homeId}`)
            .then((res) => {
                if (Response) {
                    const homeDetails = res.data.homeDetails;

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



                } else {
                    console.log("No data found");
                }
            })
    }, [])

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






    return (
        <Box>
            <fieldset className='edit_container' style={{ borderRadius: '16px', color: 'grey', padding: '1.2em', paddingBottom: '20px' }}  >
                <legend>ROOM/UNIT/HALL</legend>
                <Grid container spacing={2}>
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
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Other Charges</Typography>
                            </Box>
                            <TextField onChange={handleOtherChargesChange} type='number' id="outlined-required" label="Other Charges" placeholder='Other Charges' fullWidth size='small' value={otherCharges} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Service Charges</Typography>
                            </Box>
                            <TextField onChange={handleServiceChargesChange} type='number' id="outlined-required" label="Service Charges" placeholder='Service Charges' fullWidth size='small' value={serviceCharges} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Total Rental</Typography>
                            </Box>
                            <TextField onchange={handleTotalRentalChange} type='number' id="outlined-required" label="Total Rental" placeholder='Total Rental' fullWidth size='small' required value={totalRental} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                            <hr style={{ height: "0.5px", width: "30%", margin: 0 }} ></hr><Typography variant='p'>Holiday Home Facilities</Typography><hr style={{ height: "0.5px", width: "30%", margin: 0 }}></hr>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <FormGroup sx={{ display: 'flex', width: '100%' }}>
                            <FormControlLabel control={<Checkbox />} label="Gym" checked={gym} onChange={hangleGymChange} />
                            <FormControlLabel control={<Checkbox />} label="Kitchen" checked={kitchen} onChange={handleKitchenChange} />
                            <FormControlLabel control={<Checkbox />} label="Park" checked={park} onChange={handleParkChange} />
                            <FormControlLabel control={<Checkbox />} label="Wifi" checked={wifi} onChange={handleWifiChange} />

                        </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Enter facilities</Typography>
                            </Box>
                            <TextField multiline id="outlined-required" label="Facilities" placeholder='Enter Facilities' fullWidth size='small' value={facilities} onChange={handlefacilityChange} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Room" {...a11yProps(0)} />
                                <Tab label="Unit" {...a11yProps(1)} />
                                <Tab label="Hall" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <EditRoom roomArray={roomArray} setRoomArray={setRoomArray} setAdultsCount={setAdultsCount} setChildCount={setChildCount} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <EditUnit roomArray={roomArray} setRoomArray={setRoomArray} unitArray={unitArray} setUnitArray={setUnitArray} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <EditHall hallArray={hallArray} setHallArray={setHallArray} />
                        </CustomTabPanel>
                    </Box>


                </Grid>
            </fieldset>


        </Box >
    )
}

export default EditHolidayHomeBreakdown
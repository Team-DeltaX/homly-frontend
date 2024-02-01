import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import EditRoom from './EditRoom';
import EditUnit from './EditUnit';
import EditHall from './EditHall';



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


const EditHolidayHomeBreakdown = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [roomArray, setRoomArray] = useState([]);
    const [unitArray, setUnitArray] = useState([]);
    const [hallArray, setHallArray] = useState([]);





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
                            <TextField type='number' id="outlined-required" label="Maximum Adults" placeholder='Maximum Adults' fullWidth size='small' />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Maximum Childern</Typography>
                            </Box>
                            <TextField type='number' id="outlined-required" label="Maximum Children" placeholder='Maximum Children' fullWidth size='small' />
                        </Box>
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
                            <FormControlLabel control={<Checkbox />} label="Free wifi" />
                            <FormControlLabel control={<Checkbox />} label="AC" />
                            <FormControlLabel control={<Checkbox />} label="Parking" />
                            <FormControlLabel control={<Checkbox />} label="Kitchen" />

                        </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Enter facilities</Typography>
                            </Box>
                            <TextField multiline id="outlined-required" label="Facilities" placeholder='Enter Facilities' fullWidth size='small' />
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
                            <EditRoom roomArray={roomArray} setRoomArray={setRoomArray} />
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
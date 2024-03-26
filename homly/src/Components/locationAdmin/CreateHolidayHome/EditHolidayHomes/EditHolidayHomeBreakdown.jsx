import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, TextField, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CancelIcon from '@mui/icons-material/Cancel';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

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


const EditHolidayHomeBreakdown = ({ roomArray, setRoomArray, unitArray, setUnitArray, hallArray, setHallArray, bdValue, setBdValue, adultsCount, setAdultsCount, childCount, setChildCount, settingRoomRentalArray, setSettingRoomRentalArray, roomTypeArray, setRoomTypeArray }) => {

    const [value, setValue] = useState(0);

    const [settingsRoomType, setSettingsRoomType] = useState({ roomType: '', adults: '', children: '' });
    const [settingsRoomRental, setSettingsRoomRental] = useState({ roomType: '', acNonAc: '', rental: '' })

    const [roomTypeAddButton, setRoomTypeAddButton] = useState(true);
    const [roomSettingsRentalAddButton, setRoomSettingsRentalAddButton] = useState(true);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [error, setError] = useState({
        tRental: false, oCharges: false, sCharges: false
    });



    const handleTotalRentalChange = (e) => {

        const positive_regex = /^\d*\.?\d+$/;
        setBdValue({ ...bdValue, totalRental: e.target.value });

        // if (e.target.value.length > 0) {
        //   if (!positive_regex.test(e.target.value)) {
        //     setError({ ...error, tRental: true });
        //   } else {
        //     setError({ ...error, tRental: false });
        //   }
        // }
    }

    const handlefacilityChange = (e) => {
        setBdValue({ ...bdValue, facilities: e.target.value });
    }

    const hangleGymChange = (e) => {
        setBdValue({ ...bdValue, gym: e.target.value });
    }

    const handleKitchenChange = (e) => {
        setBdValue({ ...bdValue, kitchen: e.target.value });
    }

    const handleParkChange = (e) => {

        setBdValue({ ...bdValue, park: e.target.value });
    }

    const handleWifiChange = (e) => {
        setBdValue({ ...bdValue, wifi: e.target.value });
    }

    const handlePoolChange = (e) => {
        setBdValue({ ...bdValue, pool: e.target.value });
    }

    const handleBarChange = (e) => {
        setBdValue({ ...bdValue, bar: e.target.value });

    }

    const handleSettingsTypeChange = (e) => {
        setSettingsRoomType({ ...settingsRoomType, roomType: e.target.value });

    }

    const handleSettingsAdultsChange = (e) => {
        const inputValue = e.target.value;

        // Check if the input value is a positive integer
        if (inputValue === '' || /^\d+$/.test(inputValue)) {
            setSettingsRoomType({ ...settingsRoomType, adults: inputValue })

        }

    }

    const handleSettingsChildrenChange = (e) => {
        const inputValue = e.target.value;

        // Check if the input value is a positive integer
        if (inputValue === '' || /^\d+$/.test(inputValue)) {
            setSettingsRoomType({ ...settingsRoomType, children: inputValue })

        }
    }



    const handleAddRoomTypes = () => {
        let flag = true;
        if (roomTypeArray.length === 0) {
            roomTypeArray.push(settingsRoomType);
            console.log("array", roomTypeArray);
            setSettingsRoomType({ roomType: '', adults: '', children: '' });
        }
        else {
            for (let i = 0; i < roomTypeArray.length; i++) {
                if (roomTypeArray[i].roomType === settingsRoomType.roomType) {
                    flag = false;
                }
            }
            if (flag) {
                roomTypeArray.push(settingsRoomType);
                console.log("array", roomTypeArray);
                setSettingsRoomType({ roomType: '', adults: '', children: '' });

            } else {
                setTypeExistAlert(true)
                setSettingsRoomType({ roomType: '', adults: '', children: '' });
            }
        }


    }


    useEffect(() => {
        if (settingsRoomType.roomType === '' || settingsRoomType.adults === '' || settingsRoomType.children === '') {
            setRoomTypeAddButton(true);
        } else {
            setRoomTypeAddButton(false);
        }
    }, [settingsRoomType])


    const handleDeleteRoomTypes = (ind) => {

        const tempArray = roomTypeArray.filter((item, index) => index !== ind)
        setRoomTypeArray(tempArray)

    }

    const handleSettingsRentalTypeChange = (e) => {
        setSettingsRoomRental({ ...settingsRoomRental, roomType: e.target.value })

    }
    const handleSettingsRentalAcNonAcChange = (e) => {
        setSettingsRoomRental({ ...settingsRoomRental, acNonAc: e.target.value })
    }
    const handleSettingsRentalRentalChange = (e) => {
        const inputValue = e.target.value;

        // Check if the input value is a positive integer
        if (inputValue === '' || /^\d+$/.test(inputValue)) {

            setSettingsRoomRental({ ...settingsRoomRental, rental: inputValue })

        }
    }


    const handleAddRoomRentalSettings = () => {
        let flag = true;
        if (settingRoomRentalArray.length === 0) {
            settingRoomRentalArray.push(settingsRoomRental);
            console.log("array", settingRoomRentalArray);
            setSettingsRoomRental({ roomType: '', acNonAc: '', rental: '' });
        }
        else {
            for (let i = 0; i < settingRoomRentalArray.length; i++) {
                if (settingRoomRentalArray[i].roomType === settingsRoomRental.roomType && settingRoomRentalArray[i].acNonAc === settingsRoomRental.acNonAc) {
                    flag = false;
                }
            }
            if (flag) {
                settingRoomRentalArray.push(settingsRoomRental);
                console.log("array", settingRoomRentalArray);
                setSettingsRoomRental({ roomType: '', acNonAc: '', rental: '' });

            } else {
                setTypeExistAlert(true)
                setSettingsRoomRental({ roomType: '', acNonAc: '', rental: '' });
            }

        }





    }

    useEffect(() => {
        if (settingsRoomRental.roomType === '' || settingsRoomRental.acNonAc === '' || settingsRoomRental.rental === '') {
            setRoomSettingsRentalAddButton(true);
        }
        else {
            setRoomSettingsRentalAddButton(false);
        }
    }, [settingsRoomRental])


    const handleDeleteRoomRentalSettings = (ind) => {

        const tempArray = settingRoomRentalArray.filter((item, index) => index !== ind)
        setSettingRoomRentalArray(tempArray)

    }


    //   useEffect(() => {
    //     const areErrorsEmpty =
    //       !error.oCharges &&
    //       !error.sCharges &&
    //       !error.tRental

    //     if (areErrorsEmpty) {
    //       // setHomeBreakDownError(true)
    //     }

    //     if (bdValue.totalRental !== undefined && roomArray.length > 0 && unitArray.length > 0 && areErrorsEmpty) {
    //       setSubmit(true);
    //     } else {
    //       setSubmit(false);
    //     }
    //   }, [bdValue.totalRental, roomArray, unitArray, setSubmit, error]);




    const [typeExistAlert, setTypeExistAlert] = useState(false);

    const handleTypeExistAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setTypeExistAlert(false);
    };







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
                                <Typography variant='p' sx={{ color: 'black' }}>Total Rental</Typography>
                            </Box>
                            <TextField onchange={handleTotalRentalChange} type='number' id="outlined-required" label="Total Rental" placeholder='Total Rental' fullWidth size='small' required value={bdValue.totalRental} />
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
                            <Box sx={{ display: "flex", gap: "1em" }}>
                                <FormControlLabel control={<Checkbox />} label="Gym" checked={bdValue.gym} onChange={hangleGymChange} />
                                <FormControlLabel control={<Checkbox />} label="Park" checked={bdValue.park} onChange={handleParkChange} />
                                <FormControlLabel control={<Checkbox />} label="Kitchen" checked={bdValue.kitchen} onChange={handleKitchenChange} />
                            </Box>
                            <Box sx={{ display: "flex", gap: "1em" }}>
                                <FormControlLabel control={<Checkbox />} label="Bar" checked={bdValue.bar} onChange={handleBarChange} />
                                <FormControlLabel control={<Checkbox />} label="Wifi" checked={bdValue.wifi} onChange={handleWifiChange} />
                                <FormControlLabel control={<Checkbox />} label="Pool" checked={bdValue.pool} onChange={handlePoolChange} />
                            </Box>

                        </FormGroup>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Enter facilities</Typography>
                            </Box>
                            <TextField multiline id="outlined-required" label="Facilities" placeholder='Enter Facilities' fullWidth size='small' value={bdValue.facilities} onChange={handlefacilityChange} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ marginTop: "15px", marginBottom: "15px" }}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'grey' }}>Room Type Settings</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box sx={{ display: "flex", gap: '1em', alignItems: 'center' }}>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8em', marginBottom: '12px' }}>
                                <Box sx={{ maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Type</Typography>
                                </Box>
                                <FormControl sx={{ width: '100px', }}>
                                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                    <Select
                                        required
                                        xs={{ width: "5%" }}
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={settingsRoomType.roomType}
                                        label="Age"
                                        onChange={handleSettingsTypeChange}
                                    >
                                        <MenuItem value={"SingleRoom"}>Single Room</MenuItem>
                                        <MenuItem value={"DoubleRoom"}>Double Room</MenuItem>
                                        <MenuItem value={"TripleRoom"}>Triple Room</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{}} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Adults</Typography>
                                </Box>
                                <TextField type='text' error={error.ctName} required id="outlined-required" label="" sx={{ width: "75px", }} size="small" onChange={handleSettingsAdultsChange} value={settingsRoomType.adults} inputProps={{ pattern: "\\d*", inputMode: "numeric" }} />
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ width: "50px" }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Children</Typography>
                                </Box>
                                <TextField type='text' error={error.ctName} required id="outlined-required" label="" size='small' sx={{ width: "75px" }} onChange={handleSettingsChildrenChange} value={settingsRoomType.children} inputProps={{ pattern: "\\d*", inputMode: "numeric" }} />
                            </Box>
                            <Box sx={{ display: "flex", marginBottom: "12px" }}>
                                <Button variant='contained' size={"small"} onClick={handleAddRoomTypes} disabled={roomTypeAddButton}>
                                    add
                                </Button>

                            </Box>


                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} display={'flex'} flexWrap={'wrap'}>

                        {roomTypeArray.length === 0
                            ?
                            ""
                            :
                            roomTypeArray.map((item, index) => {
                                return (
                                    <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", backgroundColor: "#e3e3e3", width: "300px", padding: "0.3em", borderRadius: "10px", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", marginBottom: "12px", marginLeft: "25px" }} >
                                        <Box sx={{ display: 'flex', gap: '1.5em' }}>

                                            <Box sx={{ width: "100px" }}>
                                                <Typography variant='p' >{item.roomType}</Typography>
                                            </Box>
                                            <Box sx={{ width: "60px" }}>
                                                <Typography variant='p'>A : {item.adults}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant='p'>C : {item.children}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ justifySelf: "flex-end" }}>
                                            <CancelIcon sx={{ cursor: 'pointer', color: 'black' }} onClick={() => handleDeleteRoomTypes(index)} />

                                        </Box>
                                    </Box>

                                )
                            })
                        }

                    </Grid>

                </Grid>

                <Grid container spacing={3} sx={{ marginTop: "15px", marginBottom: "15px" }}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'grey' }}>Room Rental Settings</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box sx={{ display: "flex", gap: '1em', alignItems: 'center' }}>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8em', marginBottom: '12px' }}>
                                <Box sx={{ maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Type</Typography>
                                </Box>
                                <FormControl sx={{ width: '100px', }}>
                                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                    <Select
                                        required
                                        xs={{ width: "5%" }}
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={settingsRoomRental.roomType}
                                        label="Age"
                                        onChange={handleSettingsRentalTypeChange}
                                    >
                                        <MenuItem value={"SingleRoom"}>Single Room</MenuItem>
                                        <MenuItem value={"DoubleRoom"}>Double Room</MenuItem>
                                        <MenuItem value={"TripleRoom"}>Triple Room</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>

                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>AC/Non-AC</Typography>
                                </Box>

                                <FormControl sx={{ width: '100px' }}>
                                    <InputLabel id="demo-simple-select-label">select</InputLabel>
                                    <Select
                                        required
                                        xs={{ width: "75px  " }}
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={settingsRoomRental.acNonAc}
                                        label="Age"
                                        onChange={handleSettingsRentalAcNonAcChange}
                                    >
                                        <MenuItem value={"AC"}>AC</MenuItem>
                                        <MenuItem value={"Non-AC"}>Non-AC</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>

                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ width: "50px" }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Rental</Typography>
                                </Box>
                                <TextField type='text' error={error.ctName} required id="outlined-required" label="" size='small' sx={{ width: "75px" }} onChange={handleSettingsRentalRentalChange} value={settingsRoomRental.rental} inputProps={{ pattern: "\\d*", inputMode: "numeric" }} />
                            </Box>
                            <Box sx={{ display: "flex", marginBottom: "12px" }}>
                                <Button variant='contained' size={"small"} onClick={handleAddRoomRentalSettings} disabled={roomSettingsRentalAddButton}>
                                    add
                                </Button>

                            </Box>


                        </Box>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} display={'flex'} flexWrap={'wrap'}>

                        {settingRoomRentalArray.length === 0
                            ?
                            ""
                            :
                            settingRoomRentalArray.map((item, index) => {
                                return (
                                    <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", backgroundColor: "#e3e3e3", width: "300px", padding: "0.3em", borderRadius: "10px", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", marginBottom: "12px", marginLeft: "25px" }} >
                                        <Box sx={{ display: 'flex', gap: '1.5em' }}>
                                            <Box sx={{ width: "100px" }}>
                                                <Typography variant='p' >{item.roomType}</Typography>
                                            </Box>
                                            <Box sx={{ width: "60px" }}>
                                                <Typography variant='p'>{item.acNonAc}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant='p'>{item.rental}</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <CancelIcon sx={{ cursor: 'pointer', color: 'black' }} onClick={() => handleDeleteRoomRentalSettings(index)} />

                                        </Box>
                                    </Box>

                                )
                            })
                        }

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
                            <EditRoom roomArray={roomArray} setRoomArray={setRoomArray} setAdultsCount={setAdultsCount} setChildCount={setChildCount} roomTypeArray={roomTypeArray} settingRoomRentalArray={settingRoomRentalArray} />
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
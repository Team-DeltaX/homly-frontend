

import './style.css';
import React, { useState, useEffect } from 'react'


import { Grid, ThemeProvider, Container, Box, Typography, Button } from '@mui/material';
import theme from '../../HomlyTheme';

import SideNavbar from '../../Components/locationAdmin/SideNavbar'
import PageTitle from '../../Components/locationAdmin/PageTitle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EditHolidayHomeDetails from '../../Components/locationAdmin/CreateHolidayHome/EditHolidayHomes/EditHolidayHomeDetails';
import EditCaretakerDetails from '../../Components/locationAdmin/CreateHolidayHome/EditHolidayHomes/EditCaretakerDetails';
import EditHolidayHomeBreakdown from '../../Components/locationAdmin/CreateHolidayHome/EditHolidayHomes/EditHolidayHomeBreakdown';

import axios from 'axios';
import { useParams } from 'react-router-dom';
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



const HolidayHomeEdit = () => {

    const [showNav, setShowNav] = useState('nav_grid_deactive');
    const [value, setValue] = useState(0);

    const [roomArray, setRoomArray] = useState([]);
    const [unitArray, setUnitArray] = useState([]);
    const [hallArray, setHallArray] = useState([]);



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNextToUnit = () => {
        setValue(1);
    }

    const handleNextToHall = () => {
        setValue(2);
    }

    const { homeId } = useParams();



    useEffect(() => {

        axios.get(`http://localhost:3002/locationadmin/holidayhome/${homeId}`)
            .then((res) => {
                if (Response) {
                    const roomDetails = res.data.room;
                    setRoomArray(roomDetails);

                } else {
                    console.log("No data found");
                }
            })
        axios.get(`http://localhost:3002/locationadmin/holidayhome/${homeId}`)
            .then((res) => {
                if (Response) {
                    const unitDetails = res.data.unit;
                    setUnitArray(unitDetails);



                } else {
                    console.log("No data found");
                }
            })



        axios.get(`http://localhost:3002/locationadmin/holidayhome/${homeId}`)
            .then((res) => {
                if (Response) {
                    const hallDetails = res.data.hall;
                    setHallArray(hallDetails);


                } else {
                    console.log("No data found");
                }
            })


    }, [homeId])


    return (
        <ThemeProvider theme={theme}>
            <Box className="main_container" sx={{ width: "100%", backgroundColor: 'primary.main', overflow: 'hidden' }}>
                <Container maxWidth="xl" style={{ padding: 0 }}>
                    <Grid container sx={{ position: 'relative' }}>
                        <Grid className={showNav} xs={3} sx={{ backgroundColor: "primary.main", height: "100vh" }}>
                            <SideNavbar setShowNav={setShowNav}></SideNavbar>
                        </Grid>
                        <Grid className='container_grid' xs={9} sx={{ backgroundColor: 'white', borderTopLeftRadius: '20px', padding: '10px 30px', height: '100vh', position: 'relative' }}>
                            <Box sx={{ height: "100%" }}>
                                <PageTitle setShowNav={setShowNav} title={'Manage Holiday Home'} bell={true} />
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="Edit HolidayHome Details" {...a11yProps(0)} />
                                            <Tab label="Edit Room/Unit Details" {...a11yProps(1)} />
                                            <Tab label="Edit Caretaker Details" {...a11yProps(2)} />
                                        </Tabs>
                                    </Box>
                                    <CustomTabPanel value={value} index={0}>
                                        <EditHolidayHomeDetails />
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: "1.5em" }}>
                                            <Button variant="contained" sx={{ marginTop: '1em' }} onClick={handleNextToUnit}>Next</Button>
                                        </Box>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={1}>
                                        <EditHolidayHomeBreakdown roomArray={roomArray} setRoomArray={setRoomArray} unitArray={unitArray} setUnitArray={setUnitArray} hallArray={hallArray} setHallArray={setHallArray} />
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: "1.5em" }}>
                                            <Button variant="contained" sx={{ marginTop: '1em' }} onClick={handleNextToHall}>Next</Button>
                                        </Box>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={2}>
                                        <EditCaretakerDetails />
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: "1.5em" }}>
                                            <Button variant="contained" sx={{ marginTop: '1em' }} onClick={handleNextToUnit}>Get Approval</Button>
                                        </Box>

                                    </CustomTabPanel>
                                </Box>


                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default HolidayHomeEdit
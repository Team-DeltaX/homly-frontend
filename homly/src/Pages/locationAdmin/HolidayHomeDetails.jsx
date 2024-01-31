
import './style.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from 'react'

import Box from '@mui/material/Box';
import { Grid, ThemeProvider, Container, Typography } from '@mui/material';
import theme from '../../HomlyTheme';

import SideNavbar from '../../Components/locationAdmin/SideNavbar'
import PageTitle from '../../Components/locationAdmin/PageTitle';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




const HolidayHomeDetails = () => {
    const localizer = momentLocalizer(moment)

    const [showNav, setShowNav] = useState('nav_grid_deactive')

    const myEventsList = [
        { start: new Date(), end: new Date(), title: "special event" },
        { start: new Date(), end: new Date(), title: "special event" },
        { start: new Date(), end: new Date(), title: "special event" },
        { start: new Date(), end: new Date(), title: "special event" },
        { start: moment("2024-02-01T14:00:00").toDate(), end: moment("2024-02-01T14:00:00").toDate(), title: "special event" },

    ];
    const CustomToolbar = (toolbar) => {
        const goToBack = () => {
            toolbar.onNavigate('PREV');
        };

        const goToNext = () => {
            toolbar.onNavigate('NEXT');
        };

        const goToToday = () => {
            toolbar.onNavigate('TODAY');
        };

        return (
            <div className="rbc-toolbar">
                <ArrowBackIosIcon onClick={goToBack} sx={{ cursor: "pointer" }} />
                <Typography sx={{ color: 'Gray', fontSize: 18 }} className="rbc-toolbar-label">
                    {toolbar.label}
                </Typography>
                <hr />
                <ArrowForwardIosIcon onClick={goToNext} sx={{ cursor: "pointer" }} />
            </div>
        );
    };


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
                                <PageTitle setShowNav={setShowNav} title={'Holiday Homes Details'} bell={true} />
                                <Box>

                                </Box>
                                <Calendar
                                    localizer={localizer}
                                    events={myEventsList}
                                    views={{ month: true }}
                                    style={{ height: 500 }}
                                    components={{
                                        toolbar: CustomToolbar,
                                    }}
                                    toolbar={true}
                                />


                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default HolidayHomeDetails

import './style.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useRef, useEffect } from 'react'

import Box from '@mui/material/Box';
import { Grid, ThemeProvider, Container, Typography, TextField, Button } from '@mui/material';
import theme from '../../HomlyTheme';

import SideNavbar from '../../Components/locationAdmin/SideNavbar'
import PageTitle from '../../Components/locationAdmin/PageTitle';
import CustomSelect from '../../Components/locationAdmin/CustomSelect/CustomSelect';
import CalendarDetails from '../../Components/locationAdmin/CreateHolidayHome/popups/CalendarDetails';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Select from 'react-select'
import axios from 'axios';
import dayjs from 'dayjs';
// dayjs.extend(require('dayjs/plugin/add'));
// var add = require('dayjs/plugin/add')
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)
// dayjs.extend(add)






const HolidayHomeDetails = () => {
    const localizer = momentLocalizer(moment)
    const calendarRef = useRef();

    const [showNav, setShowNav] = useState('nav_grid_deactive')
    const [holidayHomes, setHolidayHomes] = useState([]);

    const [selectedHolidayHome, setSelectedHolidayHome] = useState('');
    const [names, setNames] = useState([]);

    const [displayedRange, setDisplayedRange] = useState({
        start: moment().startOf('month'),
        end: moment().endOf('month'),
    });


    const [myEventsList, setMyEventsList] = useState([]);
    const [event, setEvent] = useState({
        start: "", end: "", title: ""
    })


    const CustomToolbar = (toolbar) => {
        const goToBack = () => {
            toolbar.onNavigate('PREV');
        };

        const goToNext = () => {
            toolbar.onNavigate('NEXT');
        };

        const goToToday = () => {
            toolbar.onNavigate('');
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

    //Holidayhomes list
    useEffect(() => {
        axios.get('http://localhost:3002/admin/auth/locationadmin/holidayhome/names')
            .then((res) => {
                const data = res.data.names;

                console.log(data);
                setHolidayHomes(data)
                data.forEach((item) => {
                    names.push(item.name);
                })
                // remove duplicates in name array
                const uniqueNames = [...new Set(names)];
                setNames(uniqueNames);


            })
            .catch((err) => {
                console.log(err);
            })


    }, [])





    const handleSearch = () => {
        const homeName = selectedHolidayHome.value;
        console.log("homeName", homeName)
        let id;

        holidayHomes.forEach((item) => {

            if (item.name === homeName) {

                id = item.id;
            }
        }
        )

        console.log("idhol", id)

        axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/reservation/${id}`)
            .then((res) => {

                const data = res.data.reservations;
                console.log("get", data);
                const events = data.map((item) => {
                    return {
                        start: dayjs(item.CheckinDate).format('YYYY-MM-DD'),
                        // end: dayjs(item.reservation.CheckoutDate).format('YYYY-MM-DD'),
                        end: dayjs(item.CheckoutDate).add(1, 'day').format('YYYY-MM-DD'),
                        title: item.ReservationId
                    }
                })
                setMyEventsList(events);
                console.log(events);
            })
            .catch((err) => {
                console.log(err);
            })


        console.log("myEventlist", myEventsList)






    };




    const handleClear = () => {
        setSelectedHolidayHome('');
    }

    // popup
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState('');
    const [reservationIds, setReservationIds] = useState([])
    const [rooms, setRooms] = useState([])


    const handleClickOpen = (event) => {

        const selectedDate = moment(event.start);
        console.log(selectedDate);
        const newDate = selectedDate.format('YYYY-MM-DD');
        console.log(newDate)
        setReservationIds([])
        myEventsList.map((item) => {
            console.log("item", item.start)
            if (dayjs(newDate).isBetween(item.start, item.end, 'day', '[)')) {
                // setOpen(true);
                // setDate(newDate);
                console.log(newDate, item.title)
                setReservationIds(prev => [...prev, item.title])
            }

        })

        setDate(newDate);
        setOpen(true);
    };


    useEffect(() => {
        if (reservationIds.length > 0) {
            axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/reserved/`, { params: reservationIds })
                .then((response) => {
                    const data = response.data;
                    setRooms(data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [reservationIds]);

    const handleClose = (value) => {
        setOpen(false);

    };

    const changeCalendarManually = (newDate) => {
        const startOfMonth = moment(newDate).startOf('month');
        const endOfMonth = moment(newDate).endOf('month');
        setDisplayedRange({
            start: startOfMonth,
            end: endOfMonth,
        });
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
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2em', marginBottom: "2em" }}>
                                    <Box>
                                        <Select
                                            sx={{ backgroundColor: "white", opacity: "1", zIndex: "1000", width: "200px" }}
                                            className="basic-single"
                                            classNames="select_editholidayhome"
                                            classNamePrefix={"Holiday Home"}
                                            isSearchable={true}
                                            name="color"

                                            options={names.map((item) => {
                                                return { value: item, label: item.toUpperCase() }
                                            })}
                                            value={selectedHolidayHome}
                                            onChange={(value) => setSelectedHolidayHome(value)}
                                        />

                                    </Box>


                                    <Box sx={{ display: 'flex', gap: "1em" }}>
                                        <Button variant="contained" sx={{ backgroundColor: "primary.main", textTransform: "capitalize", fontWeight: "bold", color: "white" }}><Typography sx={{ fontFamily: "sans-serif" }} variant='p' onClick={handleSearch}>Search</Typography> </Button>
                                        <Button variant="outlined" sx={{ textTransform: "capitalize", fontWeight: "bold", color: "primary.main" }}><Typography sx={{ fontFamily: "sans-serif" }} variant='p' onClick={handleClear}>Cancel</Typography> </Button>
                                    </Box>

                                </Box>
                                <Box sx={{ width: "90%", height: '430px', margin: '0 auto', zIndex: -1 }}>

                                    <Calendar
                                        localizer={localizer}
                                        events={myEventsList}
                                        views={{ month: true }}
                                        components={{
                                            toolbar: CustomToolbar,
                                        }}
                                        toolbar={true}
                                        ref={calendarRef}
                                        onSelectSlot={handleClickOpen}
                                        selectable
                                        startAccessor={(event) => moment(event.start)}
                                        endAccessor={(event) => moment(event.end)}
                                        defaultDate={displayedRange.start.startOf('month')}

                                    />
                                </Box>

                                <CalendarDetails open={open} handleClose={handleClose} date={date} rooms={rooms} />




                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default HolidayHomeDetails
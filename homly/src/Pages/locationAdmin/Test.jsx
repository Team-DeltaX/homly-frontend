import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, ThemeProvider, Container, Typography, TextField, Button } from '@mui/material';
import theme from '../../HomlyTheme';
import SideNavbar from '../../Components/locationAdmin/SideNavbar';
import PageTitle from '../../Components/locationAdmin/PageTitle';
import CustomSelect from '../../Components/locationAdmin/CustomSelect/CustomSelect';
import DistrictSelectCom from '...'; // Import your DistrictSelectCom component
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HolidayHomeDetails = () => {
  const localizer = momentLocalizer(moment);
  const [showNav, setShowNav] = useState('nav_grid_deactive');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const myEventsList = [
    // Your events data
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
        <ArrowBackIosIcon onClick={goToBack} sx={{ cursor: 'pointer' }} />
        <Typography sx={{ color: 'Gray', fontSize: 18 }} className="rbc-toolbar-label">
          {toolbar.label}
        </Typography>
        <hr />
        <ArrowForwardIosIcon onClick={goToNext} sx={{ cursor: 'pointer' }} />
      </div>
    );
  };

  const handleSearch = () => {
    // Construct a new date based on the selected year and month
    const newDate = moment(`${selectedYear}-${selectedMonth}-01T00:00:00`).toDate();
    // Set the new date as the view
    calendarRef.current.getApi().gotoDate(newDate);
  };

  const holidayHomes = [
    'holidayhome1',
    'holidayhome2',
    'holidayhome3',
    'holidayhome4',
    'nipunResort',
    'holidayhome6',
  ];

  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const calendarRef = React.createRef();

  return (
    <ThemeProvider theme={theme}>
      <Box className="main_container" sx={{ width: '100%', backgroundColor: 'primary.main', overflow: 'hidden' }}>
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Grid container sx={{ position: 'relative' }}>
            <Grid className={showNav} xs={3} sx={{ backgroundColor: 'primary.main', height: '100vh' }}>
              <SideNavbar setShowNav={setShowNav}></SideNavbar>
            </Grid>
            <Grid
              className="container_grid"
              xs={9}
              sx={{ backgroundColor: 'white', borderTopLeftRadius: '20px', padding: '10px 30px', height: '100vh', position: 'relative' }}
            >
              <Box sx={{ height: '100%' }}>
                <PageTitle setShowNav={setShowNav} title={'Holiday Homes Details'} bell={true} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2em', marginBottom: '2em' }}>
                  <Box>
                    <CustomSelect title={'Holiday Home'} data={holidayHomes} />
                  </Box>
                  <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em' }}>
                    <TextField
                      id="outlined-required"
                      label="Year"
                      placeholder="Year"
                      size="small"
                      onChange={(e) => setSelectedYear(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <CustomSelect title={'Month'} data={monthList} onChange={(value) => setSelectedMonth(value)} />
                  </Box>
                  <Box sx={{ display: 'flex', gap: '1em' }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: 'primary.main', textTransform: 'capitalize', fontWeight: 'bold', color: 'white' }}
                      onClick={handleSearch}
                    >
                      <Typography sx={{ fontFamily: 'sans-serif' }} variant="p">
                        Search
                      </Typography>{' '}
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: 'primary.main' }}>
                      <Typography sx={{ fontFamily: 'sans-serif' }} variant="p">
                        Cancel
                      </Typography>{' '}
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: '90%', height: '430px', margin: '0 auto' }}>
                  <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    views={{ month: true }}
                    components={{
                      toolbar: CustomToolbar,
                    }}
                    toolbar={true}
                    ref={calendarRef}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HolidayHomeDetails;

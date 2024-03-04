import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography, Grid } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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
const CreatePageHomeBreakDownView = ({ setSubmit, setAllValues, submitClicked, setHomeBreakDownError, bdValue, setBdValue, roomArray, setRoomArray, unitArray, setUnitArray, hallArray, setHallArray }) => {

  const [value, setValue] = useState(0);

  // const [roomArray, setRoomArray] = useState([]);
  // const [unitArray, setUnitArray] = useState([]);
  // const [hallArray, setHallArray] = useState([]);

  // const [adultsCount, setAdultsCount] = useState(0);
  // const [childCount, setChildCount] = useState(0);
  // const [otherCharges, setOtherCharges] = useState();
  // const [serviceCharges, setServiceCharges] = useState();
  // const [totalRental, setTotalRental] = useState();
  // const [facilities, setFacilities] = useState('');
  // const [gym, setGym] = useState(false);
  // const [kitchen, setKitchen] = useState(false);
  // const [park, setPark] = useState(false);
  // const [wifi, setWifi] = useState(false);
  // const [pool, setPool] = useState(false);
  // const [bar, setBar] = useState(false);

  // const [bdValue, setBdValue] = useState({
  //   adultsCount: 0,
  //   childCount: 0,
  //   otherCharges: "",
  //   serviceCharges: "",
  //   totalRental: "",
  //   facilities: "",
  //   gym: false,
  //   kitchen: false,
  //   park: false,
  //   wifi: false,
  //   pool: false,
  //   bar: false

  // })

  const [error, setError] = useState({
    tRental: false, oCharges: false, sCharges: false
  });

  console.log("break", error)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOtherChargesChange = (e) => {
    const positive_regex = /^\d*\.?\d+/;
    if (e.target.value.length > 0) {
      if (!positive_regex.test(e.target.value)) {
        setError({ ...error, oCharges: true });
      } else {
        setBdValue({ ...bdValue, otherCharges: e.target.value });
        setError({ ...error, oCharges: false });
      }
    }
  }


  const handleServiceChargesChange = (e) => {

    const positive_regex = /^\d*\.?\d+$/;

    if (e.target.value.length > 0) {
      if (!positive_regex.test(e.target.value)) {
        setError({ ...error, sCharges: true });
      } else {
        setBdValue({ ...bdValue, serviceCharges: e.target.value });
        setError({ ...error, sCharges: false });
      }
    }
  }

  const handleTotalRentalChange = (e) => {

    const positive_regex = /^\d*\.?\d+$/;

    if (e.target.value.length > 0) {
      if (!positive_regex.test(e.target.value)) {
        setError({ ...error, tRental: true });
      } else {
        setBdValue({ ...bdValue, totalRental: e.target.value });
        setError({ ...error, tRental: false });
      }
    }
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

  useEffect(() => {
    const areErrorsEmpty =
      !error.oCharges &&
      !error.sCharges &&
      !error.tRental

    if (areErrorsEmpty) {
      // setHomeBreakDownError(true)
    }

    if (bdValue.totalRental !== undefined && roomArray.length > 0 && unitArray.length > 0 && areErrorsEmpty) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [bdValue.totalRental, roomArray, unitArray, setSubmit, error]);


  // useEffect(() => {
  //   if (submitClicked) {
  //     const details = { "adultsCount": adultsCount, "childCount": childCount, "otherCharges": otherCharges, "serviceCharges": serviceCharges, "totalRental": totalRental, "facilities": facilities, "gym": gym, "kitchen": kitchen, "park": park, "wifi": wifi, "pool": pool, "bar": bar }
  //     setAllValues((prev) => {
  //       return { ...prev, "homeBreakDown": details, "roomArray": roomArray, "unitArray": unitArray, "hallArray": hallArray }
  //     });
  //   }
  // }, [submitClicked]);




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
              <TextField value={bdValue.adultsCount} type='number' id="outlined-required" label="Maximum Adults" placeholder='Maximum Adults' fullWidth size='small' />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Maximum Childern</Typography>
              </Box>
              <TextField value={bdValue.childCount} type='number' id="outlined-required" label="Maximum Children" placeholder='Maximum Children' fullWidth size='small' />
            </Box>
            <FormGroup sx={{ display: 'flex', width: '100%', gap: "0.5em ", marginTop: "1em" }}>
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
                <Typography variant='p' sx={{ color: 'black' }}>Other Charges</Typography>
              </Box>
              <TextField error={error.oCharges} value={bdValue.otherCharges} type='number' id="outlined-required" label="Other Charges" placeholder='Other Charges' fullWidth size='small' onChange={handleOtherChargesChange} helperText={error.oCharges ? "Invalid Input" : " "} />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Service Charges</Typography>
              </Box>
              <TextField error={error.sCharges} value={bdValue.serviceCharges} type='number' id="outlined-required" label="Service Charges" placeholder='Service Charges' fullWidth size='small' onChange={handleServiceChargesChange} helperText={error.sCharges ? "Invalid Input" : " "} />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography variant='p' sx={{ color: 'black' }}>Total Rental</Typography>
              </Box>
              <TextField error={error.tRental} value={bdValue.totalRental} type='number' id="outlined-required" label="Total Rental" placeholder='Total Rental' fullWidth size='small' required onChange={handleTotalRentalChange} helperText={error.tRental ? "Invalid Input" : " "} />
            </Box>
            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
              <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                <Typography value={bdValue.facilities} variant='p' sx={{ color: 'black' }}>Enter facilities</Typography>
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
                <EditRoom
                  roomArray={roomArray}
                  setRoomArray={setRoomArray}
                  adultsCount={bdValue.adultsCount}
                  childCount={bdValue.childCount} // Added parentheses and removed spread operator
                  setAdultsCount={(val) => setBdValue({ ...bdValue, adultsCount: val })}
                  setChildCount={(val) => setBdValue({ ...bdValue, childCount: val })} // Removed unnecessary spread operator
                />
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

export default CreatePageHomeBreakDownView
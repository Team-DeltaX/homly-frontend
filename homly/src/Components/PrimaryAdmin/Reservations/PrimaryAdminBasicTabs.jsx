import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OngoingReservationList from '../../Reservations/OngoingReservationList';
import PastReservationList from '../../Reservations/PastReservationList';
import SpecialReservationList from '../../Reservations/SpecialReservationList';
import CancelledReservationList from '../../Reservations/CancelReservationList';
import AddSpecialReservationPopUp from '../../Reservations/AddSpecialReservationPopUp';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
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
    </Box>
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

export default function PrimaryAdminBasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box><AddSpecialReservationPopUp /></Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Ongoing Reservations" {...a11yProps(0)} />
          <Tab label="Past Reservations" {...a11yProps(1)} />
          <Tab label="Special Reservations" {...a11yProps(2)} />
          <Tab label="Cancelled Reservations" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* <OngoingReservationList search={props.search} setSearch={props.setSearch}/> */}
        <OngoingReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <PastReservationList search={props.search} setSearch={props.setSearch}/> */}
        <PastReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* <PastReservationList search={props.search} setSearch={props.setSearch}/> */}
        <SpecialReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {/* <PastReservationList search={props.search} setSearch={props.setSearch}/> */}
        <CancelledReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
    </Box>
  );
}

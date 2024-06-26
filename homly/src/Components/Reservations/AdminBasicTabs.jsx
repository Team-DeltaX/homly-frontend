import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OngoingReservationList from './OngoingReservationList';
import PastReservationList from './PastReservationList';
import SpecialReservationList from './SpecialReservationList';
import CancelledReservationList from './CancelReservationList';
import AddSpecialReservationPopUp from './AddSpecialReservationPopUp';

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
        <Box sx={{ p: 1 }}>
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

export default function AdminBasicTabs(props) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const adminRole = props.adminRole;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {(adminRole === "PrimaryAdmin") && <Box><AddSpecialReservationPopUp /></Box>}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={isSmallScreen ? "Ongoing" : "Ongoing Reservations"} {...a11yProps(0)} />
          <Tab label={isSmallScreen ? "Past" : "Past Reservations"} {...a11yProps(1)} />
          <Tab label={isSmallScreen ? "Special" : "Special Reservations"} {...a11yProps(2)} />
          <Tab label={isSmallScreen ? "Cancelled" : "Cancelled Reservations"} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OngoingReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PastReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SpecialReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CancelledReservationList search={props.search} setSearch={props.setSearch}/>
      </CustomTabPanel>
    </Box>
  );
}

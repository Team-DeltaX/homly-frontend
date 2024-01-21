import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

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

export default function StatisticsDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%',paddingRight:'32px' }}>
      <Box sx={{ border: 1,borderTopLeftRadius:20,borderTopRightRadius:20, borderColor: 'divider',width:"100%"}}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth' aria-label="basic tabs example" sx={{}}>
          <Tab sx={{fontWeight:"bold"}} label="Units" {...a11yProps(0)} />
          <Tab sx={{fontWeight:"bold"}} label="Halls" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box sx={{backgroundColor:"background.lightgrey",width:"100%"}}>
        <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>
                <Grid item md={6} >
                    <Box sx={{backgroundColor:'white',borderRadius:'20px',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',padding:"30px 20px"}}>
                        <Box>
                            <Typography variant='h5' fontWeight={'bold'}>72</Typography>
                            <Typography variant='p' sx={{color:"grey6",fontSize:'0.8rem'}}>Total number of Units</Typography>
                        </Box>
                        <Box>
                            <CircularProgress  variant="determinate" value={25} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box sx={{backgroundColor:'white',borderRadius:'20px',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',padding:"30px 20px"}}>
                        <Box>
                            <Typography variant='h5' fontWeight={'bold'}>120,000LKR</Typography>
                            <Typography variant='p' sx={{color:"grey6",fontSize:'0.8rem'}}>Total Revenue from Units</Typography>
                        </Box>
                        <Box>
                            <CircularProgress sx={{color:"#11BA40"}} variant="determinate" value={75} />
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <Grid container spacing={2}>
                <Grid item md={6} >
                    <Box sx={{backgroundColor:'white',borderRadius:'20px',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',padding:"30px 20px"}}>
                        <Box>
                            <Typography variant='h5' fontWeight={'bold'}>72</Typography>
                            <Typography variant='p' sx={{color:"grey6",fontSize:'0.8rem'}}>Total number of Halls</Typography>
                        </Box>
                        <Box>
                            <CircularProgress  variant="determinate" value={100} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box sx={{backgroundColor:'white',borderRadius:'20px',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',padding:"30px 20px"}}>
                        <Box>
                            <Typography variant='h5' fontWeight={'bold'}>120,000LKR</Typography>
                            <Typography variant='p' sx={{color:"grey6",fontSize:'0.8rem'}}>Total Revenue from Halls</Typography>
                        </Box>
                        <Box>
                            <CircularProgress sx={{color:"#11BA40",zIndex:'100'}} variant="determinate" value={50} />
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
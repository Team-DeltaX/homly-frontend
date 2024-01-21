import React from 'react'
import { Box} from '@mui/system'
import CustomInput from '../Inputs/CustomInput'
import CustomSelect from '../Inputs/CustomSelect'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

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
const HomeBreakDownView = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
  return (
    <Box>
      <form autoComplete='off'>
        <fieldset style={{borderRadius:'16px',color:'grey',padding:'1.2em'}}>
        <legend>Holiday Home Breakdown</legend>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <CustomSelect label={'Maximum Adults'} Placeholder={'Select'} required={false}/>
                    <CustomSelect label={'Maximum Children'} Placeholder={'Select'} required={false}/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <CustomInput label={'Other charges(if any)'} placeholder={'Enter other charges'} required={false}/>
                    <CustomInput label={'Service charges(if any)'} placeholder={'Enter service charges'} required={false}/>
                    <CustomInput label={'Total rental for the complete house'} placeholder={'Enter Total rental'} required={false}/>
                    <CustomInput label={'Holiday Home facitlities'} placeholder={'Enter Facilities'} required={false}/>

                </Grid>


            </Grid>
            <Grid container spacing={3}>
                
                <Grid item md={12} sm={12} xs={12} sx={{marginTop:'2em'}}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Rooms/Units" {...a11yProps(0)} />
                            <Tab label="Halls" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Rooms/Units
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Halls
                        </CustomTabPanel>
                    </Box>
                </Grid>
            </Grid> 
        </fieldset>
      </form>

    </Box>
  )
}

export default HomeBreakDownView
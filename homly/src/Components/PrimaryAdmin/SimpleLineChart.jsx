import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

const Home1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const Home2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const Home3 = [2434, 2398, 6345, 9533, 4999, 7600, 1000];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function SimpleLineChart() {
    const [HolidayHome1, SetHolidayHome1] = React.useState('');
    const [HolidayHome2, SetHolidayHome2] = React.useState('');
    const [HolidayHome3, SetHolidayHome3] = React.useState('');


  const handleChangehh1 = (event) => {
    SetHolidayHome1(event.target.value);
  };
 

  const handleChangehh2 = (event) => {
    SetHolidayHome2(event.target.value);
  };
 

  const handleChangehh3 = (event) => {
    SetHolidayHome3(event.target.value);
  };
  return (
   <Box sx={{marginTop:'40px'}}>
    <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},alignItems:'center',justifyContent:'center'}}>
        <Box>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">HolidayHome 1</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={HolidayHome1}
          label="Holidayhome1"
          onChange={handleChangehh1}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>select Home one to analyse</FormHelperText>
      </FormControl>
            
        </Box>




        <Box>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">HolidayHome 2</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={HolidayHome2}
          label="Holidayhome2"
          onChange={handleChangehh2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>select Home two to analyse</FormHelperText>
      </FormControl>
            
        </Box>



        <Box>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">HolidayHome 3</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={HolidayHome3}
          label="Holidayhome3"
          onChange={handleChangehh3}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>select Home three to analyse</FormHelperText>
      </FormControl>
            
        </Box>


    </Box>
     <LineChart
      width={window.innerHeight<100?'100':'720'}
      height={300}
      series={[
        { data: Home1, label: 'HH1' },
        { data: Home2, label: 'HH2' },
        { data: Home3, label: 'HH3' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
   </Box>
  );
}

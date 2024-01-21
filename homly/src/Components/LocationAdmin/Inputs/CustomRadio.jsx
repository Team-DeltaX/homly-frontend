import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box,Typography } from '@mui/material';

export default function CustomRadio({label,required,radio1,radio2}) {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <Box sx={{display:'flex',alignItems:'center',gap:'1em',marginBottom:'12px'}} className="input_container">
        <Box sx={{minWidth:'100px'}} className="label_container" >
            {required ? 
            <Typography variant='p'  sx={{color:'red'}}>*</Typography>
            :''}
            <Typography variant='p' sx={{color:'black'}}>{label}</Typography>
        </Box>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <Box sx={{display:'flex'}}>
            <FormControlLabel value={radio1} control={<Radio />} label={radio1} />
            <FormControlLabel value={radio2} control={<Radio />} label={radio2} />
        </Box>
      </RadioGroup>
      </Box>
    </FormControl>
  );
}
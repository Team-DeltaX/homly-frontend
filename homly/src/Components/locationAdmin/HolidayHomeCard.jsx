import React from 'react'
import { Box,Paper,Typography,Button} from '@mui/material';
import imag from "../../assest/images/user.webp";


const HolidayHomeCard = () => {
  return (
                    <Paper elevation={3} className='home_card' sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',padding:"5px 8px",alignItems:'center',backgroundColor:'grey1',borderRadius:"15px",marginBottom:"1em"}}>
                        <Box className="home_image">
                            <img src={imag} alt='holidayhome'/>
                        </Box>
                        <Box className="sub_details">
                            <Typography variant='p'>Hotel Anuradhapura</Typography>
                        </Box>
                        <Box className="sub_details">
                            <Typography variant='p'>Executive</Typography>
                        </Box>
                        <Box className="button_container" >
                            <Button variant="contained" sx={{backgroundColor:"primary.main",textTransform:"capitalize",fontWeight:"bold",color:"white"}}><Typography sx={{fontFamily:"sans-serif"}} variant='p'>Edit</Typography> </Button>
                            <Button variant="contained" sx={{backgroundColor:"primary.main",textTransform:"capitalize",fontWeight:"bold",color:"white"}}><Typography sx={{fontFamily:"sans-serif"}} variant='p'>View</Typography> </Button>
                        </Box>

                    </Paper>
   
  )
}

export default HolidayHomeCard
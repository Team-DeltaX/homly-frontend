import { Box,Button,Typography,Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';


import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Input from './Input';
import SearchIcon from '@mui/icons-material/Search';

import HolidayHomeCard from './HolidayHomeCard';

const ManageHomeContent = () => {
  return (
    <Box >
        <Box className="search_container" sx={{display:'flex',alignItems:'center',justifyContent:"flex-end",gap:"1em"}}>
            <Link to></Link><Button variant="contained" sx={{backgroundColor:"primary.main",textTransform:"capitalize",fontWeight:"bold",color:"white"}} startIcon={<ControlPointIcon/>} ><Typography sx={{fontFamily:"sans-serif"}} variant='p'>Create New</Typography> </Button>
            <Input label={"Search"} icon={<SearchIcon/>}/>
        </Box>
        <Container maxWidth={'md'}>
            <Box className="holidayhomes_card_container" sx={{marginTop:"20px",padding:"0 40px",overflowY:"scroll",maxHeight:"80vh"}}>
                <Box className="homes_container">
                    <Box className="homes_container_header"><Typography variant='p' className='header_title'>Pending Holiday Homes</Typography><hr/></Box>
                    <Box className="homes_container_body">
                        <HolidayHomeCard/>
                        <HolidayHomeCard/>
                        
                    </Box>
                </Box>
                <Box className="homes_container">
                    <Box className="homes_container_header"><Typography variant='p' className='header_title'>Inactive Holiday Homes</Typography><hr/></Box>
                    <Box className="homes_container_body">
                        <HolidayHomeCard/>
                        
                    </Box>
                </Box>
                <Box className="homes_container">
                    <Box className="homes_container_header"><Typography variant='p' className='header_title'>Active Holiday Homes</Typography><hr/></Box>
                    <Box className="homes_container_body">
                        <HolidayHomeCard/>
                        <HolidayHomeCard/>
                        
                    </Box>
                </Box>
                
            </Box>
        </Container>
    </Box>
  )
}

export default ManageHomeContent
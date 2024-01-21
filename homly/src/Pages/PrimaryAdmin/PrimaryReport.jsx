
// import '../App.css';

import React,{useEffect, useState} from 'react'
import SideNavbar from '../../Components/PrimaryAdmin/SideNavbar'

import Box from '@mui/material/Box';
import { Grid,ThemeProvider } from '@mui/material';
import theme from '../../HomlyTheme';

const PrimaryReport = () => {

  

    return (
    <ThemeProvider theme={theme}>
        <Box sx={{width:"100%",backgroundColor:'primary.main',height:"100vh",overflow:'hidden'}}>
            <Grid container>
                <Grid xs={3} sx={{backgroundColor:"primary.main",height:"100vh"}}>
                    <SideNavbar></SideNavbar>
                </Grid>
                <Grid xs={9} sx={{backgroundColor:'white',borderTopLeftRadius:'20px',padding:'0 20px'}}>
                    <h1>Report</h1>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  )
}

export default PrimaryReport
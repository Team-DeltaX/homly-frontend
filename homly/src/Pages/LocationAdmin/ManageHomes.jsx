
import '../App.css';

import React,{useEffect, useState} from 'react'
import SideNavbar from '../components/SideNavbar'

import Box from '@mui/material/Box';
import { Grid,ThemeProvider,Container} from '@mui/material';
import theme from '../Homlytheme';

import PageTitle from '../components/PageTitle';
import ManageHomeContent from '../components/ManageHomeContent';




const ManageHomes = () => {

    const [showNav,setShowNav] = useState('nav_grid_deactive')
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
    <ThemeProvider theme={theme}>
            <Box className="main_container" sx={{width:"100%",backgroundColor:'primary.main',overflow:'hidden'}}>
                <Container maxWidth="xl" style={{padding:0}}>
                    <Grid container sx={{position:'relative'}}>
                        <Grid className={showNav} xs={3} sx={{backgroundColor:"primary.main",height:"100vh" }}>
                            <SideNavbar setShowNav={setShowNav}></SideNavbar>
                        </Grid>
                        <Grid className='container_grid' xs={9} sx={{backgroundColor:'white',borderTopLeftRadius:'20px',padding:'10px 30px',height:'100vh',position:'relative'}}>
                            <Box sx={{height:"100%"}}>
                                <PageTitle setShowNav={setShowNav} title={'Manage Holiday Homes'} bell={false}/>
                                <ManageHomeContent />   
                            </Box>
                        </Grid>  
                    </Grid>
                </Container>    
            </Box>
    </ThemeProvider>
  )
}

export default ManageHomes
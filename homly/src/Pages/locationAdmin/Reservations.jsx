

import './style.css';
import React,{ useState} from 'react'

import Box from '@mui/material/Box';
import { Grid,ThemeProvider,Container} from '@mui/material';
import theme from '../../HomlyTheme';

import SideNavbar from '../../Components/locationAdmin/SideNavbar'
import PageTitle from '../../Components/locationAdmin/PageTitle';

import BasicTabs from '../../Components/locationAdmin/Reservations/LocationAdminBasicTab';
import SearchNew from '../../Components/PrimaryAdmin/SearchNew'


const Report = () => {

    const [showNav,setShowNav] = useState('nav_grid_deactive');
    const [search, setSearch] = useState("");

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
                                <PageTitle setShowNav={setShowNav} title={'Reservations'} bell={true}/>
                                <SearchNew setSearch={setSearch} search={search} />
                                <BasicTabs setSearch={setSearch} search={search} />
                            </Box>
                        </Grid>  
                    </Grid>
                </Container>    
            </Box>
    </ThemeProvider>
  )
}

export default Report
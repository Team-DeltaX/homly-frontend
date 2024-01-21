
// import '../App.css';

import React, { useEffect, useState } from 'react'
import SideNavbar from '../../Components/PrimaryAdmin/SideNavbar'

import Box from '@mui/material/Box';
import { Avatar, Button, Container, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../HomlyTheme';
import Pagetop from '../../Components/PrimaryAdmin/PageTop';
import DashViewAdminBox from '../../Components/PrimaryAdmin/DashViewAdminBox';
import { Link } from 'react-router-dom';




const PrimaryDashboard = () => {


    const [showNav, setShowNav] = useState('nav_grid_deactive')

    return (
        <ThemeProvider theme={theme}>
            <Box className="main_continer" sx={{ width: "100%", backgroundColor: 'primary.main', height: "100vh", overflow: 'hidden' }}>
                <Container maxWidth="xl" style={{ padding: "0px" }}>
                    <Grid container sx={{ position: 'relative' }}>
                        <Grid className={showNav} xs={3} sx={{ backgroundColor: "primary.main", height: "100vh" }}>
                            <SideNavbar setShowNav={setShowNav}></SideNavbar>
                        </Grid>

                        <Grid className='container_grid' xs={9} sx={{ backgroundColor: 'white', borderTopLeftRadius: '20px', padding: '0 20px' }}>
                            <Pagetop setShowNav={setShowNav} heading={"Dashboard"} />
                            <Box>
                                <Grid container>
                                    <Grid md={8} sx={{ backgroundColor: 'grey', height: '100vh' }}>s</Grid>
                                    <Grid md={4} sx={{height:'100vh'}}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#E9E9E9', padding: '2px', margin: '15px', borderRadius: '20px' }}>
                                                <Box><Typography variant='h6' style={{ margin: '10px' }}>Location Admins</Typography></Box>
                                              
                                                
                                                <Box><DashViewAdminBox color={"#253DA1"}/></Box>
                                                <Box><DashViewAdminBox color={"pink"}/></Box>
                                                <Box><DashViewAdminBox color={"#77ccff"}/></Box>
                                                <Box><DashViewAdminBox color={"#f5c77e"}/></Box>
                                                <Box><DashViewAdminBox color={"#bebdb8"}/></Box>
                                                <Box><Link to="/primaryadmin/viewadmin"><Button sx={{ color: '#19BDFF' }}>See More</Button></Link></Box>


                                            </Box>
                                            <Box>
                                                <Box sx={{backgroundColor:'#E9E9E9',padding:'2px', margin: '15px', borderRadius: '20px' }}>
                                                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                                        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',columnGap:'20px',padding:'10px',margin:'7px',background:'white',borderRadius:'10px'}}>
                                                            <Box><Avatar sx={{ bgcolor: 'red' }}>6</Avatar></Box>
                                                            <Box>|</Box>
                                                            <Box>Requested Authorizations</Box>


                                                        </Box>
                                                        <Box> <Link to="/primaryadmin/authorizations"><Button sx={{ color: '#19BDFF' ,fontFamily:'Roboto Flex'}}>Get Actions</Button></Link></Box>
                                                        
                                                        
                                                    </Box>

                                                </Box>
                                            </Box>
                                        </Box>


                                    </Grid>

                                </Grid>


                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default PrimaryDashboard
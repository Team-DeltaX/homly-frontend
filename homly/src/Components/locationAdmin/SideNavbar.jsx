
import React,{useEffect, useState,memo} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import logo from '../../Assets/images/logo1.png';
import user from '../../Assets/images/profile.jpeg';
import {Link} from 'react-router-dom';


import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CloseIcon from '@mui/icons-material/Close';



const  SideNavbar = ({closeNavGrid,setShowNav}) => {

    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    useEffect(()=>{
        const currentUrl = window.location.href;
        const urlArray = currentUrl.split("/");
        setSelectedMenuItem(urlArray[4]);  
    },[])

    const closeNav = () => {
        setShowNav('nav_grid_deactive');
    }
  

  return (
    <Box sx={{ width: '100%',paddingTop:"20px",position:'relative'}}>
    <CloseIcon className='close_icon' sx={{color:'white',display:'none',position:'absolute',top:'10px',right:'20px',fontSize:'2rem'}}  onClick={closeNav}/>
      <Grid container sx={{height:"100vh"}} >
        <Box sx={{width:'100%',margin:'0 auto'}} className="nav_header">
            <Grid container alignItems={'center'} direction={"column"} >
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={logo} alt="logoOfHomely"/>
                </Box>
                <Box>
                <Typography variant='h5' sx={{color:'white'}}>Admin</Typography>
                </Box>
            </Grid>
        </Box>
        <Box sx={{width:'100%',margin:'0 auto',marginBottom:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Grid container justifyContent={'flex-start'} alignItems={'center'} xs={12} sx={{backgroundColor: selectedMenuItem === 'dashboard' ? 'white' : 'primary.main'}} className='sidenav_item' >
                    <Box justifyContent={'center'} >
                        <DashboardOutlinedIcon sx={{color:selectedMenuItem === 'dashboard' ? 'black' : 'white'}}/>
                    
                    </Box>
                    <Box alignItems={'center'}>
                        <Link to="" className='sidenav_link' >
                            <Typography variant='p'  sx={{color:selectedMenuItem === 'dashboard' ? 'black' : 'white'}}>Dashboard</Typography>
                        </Link>
                    </Box>
               
            </Grid>
            <Grid container justifyContent={'flex-start'} alignItems={'center'}  xs={12} sx={{backgroundColor: selectedMenuItem === 'holidayhomes' ? 'white' : 'primary.main'}} className='sidenav_item'>
                    <Box justifyContent={'center'}>
                        <HomeOutlinedIcon sx={{color:selectedMenuItem === 'holidayhomes' ? 'black' : 'white'}}/>
                    </Box>
                    <Box alignItems={'center'}>
                        <Link to="locationadmin/holidayhomes/manage" className='sidenav_link' >
                            <Typography variant='p' sx={{color:selectedMenuItem === 'holidayhomes' ? 'black' : 'white',fontWeight:'bold'}}>HolidayHomes</Typography>
                        </Link>
                    </Box>
            </Grid>
            <Grid container xs={12} className="submenu_item">
                    <Grid container >
                        <Grid xs={12} sx={{display:'flex',justifyContent:'flex-start',padding:'3px',marginTop:'5px'}}>
                            <Link to="locationadmin/holidayhomes/manage" className='sidenav_submenulink' >
                                <ManageAccountsOutlinedIcon sx={{color:'white',marginRight:'20px',fontSize:"1.2rem"}}/>
                                <Typography variant='p' sx={{color:'white'}}> Manage</Typography>
                            </Link>
                        </Grid>
                        <Grid xs={12} sx={{display:'flex',justifyContent:'flex-start',padding:'3px',marginBottom:'5px'}}>
                            <Link to="locationadmin/holidayhomes/details" className='sidenav_submenulink' >
                                <HistoryOutlinedIcon sx={{color:'white',marginRight:'20px',fontSize:"1.2rem"}}/>
                                <Typography variant='p' sx={{color:'white'}}>Details</Typography>
                            </Link>
                        </Grid>
                       
                    </Grid>
            </Grid>
          
            <Grid container justifyContent={'flex-start'} alignItems={'center'}  xs={12} sx={{backgroundColor: selectedMenuItem === 'feedback' ? 'white' : 'primary.main'}} className='sidenav_item' >
                    <Box justifyContent={'center'}>
                        <RateReviewOutlinedIcon sx={{color:selectedMenuItem === 'feedback' ? 'black' : 'white'}}/>
                    </Box>
                    <Box alignItems={'center'}>
                        <Link to="locationadmin" className='sidenav_link' >
                            <Typography variant='p' sx={{color:selectedMenuItem === 'feedback' ? 'black' : 'white'}}>Feedback</Typography>
                        </Link> 
                    </Box>
            </Grid>
            
          
            <Grid container justifyContent={'flex-start'} alignItems={'center'}  xs={12} sx={{backgroundColor: selectedMenuItem === 'reservations' ? 'white' : 'primary.main'}} className='sidenav_item'>
                    <Box justifyContent={'center'}>
                       <ListAltOutlinedIcon sx={{color:selectedMenuItem === 'reservations' ? 'black' : 'white'}}/>
                    </Box>
                    <Box alignItems={'center'}>
                        <Link to="locationadmin/reservations" className='sidenav_link' >
                            <Typography variant='p' sx={{color:selectedMenuItem === 'reservations' ? 'black' : 'white'}}>Reservations</Typography>
                        </Link>
                    </Box>
            </Grid>
            <Grid container justifyContent={'flex-start'} alignItems={'center'}  xs={12} sx={{backgroundColor: selectedMenuItem === 'report' ? 'white' : 'primary.main'}} className='sidenav_item'>
                    <Box justifyContent={'center'}>
                        <QueryStatsOutlinedIcon sx={{color:selectedMenuItem === 'report' ? 'black' : 'white'}}/>
                    </Box>
                    <Box alignItems={'center'}>
                        <Link to="locationadmin/report" className='sidenav_link' >
                            <Typography variant='p' sx={{color:selectedMenuItem === 'report' ? 'black' : 'white'}}>Report</Typography>
                        </Link>
                    </Box>
            </Grid>
        </Box>
        <Box sx={{width:'100%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:"flex-end"}}>
            <Box>
                <img src={user} alt="profile_picture" className='user_image'/>
            </Box>
            <Box sx={{textAlign:'center'}}>
                <Typography variant='h6' sx={{color:'white',marginBottom:'0'}}>Jhon Doe</Typography>
                <Typography variant='p' sx={{color:'grey4'}}>JhonDoe@gmail.com</Typography>
            </Box>
            <Box sx={{display:'flex',marginBottom:'35px',marginTop:"10px",gap:'3px'}}>
                <LogoutOutlinedIcon sx={{color:'grey5',textShadow:'unset'}} />
                <Typography variant='p' sx={{color:'grey1'}}>Log Out</Typography>
            </Box>
        </Box>
       
      </Grid>
    </Box>
  );
}


export default memo(SideNavbar);
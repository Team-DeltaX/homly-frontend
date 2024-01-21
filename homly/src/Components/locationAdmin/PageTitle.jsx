import React, { useState,useRef,useEffect } from 'react'
import { Box,Typography,Paper } from '@mui/material'

import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import Notification from './Notification';
import NotifyEmpty from './NotifyEmpty';


const PageTitle = ({title,bell,setShowNav}) => {

    const [notifications,SetNotifications]= useState([
        {
            id:1,
            type:"New Feedback",
            image:"../assest/images/profile.jpeg",
            data:{serviceNumber:"18964v",HolidayHomeName:"Anuradhapura resort by samitha"}
        
        },

        {
            id:2,
            type:"Authorization Successful",
            image:"",
            data:"Remove HolidayHome"
        },
        {
            id:3,
            type:"New Feedback",
            image:"../assest/images/profile.jpeg",
            data:{serviceNumber:"18964v",HolidayHomeName:"Anuradhapura resort by samitha"}
        
        },
        {
            id:4,
            type:"New Feedback",
            image:"../assest/images/profile.jpeg",
            data:{serviceNumber:"18964v",HolidayHomeName:"Anuradhapura resort by samitha"}
        
        },
        {
            id:5,
            type:"Authorization Denied",
            image:"",
            data:"Remove HolidayHome"
        }

    ])

   
    const [Messagecount,SetMessagecount] = useState(8)
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationsContainerRef = useRef(null);

   

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            notificationsContainerRef.current &&
            !notificationsContainerRef.current.contains(event.target)
          ) {
            setShowNotifications(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };


       
      }, []);

      const handleBellClick = () => {
        setShowNotifications((prev) => !prev);
      }; 

      const openNav = () =>{
        setShowNav('nav_grid_active');
      }
      
      const updateNotifications = (removedNotificationId) => {
        SetNotifications((prevNotifications) =>
          prevNotifications.filter((notification) => notification.id !== removedNotificationId)
        );
      };

      const removeAllNotifications = () => {
        SetNotifications([]);
        SetMessagecount(0);
      };

  return (
    <Box sx={{backgroundColor:"",display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'25px'}}>
        <Typography variant='h4' fontWeight={560} className='page_title'>{title}</Typography>
        <Box sx={{position:'relative'}}>
            <Box sx={{display:'flex',alignItems:'flex-basis',gap:'1.5em'}}>
                <Box className="bell_container" id="bell" sx={{display:bell?"block":"none"}} onClick={handleBellClick}>
                    {bell ? <NotificationsIcon sx={{color:"grey6",fontSize:"2.5rem",cursor:"pointer"}}/> : "" }
                    <Box className="notify_count_container" sx={{display:Messagecount===0?"none":"block"}}>
                        <Box className="count_inner">
                            <Typography  variant='p' sx={{fontSize:'10px',fontWeight:'bold'}}>{Messagecount}</Typography>
                        </Box>
                    </Box>  
                </Box>
                <Box className="burger_icon" sx={{display:'none'}}>
                        <MenuIcon  id="burgerIcon"  sx={{color:"grey6",fontSize:"2.5rem",cursor:"pointer"}} onClick={openNav}/>
                </Box>
            </Box>
            <Paper  ref={notificationsContainerRef} className="notifications_container" 
                            sx={{
                                width:'400px',
                                maxHeight:'400px',
                                backgroundColor:"rgba(255,255,255,0.8)",
                                position:'absolute',
                                borderRadius:"15px",
                                zIndex:"1000",
                                padding:"10px",
                                right:0,
                                display: showNotifications ? 'block' : 'none',}
            }>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:"10px"}}>
                    <Typography variant="p" fontWeight={'bold'}>Notifications</Typography>
                    <Typography variant="p" sx={{color:'#2B69C7',fontSize:'0.9rem',cursor:'pointer'}} onClick={removeAllNotifications}>Mark All As Read</Typography>
                </Box>
                <Box className="notify_container" sx={{maxHeight:"350px",overflowY:'scroll',overflowX:'hidden'}}>

                    {notifications.length === 0 ?
                        <NotifyEmpty/> 
                    :
                    notifications.map((notifi)=>(
                        <Notification  key={notifi.id} id={notifi.id} type={notifi.type} url={notifi.image} data={notifi.data}  updateNotifications={updateNotifications}></Notification>
                    ))}
                    
                   
                </Box>
            </Paper>
        </Box>

    </Box>
  )
}

export default PageTitle
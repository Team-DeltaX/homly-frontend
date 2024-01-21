import React from 'react'
import { Box,Grid, Typography } from '@mui/material'


import FeedbackIcon from '@mui/icons-material/Feedback';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CancelIcon from '@mui/icons-material/Cancel';



const Notification = ({type,url,data,id,updateNotifications}) => {

    const [isRemoving, setIsRemoving] = React.useState(false);
    const chooseIcon = {
            "New Feedback":<FeedbackIcon sx={{color:"grey6"}}/>,
            "Authorization Successful":<CloudDoneIcon sx={{color:"grey6"}}/>,
            "Authorization Denied":<DangerousIcon sx={{color:"grey6"}}/>
        };

    
    const removeNotification = () => {
        setIsRemoving(true);
        setTimeout(() => {
            updateNotifications(id);  
        }, 300);
      
    };
    
  return (
    <Box sx={{backgroundColor:"#ececec",borderRadius:"10px",marginBottom:'15px',transition:'transform 0.3s ease',transform:isRemoving?'translateX(100%)':'translateX(0%)'}} className="notification">
        <Box sx={{display:'flex',justifyContent:"space-between",alignItems:"center",padding:'5px 15px'}}>
            <Box display={'flex'} gap={'10px'}>
                {chooseIcon[type]}
                <Typography variant='p' sx={{fontWeight:'bold'}}>{type}</Typography>

            </Box>
            <Box>
                <CancelIcon sx={{color:"primary.main",cursor:"pointer"}} onClick={removeNotification}/>
            </Box>
        </Box>
        <hr style={{width:'180px',margin:"5px 0 5px 20px",color:"lightgray",opacity:"0.7"}}/>
        <Grid container sx={{padding:"5px 15px"}} alignItems={'center'}>
            {type === "New Feedback"
             ?
                <Grid container>
                    <Grid item xs={2}>
                        <img style={{width:"50px",height:'50px',borderRadius:"50%"}} src={url} alt='profileimage'/>
                    </Grid>

                    <Grid item xs={4} sx={{display:'flex',flexDirection:"column"}}>
                        <Typography variant='p' sx={{fontWeight:'bold',fontSize:'14px',color:'#4E4E4E'}}>Service Number</Typography>
                        <Typography variant='p' sx={{fontSize:"12px",color:'grey6'}}>123433v</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{display:'flex',flexDirection:"column"}}>
                        <Typography variant='p' sx={{fontWeight:'bold',fontSize:'14px',color:'#4E4E4E'}}>HolidayHome Name</Typography>
                        <Typography variant='p' sx={{fontSize:'12px',color:'grey6'}}>Samitha Resort in Anuradhapura</Typography>
                    </Grid>
                  
                </Grid>
             :
            
                <Grid container>
                    <Grid item xs={12}>
                        
                    </Grid>

                </Grid>
            }

            

        </Grid>
        <Box sx={{display:'flex',justifyContent:'flex-end',marginBottom:"5px"}}>
            <Typography variant='p' sx={{padding:"0 15px",color:'grey6',fontSize:'12px'}}>3d ago</Typography>
        </Box>

    </Box>
  )
}

export default Notification
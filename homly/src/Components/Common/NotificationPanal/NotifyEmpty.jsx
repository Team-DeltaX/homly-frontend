import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import CampaignIcon from '@mui/icons-material/Campaign';

const NotifyEmpty = () => {
  return (
    <Box sx={{padding:'20px 0px'}}>
       <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
        <Typography variant='h5' sx={{fontWeight:'bolc'}}>No Notifications</Typography>
        <Typography variant='h6' sx={{color:"grey5",marginBottom:'2em'}}>Your notifications will be displayed here</Typography>
       </Box>
       <Box sx={{textAlign:'center'}}>
            <CampaignIcon sx={{fontSize:"3rem",color:'grey'}}/>
       </Box>
    </Box>
  )
}

export default NotifyEmpty
import { Paper,Box, Typography } from '@mui/material'
import React from 'react'

import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const Summary = ({summaryTitle,count,iconUse,color}) => {
  return (
    <Paper elevation={8} sx={{height:"100%",padding:'0 1rem',display:'flex',flexDirection:'column',justifyContent:'center',gap:'0.7em',backgroundColor:color,color:'white',borderRadius:'20px'}}>
        <Box>
            {iconUse}   
        </Box>
        <Box>
           <Typography variant="p" sx={{fontSize:'0.9rem',fontWeight:'medium'}}> {summaryTitle}</Typography>
      
      
            <Typography variant="h6">{count}</Typography>
        </Box>
    </Paper>
  )
}

export default Summary
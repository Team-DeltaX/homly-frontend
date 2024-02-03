import { Paper,Box, Typography } from '@mui/material'
import React from 'react'


const PSummary = ({summaryTitle,count,iconUse,color}) => {
  return (
    <Box elevation={8} sx={{widheight:'75%',padding:'0 1rem',display:'flex',flexDirection:'column',justifyContent:'center',gap:'0.2em',backgroundColor:color,color:'white',borderRadius:'20px'}}>
        <Box>
            {iconUse}   
        </Box>
        <Box>
           <Typography variant="p" sx={{fontSize:'0.9rem',fontWeight:'medium'}}> {summaryTitle}</Typography>
      
      
            <Typography variant="h6">{count}</Typography>
        </Box>
    </Box>
  )
}

export default PSummary
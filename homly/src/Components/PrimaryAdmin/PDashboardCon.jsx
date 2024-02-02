import { Grid,Box } from '@mui/material'
import React from 'react'

// import PStatisticsDetails from './StatisticsDetails';


import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaidIcon from '@mui/icons-material/Paid';
import PSummary from '../../Components/PrimaryAdmin/Psummery';

const PDashboardCon = () => {
    const summaries = [
        {
          color:'#8CB7A3',
          summaryTitle: 'Travellers',
          count: 1546,
          iconComponent: <DirectionsWalkIcon sx={{fontSize:'2.8rem'}}/>,
        },
        {
          color:'#4D4E8E',
          summaryTitle: 'Bookings',
          count: 879,
          iconComponent: <LibraryBooksIcon sx={{fontSize:'2.8rem'}}/>,
        },
        {
            color:'#FF5F51',
            summaryTitle: 'Earnings',
            count: 879,
            iconComponent: <PaidIcon sx={{fontSize:'2.8rem'}}/>,
          },
          {
            color:'#FF5F51',
            summaryTitle: 'Holiday Homes',
            count: 879,
            iconComponent: <PaidIcon sx={{fontSize:'2.8rem'}}/>,
          }
        // Add more objects as needed for additional summaries
      ];
  return (
    <Grid container sx={{padding:'10px 30px'}}>
        <Grid md={8} xs={12}>
            <Grid container justifyContent={'space-between'}sx={{marginBottom:'25px'}} spacing={2}>
                {summaries.map((sum)=>(
                     <Grid item md={2} xs={6} sm={3} lg={4} xl={4} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Box sx={{width:'150px',height:'150px'}}>
                            <PSummary summaryTitle={sum.summaryTitle} iconUse={sum.iconComponent} count={sum.count} color={sum.color}/>
                        </Box>
                     </Grid>
                ))}
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* <StatisticsDetails/> */}
                </Grid>
            </Grid>
        </Grid>
        <Grid md={4} xs={12}>
        </Grid>
    </Grid>
    
  )
}

export default PDashboardCon
import React from 'react'
import { Box,Button,Typography,Paper} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import CancelIcon from '@mui/icons-material/Cancel';



const HallBreakDown = () => {
    
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Paper elevation={8} sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',padding:"10px",marginBottom:"10px"}}>
        <Box sx={{display:'flex',gap:'1em'}}>
            <Box className="card_item">
                <Typography variant='p' className='card_item_title'>Hall Code</Typography>
                <Typography variant='p' className='card_item_value'>R001</Typography>
            </Box>
            <Box className="card_item">
                <Typography variant='p' className='card_item_title'>AC/Non AC</Typography>
                <Typography variant='p' className='card_item_value'>AC</Typography>
            </Box>
            <Box className="card_item">
                <Typography variant='p' className='card_item_title'>Floor Level</Typography>
                <Typography variant='p' className='card_item_value'>Single Room</Typography>
            </Box>
            <Box className="card_item">
                <Typography variant='p' className='card_item_title'>Adults</Typography>
                <Typography variant='p' className='card_item_value'>2</Typography>
            </Box>
            <Box className="card_item">
                <Typography variant='p' className='card_item_title'>Children</Typography>
                <Typography variant='p' className='card_item_value'>3</Typography>
            </Box>
            <Box className="card_item">
                <Typography variant='p' className='card_item_title'>Rental</Typography>
                <Typography variant='p' className='card_item_value'>10000</Typography>
            </Box>


        </Box>
        <Box sx={{display:'flex',alignItems:'center',gap:'1em'}}>
        <Button size='small' variant='contained' sx={{backgroundColor:'primary.main'}}>Edit Row</Button>
       
        <Box>
            <CancelIcon/>
        </Box>

        </Box>

    </Paper>
  )
}

export default HallBreakDown
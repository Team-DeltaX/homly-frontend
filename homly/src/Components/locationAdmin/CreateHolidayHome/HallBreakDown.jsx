import React from 'react'
import { Box, Button, Typography, Paper } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import CancelIcon from '@mui/icons-material/Cancel';



const HallBreakDown = ({ hallCode, hallAc, floorLevel, hallNoOfAdults, hallNoOfChildren, hallRental }) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Paper elevation={8} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: "10px", marginBottom: "10px" }}>
            <Box sx={{ display: 'flex', gap: '1em' }}>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Hall Code</Typography>
                    <Typography variant='p' className='card_item_value'>{hallCode}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>AC/Non AC</Typography>
                    <Typography variant='p' className='card_item_value'>{hallAc}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Floor Level</Typography>
                    <Typography variant='p' className='card_item_value'>{floorLevel}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Adults</Typography>
                    <Typography variant='p' className='card_item_value'>{hallNoOfAdults}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Children</Typography>
                    <Typography variant='p' className='card_item_value'>{hallNoOfChildren}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Rental</Typography>
                    <Typography variant='p' className='card_item_value'>{hallRental}</Typography>
                </Box>


            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }}>Edit Row</Button>

                <Box>
                    <CancelIcon />
                </Box>

            </Box>

        </Paper>
    )
}

export default HallBreakDown
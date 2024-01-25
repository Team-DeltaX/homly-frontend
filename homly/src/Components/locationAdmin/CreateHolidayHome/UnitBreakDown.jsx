import React, { useState } from 'react'
import { Box, Button, Typography, Paper } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import CancelIcon from '@mui/icons-material/Cancel';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const UnitBreakDown = ({ unitCode, unitAc, floorLevel, unitNoOfAdults, unitNoOfChildren, unitRemarks, unitRental }) => {
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };



    const handleClose = () => {
        setOpen(false);
    };



    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Paper elevation={8} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: "10px", marginBottom: "10px" }}>
            <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Unit Code</Typography>
                    <Typography variant='p' className='card_item_value'>{unitCode}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Floor Level</Typography>
                    <Typography variant='p' className='card_item_value'>{floorLevel}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>AC/Non AC</Typography>
                    <Typography variant='p' className='card_item_value'>{unitAc}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Number of Rooms</Typography>
                    <Typography variant='p' className='card_item_value'></Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Adults</Typography>
                    <Typography variant='p' className='card_item_value'>{unitNoOfAdults}</Typography>
                </Box>
                <Box className="card_item">
                    <Typography variant='p' className='card_item_title'>Children</Typography>
                    <Typography variant='p' className='card_item_value'>{unitNoOfChildren}</Typography>
                </Box>



            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1em', width: "100%" }}>
                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpen}>Attach Rooms</Button>
                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }}>Edit Row</Button>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='p'>Room Attached?</Typography>
                    <Checkbox {...label} />
                </Box>
                <Box>
                    <CancelIcon />
                </Box>

            </Box>

            <React.Fragment>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}

                >
                    <DialogTitle>Add Rooms to </DialogTitle>
                    <form>
                        <DialogContent>
                            <Box>
                                <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
                                    <Typography variant='p' className='card_item_title'>Unit Code</Typography>
                                    <Typography variant='p' className='card_item_value'>{unitCode}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
                                    <Typography variant='p' className='card_item_title'>Unit Rental</Typography>
                                    <Typography variant='p' className='card_item_value'>{unitRental}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
                                    <Typography variant='p' className='card_item_title'>AC/Non AC</Typography>
                                    <Typography variant='p' className='card_item_value'>{unitAc}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
                                    <Typography variant='p' className='card_item_title'>Selected Room Count</Typography>
                                    <Typography variant='p' className='card_item_value'>03</Typography>
                                </Box>
                            </Box>



                        </DialogContent>

                        <DialogActions>
                            <Button variant='contained' onClick={handleClose}>Save</Button>
                            <Button variant='outlined' onClick={handleClose}>Close</Button>
                        </DialogActions>

                    </form>
                </Dialog>
            </React.Fragment>


        </Paper>
    )
}

export default UnitBreakDown
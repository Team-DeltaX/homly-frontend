import React, { useState } from 'react'
import { Box, Button, Typography, Paper } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import CancelIcon from '@mui/icons-material/Cancel';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const UnitBreakDown = ({ unitCode, unitAc, floorLevel, unitNoOfAdults, unitNoOfChildren, unitRemarks, unitRental, selectedRooms, roomArray, setRoomArray, handleUnitDelete }) => {
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };



    const handleClose = () => {
        setOpen(false);
    };

    const handleRoomAddToUnit = (roomCode) => {
        setRoomArray(roomArray.map((item, index) => {

            if (item.roomCode === roomCode) {
                selectedRooms.push(item);

                return {
                    ...item,
                    groupByUnit: true
                }
            } else {
                return item
            }
        }))
    }

    const handleCancelSelectedRoom = (roomCode) => {
        setRoomArray(roomArray.map((item, index) => {
            if (item.roomCode === roomCode) {
                return {
                    ...item,
                    groupByUnit: false
                }
            } else {
                return item
            }
        }))
        selectedRooms.splice(selectedRooms.findIndex(item => item.roomCode === roomCode), 1)
    }



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
                    <Checkbox {...label} disabled={selectedRooms.length === 0 ? true : false} checked={selectedRooms.length === 0 ? false : true} />
                </Box>
                <Box>
                    <CancelIcon sx={{ cursor: 'pointer' }} onClick={() => handleUnitDelete(unitCode,selectedRooms)} />
                </Box>

            </Box>

            <React.Fragment>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}

                >
                    <DialogTitle>Add Rooms to Unit</DialogTitle>
                    <form>
                        <DialogContent sx={{ overflow: "hidden" }}>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0em 2em' }}>
                                    <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em', alignItems: 'center', }}>
                                        <Typography variant='p' className='card_item_title'>Unit Code</Typography>
                                        <Typography variant='p' className='card_item_value attach_room_value'>{unitCode}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em', alignItems: 'center' }}>
                                        <Typography variant='p' className='card_item_title'>Unit Rental</Typography>
                                        <Typography variant='p' className='card_item_value attach_room_value'>{unitRental}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0em 2em' }}>
                                    <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em', alignItems: 'center' }}>
                                        <Typography variant='p' className='card_item_title'>AC/Non AC</Typography>
                                        <Typography variant='p' className='card_item_value attach_room_value'>{unitAc}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '1em', marginBottom: '1em', alignItems: 'center' }}>
                                        <Typography variant='p' className='card_item_title'>Selected Room Count</Typography>
                                        <Typography variant='p' className='card_item_value attach_room_value'>03</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="bottom_container_selected_rooms" >
                                <Box sx={{ marginBottom: '1.5em' }}>
                                    <fieldset style={{ borderRadius: '10px' }}>
                                        <legend>Rooms</legend>
                                        {roomArray.length === 0
                                            ?
                                            <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                                                <Typography variant='p' sx={{ color: 'grey' }}>No Rooms Available</Typography>
                                            </Box>
                                            :
                                            roomArray
                                                .filter(item => !item.groupByUnit)
                                                .map((item, index) => {

                                                    return (
                                                        <Paper elevation={8} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: "10px", marginBottom: "10px" }}>
                                                            <Box sx={{ display: 'flex', gap: '1em' }}>
                                                                <Box className="card_item">
                                                                    <Typography variant='p' className='attach_card_item_title'>Room Code</Typography>
                                                                    <Typography variant='p' className='attach_card_item_value'>{item.roomCode}</Typography>
                                                                </Box>
                                                                <Box className="card_item">
                                                                    <Typography variant='p' className='attach_card_item_title'>AC/Non AC</Typography>
                                                                    <Typography variant='p' className='attach_card_item_value'>{item.roomAC}</Typography>
                                                                </Box>
                                                                <Box className="card_item">
                                                                    <Typography variant='p' className='attach_card_item_title'>Room Type</Typography>
                                                                    <Typography variant='p' className='attach_card_item_value'>{item.RoomType}</Typography>
                                                                </Box>
                                                                <Box className="card_item">
                                                                    <Typography variant='p' className='attach_card_item_title'>Adults</Typography>
                                                                    <Typography variant='p' className='attach_card_item_value'>{item.NoOfAdults}</Typography>
                                                                </Box>
                                                                <Box className="card_item">
                                                                    <Typography variant='p' className='attach_card_item_title'>Children</Typography>
                                                                    <Typography variant='p' className='attach_card_item_value'>{item.NoOfChildren}</Typography>
                                                                </Box>

                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                                                                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={() => handleRoomAddToUnit(item.roomCode)}>Add</Button>
                                                            </Box>
                                                        </Paper>
                                                    )
                                                })

                                        }
                                    </fieldset>
                                </Box>

                                <Box>
                                    <fieldset style={{ borderRadius: '10px' }}>
                                        <legend>Selected Rooms for the Unit</legend>
                                        {selectedRooms.length === 0
                                            ?
                                            <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                                                <Typography variant='p' sx={{ color: 'grey' }}>No Selected Rooms</Typography>
                                            </Box>
                                            :
                                            selectedRooms.map((item, index) => {
                                                return (
                                                    <Paper elevation={8} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: "10px", marginBottom: "10px" }}>
                                                        <Box sx={{ display: 'flex', gap: '1em' }}>
                                                            <Box className="card_item">
                                                                <Typography variant='p' className='attach_card_item_title'>Room Code</Typography>
                                                                <Typography variant='p' className='attach_card_item_value'>{item.roomCode}</Typography>
                                                            </Box>
                                                            <Box className="card_item">
                                                                <Typography variant='p' className='attach_card_item_title'>AC/Non AC</Typography>
                                                                <Typography variant='p' className='attach_card_item_value'>{item.roomAC}</Typography>
                                                            </Box>
                                                            <Box className="card_item">
                                                                <Typography variant='p' className='attach_card_item_title'>Room Type</Typography>
                                                                <Typography variant='p' className='attach_card_item_value'>{item.RoomType}</Typography>
                                                            </Box>
                                                            <Box className="card_item">
                                                                <Typography variant='p' className='attach_card_item_title'>Adults</Typography>
                                                                <Typography variant='p' className='attach_card_item_value'>{item.NoOfAdults}</Typography>
                                                            </Box>
                                                            <Box className="card_item">
                                                                <Typography variant='p' className='attach_card_item_title'>Children</Typography>
                                                                <Typography variant='p' className='attach_card_item_value'>{item.NoOfChildren}</Typography>
                                                            </Box>

                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                                                            <CancelIcon sx={{ cursor: "pointer" }} onClick={() => handleCancelSelectedRoom(item.roomCode)} />
                                                        </Box>
                                                    </Paper>
                                                )
                                            })

                                        }
                                    </fieldset>

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
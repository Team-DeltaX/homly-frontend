import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function CalendarDetails({ date, open, handleClose, rooms }) {
    console.log("rooms in the components", rooms);
    let dateString = date.toString();
    return (
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Date {dateString}</DialogTitle>
                {rooms.length === 0 ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2em 2em 2em' }}>
                        <Typography sx={{ padding: '1em' }}>No reservations for this date</Typography>
                    </Box>
                    :
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2em 2em 2em' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '2em', paddingLeft: '1.2em', marginBottom: '12px' }}>
                            <Typography sx={{ width: '60px', fontWeight: 'bold' }}>Reserved</Typography>
                            <Box>
                                {rooms.map((room) => (
                                    <Typography key={room} sx={{ color: 'grey' }}>{room.toUpperCase()}</Typography>
                                ))}
                            </Box>
                        </Box>
                        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '2em', paddingLeft: '1.2em', marginBottom: '12px' }}>
                            <Typography sx={{ width: '60px', fontWeight: 'bold' }}>Pending</Typography>
                            <Box>
                                <Typography sx={{ color: 'grey' }}>R006</Typography>
                                <Typography sx={{ color: 'grey' }}>R009</Typography>
                            </Box>
                        </Box> */}
                        <Box>
                        </Box>
                    </Box>
                }

            </Dialog>



        </div>
    );
}
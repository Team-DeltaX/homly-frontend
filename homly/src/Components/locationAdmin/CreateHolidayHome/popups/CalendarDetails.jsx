import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


export default function CalendarDetails({ date, open, handleClose }) {

    let dateString = date.toString();


    return (
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Date {dateString}</DialogTitle>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2em 2em 2em' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '2em', paddingLeft: '1.2em', marginBottom: '12px' }}>

                        <Typography sx={{ width: '60px', fontWeight: 'bold' }}>Reserved</Typography>
                        <Box>
                            <Typography sx={{ color: 'grey' }}>R001</Typography>
                            <Typography sx={{ color: 'grey' }}>R002</Typography>
                            <Typography sx={{ color: 'grey' }}>R003</Typography>

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '2em', paddingLeft: '1.2em', marginBottom: '12px' }}>

                        <Typography sx={{ width: '60px', fontWeight: 'bold' }}>Pending</Typography>
                        <Box>
                            <Typography sx={{ color: 'grey' }}>R006</Typography>
                            <Typography sx={{ color: 'grey' }}>R009</Typography>


                        </Box>
                    </Box>
                    <Box>

                        <Typography sx={{ backgroundColor: 'rgb(255,0,0,0.5)', padding: "5px", textAlign: 'center', borderRadius: '5px' }}>Holiday Home Inactive</Typography>
                        {/* <Typography sx={{ backgroundColor: 'rgb(0,255,0,0.5)', padding: "5px", textAlign: 'center', borderRadius: '5px' }}>Holiday Home Active</Typography> */}
                    </Box>


                </Box>



            </Dialog>



        </div>
    );
}
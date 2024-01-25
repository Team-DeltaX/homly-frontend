import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import holidayhome from '../../../Assets/images/holidayHome.jpg';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alignProperty } from '@mui/material/styles/cssUtils';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function ViewPopUp(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (

    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Reservation Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
          <Box sx={{ width: '100%'}} elevation={0}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} elevation={0}>
              <Grid xs={4}>
                <Item sx={{boxShadow: "none"}}>
                  <img className="reservation-photo" src={props.reservation.img} alt="" />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item sx={{boxShadow: "none"}}>
                  <Typography variant="h6" align="left" display="block" gutterBottom>{ props.reservation.receiptName }</Typography>
                  <Typography variant="body2" align="left" display="block" gutterBottom>Reservation Number  { props.reservation.recervationNO }</Typography>
                  <Typography variant="body2" align="left" display="block" gutterBottom>Amount { props.reservation.amount }</Typography>
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item sx={{boxShadow: "none"}}>
                  <Typography variant="h6" align="right" display="block" gutterBottom>{ props.reservation.holidayhomename }</Typography>
                  <Typography variant="body2" align="right" display="block" gutterBottom>Check In : { props.reservation.checkindate }</Typography>
                  <Typography variant="body4" align="right" display="block" gutterBottom>Check Out : { props.reservation.checoutdate }</Typography>
                </Item>
              </Grid>
              <Grid xs={5}>
                <Item sx={{boxShadow: "none"}}>
                <Stack direction="column" spacing={1} sx={{ width: '100%', maxWidth: 500 }}>
                  <item>
                   <Typography variant="body2" align="left" display="block" gutterBottom>No. of Rooms : { props.reservation.noOfRooms }</Typography>
                   <Typography variant="body3" align="left" display="block" gutterBottom>No. of Halls : { props.reservation.noOfHalls }</Typography>
                  </item>
                  <item>
                    <Typography variant="body3" align="left" display="block" gutterBottom>Reserved date : { props.reservation.reservedDate }</Typography>
                  </item>
                </Stack>
                </Item>
              </Grid>
              <Grid xs={7}>
                <Item sx={{boxShadow: "none"}}>
                  <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
                    <Item sx={{boxShadow: "none"}}>
                      <Typography variant="body3" align="center" display="block" gutterBottom>Reserved room ID</Typography>
                      <Typography variant="body3" align="center" display="block" gutterBottom>{ props.reservation.roomId }</Typography>
                    </Item>
                    <Item sx={{boxShadow: "none"}}>
                      <Typography variant="body3" align="center" display="block" gutterBottom>Reserved Hall ID</Typography>
                      <Typography variant="body3" align="center" display="block" > { props.reservation.hallId }</Typography>
                    </Item>
                  </Stack>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </React.Fragment>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import BasicDatePicker from '../Common/BasicDatePicker';

const currencies = [
  {
    value: 'JPY',
    label: '¥',
    code: 'HH001',
  },
];

export default function AddSpecialReservationPopUp() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Special Reservation
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add Special Reservation"}
        </DialogTitle>

        <form action="" >
          <DialogContent>
              <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="specialreservationno"
                  name="specialreservationno"
                  label="Special Reservation Number"
                  type="text"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="serviceno"
                  name="serviceno"
                  label="Service Number"
                  type="text"
                  fullWidth
                  variant="outlined"
              />
              <TextField fullWidth
                id="outlined-select-holidayhome"
                margin="dense"
                select
                label="Select the holiday home"
                // defaultValue="EUR"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <BasicDatePicker
                fullWidth
                title="Check In Date"
              />
              <BasicDatePicker
                fullWidth
                title="Check Out Date"
              />
          </DialogContent>
          <DialogActions>
            <Button type='submit' autoFocus>
              Submit
            </Button>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </form>
        
      </Dialog>
    </React.Fragment>
  );
}

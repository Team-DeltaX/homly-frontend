// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const PayNowPopup = ({ onClose }) => {
//   const history = useHistory();

//   const handlePayNow = () => {
//     // Redirect to payment gateway
//     history.push('/payment');
//   };

//   const handlePayLater = () => {
//     // Close the popup
//     onClose();
//   };

//   return (
//     <div className="pay-now-popup">
//       <h2>Pay Now</h2>
//       <p>Please choose your payment method:</p>
//       <button onClick={handlePayNow}>Pay Now</button>
//       <button onClick={handlePayLater}>Pay Later</button>
//     </div>
//   );
// };

// export default PayNowPopup;

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(
    {
        isOpen,
        setIsOpen
    }) 
{
    const handleAlertClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setIsOpen(false);
      };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={isOpen}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to pay now for this reservation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can pay with any debit card with fully security.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose}>Pay Later</Button>
          <Button onClick={handleAlertClose} autoFocus>
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
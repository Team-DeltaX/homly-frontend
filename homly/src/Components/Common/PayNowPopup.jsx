import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import md5 from "crypto-js/md5";

export default function AlertDialog(
    {
        isOpen,
        setIsOpen
    }) 
{
  
  const orderId = 45896588;
  const name = "Cake";
  const amount = 4500;
  const merchantId = "1226126";
  const merchantSecret =
    "MzQxNTg0NDg5Mzk5NzMxOTMxNTE0NDI3NDI0MTIxNTA5ODc0NTM3";

  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  const amountFormated = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const currency = "LKR";

  const hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

  const payment = {
    sandbox: true, // if the account is sandbox or real
    merchant_id: "1226126", // Replace your Merchant ID
    return_url: "http://sample.com/return",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: amount,
    currency: currency,
    first_name: "Saman",
    last_name: "Perera",
    email: "samanp@gmail.com",
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka",
    hash: hash,
  };

// // Listen to the load event of the script element
// // Create a new script element
const script = document.createElement('script');
// Set the src attribute to the URL of the PayHere script
script.src = 'https://www.payhere.lk/lib/payhere.js';

document.body.appendChild(script);
  if (!window.payhere) {
    window.payhere = {};
  }
  function pay() {
    console.log("paying");
    window.payhere.startPayment(payment);
    console.log("after");
  }
  
  // Called when user completed the payment. It can be a successful payment or failure
  window.payhere.onCompleted = function onCompleted() {
    console.log("Payment completed");

    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:" + error);
  };
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
          <Button onClick={handleAlertClose} >Pay Later</Button>
          <Button onClick={pay} autoFocus>
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  ); 
}
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import md5 from "crypto-js/md5";

export default function AlertDialog({ isOpen, setIsOpen }) {
  
  const orderId = 45896588;
  const name = "Cake";
  const amount = 4500;
  const merchantId = "1226126";
  const merchantSecret =
    "MzQxNTg0NDg5Mzk5NzMxOTMxNTE0NDI3NDI0MTIxNTA5ODc0NTM3";

  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  const amountFormatted = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const currency = "LKR";

  const hash = md5(
    merchantId + orderId + amountFormatted + currency + hashedSecret
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
    status_code: 2,
    md5sig: '',
    first_name: "Saman",
    last_name: "Perera",
    email: "samanp@gmail.com",
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka",
    hash: hash,
  };

  useEffect(() => {
    // Load PayHere script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.payhere.lk/lib/payhere.js';
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaymentCompleted = (orderId) => {
    if (orderId) {
      console.log("Payment successful");
      // Update UI or perform actions for successful payment
    } else {
      console.log("Payment failed");
      // Handle failure scenario
    }
  };

  const handlePaymentDismissed = () => {
    console.log("Payment dismissed");
    // Handle payment dismissal
  };

  const handlePaymentError = (error) => {
    console.log("Error:", error);
    // Handle payment error
  };

  const pay = () => {
    console.log("Paying");
    window.payhere.startPayment(payment);
    // Event listeners for payment completion, dismissal, and error
    window.payhere.onCompleted = handlePaymentCompleted;
    window.payhere.onDismissed = handlePaymentDismissed;
    window.payhere.onError = handlePaymentError;
  };

  const handleAlertClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
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
            You can pay with any debit card with full security.
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

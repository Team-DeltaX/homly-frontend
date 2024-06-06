import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import md5 from "crypto-js/md5";
import AxiosClient from "../../services/AxiosClient";
import ErrorSnackbar from "../User/ErrorSnackbar";

export default function PayNowPopup({
  isOpen,
  setIsOpen,
  reservationId,
  price,
  employeeDetails,
  userDetails,
}) {
  const orderId = reservationId;
  const name = reservationId;
  const amount = parseInt(price);
  const merchantId = "1226126";
  const merchantSecret = "MzQxNTg0NDg5Mzk5NzMxOTMxNTE0NDI3NDI0MTIxNTA5ODc0NTM3";

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
    sandbox: true,
    merchant_id: "1226126",
    return_url: "http://sample.com/return",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: amount,
    currency: currency,
    status_code: 2,
    md5sig: "",
    first_name: employeeDetails.name,
    last_name: "",
    email: userDetails.email,
    phone: userDetails.contact_number,
    address: employeeDetails.address,
    city: "Colombo",
    country: "Sri Lanka",
    hash: hash,
  };
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.payhere.lk/lib/payhere.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaymentCompleted = (orderId) => {
    if (orderId) {
      AxiosClient.put(`/user/auth/reservation/completePayment`, {
        reservationId,
        status: true,
      })
        .then((response) => {
          setErrorStatus({
            isOpen: true,
            type: "warning",
            message: "Payment is ongoing. Do not refresh the page.",
          });
        })
        .catch((error) => {
          setErrorStatus({
            isOpen: true,
            type: "error",
            message: "Payment failed! Please try again.",
          });
        });
    } else {
      setErrorStatus({
        isOpen: true,
        type: "error",
        message: "Payment failed! Please try again.",
      });
    }
  };

  const handlePaymentDismissed = () => {
    AxiosClient.put(`/user/auth/reservation/completePayment`, {
      reservationId,
      status: false,
    })
      .then(() => {
        setErrorStatus({
          isOpen: true,
          type: "error",
          message: "Payment dismissed! Please try again.",
        });
      })
      .catch(() => {
        setErrorStatus({
          isOpen: true,
          type: "success",
          message: "Payment completed successfully!",
        });
      });
  };

  const handlePaymentError = () => {
    setErrorStatus({
      isOpen: true,
      type: "error",
      message: "Payment failed! Please try again",
    });
  };

  const pay = () => {
    setIsOpen(false);
    window.payhere.startPayment(payment);
    window.payhere.onCompleted = handlePaymentCompleted(orderId);
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
          <Button onClick={handleAlertClose}>Pay Later</Button>
          <Button onClick={pay} autoFocus>
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
      />
    </React.Fragment>
  );
}

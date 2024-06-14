import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const RefundButton = ({ paymentId }) => {
  const [refundStatus, setRefundStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const getAccessToken = async () => {
    try {
      const response = await axios.post(
        "https://sandbox.payhere.lk/merchant/v1/oauth/token",
        new URLSearchParams({
          grant_type: "client_credentials",
        }),
        {
          headers: {
            Authorization: `Basic ${process.env.REACT_APP_PAYHERE_AUTH_CODE}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data.access_token;
    } catch (error) {
      console.error("Error getting access token:", error);
      setRefundStatus({
        isOpen: true,
        type: "error",
        message: "Failed to retrieve access token.",
      });
    }
  };

  const handleRefund = async () => {
    const accessToken = await getAccessToken();
    if (!accessToken) return;

    try {
      const response = await axios.post(
        "https://sandbox.payhere.lk/merchant/v1/payment/refund",
        {
          payment_id: paymentId,
          description: "Refund initiated by admin",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === 1) {
        setRefundStatus({
          isOpen: true,
          type: "success",
          message: "Refund processed successfully.",
        });
      } else {
        setRefundStatus({
          isOpen: true,
          type: "error",
          message: "Refund failed: " + response.data.msg,
        });
      }
    } catch (error) {
      console.error("Error processing refund:", error);
      setRefundStatus({
        isOpen: true,
        type: "error",
        message: "Refund failed! Please try again.",
      });
    }
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleRefund}>
        Refund Payment
      </Button>
      <Snackbar
        open={refundStatus.isOpen}
        autoHideDuration={6000}
        onClose={() => setRefundStatus({ ...refundStatus, isOpen: false })}
      >
        <Alert
          onClose={() => setRefundStatus({ ...refundStatus, isOpen: false })}
          severity={refundStatus.type}
        >
          {refundStatus.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RefundButton;

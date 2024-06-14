import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentResponseHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log('Location Search:', location.search); // Log full search string
    console.log('Params:', params.toString()); // Log all parameters
    const paymentId = params.get('payment_id');
    console.log('Payment ID:', paymentId); // Log payment_id specifically

    // Call your function to handle payment completion
    if (paymentId) {
      handlePaymentCompleted(orderId, paymentId);
    } else {
      console.error('Payment ID is missing from redirect URL');
    }
  }, [location.search]);

  return null;
};

export default PaymentResponseHandler;

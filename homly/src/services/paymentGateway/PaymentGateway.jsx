import React, { Suspense, lazy } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const CheckoutForm = lazy(()=> import('./CheckoutForm'));
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OUj8qSEskJWUoe0fH3FB0MQzxoQZXjcXO86uJSkmOioymQkyxwGE9jFSgzYv8RZfgVgNYMJlJuHAAB6YUSVD9j800kyjU1MKq');

export default function PaymentGateway() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
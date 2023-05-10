import React from 'react';

import { useParams } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Payment/CheckoutForm';

const KEY = `${process.env.REACT_APP_STRIP_PUBLIC_KEY}`;

const stripePromise = loadStripe(KEY);

const Payment = () => {
  const { id, amt } = useParams();
  console.log(id);
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm id={id} amt={amt} />
      </Elements>
      <ol className="payment-int">
        <strong>* Important Instruction </strong>
        <li>Do not Refresh Page.</li>
        <li>Wait While Untill Payment gateway Load.</li>
        <li>
          incase of any error or payment failed go to Homepage and try again.
        </li>
        <li>
          if Money is deducted from your Account and error occured please
          Contact us on 1800-999-XXXX as soon as possible.
        </li>
      </ol>
    </>
  );
};

export default Payment;

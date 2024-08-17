"use client"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './StripePaymentFrom';


const stripePromise = loadStripe("pk_test_51NEqyvKercfCCQ4O9KRbuD3xFUuv0z4KwXr0bk0vueDlUn6tHBOO7Fh9zNKCQL3JbquxzPgTRVTjgiyi7x90po2B00SxxDLqn5");

const StripePayment = () => (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
);


export default StripePayment


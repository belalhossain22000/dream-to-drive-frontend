"use client"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm: React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log("// Stripe.js has not yet loaded.");
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            return;
        }

        const response = await fetch('http://localhost:3000/api/v1/create-setup-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const { clientSecret } = await response.json();

        const result = await stripe.confirmCardSetup(clientSecret, {
            payment_method: {
                card: cardElement,
            },
        });

        if (result.error) {
            console.log('[error]', result.error);
        } else {
            console.log('[SetupIntent]', result.setupIntent);
            if (result.setupIntent.status === 'succeeded') {
                // Card is successfully verified
                console.log('Card is valid and verified');
            } else {
                // Handle other statuses accordingly
                console.log('Card verification failed');
            }
        }
    };

    const cardElementOptions = {
        hidePostalCode: true,
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow-md rounded-md bg-white">
            <div className="mb-4">
                <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">
                    Credit or debit card
                </label>
                <div className="mt-1">
                    <CardElement
                        id="card-element"
                        options={cardElementOptions}
                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <button
                type="submit"
                disabled={!stripe}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
        </form>
    );
};

export default PaymentForm;

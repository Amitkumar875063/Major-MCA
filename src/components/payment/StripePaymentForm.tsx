import React, { useState } from 'react';
import { useStripe, useElements, Elements, CardElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import stripePromise from '@/lib/stripe';

interface StripePaymentFormProps {
  amount: number;
  serviceDetails: {
    name: string;
    category: string;
    duration: string;
  };
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentForm: React.FC<StripePaymentFormProps> = ({
  amount,
  serviceDetails,
  onSuccess,
  onCancel,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  React.useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount,
            serviceDetails,
          }),
        });

        const data = await response.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setErrorMessage('Could not create payment intent');
        }
      } catch (error) {
        setErrorMessage('Error creating payment intent');
      }
    };

    createPaymentIntent();
  }, [amount, serviceDetails]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: 'Test User',
          },
        },
      });

      if (error) {
        setErrorMessage(error.message || 'An error occurred');
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred');
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Complete Your Payment</h2>
        <p className="text-gray-600">Amount: ₹{amount.toLocaleString()}</p>
      </div>

      <div className="mb-6">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      {errorMessage && (
        <div className="text-red-600 text-sm mt-4">{errorMessage}</div>
      )}

      <div className="flex space-x-4 mt-6">
        <Button
          type="submit"
          disabled={isLoading || !stripe}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
        >
          {isLoading ? 'Processing...' : 'Pay Now'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  );
};

export default StripePaymentForm;

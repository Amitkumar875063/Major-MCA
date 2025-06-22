import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51RDoN62fPuIma0hQJMCXsRNGUKpXpBPPSsxPxKGjZpGBKJGEPKEWTYMGULZBCXQWEFGHJKLMNOPQRSTUVWXYZ', {
  apiVersion: '2023-10-16',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { amount, serviceDetails } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to paise
      currency: 'inr',
      payment_method_types: ['card'],
      metadata: {
        serviceName: serviceDetails.name,
        serviceCategory: serviceDetails.category,
        duration: serviceDetails.duration,
      },
      description: `Payment for ${serviceDetails.name} service`,
    });

    // Return the PaymentIntent client secret
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ message: 'Error creating payment intent' });
  }
}

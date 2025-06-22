import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentSuccessPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your payment. Your service has been booked successfully.
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => router.push('/')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Return to Home
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push('/services')}
            className="w-full"
          >
            Book Another Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;

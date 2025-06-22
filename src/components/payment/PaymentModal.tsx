import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

interface PaymentModalProps {
  amount: number;
  onClose: () => void;
  phoneNumber: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ amount, onClose, phoneNumber }) => {
  const paymentMethods = [
    {
      title: 'UPI',
      offers: '2 Offers',
      icons: ['/images/payment/gpay.png', '/images/payment/phonepe.png', '/images/payment/paytm.png'],
    },
    {
      title: 'Cards',
      icons: ['/images/payment/visa.png', '/images/payment/mastercard.png', '/images/payment/rupay.png'],
    },
    {
      title: 'EMI',
      icons: ['/images/payment/emi.png'],
    },
    {
      title: 'Netbanking',
      icons: ['/images/payment/sbi.png', '/images/payment/axis.png', '/images/payment/hdfc.png'],
    },
    {
      title: 'Wallet',
      icons: ['/images/payment/paytm-wallet.png', '/images/payment/phonepe-wallet.png', '/images/payment/mobikwik.png'],
    },
  ];

  const recommendedUPIApps = [
    {
      name: 'UPI - Google Pay',
      icon: '/images/payment/gpay.png',
    },
    {
      name: 'UPI - PayTM',
      icon: '/images/payment/paytm.png',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-xl bg-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <h2 className="text-xl font-bold">One Stop Home</h2>
            <div className="text-sm text-gray-500">✓ Razorpay Trusted Business</div>
          </div>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Price Summary */}
        <div className="p-4 bg-purple-50">
          <h3 className="text-sm font-medium mb-2">Price Summary</h3>
          <div className="text-2xl font-bold">₹{amount.toLocaleString()}</div>
          <div className="text-sm text-gray-600 mt-2">
            Using as +91 {phoneNumber}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Payment Options</h3>
            <button className="text-sm text-gray-500">•••</button>
          </div>

          {/* Recommended Section */}
          <div className="mb-4">
            <div className="text-sm font-medium mb-2">Recommended</div>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <div
                  key={method.title}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {method.icons.map((icon, idx) => (
                        <div key={idx} className="w-6 h-6 relative">
                          <Image
                            src={icon}
                            alt={method.title}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <span>{method.title}</span>
                  </div>
                  {method.offers && (
                    <span className="text-sm text-green-600">{method.offers}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* UPI QR Section */}
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">UPI QR</h4>
              <span className="text-sm text-gray-500">9:44</span>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                QR Code Here
              </div>
            </div>
            <p className="text-sm text-center text-gray-600 mb-4">
              Scan the QR using any UPI App
            </p>
            <div className="flex justify-center space-x-4">
              {recommendedUPIApps.map((app) => (
                <div key={app.name} className="w-8 h-8 relative">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Available Offers */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/payment/cred.png"
                  alt="CRED"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span>UPTO ₹200 CRED cashback on CRED</span>
              </div>
              <button className="text-purple-600 text-sm">View all</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentModal;

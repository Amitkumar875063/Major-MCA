import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const StripePaymentForm = dynamic(
  () => import('@/components/payment/StripePaymentForm'),
  { ssr: false }
);
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MapPin, Plus, Check } from 'lucide-react';
import AddressForm from '@/components/address/AddressForm';

const services = [
  {
    category: 'Electrician Services',
    items: [
      { name: 'Home Wiring', price: 499, duration: '2-3 hours' },
      { name: 'Electrical Repairs', price: 399, duration: '1-2 hours' },
      { name: 'Appliance Installation', price: 599, duration: '1-2 hours' },
      { name: 'Maintenance', price: 799, duration: '2-4 hours' },
      { name: 'Safety Inspection', price: 299, duration: '1 hour' }
    ]
  },
  {
    category: 'Plumbing Services',
    items: [
      { name: 'Pipe Repairs', price: 449, duration: '1-2 hours' },
      { name: 'Fixture Installation', price: 549, duration: '2-3 hours' },
      { name: 'Drain Cleaning', price: 399, duration: '1-2 hours' },
      { name: 'Maintenance', price: 699, duration: '2-4 hours' },
      { name: 'Emergency', price: 799, duration: '1-3 hours' }
    ]
  },
  {
    category: 'Home Cleaning',
    items: [
      { name: 'Deep Cleaning', price: 1999, duration: '4-6 hours' },
      { name: 'Regular Cleaning', price: 999, duration: '2-3 hours' },
      { name: 'Kitchen Deep Clean', price: 799, duration: '2-3 hours' },
      { name: 'Bathroom Deep Clean', price: 599, duration: '1-2 hours' },
      { name: 'Carpet Cleaning', price: 699, duration: '2-3 hours' }
    ]
  },
  {
    category: 'Carpentry Services',
    items: [
      { name: 'Furniture Repair', price: 599, duration: '1-3 hours' },
      { name: 'Furniture Assembly', price: 499, duration: '1-2 hours' },
      { name: 'Custom Woodwork', price: 1499, duration: 'Varies' },
      { name: 'Door Repair/Install', price: 799, duration: '2-3 hours' },
      { name: 'Cabinet Work', price: 999, duration: '3-5 hours' }
    ]
  },
  {
    category: 'Painting Services',
    items: [
      { name: 'Interior Painting', price: 1499, duration: '1-2 days' },
      { name: 'Exterior Painting', price: 2499, duration: '2-3 days' },
      { name: 'Touch-up', price: 599, duration: '2-4 hours' },
      { name: 'Wallpaper', price: 999, duration: '4-6 hours' },
      { name: 'Texture', price: 1299, duration: '1-2 days' }
    ]
  },
  {
    category: 'AC Services',
    items: [
      { name: 'AC Servicing', price: 699, duration: '1-2 hours' },
      { name: 'AC Repair', price: 899, duration: '2-4 hours' },
      { name: 'AC Installation', price: 1499, duration: '2-3 hours' },
      { name: 'Gas Refilling', price: 999, duration: '1-2 hours' },
      { name: 'Annual Maintenance', price: 2499, duration: '2-3 hours' }
    ]
  }
];

interface Address {
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

const BookingPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('online');
  const [couponCode, setCouponCode] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState<{ name: string; price: number; duration: string } | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  // Sample service pricing
  const serviceDetails = {
    basePrice: 119,
    taxesAndFee: 13,
    visitingCharges: 50,
    total: 182
  };

  return (
    <>
      <Head>
        <title>Book Service - One Stop Home</title>
        <meta name="description" content="Book your home service with One Stop Home" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button onClick={() => window.history.back()} className="text-gray-600 hover:text-gray-900">
              ← Back
            </button>
          </div>

          <div className="space-y-8">
            {/* Service Details */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Select Service
              </h2>
              
              <div className="space-y-6">
                {/* Service Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category
                  </label>
                  <select
                    className="w-full rounded-md border border-gray-300 p-2"
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedService(null);
                    }}
                  >
                    <option value="">Select a category</option>
                    {services.map((service) => (
                      <option key={service.category} value={service.category}>
                        {service.category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Selection */}
                {selectedCategory && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service
                    </label>
                    <div className="space-y-2">
                      {services
                        .find((s) => s.category === selectedCategory)
                        ?.items.map((item) => (
                          <div
                            key={item.name}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors ${selectedService?.name === item.name
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-purple-300'}`}
                            onClick={() => setSelectedService(item)}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.duration}</p>
                              </div>
                              <span className="font-semibold">₹{item.price}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {selectedService && (
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service Price</span>
                      <span>₹{selectedService.price}</span>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Taxes and Fee</span>
                        <span>₹{Math.round(selectedService.price * 0.12)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Visiting Charges</span>
                        <span>₹50</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <span>Order total</span>
                        <span>₹{selectedService.price + Math.round(selectedService.price * 0.12) + 50}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Payment Method
              </h2>

              <RadioGroup
                defaultValue="online"
                value={selectedPaymentMethod}
                onValueChange={setSelectedPaymentMethod}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online">Pay Online</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="after" id="after" />
                  <Label htmlFor="after">Pay After Service</Label>
                </div>
              </RadioGroup>
            </Card>

            {/* Coupon Code */}
            <Card className="p-6">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                />
                <Button variant="secondary">
                  Apply
                </Button>
              </div>
            </Card>

            {/* Address Selection */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Service Address
              </h2>
              
              {selectedAddress ? (
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{selectedAddress.name}</div>
                      <div className="text-sm text-gray-500">{selectedAddress.phone}</div>
                      <div className="text-sm text-gray-600">
                        {selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}
                        {selectedAddress.landmark && <>
                          <br />Landmark: {selectedAddress.landmark}
                        </>}
                      </div>
                    </div>
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <AddressForm onSave={setSelectedAddress} />
                </div>
              ) : (
                <AddressForm onSave={setSelectedAddress} />
              )}
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button 
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => setShowPayment(true)}
                disabled={!selectedService || !selectedAddress}
              >
                Book Instant
              </Button>
              <Button variant="outline" className="flex-1">
                Schedule for later
              </Button>
            </div>

            {/* Note */}
            <div className="text-sm text-gray-500 text-center">
              * Prices may vary depending on the complexity of work and materials required
            </div>
          </div>
        </div>
      </main>

      {/* Payment Modal */}
      {showPayment && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl">
            <StripePaymentForm
              amount={selectedService.price + Math.round(selectedService.price * 0.12) + 50}
              serviceDetails={{
                name: selectedService.name,
                category: selectedCategory,
                duration: selectedService.duration,
              }}
              onSuccess={() => {
                setShowPayment(false);
                // You can add additional success handling here
              }}
              onCancel={() => setShowPayment(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingPage;

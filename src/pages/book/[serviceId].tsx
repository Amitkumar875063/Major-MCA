import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from 'lucide-react';

// Service pricing and details
const serviceDetails = {
  electrician: {
    title: 'Electrician Services',
    description: 'Professional electrical services for your home',
    basePrice: 499,
    services: [
      { id: 'wiring', name: 'Home Wiring', price: 499, duration: '2-3 hours' },
      { id: 'repair', name: 'Electrical Repairs', price: 399, duration: '1-2 hours' },
      { id: 'installation', name: 'Appliance Installation', price: 599, duration: '1-2 hours' },
      { id: 'maintenance', name: 'Electrical Maintenance', price: 799, duration: '2-4 hours' },
      { id: 'inspection', name: 'Safety Inspection', price: 299, duration: '1 hour' }
    ]
  },
  plumber: {
    title: 'Plumbing Services',
    description: 'Expert plumbing solutions for your home',
    basePrice: 449,
    services: [
      { id: 'repair', name: 'Pipe Repairs', price: 449, duration: '1-2 hours' },
      { id: 'installation', name: 'Fixture Installation', price: 549, duration: '2-3 hours' },
      { id: 'cleaning', name: 'Drain Cleaning', price: 399, duration: '1-2 hours' },
      { id: 'maintenance', name: 'Plumbing Maintenance', price: 699, duration: '2-4 hours' },
      { id: 'emergency', name: 'Emergency Service', price: 799, duration: 'ASAP' }
    ]
  },
  cleaning: {
    title: 'Home Cleaning Services',
    description: 'Professional cleaning services for your home',
    basePrice: 999,
    services: [
      { id: 'deep', name: 'Deep Cleaning', price: 1999, duration: '6-8 hours' },
      { id: 'regular', name: 'Regular Cleaning', price: 999, duration: '3-4 hours' },
      { id: 'kitchen', name: 'Kitchen Deep Clean', price: 799, duration: '2-3 hours' },
      { id: 'bathroom', name: 'Bathroom Deep Clean', price: 599, duration: '1-2 hours' },
      { id: 'carpet', name: 'Carpet Cleaning', price: 699, duration: '2-3 hours' }
    ]
  },
  carpentry: {
    title: 'Carpentry Services',
    description: 'Expert carpentry work for your home',
    basePrice: 599,
    services: [
      { id: 'furniture', name: 'Furniture Repair', price: 599, duration: '1-3 hours' },
      { id: 'installation', name: 'Furniture Assembly', price: 499, duration: '2-4 hours' },
      { id: 'custom', name: 'Custom Woodwork', price: 1499, duration: 'Varies' },
      { id: 'doors', name: 'Door Repair/Install', price: 799, duration: '2-3 hours' },
      { id: 'cabinets', name: 'Cabinet Work', price: 999, duration: '3-5 hours' }
    ]
  },
  painting: {
    title: 'Painting Services',
    description: 'Professional painting services for your home',
    basePrice: 1499,
    services: [
      { id: 'interior', name: 'Interior Painting', price: 1499, duration: '1-2 days' },
      { id: 'exterior', name: 'Exterior Painting', price: 2499, duration: '2-3 days' },
      { id: 'touch-up', name: 'Touch-up Painting', price: 599, duration: '2-4 hours' },
      { id: 'wallpaper', name: 'Wallpaper Installation', price: 999, duration: '4-6 hours' },
      { id: 'texture', name: 'Texture Painting', price: 1299, duration: '1-2 days' }
    ]
  },
  'ac-repair': {
    title: 'AC Repair Services',
    description: 'Professional AC repair and maintenance',
    basePrice: 699,
    services: [
      { id: 'service', name: 'AC Servicing', price: 699, duration: '1-2 hours' },
      { id: 'repair', name: 'AC Repair', price: 899, duration: '2-3 hours' },
      { id: 'installation', name: 'AC Installation', price: 1499, duration: '3-4 hours' },
      { id: 'gas', name: 'Gas Refilling', price: 999, duration: '1-2 hours' },
      { id: 'maintenance', name: 'Annual Maintenance', price: 2499, duration: 'Yearly' }
    ]
  }
};

export default function BookingPage() {
  const router = useRouter();
  const { serviceId } = router.query;
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');

  const service = serviceId && serviceDetails[serviceId as keyof typeof serviceDetails];
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle>Service Not Found</CardTitle>
            <CardDescription>
              The requested service could not be found.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/services">
              <Button className="w-full">View All Services</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to create the booking
    // For now, we'll just redirect to a success page
    router.push('/register?type=customer');
  };

  return (
    <>
      <Head>
        <title>Book {service.title} - One Stop Home</title>
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Select Service</Label>
                  <Select value={selectedService} onValueChange={setSelectedService} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {service.services.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name} - ₹{item.price} ({item.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <div className="relative">
                      <Input
                        id="date"
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select value={time} onValueChange={setTime} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                        <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Service Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter your complete address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Proceed to Register & Book
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

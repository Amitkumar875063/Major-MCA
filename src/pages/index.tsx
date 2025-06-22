import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, Clock, Star, Zap, Navigation } from 'lucide-react';
import { toast } from 'react-hot-toast';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hover: { scale: 1.02, transition: { duration: 0.3 } },
  tap: { scale: 0.98 },
};

// Dynamically import components
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
});

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
});

export default function Home() {
  const [location, setLocation] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookNow = () => {
    if (!selectedService) {
      toast.error('Please select a service');
      return;
    }
    window.location.href = `/book/${selectedService}`;
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      return;
    }

    setIsLocating(true);
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Using OpenStreetMap Nominatim for reverse geocoding
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
          );
          const data = await response.json();
          
          if (data.display_name) {
            const address = data.display_name.split(',').slice(0, 3).join(','); // Get first 3 parts of the address
            setLocation(address);
            toast.success('Location detected successfully!');
          } else {
            setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            toast.success('Location detected (coordinates)');
          }
        } catch (error) {
          console.error('Error getting address:', error);
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          toast.success('Location detected (coordinates)');
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        toast.error('Unable to retrieve your location');
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const services = [
    {
      id: 'electrician',
      title: 'Electrician',
      image: '/images/electrician.jpg',
      description: 'Professional electrical installations and repairs for your home',
    },
    {
      id: 'plumber',
      title: 'Plumber',
      image: '/images/plumber.jpg',
      description: 'Expert plumbing services for leaks, installations, and repairs',
    },
    {
      id: 'cleaning',
      title: 'Home Cleaning',
      image: '/images/cleaning.jpg',
      description: 'Professional cleaning services for a spotless home',
    },
    {
      id: 'carpentry',
      title: 'Carpentry',
      image: '/images/carpentry.jpg',
      description: 'Custom carpentry solutions for your home and furniture',
    },
    {
      id: 'painting',
      title: 'Painting',
      image: '/images/painting.jpg',
      description: 'Transform your space with professional painting services',
    },
    {
      id: 'ac-repair',
      title: 'AC Repair',
      image: '/images/ac-repair.jpg',
      description: 'Expert air conditioner servicing and repair',
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>One Stop Home - Home Services</title>
        <meta name="description" content="Find instant home services near you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-purple-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Find Instant <span className="text-yellow-300">Home Services</span> & Book
                </h1>
                <p className="text-lg mb-8">
                  Don't wait - connect with live experts for all your home needs instantly
                </p>
              </motion.div>

              {/* Search Box */}
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Your Location"
                      className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                    />
                    <button
                      type="button"
                      onClick={handleDetectLocation}
                      disabled={isLocating}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Use current location"
                    >
                      <Navigation className={`w-4 h-4 ${isLocating ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none text-gray-700"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      onClick={handleBookNow}
                      className="bg-purple-700 hover:bg-purple-800 text-white w-full md:w-auto"
                    >
                      Book Instant
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="hidden md:block relative h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div 
                className="absolute -top-12 left-10 bg-white p-2 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-full max-w-[400px] h-[300px] rounded-lg overflow-hidden bg-gray-100 shadow-xl">
                  <div className="relative w-full h-full">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/hero/hero-service.jpg"
                        alt="Professional home service expert"
                        fill
                        sizes="(max-width: 640px) 90vw, 400px"
                        priority
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                        onError={(e) => {
                          // Fallback to a solid color if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width=\'400\' height=\'300\' viewBox=\'0 0 400 300\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23F3F4F6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'16\' fill=\'%239CA3AF\'%3EHome Service Professional%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">Professional Home Services</p>
                      <p className="text-xs opacity-90">Available 24/7 for all your home needs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="opacity-0 animate-fadeIn">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg" />}>
            <FeaturesSection />
          </Suspense>
        </div>
      </div>

      <div className="relative">
        <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg" />}>
            <ServicesSection />
          </Suspense>
        </div>
      </div>

      <div className="relative">
        <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg" />}>
            <CTASection />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

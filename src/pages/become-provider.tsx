import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const serviceCategories = [
  {
    id: 'electrician',
    title: 'Electrician Services',
    requirements: [
      'Valid electrical license',
      'Minimum 2 years of experience',
      'Own basic tools and equipment',
      'Knowledge of electrical codes and safety standards'
    ],
    services: [
      'Home Wiring (₹499)',
      'Electrical Repairs (₹399)',
      'Appliance Installation (₹599)',
      'Electrical Maintenance (₹799)',
      'Safety Inspection (₹299)'
    ]
  },
  {
    id: 'plumber',
    title: 'Plumbing Services',
    requirements: [
      'Plumbing certification',
      'Minimum 2 years of experience',
      'Own tools and equipment',
      'Knowledge of plumbing codes'
    ],
    services: [
      'Pipe Repairs (₹449)',
      'Fixture Installation (₹549)',
      'Drain Cleaning (₹399)',
      'Maintenance (₹699)',
      'Emergency Services (₹799)'
    ]
  },
  {
    id: 'cleaning',
    title: 'Home Cleaning Services',
    requirements: [
      'Professional cleaning experience',
      'Knowledge of cleaning products and safety',
      'Own cleaning supplies',
      'Physical fitness for demanding work'
    ],
    services: [
      'Deep Cleaning (₹1,999)',
      'Regular Cleaning (₹999)',
      'Kitchen Deep Clean (₹799)',
      'Bathroom Deep Clean (₹599)',
      'Carpet Cleaning (₹699)'
    ]
  },
  {
    id: 'carpentry',
    title: 'Carpentry Services',
    requirements: [
      'Carpentry certification or equivalent experience',
      'Minimum 3 years of experience',
      'Own professional tools',
      'Portfolio of previous work'
    ],
    services: [
      'Furniture Repair (₹599)',
      'Furniture Assembly (₹499)',
      'Custom Woodwork (₹1,499)',
      'Door Repair/Install (₹799)',
      'Cabinet Work (₹999)'
    ]
  },
  {
    id: 'painting',
    title: 'Painting Services',
    requirements: [
      'Professional painting experience',
      'Knowledge of paint types and techniques',
      'Own painting equipment',
      'Attention to detail'
    ],
    services: [
      'Interior Painting (₹1,499)',
      'Exterior Painting (₹2,499)',
      'Touch-up Painting (₹599)',
      'Wallpaper Installation (₹999)',
      'Texture Painting (₹1,299)'
    ]
  },
  {
    id: 'ac-repair',
    title: 'AC Repair Services',
    requirements: [
      'HVAC certification',
      'Minimum 2 years of experience',
      'Own diagnostic tools',
      'Knowledge of different AC brands and models'
    ],
    services: [
      'AC Servicing (₹699)',
      'AC Repair (₹899)',
      'AC Installation (₹1,499)',
      'Gas Refilling (₹999)',
      'Annual Maintenance (₹2,499)'
    ]
  }
];

const generalRequirements = [
  'Valid government ID proof',
  'Recent passport size photographs',
  'Bank account details for payments',
  'Smartphone with internet connectivity',
  'Willingness to use our service provider app',
  'Good communication skills',
  'Professional behavior and punctuality',
  'Commitment to quality service'
];

const BecomeProvider = () => {
  return (
    <>
      <Head>
        <title>Become a Service Provider - One Stop Home</title>
        <meta 
          name="description" 
          content="Join One Stop Home as a service provider. Learn about requirements, services, and how to get started." 
        />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Become a Service Provider
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing network of professional service providers and connect with customers in your area.
            </p>
          </div>

          {/* General Requirements Section */}
          <div className="mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                General Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generalRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{requirement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Service Categories Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Service Categories & Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <Card key={category.id} className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {category.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services & Base Pricing:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, index) => (
                        <li key={index} className="text-gray-600">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-purple-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our platform today and start growing your business. We provide the tools and platform you need to succeed.
              </p>
              <div className="space-x-4">
                <Link href="/register?type=provider">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Register as Provider
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default BecomeProvider;

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  // Service categories data
  const serviceCategories = [
    {
      id: 'electrician',
      title: 'Electrician',
      image: '/images/electrician.jpg',
      description: 'Professional electrical services for your home and office needs. Our expert electricians handle installations, repairs, and maintenance.',
      price: '499',
      features: [
        'Home Wiring (₹499)',
        'Electrical Repairs (₹399)',
        'Appliance Installation (₹599)',
        'Electrical Maintenance (₹799)',
        'Safety Inspection (₹299)'
      ]
    },
    {
      id: 'plumber',
      title: 'Plumber',
      image: '/images/plumber.jpg',
      description: 'Complete plumbing solutions for residential and commercial properties. Our professional plumbers ensure quality service.',
      price: '449',
      features: [
        'Pipe Repairs (₹449)',
        'Fixture Installation (₹549)',
        'Drain Cleaning (₹399)',
        'Plumbing Maintenance (₹699)',
        'Emergency Service (₹799)'
      ]
    },
    {
      id: 'cleaning',
      title: 'Home Cleaning',
      image: '/images/cleaning.jpg',
      description: 'Professional cleaning services for homes and offices. Our trained cleaning staff deliver spotless results every time.',
      price: '999',
      features: [
        'Deep Cleaning (₹1,999)',
        'Regular Cleaning (₹999)',
        'Kitchen Deep Clean (₹799)',
        'Bathroom Deep Clean (₹599)',
        'Carpet Cleaning (₹699)'
      ]
    },
    {
      id: 'carpentry',
      title: 'Carpentry',
      image: '/images/home-service.jpg',
      description: 'Expert carpentry services for your home furniture and woodwork needs. Our skilled carpenters create and restore with precision.',
      price: '599',
      features: [
        'Furniture Repair (₹599)',
        'Furniture Assembly (₹499)',
        'Custom Woodwork (₹1,499)',
        'Door Repair/Install (₹799)',
        'Cabinet Work (₹999)'
      ]
    },
    {
      id: 'painting',
      title: 'Painting',
      image: '/images/home-service.jpg',
      description: 'Transform your space with our professional painting services. Our painters deliver flawless finishes for interior and exterior surfaces.',
      price: '1,499',
      features: [
        'Interior Painting (₹1,499)',
        'Exterior Painting (₹2,499)',
        'Touch-up Painting (₹599)',
        'Wallpaper Installation (₹999)',
        'Texture Painting (₹1,299)'
      ]
    },
    {
      id: 'ac-repair',
      title: 'AC Repair',
      image: '/images/home-service.jpg',
      description: 'Professional air conditioner repair and maintenance services. Our technicians service all major brands and models.',
      price: '699',
      features: [
        'AC Servicing (₹699)',
        'AC Repair (₹899)',
        'AC Installation (₹1,499)',
        'Gas Refilling (₹999)',
        'Annual Maintenance (₹2,499)'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - One Stop Home</title>
        <meta name="description" content="Explore our wide range of professional home services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-14">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Discover our wide range of home services delivered by verified professionals.
            Quality service guaranteed for all your home needs.
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-3">{category.title}</h2>
                      <p className="text-gray-600 mb-4">{category.description}</p>

                      <h3 className="font-semibold text-gray-800 mb-2">Popular Services:</h3>
                      <ul className="space-y-2 mb-6">
                        {category.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <Link href={`/services/${category.id}`} passHref>
                        <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                          Learn More
                        </Button>
                      </Link>
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-semibold text-purple-600">From ₹{category.price}</p>
                          <Link href={`/book/${category.id}`}>
                            <Button className="bg-purple-600 hover:bg-purple-700">
                              Book Now
                            </Button>
                          </Link>
                        </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose One Stop Home Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Professionals</h3>
              <p className="text-gray-600">
                Every service provider on our platform is thoroughly verified, background-checked, and trained to deliver quality service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our service quality. If you're not satisfied, we'll work to make it right or provide a refund.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden charges or surprise fees. You'll know exactly what you're paying for before the service begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book a service today and experience the One Stop Home difference. Our professional service providers are ready to help.
          </p>
          <Link href="/register?type=customer">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Book a Service Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

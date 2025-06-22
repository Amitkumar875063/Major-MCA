import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardHover = {
  scale: 1.03,
  transition: { duration: 0.3, ease: 'easeOut' },
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Popular Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our wide range of professional home services
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={item}>
              <Link href={`/services/${service.id}`} passHref>
                <motion.div
                  whileHover={cardHover}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="cursor-pointer h-full overflow-hidden">
                    <motion.div 
                      className="relative h-48 w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 2} // Only preload first 2 images
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-lg"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/services" passHref>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

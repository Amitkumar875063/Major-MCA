import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-16 bg-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Looking For Professional Home Services?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who've found reliable home service
          professionals on One Stop Home
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto">
              Book a Service Now
            </Button>
          </Link>
          <Link href="/register?type=provider">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto">
              Become a Service Provider
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

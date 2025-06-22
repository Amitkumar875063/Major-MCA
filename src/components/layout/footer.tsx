import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">One Stop Home</h3>
            <p className="text-gray-300 mb-4">
              Find and book local at-home services in real time. We connect you with verified professionals for all your home service needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/electrician" className="text-gray-300 hover:text-white">
                  Electrician
                </Link>
              </li>
              <li>
                <Link href="/services/plumber" className="text-gray-300 hover:text-white">
                  Plumber
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning" className="text-gray-300 hover:text-white">
                  Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry" className="text-gray-300 hover:text-white">
                  Carpentry
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="text-gray-300 hover:text-white">
                  Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Main Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@onestophome.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} One Stop Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

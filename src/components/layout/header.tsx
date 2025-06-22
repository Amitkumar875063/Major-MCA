import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full py-4 px-6 bg-purple-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-40">
              <Image
                src="/images/logo.png"
                alt="One Stop Home"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white hover:text-purple-200 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="outline" className="text-white border-2 border-white bg-transparent hover:bg-white hover:text-purple-600 transition-colors">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" className="text-white border-2 border-white bg-transparent hover:bg-white hover:text-purple-600 transition-colors">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-purple-600 text-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white hover:text-purple-200 transition-colors text-lg py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 mt-4">
                  <Button variant="outline" className="text-white border-white hover:bg-purple-700">
                    Sign In
                  </Button>
                  <Link href="/register">
                    <Button variant="default" className="bg-white text-purple-600 hover:bg-gray-100">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

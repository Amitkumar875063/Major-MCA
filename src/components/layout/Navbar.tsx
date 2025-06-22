import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession, signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2 } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = status === 'authenticated';
  const isSessionLoading = status === 'loading'; 
  
  // Debug log to see session status
  useEffect(() => {
    console.log('Session status:', status);
    console.log('Session data:', session);
  }, [status, session]);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({ callbackUrl: '/' });
      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSignIn = () => {
    router.push('/signin');
  }; 
  
  const handleRegister = () => {
    router.push('/register');
  };

  const getLinkClass = (path: string, isMobile: boolean = false) => {
    const isActive = path === '/' ? router.pathname === path : router.pathname.startsWith(path);
    
    return isMobile
      ? `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive
          ? 'border-purple-600 text-purple-600 bg-purple-50'
          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`
      : `inline-flex items-center px-1 pt-1 border-b-2 ${isActive
          ? 'border-purple-600 text-purple-600'
          : 'border-transparent text-gray-700 hover:text-purple-600'}`;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-purple-600">
                One Stop Home
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className={getLinkClass('/')}
              >
                Home
              </Link>
              
              <Link href="/services" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  router.pathname.startsWith('/services')
                    ? 'border-purple-600 text-purple-600' 
                    : 'border-transparent text-gray-700 hover:text-purple-600'
                }`}>
                Services
              </Link>

              <Link href="/about" 
                className={getLinkClass('/about')}
              >
                About Us
              </Link>

              <Link 
                href="/become-provider" 
                className={getLinkClass('/become-provider')}
              >
                Become a Provider
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {isSessionLoading ? (
              <div className="flex items-center justify-center p-2">
                <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
              </div>
            ) : isAuthenticated && session?.user ? (
              <div className="flex items-center space-x-4">
                <DropdownMenu onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="relative h-8 w-8 rounded-full hover:bg-gray-100"
                      disabled={isLoading}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage 
                          src={session.user.image || ''} 
                          alt={session.user.name || 'User'} 
                        />
                        <AvatarFallback className="bg-purple-100 text-purple-600">
                          {session.user.name ? session.user.name.charAt(0).toUpperCase() : 'U'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {session.user.name || 'User'}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground truncate max-w-[200px]">
                          {session.user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuItem 
                      onClick={handleSignOut} 
                      className="cursor-pointer focus:bg-red-50 focus:text-red-600"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing out...
                        </>
                      ) : 'Sign out'}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-sm font-medium text-gray-700 hidden md:inline">
                  {session.user.name?.split(' ')[0] || 'User'}
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 hover:text-purple-700"
                  onClick={handleSignIn}
                  disabled={isLoading}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={handleRegister}
                  disabled={isLoading}
                >
                  Register
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {isSessionLoading ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
            </div>
          ) : isAuthenticated && session?.user ? (
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Avatar className="h-10 w-10">
                    <AvatarImage 
                      src={session.user.image || ''} 
                      alt={session.user.name || 'User'} 
                    />
                    <AvatarFallback className="bg-purple-100 text-purple-600">
                      {session.user.name ? session.user.name.charAt(0).toUpperCase() : 'U'}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {session.user.name || 'User'}
                  </div>
                  <div className="text-sm font-medium text-gray-500 truncate max-w-[200px]">
                    {session.user.email}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <Link 
            href="/" 
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              router.pathname === '/'
                ? 'border-purple-600 text-purple-600 bg-purple-50'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
          >
            Home
          </Link>
          
          <Link href="/services" 
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              router.pathname.startsWith('/services')
                ? 'border-purple-600 text-purple-600 bg-purple-50'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}>
            Services
          </Link>

          <Link href="/about" className={getLinkClass('/about', true)}>
            About Us
          </Link>

          <Link href="/become-provider" className={getLinkClass('/become-provider', true)}>
            Become a Provider
          </Link>

          {!isSessionLoading && !isAuthenticated && (
            <>
              <button
                onClick={handleSignIn}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  router.pathname === '/signin'
                    ? 'border-purple-600 text-purple-600 bg-purple-50'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                ) : 'Sign In'}
              </button>
              <button
                onClick={handleRegister}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  router.pathname === '/register'
                    ? 'border-purple-600 text-purple-600 bg-purple-50'
                    : 'border-transparent text-purple-600 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700'
                }`}
                disabled={isLoading}
              >
                Register
              </button>
            </>
          )}
          
          {isAuthenticated && session?.user && (
            <button
              onClick={handleSignOut}
              className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-red-600 hover:bg-red-50 hover:border-red-100 hover:text-red-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing out...
                </div>
              ) : 'Sign Out'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

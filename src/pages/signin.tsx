import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import RegistrationSuccess from '@/components/auth/RegistrationSuccess';

const SignInPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (router.query.registered === 'true') {
      setShowSuccess(true);
      // Remove the query parameter after 5 seconds
      const timer = setTimeout(() => {
        router.replace('/signin', undefined, { shallow: true });
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [router.query.registered]);

  if (session) {
    router.push('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        console.error('Sign-in error:', result.error);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Sign-in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In - One Stop Home</title>
        <meta name="description" content="Sign in to your One Stop Home account" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {showSuccess && (
          <div className="mb-8">
            <RegistrationSuccess />
          </div>
        )}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center">
            <img
              src="/images/logo.png"
              alt="One Stop Home"
              className="h-12 w-auto"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>

        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Card>
            <CardContent className="px-4 py-8 sm:px-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <div className="mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="mt-2 relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pr-10"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox
                      id="remember-me"
                      checked={rememberMe}
                      onCheckedChange={(checked: boolean) => setRememberMe(checked)}
                    />
                    <Label htmlFor="remember-me" className="ml-2">
                      Remember me
                    </Label>
                  </div>

                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-medium text-purple-600 hover:text-purple-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                    Sign in
                  </Button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-2 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 py-6"
                    onClick={() => window.open('https://accounts.google.com/signin', '_blank', 'noopener,noreferrer')}
                  >
                    <img
                      src="/images/google.svg"
                      alt="Google"
                      className="h-6 w-6"
                    />
                    <span className="text-base font-medium">Sign in with Google</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-2 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 py-6"
                    onClick={() => window.open('https://www.facebook.com', '_blank', 'noopener,noreferrer')}
                  >
                    <img
                      src="/images/facebook.svg"
                      alt="Facebook"
                      className="h-6 w-6"
                    />
                    <span className="text-base font-medium">Sign in with Facebook</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignInPage;

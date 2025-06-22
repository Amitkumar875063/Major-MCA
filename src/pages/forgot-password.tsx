import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log('Reset password for:', email);
    setIsSent(true);
  };

  return (
    <>
      <Head>
        <title>Forgot Password - One Stop Home</title>
        <meta name="description" content="Reset your One Stop Home account password" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center">
            <img
              src="/images/logo.png"
              alt="One Stop Home"
              className="h-12 w-auto"
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your email address and we will send you a link to reset your password!
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Card>
            <CardContent className="px-4 py-8 sm:px-10">
              {!isSent ? (
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
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                      Send Reset Link
                    </Button>
                  </div>

                  <div className="text-center">
                    <Link href="/signin" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Back to Sign In
                    </Link>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-green-600 font-medium">
                    Reset link sent successfully!
                  </div>
                  <p className="text-sm text-gray-600">
                    Please check your email for instructions to reset your password.
                  </p>
                  <Link href="/signin" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                    Return to Sign In
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;

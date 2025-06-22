import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

export default function VerifyEmail() {
  const router = useRouter();
  const { token } = router.query;
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (token) {
      // Here you would make an API call to verify the token
      // For now, we'll simulate a successful verification
      setTimeout(() => {
        setVerificationStatus('success');
      }, 1500);
    }
  }, [token]);

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Head>
          <title>Invalid Verification Link - One Stop Home</title>
        </Head>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <XCircle className="h-12 w-12 text-red-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Invalid Link</CardTitle>
            <CardDescription className="text-center">
              The verification link is invalid or has expired.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/signin">
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Return to Sign In
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Verify Email - One Stop Home</title>
      </Head>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex justify-center mb-4">
            {verificationStatus === 'loading' ? (
              <div className="h-12 w-12 rounded-full border-4 border-purple-600 border-t-transparent animate-spin" />
            ) : verificationStatus === 'success' ? (
              <CheckCircle className="h-12 w-12 text-green-500" />
            ) : (
              <XCircle className="h-12 w-12 text-red-500" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {verificationStatus === 'loading'
              ? 'Verifying Your Email'
              : verificationStatus === 'success'
              ? 'Email Verified!'
              : 'Verification Failed'}
          </CardTitle>
          <CardDescription className="text-center">
            {verificationStatus === 'loading'
              ? 'Please wait while we verify your email address...'
              : verificationStatus === 'success'
              ? 'Your email has been successfully verified.'
              : 'There was a problem verifying your email address.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {verificationStatus !== 'loading' && (
            <Link href="/signin">
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                {verificationStatus === 'success' ? 'Continue to Sign In' : 'Try Again'}
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

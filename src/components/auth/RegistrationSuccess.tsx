import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function RegistrationSuccess() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold text-center">Registration Successful!</CardTitle>
        <CardDescription className="text-center">
          Your account has been created successfully
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600">
          You can now sign in to your account using your email and password.
        </p>
      </CardContent>
    </Card>
  );
}

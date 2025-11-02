import React from 'react';
import { Button } from '../ui/Button';

interface ForgotPasswordPageProps {
    onSignInClick: () => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onSignInClick }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
                <div className="text-center">
                     <a href="#" className="inline-block mb-6 font-bold text-2xl tracking-wider">COMPANY</a>
                    <h2 className="text-2xl font-bold tracking-tight">Forgot your password?</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        No problem. Enter your email address below and we'll send you a link to reset it.
                    </p>
                </div>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Send reset link
                    </Button>
                </form>
                <div className="text-center text-sm">
                    <button onClick={onSignInClick} className="font-medium text-black hover:underline">
                        Back to Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};
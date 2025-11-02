import React from 'react';
import { Button } from '../ui/Button';

interface SignUpPageProps {
    onSignInClick: () => void;
    onForgotPasswordClick: () => void;
}

const countries = [ "United States", "Canada", "United Kingdom", "Australia", "Germany", "France" ];

export const SignUpPage: React.FC<SignUpPageProps> = ({ onSignInClick, onForgotPasswordClick }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
                <div className="text-center">
                    <a href="#" className="inline-block mb-6 font-bold text-2xl tracking-wider">COMPANY</a>
                    <h2 className="text-2xl font-bold tracking-tight">Create a new account</h2>
                </div>
                <form className="space-y-6" action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                            <input id="first-name" name="first-name" type="text" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="John" />
                        </div>
                        <div>
                             <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                            <input id="last-name" name="last-name" type="text" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="Doe" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm" placeholder="••••••••" />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <select id="country" name="country" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                            <option value="" disabled selected>Select country</option>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" name="terms" type="checkbox" required className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700">
                                I agree to the <a href="#" className="text-black hover:underline">Terms of Service</a> and <a href="#" className="text-black hover:underline">Privacy Policy</a>
                            </label>
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                </form>
                 <div className="flex items-center justify-between text-sm">
                    <button onClick={onSignInClick} className="font-medium text-black hover:underline">
                        Sign In
                    </button>
                    <button onClick={onForgotPasswordClick} className="font-medium text-black hover:underline">
                        Forgot Password
                    </button>
                </div>
            </div>
        </div>
    );
};
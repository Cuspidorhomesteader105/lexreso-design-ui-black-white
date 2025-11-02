import React from 'react';
import { Button } from '../ui/Button';

export const Contact2: React.FC = () => {
  return (
    <div className="relative bg-white py-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let's talk about your project</h2>
          <p className="mt-4 text-lg text-gray-500">
            Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>

          <div className="mt-8 space-y-3 text-base text-gray-700">
            <div>
              <span className="font-semibold text-gray-900">Company:</span> Your Company Ltd
            </div>
            <div>
              <span className="font-semibold text-gray-900">Email:</span>{' '}
              <a href="mailto:contact@example.com" className="text-gray-700 hover:text-black transition-colors">
                contact@example.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Phone:</span>{' '}
              <a href="tel:+1234567890" className="text-gray-700 hover:text-black transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
              <div className="mt-1">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
              <div className="mt-1">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1">
                <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
import React from 'react';

interface PlaceholderContentProps {
    title: string;
}

export const PlaceholderContent: React.FC<PlaceholderContentProps> = ({ title }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold mb-2">Section: {title}</h1>
                <p className="text-gray-600">Content for this section coming soon.</p>
                <p className="text-gray-500 text-sm mt-2">This is a placeholder for future functionality.</p>
            </div>
        </div>
    );
};
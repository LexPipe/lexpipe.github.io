'use client';
import React, { useState } from 'react';
import {Button} from '@/components/Button';
interface Props {
    googleAppsScriptURL: string;
}
// Default script from our submissions spreasheet:
var defaultGoogleAppsScriptURL = "https://script.google.com/macros/s/AKfycbzcwnZLKLZVq6RzVrjrgewqPMPgsNgSTL9dvzKcu5YrLPAvdjx1uvwVNu4cBOrBWGvY/exec"
export function EmailSignupForm() {
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const ctaText = 'Join Waitlist';

    const handleSubmit = async (event: React.FormEvent) => {
        // Can make this an input parameter if we need more than 1.
        var googleAppsScriptURL = defaultGoogleAppsScriptURL;
        event.preventDefault();
        try {
            const response = await fetch(googleAppsScriptURL, {
                method: 'POST',
                mode : 'no-cors',
                body: JSON.stringify({ email : email, message: 'New Subscriber - Website' }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            });
            if (response.ok || response.type == 'opaque') {
                setStatusMessage('Thank you for your interest!');
                setEmail(''); // Clear the input after successful submission
            } else {
                setStatusMessage('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <div className="flex w-full">
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md shadow-sm"
                    placeholder="email@firm.com"
                />
                <Button className="w-40" variant={'solid'} color={'primary'} type="submit">{ctaText}</Button>
            </div>
            {statusMessage && <p className="mt-2 text-sm">{statusMessage}</p>}
        </form>
    );
};


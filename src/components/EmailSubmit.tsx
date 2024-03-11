'use client'
import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

var defaultGoogleAppsScriptURL = "https://script.google.com/macros/s/AKfycbzcwnZLKLZVq6RzVrjrgewqPMPgsNgSTL9dvzKcu5YrLPAvdjx1uvwVNu4cBOrBWGvY/exec";

export function EmailSignupForm() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(defaultGoogleAppsScriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({ email: email, message: 'New Subscriber - Website' }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            });
            if (response.ok || response.type == 'opaque') {
                setIsSubmitted(true); // Indicate successful submission
                setEmail(''); // Optionally clear input after success
            } else {
                // Optionally handle error state
            }
        } catch (error) {
            console.error('Error:', error);
            // Optionally handle error state
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex w-full">
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-2 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full rounded-full shadow-sm"
                    placeholder="email@company.com"
                    disabled={isLoading} // Only disable input if loading
                />
                <Button className={`ml-2 sm:ml-0 xs:ml-0 w-40 text-white`} variant={'solid'}
                        color={isSubmitted ? 'disabled' : 'primary'}
                        type="submit" disabled={isLoading || isSubmitted} style={{ pointerEvents: isSubmitted ? 'none' : 'auto' }}>
                    {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : isSubmitted ? 'Submitted!' : 'Join Waitlist'}
                </Button>
            </div>
        </form>
    );
};

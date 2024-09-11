import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default function Submitted() {
    const location = useLocation();
    const { firstName, lastName, email, phone, topic, message } = location.state || {};

    useEffect(() => {
        const sendEmail = () => {
            const templateParams = {
                firstName,
                lastName,
                email,
                phone,
                topic,
                message
            };

            emailjs.send(
                'service_jmqy0wp',  // Your service ID
                'template_3rjdu5j', // Your template ID
                templateParams,
                'pI-r8XpWXQvg4X5wm' // Your public key (User ID)
            )
            .then(response => {
                console.log('Email sent successfully:', response);
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });
        };

        if (firstName || lastName || email || phone || topic || message) {
            sendEmail();
        }
    }, [firstName, lastName, email, phone, topic, message]);

    return (
        <div className="font-Inter dark:bg-blue-950 dark:text-white min-h-screen flex items-center justify-center p-5">
            <div className="bg-white dark:bg-blue-900 shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-4">Thank You for Showing Interest!</h1>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
                    We have received your submission. We will get back to you as soon as possible.
                </p>
                <div className="text-center mt-8">
                    <a href="/" className="text-blue-600 dark:text-blue-300 hover:underline">Go back to Home</a>
                </div>
            </div>
        </div>
    );
}

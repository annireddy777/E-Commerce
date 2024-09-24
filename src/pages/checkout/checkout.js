import React from 'react'

export const Checkout = () => {
    const handleRedirect = () => {
        // URL of the payment site
        const paymentSiteUrl = "https://www.phonepe.com/";

        // Redirecting to the payment site
        window.location.href = paymentSiteUrl;
    }
}

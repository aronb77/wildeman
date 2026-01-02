"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleAnalytics({ ga_id }: { ga_id: string }) {
    const [consent, setConsent] = useState<boolean>(false);

    useEffect(() => {
        // 1. Check current status on mount
        const storedConsent = localStorage.getItem("cookie_consent");
        if (storedConsent === "granted") {
            setConsent(true);
        }

        // 2. Listen for custom event triggered by CookieBanner
        const handleConsentUpdate = () => {
            if (localStorage.getItem("cookie_consent") === "granted") {
                setConsent(true);
            }
        };

        window.addEventListener("cookie_consent_updated", handleConsentUpdate);

        return () => {
            window.removeEventListener("cookie_consent_updated", handleConsentUpdate);
        };
    }, []);

    if (!consent) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${ga_id}', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            />
        </>
    );
}

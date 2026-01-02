"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const storedConsent = localStorage.getItem("cookie_consent");
        if (!storedConsent) {
            // Delay showing the banner slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "granted");
        setIsVisible(false);
        // Trigger event for GoogleAnalytics component
        window.dispatchEvent(new Event("cookie_consent_updated"));
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "denied");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-lg w-full md:w-auto"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">

                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Cookie className="w-5 h-5 text-wildeman-oranje" />
                                <h3 className="text-lg font-bold font-montserrat text-slate-800">Even over cookies</h3>
                            </div>
                            <p className="text-sm text-slate-600 font-open-sans leading-relaxed">
                                Wij gebruiken cookies om te zien hoe u onze website gebruikt. Zo kunnen we onze service verbeteren. Gaat u hiermee akkoord?
                                <br />
                                <Link href="/privacy" className="text-wildeman-blauw hover:underline text-xs mt-1 inline-block">
                                    Lees ons Privacybeleid.
                                </Link>
                            </p>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                            >
                                Liever niet
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-6 py-2 rounded-xl text-sm font-bold bg-wildeman-blauw text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-900/20"
                            >
                                Prima
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

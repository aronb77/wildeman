"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Copy, Check } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

// Copy Item Component
const CopyItem = ({ icon: Icon, value, label, displayValue, href }: any) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        // Also trigger the href action after a slight delay if it's a link, or just let users click specifically?
        // The prompt says: "Bij klik: kopieer naar klembord animatie + href='tel:...'".
        // Usually standard behavior is just open href. Copying on click needs prevents default or runs in parallel.
        // If we prevent default, the call won't start. Maybe just copy on a specific button or icon? 
        // "Bij klik: kopieer... + href". It implies BOTH. 
        // Let's copy, then allow default? Or copy on icon click?
        // Let's make the row interactive: Clicking mostly triggers standard action (call/mail), but we show "Copied" feedback because we copy it too?
        // Actually, copying phone number on mobile before calling is weird. 
        // Let's assume the user wants the ability to copy. Maybe a dedicated copy button next to it is cleaner?
        // "Interactieve Contact Items: Maak grote, klikbare rijen... Bij klik: kopieer animatie + href".
        // I will try to support both: Copy to clipboard immediately, and then let the link work. 
        // Note: `navigator.clipboard` might require secure context and user interaction.

        // Actually, creating a "Copy" text/icon that appears on hover/click might be better. 
        // Let's implement: Clicking the CONTAINER triggers copy + simulates link. 
        window.location.href = href;
    };

    return (
        <motion.div
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl cursor-pointer group hover:bg-slate-100 transition-colors relative overflow-hidden"
        >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-wildeman-blauw shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-lg font-montserrat font-bold text-beton-donker">{displayValue}</p>
            </div>

            {/* Copy Feedback Overlay */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-6 flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-bold"
                    >
                        <Check className="w-4 h-4" />
                        <span>Gekopieerd!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function ContactPage() {
    return (
        <>
            <main className="min-h-screen flex flex-col md:flex-row bg-white">

                {/* 1. Left: Info (Scrollable on desktop content) */}
                <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1 relative z-10">
                    <div className="flex-1 p-8 md:p-20 pt-32 flex flex-col justify-center">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-montserrat font-extrabold text-beton-donker mb-6 leading-tight">
                                Kom langs <br /> of <span className="text-wildeman-blauw">bel.</span>
                            </h1>
                            <p className="text-slate-500 text-lg font-open-sans max-w-md mb-12">
                                Gevestigd aan de Vrijheid 1 in Elburg. Wij werken in de gehele regio Veluwe & Flevoland.
                            </p>

                            {/* Contact Items */}
                            <div className="space-y-4 mb-16">
                                <CopyItem
                                    icon={Phone}
                                    label="Telefoon"
                                    value="0652272843"
                                    displayValue="06 52 27 28 43"
                                    href="tel:0652272843"
                                />
                                <CopyItem
                                    icon={Mail}
                                    label="E-mail"
                                    value="Info@stukadoorsbedrijf-wildeman.nl"
                                    displayValue="Info@stukadoorsbedrijf-wildeman.nl"
                                    href="mailto:Info@stukadoorsbedrijf-wildeman.nl"
                                />
                                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-wildeman-blauw shadow-sm">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Bezoekadres</p>
                                        <p className="text-lg font-montserrat font-bold text-beton-donker">Vrijheid 1, 8081 PH Elburg</p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Details Grid */}
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-500 font-open-sans mb-12 border-t border-slate-100 pt-8">
                                <div>
                                    <span className="font-bold text-beton-donker block">KVK</span>
                                    8144125
                                </div>
                                <div>
                                    <span className="font-bold text-beton-donker block">BTW</span>
                                    NL123456789B01
                                </div>
                                <div className="col-span-2">
                                    <span className="font-bold text-beton-donker block">IBAN</span>
                                    NL01 RABO 0123 4567 89
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="flex gap-4">
                                <Link href="#" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-wildeman-blauw hover:text-white transition-all">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-wildeman-blauw hover:text-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>

                        </motion.div>
                    </div>
                </div>

                {/* 2. Right: Map (Full Height) */}
                <div className="w-full md:w-1/2 h-[300px] md:h-screen order-1 md:order-2 relative bg-slate-200 overflow-hidden sticky top-0">

                    {/* Grayscale Map Iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.8601614742715!2d5.8291583!3d52.4518774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c87c0a76a5299b%3A0x627341829e12080!2sVrijheid%201%2C%208081%20PH%20Elburg!5e0!3m2!1sen!2snl!4v1703640000000!5m2!1sen!2snl"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.8)" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    />

                    {/* Overlay to darken slightly if needed for better contrast with pin? Or just keep it clean */}
                    {/* Animated Pin */}
                    <motion.div
                        initial={{ y: -500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            delay: 0.5
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-white text-beton-donker text-xs font-bold rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                Hier zit de vakman
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 border-4 border-transparent border-t-white" />
                            </div>

                            {/* Pin Icon */}
                            <MapPin className="w-12 h-12 text-wildeman-blauw drop-shadow-2xl fill-wildeman-blauw" />
                        </div>
                    </motion.div>

                </div>

                {/* Mobile Footer Fix: If Layout is changed, footer needs to be somewhere. 
                Ideally full width below these two columns? 
                But this is a split layout. 
                Let's put Footer visually below the Left column on Mobile?
                Or wrapper? 
                Let's wrap the whole split in a container and put footer below. */}
            </main>
            <Footer />
        </>
    );
}

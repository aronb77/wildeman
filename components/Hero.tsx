"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link"; // Added Link import

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect for background
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden bg-strak-wit flex items-center justify-center pb-20">

            {/* Background Image with Wipe Reveal & Parallax */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 z-10 bg-strak-wit"
                    initial={{ x: "0%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                />
                <motion.div style={{ y }} className="relative h-full w-full">
                    {/* Authentic Stucco Image */}
                    <div className="absolute inset-0 bg-natte-gips/50">
                        {/* High quality plaster/interior image */}
                        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />

                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
                        <div className="absolute inset-0 bg-white/40 md:hidden" />
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-40 container mx-auto px-4 text-center md:text-left">
                <div className="max-w-4xl mx-auto md:mx-0 pt-20">

                    {/* Headline Masks */}
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: "circOut", delay: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-extrabold text-beton-donker tracking-tight"
                        >
                            Stukadoorsbedrijf
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: "circOut", delay: 1.0 }}
                            className="text-5xl md:text-6xl lg:text-8xl font-montserrat font-extrabold text-wildeman-blauw tracking-tight"
                        >
                            Wildeman
                        </motion.h1>
                    </div>

                    {/* Slogan with "Marker" style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                        className="inline-block mb-8 relative"
                    >
                        <span className="relative z-10 text-2xl md:text-4xl font-bold font-montserrat text-white bg-wildeman-oranje px-4 py-2 rounded-lg transform -rotate-1 shadow-lg inline-block">
                            Presteren met smeren!
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="text-lg md:text-xl font-open-sans text-gray-600 mb-10 max-w-lg leading-relaxed md:ml-1"
                    >
                        Voor al uw stucwerk. <strong>Binnen én Buiten.</strong> Voor particulier en bedrijf in Elburg en omstreken.
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="relative z-30 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link href="/offerte" className="group bg-wildeman-blauw text-white px-8 py-4 rounded-xl font-montserrat font-bold text-lg inline-flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10 hover:-translate-y-1">
                            Bereken je prijs
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a href="tel:0652272843" className="group bg-white text-beton-donker border-2 border-slate-200 px-8 py-4 rounded-xl font-montserrat font-bold text-lg inline-flex items-center justify-center gap-2 hover:border-wildeman-oranje hover:text-wildeman-oranje transition-all hover:-translate-y-1">
                            <Phone className="w-5 h-5" />
                            Direct Bellen
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-strak-wit fill-current">
                    {/* The fill is implied by class text-strak-wit but let's make sure it matches the next section bg if distinct, usually white-on-white needs care if next section is white. Check page.tsx layout. Next is Services (white?). Need to check visuals. Services usually white or light gray. If Services is white, this wave is invisible unless Hero is different color. Hero bg is strak-wit? 
                    Ah, Hero bg is strak-wit. So wave needs to overlap an image or the next section should be different. 
                    Actually, the user asked for a Wave divider at the *bottom* of Hero. 
                    If the Hero has a background image/color and the next section is white, the wave should be white.
                    BUT, the Hero main div has 'bg-strak-wit'. This might be an issue.
                    The Hero has a background image, so the Wave should sit on top of the image (z-20) and be the color of the NEXT section (Services). 
                    Let's assume Services is white, so the Wave should be white. 
                    The Wave svg: 
                    */}
                    <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

        </section>
    );
}

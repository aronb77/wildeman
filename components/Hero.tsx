"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect for background
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-strak-wit flex items-center justify-center">

            {/* Background Image with Wipe Reveal & Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 z-10 bg-strak-wit"
                    initial={{ x: "0%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                />
                <motion.div style={{ y }} className="relative h-full w-full">
                    {/* Placeholder for "Resultaat" focused image - using a grey placeholder for now or a reliable nice construction unsplash if available, but sticking to solid color/placeholder as per instruction for now unless I generate one. User said "placeholder voor afbeeldingen... Helder & Licht". I'll use a subtle gradient or placeholder image logic. */}
                    <div className="absolute inset-0 bg-natte-gips/50">
                        {/* Simulating an image */}
                        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center md:text-left">
                <div className="max-w-4xl mx-auto md:mx-0">

                    {/* Headline Masks */}
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: "circOut", delay: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-extrabold text-beton-donker tracking-tight"
                        >
                            MEESTERSCHAP
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: "circOut", delay: 1.0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-wildeman-blauw to-blue-700 tracking-tight"
                        >
                            IN STUCWERK
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="text-lg md:text-xl font-open-sans text-gray-600 mb-10 max-w-lg leading-relaxed"
                    >
                        Vakmanschap uit Elburg sinds 2006. Wij leveren strakke wanden en plafonds met oog voor detail en een persoonlijke aanpak.
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                    >
                        <button className="group bg-wildeman-blauw text-white px-8 py-4 rounded-sm font-montserrat font-bold text-lg inline-flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10">
                            Vraag Offerte Aan
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}

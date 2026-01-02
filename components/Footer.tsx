"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    // Animation for the "Fill" effect - simplistic approach using height or clip-path
    // But a cleaner way for "Outline to Fill" text is 2 layers.
    // We'll use a clip-path on the filled layer that expands based on scroll or viewport entry.
    // The User asked for "whileInView" OR "scroll creates fill from bottom up". 
    // Let's do a smooth reveal using 'whileInView' duration for reliability, or scroll-linked if preferred.
    // "Terwijl je verder naar beneden scrollt, 'vult' de tekst zich" -> sounds scroll-linked.

    const fillHeight = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);

    return (
        <footer ref={containerRef} className="bg-slate-950 text-slate-400 pt-20 overflow-hidden relative">

            <div className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-slate-800 pt-12">

                    {/* Column 1: Sitemap */}
                    <div className="space-y-4">
                        <h4 className="text-white font-montserrat font-bold text-lg mb-4">Navigatie</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Werkwijze", href: "/werkwijze" },
                                { name: "Offerte", href: "/offerte" },
                                { name: "Contact", href: "/contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <motion.span
                                            className="w-1.5 h-1.5 bg-wildeman-blauw rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Socials & Recognition */}
                    <div className="space-y-4">
                        <h4 className="text-white font-montserrat font-bold text-lg mb-4">Volg Ons</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></Link>
                        </div>

                        {/* SBB Placeholder */}
                        <div className="mt-8">
                            <div className="border border-slate-700 p-2 inline-block rounded-sm">
                                <span className="font-bold text-xs text-slate-500 uppercase tracking-widest">SBB Erkend</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="space-y-4">
                        <h4 className="text-white font-montserrat font-bold text-lg mb-4">Stukadoorsbedrijf Wildeman</h4>
                        <address className="not-italic text-sm text-slate-400 space-y-1 mb-4 font-open-sans">
                            <p>Vrijheid 1</p>
                            <p>8081 PH Elburg</p>
                        </address>
                        <ul className="space-y-2 text-sm">
                            <li className="pt-2">KVK: 8144125</li>
                            <li><Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* THE MASSIVE SIGNATURE */}
            <div className="relative w-full overflow-hidden leading-none select-none">
                {/* Outline Layer (Always Visible) */}
                <h1 className="text-[15vw] font-montserrat font-extrabold text-transparent  w-full text-center"
                    style={{ WebkitTextStroke: "2px #334155" }} // Slate-700 stroke
                >
                    WILDEMAN
                </h1>

                {/* Filled Layer (Reveals from bottom) */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full overflow-hidden"
                    style={{ height: fillHeight }}
                >
                    <h1 className="text-[15vw] font-montserrat font-extrabold text-white w-full text-center absolute bottom-0 left-0 right-0">
                        WILDEMAN
                    </h1>
                </motion.div>
            </div>

            {/* Tiny bottom margin just to give the text some breathing room if needed, or stick to bottom */}
            <div className="h-4 sm:h-8 md:h-12 bg-slate-950 flex justify-center items-end pb-2">
                <a href="https://vossendesign.nl" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-700 hover:text-slate-500 transition-colors uppercase tracking-widest font-bold">
                    Made by Vossen Design
                </a>
            </div>
        </footer>
    );
}

"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Werkwijze", href: "/werkwijze" }, // New page
    { name: "Diensten", href: "#services" },
    { name: "Projecten", href: "/projecten" }, // Updated to new page
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Lock body scroll when menu is open
    if (typeof window !== "undefined") {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none" // pointer-events-none lets clicks pass through to sides
            >
                <motion.div
                    className={cn(
                        "pointer-events-auto relative flex items-center justify-between",
                        "bg-white/80 backdrop-blur-md border border-white/20 shadow-lg",
                        "rounded-full transition-all duration-300 ease-in-out",
                        isScrolled ? "py-2 px-6 w-[90%] md:w-auto md:min-w-[600px]" : "py-3 px-8 w-[95%] md:w-auto md:min-w-[700px]"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="font-montserrat font-bold text-xl md:text-2xl text-beton-donker tracking-tight">
                        WILDEMAN
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.filter(l => l.name !== "Contact").map((link) => ( // Filter contact out to keep it clean or keep it? Request said "Home, Over, Diensten, Projecten". Contact usually implies the button.
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-open-sans font-medium text-slate-600 hover:text-wildeman-blauw transition-colors group"
                            >
                                {link.name}
                                {/* Hover Pill Effect */}
                                <motion.span
                                    className="absolute inset-0 bg-slate-100 rounded-full -z-10 origin-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200"
                                    layoutId="hover-pill" // Shared layout ID if we had state tracking active hover, but simple CSS/Motion combo works well for lightweight Hover
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/offerte"
                            className="hidden md:flex bg-wildeman-blauw text-white px-5 py-2 rounded-full text-sm font-bold font-montserrat items-center gap-2 hover:bg-blue-700 transition-colors"
                        >
                            Offerte
                        </Link>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 text-beton-donker hover:text-wildeman-blauw transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                </motion.div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <nav className="flex flex-col items-center gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-montserrat font-bold text-white hover:text-wildeman-blauw transition-colors block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <Link
                                    href="/offerte"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="bg-wildeman-blauw text-white px-8 py-3 rounded-full text-lg font-bold font-montserrat flex items-center gap-2"
                                >
                                    Vraag Offerte Aan
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

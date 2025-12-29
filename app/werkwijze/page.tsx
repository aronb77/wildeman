"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, ShieldCheck, Hammer, Wind, Handshake, ArrowRight } from "lucide-react"; // Replaced Trowel with Hammer as Trowel might be missing
import Link from "next/link";
import Footer from "@/components/Footer";

// Data for steps
const steps = [
    {
        id: 1,
        title: "Inventarisatie & Offerte",
        description: "We komen langs (of bekijken bouwtekeningen) om de ondergrond te beoordelen. U ontvangt binnen 24 uur een heldere vaste prijs.",
        icon: ClipboardList,
    },
    {
        id: 2,
        title: "Voorbereiding",
        description: "Cruciaal voor een net resultaat. We plakken kozijnen, vloeren en trappen zorgvuldig af. We behandelen de ondergrond met de juiste voorstrijk.",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "De Uitvoering",
        description: "Het echte vakwerk. We brengen het gips aan, reien het vlak en messen het glad af voor een superstrak resultaat.",
        icon: Hammer, // Using Hammer as generic tool or brush if Trowel unavailable
    },
    {
        id: 4,
        title: "De Droogtijd",
        description: "Stucwerk brengt vocht in huis. We adviseren u over ventilatie en hoe u kunt zien wanneer de muren droog genoeg zijn om te schilderen.",
        icon: Wind,
    },
    {
        id: 5,
        title: "Oplevering & Garantie",
        description: "We lopen samen alles na. Is alles naar wens? Dan ruimen we onze spullen op en laten we de werkplek bezemschoon achter.",
        icon: Handshake,
    },
];

export default function WerkwijzePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"], // Start filling when container hits center of screen
    });

    return (
        <main className="bg-strak-wit min-h-screen pt-32">

            {/* 1. Hero */}
            <section className="container mx-auto px-4 text-center mb-20 md:mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-montserrat font-bold text-beton-donker mb-4"
                >
                    Van Offerte <span className="text-wildeman-blauw">tot Oplevering</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 text-lg md:text-xl font-open-sans"
                >
                    Transparant en zonder verrassingen. Zo pakken wij uw project aan.
                </motion.p>
            </section>

            {/* 2. The Timeline */}
            <section ref={containerRef} className="container mx-auto px-4 relative pb-32 max-w-5xl">

                {/* The Spine (Vertical Line) */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

                {/* The Progress Line (Fills Blue) */}
                <motion.div
                    style={{ scaleY: scrollYProgress }} // Use scaleY for better performance than height
                    className="absolute left-8 md:left-1/2 top-0  w-[2px] bg-wildeman-blauw -translate-x-1/2 origin-top h-full"
                />

                {/* Steps */}
                <div className="space-y-24 md:space-y-32">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={step.id} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Dot Connector */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-slate-200 z-10 transition-colors duration-500 group-hover:border-wildeman-blauw">
                                    {/* We can use motion value to animate this color change based on scroll too, but simple View based is often cleaner code-wise for items */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-50% 0px -50% 0px" }} // Trigger when exactly in center roughly
                                        className="absolute inset-0 bg-wildeman-blauw rounded-full"
                                    />
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={`ml-20 md:ml-0 w-full md:w-[45%] bg-white p-8 rounded-lg shadow-sm border border-slate-100 relative group`}
                                >
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-wildeman-blauw mb-4 group-hover:bg-blue-50 transition-colors">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-montserrat font-bold text-beton-donker mb-2">
                                        {step.id}. {step.title}
                                    </h3>
                                    <p className="text-slate-500 font-open-sans">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Empty Space for Grid Balance */}
                                <div className="hidden md:block w-[45%]" />

                            </div>
                        );
                    })}
                </div>

            </section>

            {/* 3. CTA */}
            <section className="container mx-auto px-4 text-center pb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 p-12 rounded-xl inline-block border border-slate-200"
                >
                    <h3 className="text-2xl font-montserrat font-bold mb-6">Klaar om te beginnen?</h3>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-wildeman-blauw text-white px-8 py-4 rounded-full font-bold font-montserrat hover:bg-blue-700 transition-colors"
                    >
                        Start uw project
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}

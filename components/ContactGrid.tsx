"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactGrid() {
    return (
        <section className="py-20 md:py-28 bg-white" id="contact">
            <div className="container mx-auto px-4">

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">

                        {/* Block 1: Call - Large (Spans 2 cols on Desktop) */}
                        <motion.a
                            href="tel:0652272843"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative md:col-span-2 lg:col-span-2 bg-wildeman-blauw text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Phone className="w-48 h-48 -mr-10 -mt-10 rotate-12" />
                            </div>

                            <div className="relative z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors mb-auto">
                                <motion.div
                                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
                                >
                                    <Phone className="w-8 h-8 text-white" />
                                </motion.div>
                            </div>

                            <div className="relative z-10">
                                <p className="text-blue-100 font-open-sans font-medium mb-1">Direct contact?</p>
                                <h3 className="text-3xl md:text-5xl font-montserrat font-bold">
                                    06 52 27 28 43
                                </h3>
                            </div>

                            <div className="absolute bottom-8 right-8 bg-white text-wildeman-blauw p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </motion.a>

                        {/* Block 2: Mail */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between group"
                        >
                            <div className="w-14 h-14 bg-blue-100 text-wildeman-blauw rounded-full flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold font-montserrat text-beton-donker text-lg mb-1">Mail ons</h4>
                                <a href="mailto:Info@stukadoorsbedrijf-wildeman.nl" className="text-gray-600 hover:text-wildeman-blauw transition-colors break-words font-open-sans">
                                    Info@stukadoorsbedrijf-wildeman.nl
                                </a>
                            </div>
                        </motion.div>

                        {/* Block 3: Location - Full width on mobile/tablet, single on lg if needed which might look odd with 3 cols total. 
                            Grid layout: 
                            LG: [ Call Call ] [ Mail ]
                                [ Loc  Loc  ] [ ...  ] - Wait, standard bento is fluid.
                            Let's maximize usage.
                            Row 1 (3 cols): [ Call (2) ] [ Mail (1) ]
                            Row 2: [ Location (3 or 2?) ] 
                            Actually, let's make it simpler.
                            Row 1: [ Call (2) ] [ Mail (1-ish) ]
                            But on LG 3 cols: Call takes 2. Mail takes 1. Perfectly fills row 1.
                            Row 2: Location? 
                            The user said: "Blok 3: Locatie". Just 3 blocks.
                            So Row 2 needs to handle Location. Maybe define rows?
                            Let's make Location span full width or 1 col?
                            "Blok 1 (Groot)", "Blok 2", "Blok 3".
                            If Call is Big (2/3), Mail (1/3). 
                            Where does Location go?
                            Maybe:
                            [ Call (2) ] [ Mail (1) ]
                            [ Location (3) ] 
                            Or:
                            [ Call (2) ] 
                            [ Mail (1) ] [ Location (1) ]
                            Let's try to fit nicely.
                            Call (2), Mail (1).
                            Location (3)?
                        */}

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 lg:col-span-3 bg-wildeman-oranje/10 border border-wildeman-oranje/20 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative"
                        >
                            <div className="flex items-center gap-6 z-10">
                                <div className="w-16 h-16 bg-wildeman-oranje text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold font-montserrat text-beton-donker text-xl mb-1">Kom langs in Elburg</h4>
                                    <p className="text-gray-600 font-open-sans">Vrijheid 1, 8081 PH Elburg</p>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com/?q=Vrijheid+1+8081PH+Elburg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="z-10 bg-white text-beton-donker px-6 py-3 rounded-xl font-bold font-montserrat hover:bg-wildeman-oranje hover:text-white transition-colors border border-slate-200 hover:border-wildeman-oranje"
                            >
                                Routebeschrijving
                            </a>

                            {/* Decorative Map BG Pattern */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(#F59E0B 1px, transparent 1px)",
                                    backgroundSize: "20px 20px"
                                }}
                            />
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}

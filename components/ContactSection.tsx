"use client";

import { motion } from "framer-motion";
import { LiquidInput } from "@/components/ui/LiquidInput";
import { ArrowRight, MapPin, Phone, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="relative bg-slate-950 text-white py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Info (40%) */}
                    <div className="w-full md:w-5/12 space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold tracking-tight"
                        >
                            Klaar voor <br />
                            <span className="text-wildeman-blauw">strak werk?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-slate-400 text-lg md:text-xl font-open-sans max-w-sm"
                        >
                            Neem contact op voor een vrijblijvende offerte of advies. Wij denken graag met u mee.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6 pt-8 border-t border-slate-800"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-wildeman-blauw shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-montserrat font-bold text-lg">E.J.H. Wildeman</h4>
                                    <p className="text-slate-400 font-open-sans">Vrijheid 1 <br /> 8081 PH Elburg</p>
                                    <p className="text-slate-500 text-sm mt-1">KVK: 12345678 (Placeholder)</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-wildeman-blauw shrink-0" />
                                <div>
                                    <h4 className="font-montserrat font-bold text-lg">06 - 12 34 56 78</h4>
                                    <p className="text-slate-400 font-open-sans text-sm">Bereikbaar op werkdagen</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form (60%) */}
                    <div className="w-full md:w-7/12">
                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-900/50 p-8 md:p-12 rounded-sm border border-slate-800"
                        >
                            <LiquidInput label="Uw Naam" placeholder="Bijv. Jan de Vries" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <LiquidInput label="Telefoonnummer" placeholder="06 - ..." type="tel" />
                                {/* Select is trickier to style with liquid border exactly the same without custom select component, 
                     but we can wrap it effectively or just use standard styling for now alongside LiquidInputs. 
                     Let's make a simple select wrapper or just use standard styled select. */}
                                <div className="relative group mb-6">
                                    <label className="block text-sm font-open-sans font-semibold mb-2 text-slate-400 group-hover:text-slate-200 transition-colors">
                                        Type Klus
                                    </label>
                                    <div className="relative">
                                        <select className="w-full bg-transparent border-b border-slate-700 text-white pb-2 focus:outline-none font-open-sans appearance-none">
                                            <option className="bg-slate-900">Glad Stucwerk</option>
                                            <option className="bg-slate-900">Sierpleister</option>
                                            <option className="bg-slate-900">Renovatie / Raapwerk</option>
                                            <option className="bg-slate-900">Anders</option>
                                        </select>
                                        <div className="absolute right-0 top-0 pointer-events-none text-slate-500">▼</div>
                                        {/* Static border for select for now, keeping it simple as LiquidInput logic is for text inputs */}
                                    </div>
                                </div>
                            </div>

                            <LiquidInput label="Uw Bericht" placeholder="Beschrijf uw project..." isTextArea />

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#0062cc" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-wildeman-blauw text-white py-4 px-8 rounded-sm font-montserrat font-bold text-lg flex items-center justify-center gap-2 group mt-4"
                            >
                                Verstuur Aanvraag
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                        </motion.form>
                    </div>

                </div>

                {/* Footer Credit */}
                <div className="mt-20 md:mt-32 pt-8 border-t border-slate-900 text-center">
                    <p className="text-slate-600 font-open-sans text-sm">
                        © 2025 Wildeman Stucadoors Elburg. Alle rechten voorbehouden.
                    </p>
                </div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { StuccoReveal } from "@/components/ui/StuccoReveal";

export default function AboutSection() {
    return (
        <section className="py-20 md:py-32 bg-natte-gips">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text */}
                    <div className="space-y-6">
                        <StuccoReveal wipeColor="#0056b3" delay={0.2} width="fit-content">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-beton-donker uppercase tracking-tight">
                                Strak werk, <br />
                                <span className="text-wildeman-blauw">afspraak is afspraak.</span>
                            </h2>
                        </StuccoReveal>

                        <StuccoReveal wipeColor="#d1d5db" delay={0.6}>
                            <div className="space-y-4 text-base md:text-lg text-gray-700 font-open-sans max-w-lg leading-relaxed">
                                <p>
                                    Als Stukadoorsbedrijf E.J.H. Wildeman staan wij voor kwaliteit zonder gedoe.
                                    Gevestigd in Elburg en <strong>actief sinds 2006</strong>, hebben wij honderden woningen voorzien van strak stucwerk.
                                </p>
                                <p>
                                    Wij zijn een <strong>SBB Erkend Leerbedrijf</strong>, wat betekent dat wij niet alleen vakwerk leveren,
                                    maar ook de volgende generatie vakmensen opleiden. Bij ons weet u precies waar u aan toe bent:
                                    heldere communicatie, een nette werkwijze en een eindresultaat dat staat als een huis.
                                </p>
                            </div>
                        </StuccoReveal>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[400px] md:h-[500px] w-full">
                        {/* The Wipe Animation for the Image (Bottom-Up or different direction) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {}
                            }}
                            className="relative w-full h-full overflow-hidden rounded-sm shadow-xl"
                        >
                            {/* Reveal Mask */}
                            <motion.div
                                variants={{
                                    hidden: { height: "100%" },
                                    visible: {
                                        height: "0%",
                                        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }
                                    }
                                }}
                                className="absolute inset-0 bg-strak-wit z-20 pointer-events-none"
                                style={{ bottom: 0, top: "auto" }} // Cover from bottom, reveal upwards
                            />

                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-wildeman-blauw/20 z-0">
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 ease-out" />
                            </div>

                            {/* Badge/Accent */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                className="absolute bottom-6 left-6 bg-white py-3 px-5 rounded-sm shadow-md z-30 border-l-4 border-wildeman-blauw"
                            >
                                <span className="font-montserrat font-bold text-beton-donker text-sm">SBB Erkend</span>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ruler, Paintbrush, Sparkles } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        title: "Opmeten & Advies",
        icon: Ruler,
        description: "We komen langs, meten alles op en geven direct deskundig advies op maat."
    },
    {
        title: "Afplakken & Smeren",
        icon: Paintbrush,
        description: "We dekken alles netjes af en gaan aan de slag met hoogwaardig gips."
    },
    {
        title: "Strak Resultaat",
        icon: Sparkles,
        description: "Wij vertrekken pas als muren spiegelglad zijn en alles schoon is."
    }
];

export default function WerkwijzeTeaser() {
    return (
        <section className="py-24 bg-natte-gips/30 relative overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-beton-donker mb-4">
                        Zo werken wij
                    </h2>
                    <p className="text-gray-600 font-open-sans">
                        Geen gedoe, gewoon duidelijkheid. In 3 stappen naar strakke muren.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto mb-16">

                    {/* Dashed Line Connector (Desktop only) */}
                    <div className="absolute top-12 left-[16%] right-[16%] h-1 hidden md:block z-0">
                        <svg className="w-full h-full overflow-visible">
                            <motion.path
                                d="M0,2 L1000,2" // Simple straight line approximation, responsive width handles it
                                fill="none"
                                stroke="#cbd5e1" // slate-300
                                strokeWidth="3"
                                strokeDasharray="12 12"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="relative mb-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200, delay: index * 0.3 }}
                                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                                >
                                    <step.icon className="w-10 h-10 text-wildeman-blauw" strokeWidth={2} />
                                </motion.div>
                                <div className="absolute -top-2 -right-2 bg-wildeman-oranje text-white w-8 h-8 rounded-full flex items-center justify-center font-bold font-montserrat shadow-md">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-montserrat text-beton-donker mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 font-open-sans max-w-xs leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/werkwijze" className="inline-flex items-center gap-2 text-wildeman-blauw font-bold font-montserrat hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700 pb-1">
                        Bekijk onze volledige werkwijze
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}

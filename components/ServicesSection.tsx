"use client";

import { motion } from "framer-motion";
import { Brush, PaintRoller, Hammer } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
    {
        title: "Glad Pleisterwerk",
        description: "Sausklaar stucwerk voor een spiegelgladde afwerking van wanden en plafonds.",
        icon: Brush
    },
    {
        title: "Sierpleister",
        description: "Sterke en decoratieve afwerkingen zoals Spachtelputz. Stootvast en in kleur.",
        icon: PaintRoller
    },
    {
        title: "Raap- & Renovatie",
        description: "Het uitvlakken van ruwe muren in badkamers, keukens of oude woningen.",
        icon: Hammer
    }
];

export default function ServicesSection() {
    return (
        <section className="py-20 md:py-32 bg-strak-wit">
            <div className="container mx-auto px-4">

                {/* Section Header (Optional, but good for context) */}
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-beton-donker mb-4">
                        Onze Diensten
                    </h2>
                    <div className="h-1 w-20 bg-wildeman-blauw mx-auto rounded-full" />
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

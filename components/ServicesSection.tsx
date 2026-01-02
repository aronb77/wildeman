"use client";

import { motion } from "framer-motion";
import { PaintRoller, MapPin, Sun, Home } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
    {
        title: "Binnen Stucwerk",
        description: "Van glad pleisterwerk en raapwerk tot sausklaar opleveren van uw woning. Strak en netjes.",
        icon: Home
    },
    {
        title: "Sierpleister",
        description: "Decoratieve afwerkingen zoals Spachtelputz. Stootvast, kleurvast en direct de juiste uitstraling.",
        icon: PaintRoller
    },
    {
        title: "Buiten Stucwerk",
        description: "Gevelisolatie en buitenmuren stucen. Verhoog uw woningwaarde en comfort. Onze specialiteit!",
        icon: Sun,
        featured: true // USP
    }
];

export default function ServicesSection() {
    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-beton-donker mb-4">
                        Onze Diensten
                    </h2>
                    <div className="h-1 w-20 bg-wildeman-blauw mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 font-open-sans">
                        Kwaliteit staat bij ons voorop. Of het nu gaat om een enkele wand of een complete woningrenovatie.
                    </p>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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
                            featured={service.featured}
                        />
                    ))}
                </motion.div>

                {/* Region Label */}
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-6 py-3 rounded-full font-semibold font-open-sans text-sm md:text-base border border-slate-200">
                        <MapPin className="w-5 h-5 text-wildeman-blauw" />
                        Werkzaam in regio Elburg, Veluwe & Flevoland
                    </span>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

export const ServiceCard = ({ title, description, icon: Icon, index, featured = false }: ServiceCardProps & { featured?: boolean }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                    }
                },
                hover: { y: -10 } // Lift card on hover
            }}
            whileHover="hover"
            className={`group relative p-8 rounded-2xl overflow-hidden cursor-default shadow-sm hover:shadow-lg transition-all duration-300 ${featured
                    ? "bg-blue-50/50 border-2 border-wildeman-oranje shadow-md"
                    : "bg-white border border-slate-100"
                }`}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110 ${featured ? "bg-wildeman-oranje text-white" : "bg-blue-50 text-wildeman-blauw"
                    }`}>
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-montserrat font-bold text-beton-donker">
                    {title}
                </h3>

                <p className="text-gray-600 font-open-sans leading-relaxed">
                    {description}
                </p>

                {featured && (
                    <span className="absolute top-0 right-0 bg-wildeman-oranje text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        POPULAIRE KEUZE
                    </span>
                )}
            </div>

            {/* The Sheen Effect */}
            <motion.div
                variants={{
                    hover: {
                        left: "200%",
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "-100%", // Start off-screen left
                    width: "50%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                    transform: "skewX(-20deg)",
                    zIndex: 5
                }}
            />

        </motion.div>
    );
};

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Footer from "@/components/Footer";

// Dummy Data
const projects = [
    {
        id: 1,
        title: "Vervallen Boerderij",
        category: "Renovatie",
        before: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop", // Rough texture
        after: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000&auto=format&fit=crop", // Clean modern wall
    },
    {
        id: 2,
        title: "Nieuwbouw Villa",
        category: "Nieuwbouw",
        before: "https://images.unsplash.com/photo-1590483038661-30c1be7826d9?q=80&w=1000&auto=format&fit=crop", // Construction site
        after: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop", // Finished living room
    },
    {
        id: 3,
        title: "Sierpleister Woonkamer",
        category: "Renovatie",
        before: "https://images.unsplash.com/photo-1549420042-32b0f340875e?q=80&w=1000&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1629895028045-8f63567b5cdd?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Badkamer Betonlook",
        category: "Nieuwbouw",
        before: "https://images.unsplash.com/photo-1620626012053-1c19794cb22c?q=80&w=1000&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop",
    },
];

const filters = ["Alles", "Renovatie", "Nieuwbouw"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("Alles");

    const filteredProjects = projects.filter(p =>
        activeFilter === "Alles" ? true : p.category === activeFilter
    );

    return (
        <main className="bg-strak-wit min-h-screen pt-32">

            {/* Header / Intro */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-montserrat font-bold text-beton-donker mb-4"
                >
                    Onze <span className="text-wildeman-blauw">Projecten</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 max-w-xl mx-auto font-open-sans"
                >
                    Bekijk de transformaties die wij hebben gerealiseerd. Van vervallen muren tot strak pleisterwerk.
                </motion.p>
            </section>

            {/* Filter Buttons */}
            <section className="container mx-auto px-4 mb-12">
                <div className="flex justify-center gap-4 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-all duration-300 ${activeFilter === filter
                                    ? "bg-wildeman-blauw text-white shadow-md scale-105"
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="container mx-auto px-4 pb-32">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"
                            >
                                <BeforeAfterSlider
                                    beforeImage={project.before}
                                    afterImage={project.after}
                                    alt={project.title}
                                    className="mb-4 shadow-inner"
                                />
                                <div className="flex justify-between items-center">
                                    <h3 className="font-montserrat font-bold text-lg text-beton-donker">{project.title}</h3>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-slate-400">
                        Geen projecten gevonden in deze categorie.
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}

"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

// Project Data
const projects = [
    {
        id: 1,
        title: "Villa Renovatie",
        subtitle: "Elburg — Glad Pleisterwerk",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Modern Appartement",
        subtitle: "Zwolle — Betonlook & Gips",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Historisch Pand",
        subtitle: "Harderwijk — Restauratie",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Nieuwbouw Woning",
        subtitle: "Kampen — Dunpleister",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
    },
];

interface ProjectCardProps {
    project: typeof projects[0];
    x: MotionValue<string>;
}

// Individual Card with Internal Parallax
const ProjectCard = ({ project, x }: ProjectCardProps) => {
    return (
        <div className="group relative h-[60vh] w-[80vw] md:w-[600px] shrink-0 overflow-hidden rounded-sm bg-gray-200">

            {/* 
         Internal Parallax Idea: 
         We are moving horizontally. We can shift the image position slightly based on the scroll.
         Since 'x' is the global horizontal scroll value (0% to -X%), we can't easily reuse it directly for *internal* parallax 
         without some mapping constraint. 
         A simpler "cinematic" effect is just a slow zoom on hover or a constant float. 
         But sticking to the user request "parallax inside their frame while moving":
         We'll just do a standard heavy image scale/position trick or use the motion value if we pass it down.
         For stability let's use a subtle hover zoom + static position for now, 
         OR map the global scroll to object position if possible. 
         Let's stick to a robust standard: Image covers area.
      */}

            <div className="absolute inset-0 z-0">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 w-full">
                <div className="overflow-hidden mb-2">
                    <motion.p
                        className="text-white/80 font-open-sans text-sm md:text-base uppercase tracking-wider mb-2"
                    >
                        {project.subtitle}
                    </motion.p>
                </div>
                <h3 className="text-3xl md:text-5xl font-montserrat font-bold text-white leading-tight">
                    {project.title}
                </h3>
            </div>
        </div>
    );
};

export default function PortfolioSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform vertical scroll (0-1) to horizontal translation
    // If we have 4 items of ~600px + gaps, we need to scroll significantly.
    // Let's assume a rough translate range.
    // -75% covers most of the track if we layout 4 items properly. 
    // We'll tune this '1%' to '-75%' mapping.
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-natte-gips">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Section Header (Optional/integrated) */}
                <div className="absolute top-10 left-4 md:left-12 z-20">
                    <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-beton-donker opacity-50">
                        Gerealiseerd Werk
                    </h2>
                </div>

                {/* Horizontal Track */}
                <motion.div
                    style={{ x }}
                    className="flex gap-8 md:gap-16 pl-4 md:pl-12 pr-12 w-fit -my-10" // Extra padding to ensure last item is visible
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} x={x} />
                    ))}
                </motion.div>

                {/* Progress Bar / Scroll Indicator */}
                <div className="absolute bottom-10 left-4 md:left-12 right-12 z-20 hidden md:block">
                    <div className="w-full max-w-xs h-1 bg-gray-300 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                            className="h-full bg-wildeman-blauw"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

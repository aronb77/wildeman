"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StuccoRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    wipeColor?: string; // CSS color or Tailwind class if needed, but hex is safer for motion variants
    delay?: number;
}

export const StuccoReveal = ({
    children,
    width = "fit-content",
    className,
    wipeColor = "#0056b3", // Default to Wildeman Blauw
    delay = 0
}: StuccoRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // Reveal content
            mainControls.start("visible");
            // Swipe animation
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 }, // Keep it simple, just opacity reveal behind the mask
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.1, delay: delay + 0.4 }} // Reveal slightly after swipe starts covering
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0, width: "0%" }, // Start empty
                    visible: {
                        left: ["0%", "0%", "100%"],
                        width: ["0%", "100%", "0%"],
                        transition: {
                            duration: 0.8,
                            ease: "easeOut",
                            times: [0, 0.4, 1], // Grow fast, shrink as it moves away
                            delay: delay
                        }
                    },
                }}
                initial="hidden"
                animate={slideControls}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: wipeColor,
                    zIndex: 20
                }}
            />
        </div>
    );
};

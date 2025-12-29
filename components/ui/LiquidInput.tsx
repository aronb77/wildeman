"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LiquidInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    isTextArea?: boolean;
}

export const LiquidInput = ({ label, isTextArea = false, className, ...props }: LiquidInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={cn("relative group mb-6", className)}>
            <label
                className={cn(
                    "block text-sm font-open-sans font-semibold mb-2 transition-colors duration-300",
                    isFocused ? "text-wildeman-blauw" : "text-slate-400 group-hover:text-slate-200"
                )}
            >
                {label}
            </label>

            <div className="relative">
                {isTextArea ? (
                    <textarea
                        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent border-b border-slate-700 text-white pb-2 focus:outline-none resize-none font-open-sans"
                        rows={4}
                    />
                ) : (
                    <input
                        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent border-b border-slate-700 text-white pb-2 focus:outline-none font-open-sans"
                    />
                )}

                {/* The Liquid Border Animation */}
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isFocused ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="absolute bottom-0 left-0 h-[2px] bg-wildeman-blauw"
                />
            </div>
        </div>
    );
};

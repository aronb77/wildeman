"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Home, Hammer } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Constants
const STEPS = 5;

// Animation Variants for "Stacked Layers"
const variants = {
    enter: (direction: number) => ({
        y: 50,
        opacity: 0,
        scale: 0.95,
    }),
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        y: -50,
        opacity: 0,
        scale: 0.9, // Scale down slightly to look like it's going to back
    }),
};

const transition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
};

export default function OffertePage() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        projectType: "", // Nieuwbouw / Renovatie
        spaces: [] as string[],
        area: 50,
        finish: "", // Sausklaar / Behangklaar / Sierpleister / Betonlook
        name: "",
        email: "",
        phone: "",
        zip: "",
    });

    const handleNext = () => {
        if (step < STEPS) {
            setDirection(1);
            setStep(step + 1);
        } else {
            // Submit
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setDirection(-1);
            setStep(step - 1);
        }
    };

    const handleSubmit = () => {
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 500);
    };

    const updateField = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleSpace = (space: string) => {
        setFormData(prev => {
            const spaces = prev.spaces.includes(space)
                ? prev.spaces.filter(s => s !== space)
                : [...prev.spaces, space];
            return { ...prev, spaces };
        });
    };

    // Validation
    const canProceed = () => {
        switch (step) {
            case 1: return !!formData.projectType;
            case 2: return formData.spaces.length > 0;
            case 3: return true; // Slider always has value
            case 4: return !!formData.finish;
            case 5: return !!formData.name && !!formData.email && !!formData.phone;
            default: return false;
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-32">

            {/* Container */}
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col relative">

                {/* Progress Bar */}
                {!isSubmitted && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
                        <div
                            className="h-full bg-wildeman-blauw transition-all duration-500 ease-out"
                            style={{ width: `${(step / STEPS) * 100}%` }}
                        />
                    </div>
                )}

                <div className="flex-1 flex flex-col p-8 md:p-12 relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        {isSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center h-full text-center space-y-6 m-auto"
                            >
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </motion.svg>
                                </div>
                                <h2 className="text-3xl font-montserrat font-bold text-beton-donker">Bedankt!</h2>
                                <p className="text-slate-500 font-open-sans text-lg">
                                    We hebben uw gegevens ontvangen.<br /> E.J.H. Wildeman neemt binnen 1 werkdag contact op.
                                </p>
                                <Link href="/" className="mt-8 inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold font-montserrat hover:bg-slate-800 transition-colors">
                                    Terug naar Home
                                </Link>
                            </motion.div>
                        ) : (
                            <>
                                {/* Step Header */}
                                <div className="mb-8">
                                    <span className="text-sm font-bold text-wildeman-blauw uppercase tracking-wider">Stap {step} van {STEPS}</span>
                                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-beton-donker mt-2">
                                        {step === 1 && "Start uw Project"}
                                        {step === 2 && "Welke ruimtes?"}
                                        {step === 3 && "Oppervlakte?"}
                                        {step === 4 && "Gewenste Afwerking"}
                                        {step === 5 && "Uw Gegevens"}
                                    </h2>
                                </div>

                                {/* Step Content */}
                                <motion.div
                                    key={step}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={transition}
                                    className="flex-1 flex flex-col justify-center" // Center content vertically
                                >
                                    {/* STEP 1: Project Type */}
                                    {step === 1 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <button
                                                onClick={() => updateField("projectType", "Nieuwbouw")}
                                                className={cn(
                                                    "flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all duration-300 gap-4 group hover:shadow-md",
                                                    formData.projectType === "Nieuwbouw" ? "border-wildeman-blauw bg-blue-50/50" : "border-slate-100 hover:border-slate-200"
                                                )}
                                            >
                                                <Home className={cn("w-12 h-12 transition-colors", formData.projectType === "Nieuwbouw" ? "text-wildeman-blauw" : "text-slate-300 group-hover:text-slate-400")} />
                                                <span className="font-montserrat font-bold text-lg text-beton-donker">Nieuwbouw</span>
                                                <span className="text-xs text-slate-400">Minder voorwerk</span>
                                            </button>

                                            <button
                                                onClick={() => updateField("projectType", "Renovatie")}
                                                className={cn(
                                                    "flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all duration-300 gap-4 group hover:shadow-md",
                                                    formData.projectType === "Renovatie" ? "border-wildeman-blauw bg-blue-50/50" : "border-slate-100 hover:border-slate-200"
                                                )}
                                            >
                                                <Hammer className={cn("w-12 h-12 transition-colors", formData.projectType === "Renovatie" ? "text-wildeman-blauw" : "text-slate-300 group-hover:text-slate-400")} />
                                                <span className="font-montserrat font-bold text-lg text-beton-donker">Renovatie</span>
                                                <span className="text-xs text-slate-400">Bestaande bouw</span>
                                            </button>
                                        </div>
                                    )}

                                    {/* STEP 2: Spaces */}
                                    {step === 2 && (
                                        <div className="flex flex-wrap gap-3">
                                            {["Woonkamer", "Slaapkamers", "Badkamer", "Keuken", "Hal/Trapgat", "Gehele Woning"].map(space => (
                                                <button
                                                    key={space}
                                                    onClick={() => toggleSpace(space)}
                                                    className={cn(
                                                        "px-6 py-3 rounded-full font-open-sans font-medium text-sm md:text-base border transition-all duration-200",
                                                        formData.spaces.includes(space)
                                                            ? "bg-wildeman-blauw text-white border-wildeman-blauw shadow-md"
                                                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                                    )}
                                                >
                                                    {space}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* STEP 3: Area */}
                                    {step === 3 && (
                                        <div className="px-4 py-8">
                                            <div className="text-center mb-12">
                                                <span className="text-6xl font-montserrat font-bold text-wildeman-blauw">
                                                    {formData.area}
                                                </span>
                                                <span className="text-xl text-slate-400 font-medium ml-2">m²</span>
                                            </div>

                                            <input
                                                type="range"
                                                min="0"
                                                max="250"
                                                step="5"
                                                value={formData.area}
                                                onChange={(e) => updateField("area", Number(e.target.value))}
                                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-wildeman-blauw"
                                            />
                                            <div className="flex justify-between text-xs text-slate-400 mt-4 font-bold uppercase tracking-widest">
                                                <span>0 m²</span>
                                                <span>250+ m²</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 4: Finish */}
                                    {step === 4 && (
                                        <div className="space-y-3">
                                            {["Sausklaar", "Behangklaar", "Sierpleister", "Betonlook"].map(finish => (
                                                <button
                                                    key={finish}
                                                    onClick={() => updateField("finish", finish)}
                                                    className={cn(
                                                        "w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between group",
                                                        formData.finish === finish
                                                            ? "border-wildeman-blauw bg-blue-50/50"
                                                            : "border-slate-100 hover:bg-slate-50"
                                                    )}
                                                >
                                                    <span className={cn("font-montserrat font-bold", formData.finish === finish ? "text-wildeman-blauw" : "text-slate-600")}>
                                                        {finish}
                                                    </span>
                                                    {formData.finish === finish && <Check className="w-5 h-5 text-wildeman-blauw" />}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* STEP 5: Details */}
                                    {step === 5 && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Naam</label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => updateField("name", e.target.value)}
                                                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-wildeman-blauw focus:ring-1 focus:ring-wildeman-blauw outline-none bg-slate-50"
                                                    placeholder="Uw volledige naam"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-1">Telefoon</label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => updateField("phone", e.target.value)}
                                                        className="w-full p-3 rounded-lg border border-slate-200 focus:border-wildeman-blauw focus:ring-1 focus:ring-wildeman-blauw outline-none bg-slate-50"
                                                        placeholder="06 - ..."
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-1">Postcode</label>
                                                    <input
                                                        type="text"
                                                        value={formData.zip}
                                                        onChange={(e) => updateField("zip", e.target.value)}
                                                        className="w-full p-3 rounded-lg border border-slate-200 focus:border-wildeman-blauw focus:ring-1 focus:ring-wildeman-blauw outline-none bg-slate-50"
                                                        placeholder="1234 AB"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">E-mail</label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => updateField("email", e.target.value)}
                                                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-wildeman-blauw focus:ring-1 focus:ring-wildeman-blauw outline-none bg-slate-50"
                                                    placeholder="uw@email.nl"
                                                />
                                            </div>
                                        </div>
                                    )}

                                </motion.div>

                                {/* Actions */}
                                <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-100">
                                    <button
                                        onClick={handleBack}
                                        disabled={step === 1}
                                        className={cn(
                                            "flex items-center gap-2 text-sm font-bold font-montserrat transition-colors",
                                            step === 1 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-slate-600"
                                        )}
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Vorige
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        disabled={!canProceed()}
                                        className={cn(
                                            "flex items-center gap-2 px-8 py-3 rounded-full font-bold font-montserrat text-white transition-all shadow-lg",
                                            !canProceed()
                                                ? "bg-slate-300 cursor-not-allowed shadow-none"
                                                : "bg-wildeman-blauw hover:bg-blue-700 hover:scale-105"
                                        )}
                                    >
                                        {step === STEPS ? "Verstuur Aanvraag" : "Volgende"}
                                        {step !== STEPS && <ArrowRight className="w-4 h-4" />}
                                    </button>
                                </div>
                            </>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </main>
    );
}

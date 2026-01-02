"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Home, Sun, Hammer, Sparkles, Paintbrush, Ruler } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Constants
const STEPS = 6; // Added 1 extra step for Binnen/Buiten

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
        scale: 0.9,
    }),
};

const transition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
};

export default function OfferteWizard() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        location: "", // Binnen / Buiten (New Step 1)
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
            case 1: return !!formData.location;
            case 2: return !!formData.projectType;
            case 3: return formData.spaces.length > 0;
            case 4: return true; // Slider always has value
            case 5: return !!formData.finish;
            case 6: return !!formData.name && !!formData.email && !!formData.phone;
            default: return false;
        }
    };

    return (
        <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col relative border border-slate-100">

            {/* Progress Bar */}
            {!isSubmitted && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
                    <div
                        className="h-full bg-wildeman-blauw transition-all duration-500 ease-out rounded-r-full"
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
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-inner">
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
                                We hebben uw aanvraag ontvangen.<br /> Wij nemen binnen 1 werkdag contact op.
                            </p>
                            <Link href="/" className="mt-8 inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold font-montserrat hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                                Terug naar Home
                            </Link>
                        </motion.div>
                    ) : (
                        <>
                            {/* Step Header */}
                            <div className="mb-8">
                                <span className="text-sm font-bold text-wildeman-blauw uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">Stap {step} van {STEPS}</span>
                                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-beton-donker mt-4 leading-tight">
                                    {step === 1 && "Waar gaan we aan de slag?"}
                                    {step === 2 && "Wat voor project is het?"}
                                    {step === 3 && "Welke ruimtes?"}
                                    {step === 4 && "Hoeveel m² ongeveer?"}
                                    {step === 5 && "Welke afwerking zoekt u?"}
                                    {step === 6 && "Waar mogen we de offerte heen sturen?"}
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
                                className="flex-1 flex flex-col justify-center py-4"
                            >
                                {/* STEP 1: Location (Binnen/Buiten) */}
                                {step === 1 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button
                                            onClick={() => updateField("location", "Binnen")}
                                            className={cn(
                                                "relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-300 gap-4 group hover:shadow-lg hover:-translate-y-1",
                                                formData.location === "Binnen"
                                                    ? "border-wildeman-blauw bg-blue-50/50 shadow-md ring-1 ring-wildeman-blauw"
                                                    : "border-slate-100 hover:border-wildeman-blauw/30"
                                            )}
                                        >
                                            <Home className={cn("w-16 h-16 transition-colors", formData.location === "Binnen" ? "text-wildeman-blauw" : "text-slate-300 group-hover:text-wildeman-blauw")} />
                                            <span className="font-montserrat font-bold text-xl text-beton-donker">Binnen</span>
                                        </button>

                                        <button
                                            onClick={() => updateField("location", "Buiten")}
                                            className={cn(
                                                "relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-300 gap-4 group hover:shadow-lg hover:-translate-y-1",
                                                formData.location === "Buiten"
                                                    ? "border-wildeman-oranje bg-orange-50/50 shadow-md ring-1 ring-wildeman-oranje"
                                                    : "border-slate-100 hover:border-wildeman-oranje/30"
                                            )}
                                        >
                                            <Sun className={cn("w-16 h-16 transition-colors", formData.location === "Buiten" ? "text-wildeman-oranje" : "text-slate-300 group-hover:text-wildeman-oranje")} />
                                            <span className="font-montserrat font-bold text-xl text-beton-donker">Buiten</span>
                                        </button>
                                    </div>
                                )}

                                {/* STEP 2: Project Type */}
                                {step === 2 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button
                                            onClick={() => updateField("projectType", "Nieuwbouw")}
                                            className={cn(
                                                "relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-300 gap-4 group hover:shadow-lg",
                                                formData.projectType === "Nieuwbouw"
                                                    ? "border-wildeman-blauw bg-blue-50/50 request-selected-blue"
                                                    : "border-slate-100 hover:border-slate-200"
                                            )}
                                        >
                                            <Sparkles className={cn("w-12 h-12 transition-colors", formData.projectType === "Nieuwbouw" ? "text-wildeman-blauw" : "text-slate-300 group-hover:text-slate-400")} />
                                            <span className="font-montserrat font-bold text-lg text-beton-donker">Nieuwbouw</span>
                                            <span className="text-xs text-slate-400">Minder voorwerk nodig</span>
                                        </button>

                                        <button
                                            onClick={() => updateField("projectType", "Renovatie")}
                                            className={cn(
                                                "relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-300 gap-4 group hover:shadow-lg",
                                                formData.projectType === "Renovatie"
                                                    ? "border-wildeman-blauw bg-blue-50/50"
                                                    : "border-slate-100 hover:border-slate-200"
                                            )}
                                        >
                                            <Hammer className={cn("w-12 h-12 transition-colors", formData.projectType === "Renovatie" ? "text-wildeman-blauw" : "text-slate-300 group-hover:text-slate-400")} />
                                            <span className="font-montserrat font-bold text-lg text-beton-donker">Renovatie</span>
                                            <span className="text-xs text-slate-400">Bestaande bouw / Oud</span>
                                        </button>
                                    </div>
                                )}

                                {/* STEP 3: Spaces */}
                                {step === 3 && (
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {formData.location === "Buiten"
                                            ? ["Gevel Voorzijde", "Gevel Achterzijde", "Aanbouw", "Tuinmuren", "Garage", "Gehele Woning"].map(space => (
                                                <button
                                                    key={space}
                                                    onClick={() => toggleSpace(space)}
                                                    className={cn(
                                                        "px-6 py-4 rounded-2xl font-open-sans font-bold text-sm md:text-base border-2 transition-all duration-200",
                                                        formData.spaces.includes(space)
                                                            ? "bg-wildeman-oranje text-white border-wildeman-oranje shadow-md transform scale-105"
                                                            : "bg-white text-slate-600 border-slate-100 hover:border-wildeman-oranje/50 hover:bg-orange-50"
                                                    )}
                                                >
                                                    {space}
                                                </button>
                                            ))
                                            : ["Woonkamer", "Slaapkamers", "Badkamer", "Keuken", "Hal/Trapgat", "Zolder", "Gehele Woning"].map(space => (
                                                <button
                                                    key={space}
                                                    onClick={() => toggleSpace(space)}
                                                    className={cn(
                                                        "px-6 py-4 rounded-2xl font-open-sans font-bold text-sm md:text-base border-2 transition-all duration-200",
                                                        formData.spaces.includes(space)
                                                            ? "bg-wildeman-blauw text-white border-wildeman-blauw shadow-md transform scale-105"
                                                            : "bg-white text-slate-600 border-slate-100 hover:border-wildeman-blauw/50 hover:bg-blue-50"
                                                    )}
                                                >
                                                    {space}
                                                </button>
                                            ))}
                                    </div>
                                )}

                                {/* STEP 4: Area */}
                                {step === 4 && (
                                    <div className="px-4 py-8">
                                        <div className="text-center mb-12">
                                            <span className="text-7xl font-montserrat font-bold text-wildeman-blauw tracking-tighter">
                                                {formData.area}
                                            </span>
                                            <span className="text-2xl text-slate-400 font-medium ml-2">m²</span>
                                        </div>

                                        <input
                                            type="range"
                                            min="0"
                                            max="250"
                                            step="5"
                                            value={formData.area}
                                            onChange={(e) => updateField("area", Number(e.target.value))}
                                            className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-wildeman-blauw hover:accent-blue-600"
                                        />
                                        <div className="flex justify-between text-xs text-slate-400 mt-6 font-bold uppercase tracking-widest">
                                            <span>Klein (0 m²)</span>
                                            <span>Groot (250+ m²)</span>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 5: Finish */}
                                {step === 5 && (
                                    <div className="space-y-4">
                                        {(formData.location === "Buiten"
                                            ? ["Gevelisolatie + Stuc", "Alleen Stucwerk", "Spachtelputz Buiten", "Keimwerk"]
                                            : ["Sausklaar (Glad)", "Behangklaar", "Sierpleister (Spachtelputz)", "Betonlook / Design"]
                                        ).map(finish => (
                                            <button
                                                key={finish}
                                                onClick={() => updateField("finish", finish)}
                                                className={cn(
                                                    "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group",
                                                    formData.finish === finish
                                                        ? "border-wildeman-blauw bg-blue-50/50 shadow-sm"
                                                        : "border-slate-50 hover:bg-slate-50 hover:border-slate-200"
                                                )}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center", formData.finish === finish ? "border-wildeman-blauw bg-wildeman-blauw" : "border-slate-300")}>
                                                        {formData.finish === finish && <Check className="w-4 h-4 text-white" />}
                                                    </div>
                                                    <span className={cn("font-montserrat font-bold text-lg", formData.finish === finish ? "text-wildeman-blauw" : "text-slate-600")}>
                                                        {finish}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* STEP 6: Details */}
                                {step === 6 && (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Naam</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => updateField("name", e.target.value)}
                                                className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-wildeman-blauw focus:ring-0 outline-none bg-slate-50 transition-colors font-open-sans font-medium"
                                                placeholder="Uw volledige naam"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 ml-1">Telefoon</label>
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => updateField("phone", e.target.value)}
                                                    className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-wildeman-blauw focus:ring-0 outline-none bg-slate-50 transition-colors font-open-sans font-medium"
                                                    placeholder="06 - ..."
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 ml-1">Postcode</label>
                                                <input
                                                    type="text"
                                                    value={formData.zip}
                                                    onChange={(e) => updateField("zip", e.target.value)}
                                                    className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-wildeman-blauw focus:ring-0 outline-none bg-slate-50 transition-colors font-open-sans font-medium"
                                                    placeholder="1234 AB"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">E-mailadres</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => updateField("email", e.target.value)}
                                                className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-wildeman-blauw focus:ring-0 outline-none bg-slate-50 transition-colors font-open-sans font-medium"
                                                placeholder="uw@email.nl"
                                            />
                                        </div>
                                    </div>
                                )}

                            </motion.div>

                            {/* Actions */}
                            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                                <button
                                    onClick={handleBack}
                                    disabled={step === 1}
                                    className={cn(
                                        "flex items-center gap-2 text-sm font-bold font-montserrat transition-colors py-3 px-4 rounded-xl",
                                        step === 1 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Vorige
                                </button>

                                <button
                                    onClick={handleNext}
                                    disabled={!canProceed()}
                                    className={cn(
                                        "flex items-center gap-2 px-8 py-4 rounded-xl font-bold font-montserrat text-white transition-all shadow-lg",
                                        !canProceed()
                                            ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                                            : "bg-wildeman-blauw hover:bg-blue-700 hover:scale-[1.02] hover:shadow-xl"
                                    )}
                                >
                                    {step === STEPS ? "Laten we beginnen!" : "Volgende Stap"}
                                    {step !== STEPS && <ArrowRight className="w-4 h-4" />}
                                </button>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>

        </div>
    );
}

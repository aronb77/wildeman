"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
    className?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt, className }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        // Logic for mouse/touch move would go here for custom generic drag, 
        // but simple input[type=range] is much more robust for accessibility and screen readers.
        // We will stick to the range input approach overlay on top generally, but let's implement the refined custom approach if requested.
        // Actually standard 'slepen' (dragging) implies the handle.
    };

    // We'll use a range input overlay because it handles the interaction perfectly across devices.
    // We style it to be invisible but functional content.

    return (
        <div className={cn("relative w-full aspect-video overflow-hidden rounded-sm select-none group", className)}>
            {/* 2. Before Image (Background) - Initially Visible on Right side essentially */}
            <div className="absolute inset-0">
                <Image
                    src={beforeImage}
                    alt={`Old situation - ${alt}`}
                    fill
                    className="object-cover grayscale brightness-75" // Make 'Before' look a bit duller for effect
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-xs font-bold uppercase rounded-sm">
                    Voor
                </div>
            </div>

            {/* 3. After Image (Foreground) - Cropped by width */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <Image
                    src={afterImage}
                    alt={`New situation - ${alt}`}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-wildeman-blauw text-white px-2 py-1 text-xs font-bold uppercase rounded-sm">
                    Na
                </div>
            </div>

            {/* 4. The Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-wildeman-blauw">
                    <MoveHorizontal className="w-5 h-5" />
                </div>
            </div>

            {/* 5. Input Range Overlay for Interaction */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Slider to compare before and after images"
            />
        </div>
    );
}

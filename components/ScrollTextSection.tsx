'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollTextSectionProps {
    title: string;
    subtitle: string;
    scrollRange: [number, number, number, number]; // [fadeIn, visible, visible, fadeOut]
}

export default function ScrollTextSection({ title, subtitle, scrollRange }: ScrollTextSectionProps) {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(
        scrollYProgress,
        scrollRange,
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        scrollRange,
        [50, 0, 0, -50]
    );

    return (
        <div ref={targetRef} className="h-screen flex items-center justify-center pointer-events-none">
            <motion.div
                style={{ opacity, y }}
                className="text-center px-4 max-w-4xl"
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                    {title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light text-balance">
                    {subtitle}
                </p>
            </motion.div>
        </div>
    );
}

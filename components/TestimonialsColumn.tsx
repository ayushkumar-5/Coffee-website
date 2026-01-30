"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div
                                    className="p-8 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-amber-500/20 shadow-xl shadow-amber-500/5 max-w-xs w-full hover:border-amber-500/40 transition-all duration-300"
                                    key={i}
                                >
                                    <div className="text-gray-300 text-sm leading-relaxed mb-6">
                                        &ldquo;{text}&rdquo;
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img
                                            width={48}
                                            height={48}
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-500/30"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-semibold text-white tracking-tight leading-5">
                                                {name}
                                            </div>
                                            <div className="text-sm leading-5 text-amber-500/80 tracking-tight">
                                                {role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};

"use client";
import React from "react";
import { TestimonialsColumn } from "./TestimonialsColumn";

const testimonials = [
    {
        text: "This coffee transformed my morning routine. The rich aroma and smooth taste are unmatched. It's like a luxury experience in every cup.",
        image: "/images/avatar-sarah.png",
        name: "Sarah Mitchell",
        role: "Coffee Enthusiast"
    },
    {
        text: "I've tried countless brands, but nothing compares to this. The bold flavor and perfect balance make it my go-to choice every single day.",
        image: "/images/avatar-james.png",
        name: "James Peterson",
        role: "Food Blogger"
    },
    {
        text: "The quality is exceptional. From the packaging to the last drop, everything screams premium. I'm hooked!",
        image: "/images/avatar-mei.png",
        name: "Mei Chen",
        role: "Barista"
    },
    {
        text: "As a coffee connoisseur, I'm incredibly picky. This blend exceeded all my expectations with its depth and complexity.",
        image: "/images/avatar-carlos.png",
        name: "Carlos Rodriguez",
        role: "Restaurant Owner"
    },
    {
        text: "I start every workday with this coffee. It's consistent, flavorful, and gives me the energy I need to power through.",
        image: "/images/avatar-kendra.png",
        name: "Kendra Williams",
        role: "Marketing Director"
    },
    {
        text: "The perfect coffee exists, and this is it. Smooth, rich, and absolutely delicious. I recommend it to everyone I know.",
        image: "/images/avatar-alex.png",
        name: "Alex Turner",
        role: "Graphic Designer"
    }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);

export default function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-copper-400 to-gold-400 bg-clip-text text-transparent">
                        What People Say
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover why coffee lovers around the world choose our premium blends
                    </p>
                </div>

                {/* Testimonials Columns */}
                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px]">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        duration={19}
                        className="hidden md:block"
                    />
                </div>
            </div>
        </section>
    );
}

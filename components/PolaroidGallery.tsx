'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SphereImageGrid, { ImageData } from './SphereImageGrid';

export default function PolaroidGallery() {
    // Generate polaroids in a circular pattern around center
    const generateCircularPolaroids = () => {
        const images = [
            { src: '/images/coffee-beans-close.png', caption: 'Roasted perfection' },
            { src: '/images/cold-brew-pour.png', caption: 'Golden cascade' },
            { src: '/images/coffee-plant.png', caption: 'Origin story' },
            { src: '/images/espresso-extraction.png', caption: 'Liquid gold' },
            { src: '/images/coffee-foam-macro.png', caption: 'Crema dreams' },
            { src: '/images/latte-art.png', caption: 'Morning ritual' },
            { src: '/images/coffee-grinder.png', caption: 'Timeless craft' },
            { src: '/images/iced-coffee-swirl.png', caption: 'Cold artistry' },
            { src: '/images/coffee-beans-close.png', caption: 'Rich aroma' },
            { src: '/images/cold-brew-pour.png', caption: 'Smooth blend' },
            { src: '/images/coffee-plant.png', caption: 'Pure essence' },
            { src: '/images/espresso-extraction.png', caption: 'Bold flavor' },
            { src: '/images/coffee-foam-macro.png', caption: 'Silky texture' },
            { src: '/images/latte-art.png', caption: 'Artisan touch' },
            { src: '/images/coffee-grinder.png', caption: 'Fresh ground' },
            { src: '/images/iced-coffee-swirl.png', caption: 'Chilled delight' },
        ];

        const numPolaroids = images.length;
        const radius = 420; // Adjusted for better fit
        const center = 700; // Half of h-[1400px]
        const polaroidHalfSize = 140; // Half of polaroid size (240px + padding = ~280px)

        return images.map((img, index) => {
            const angle = (index / numPolaroids) * Math.PI * 2 - Math.PI / 2; // Start from top

            const x = center + Math.cos(angle) * radius - polaroidHalfSize;
            const y = center + Math.sin(angle) * radius - polaroidHalfSize;

            return {
                ...img,
                rotation: (Math.random() - 0.5) * 10,
                position: {
                    left: `${x}px`,
                    top: `${y}px`,
                },
            };
        });
    };

    const polaroids = generateCircularPolaroids();

    const sphereImages: ImageData[] = [
        { id: '1', src: '/images/coffee-beans-close.png', alt: 'Coffee Beans' },
        { id: '2', src: '/images/cold-brew-pour.png', alt: 'Cold Brew' },
        { id: '3', src: '/images/coffee-plant.png', alt: 'Coffee Plant' },
        { id: '4', src: '/images/espresso-extraction.png', alt: 'Espresso' },
        { id: '5', src: '/images/coffee-foam-macro.png', alt: 'Coffee Foam' },
        { id: '6', src: '/images/latte-art.png', alt: 'Latte Art' },
        { id: '7', src: '/images/coffee-grinder.png', alt: 'Coffee Grinder' },
        { id: '8', src: '/images/iced-coffee-swirl.png', alt: 'Iced Coffee' },
        { id: '9', src: '/images/coffee-beans-close.png', alt: 'Roasted Beans' },
        { id: '10', src: '/images/cold-brew-pour.png', alt: 'Pour Over' },
        { id: '11', src: '/images/coffee-plant.png', alt: 'Coffee Cherry' },
        { id: '12', src: '/images/espresso-extraction.png', alt: 'Double Shot' },
        { id: '13', src: '/images/coffee-foam-macro.png', alt: 'Microfoam' },
        { id: '14', src: '/images/latte-art.png', alt: 'Heart Pattern' },
        { id: '15', src: '/images/coffee-grinder.png', alt: 'Burr Grinder' },
        { id: '16', src: '/images/iced-coffee-swirl.png', alt: 'Cold Brew' },
        { id: '17', src: '/images/coffee-beans-close.png', alt: 'Whole Beans' },
        { id: '18', src: '/images/espresso-extraction.png', alt: 'Espresso Shot' },
        { id: '19', src: '/images/latte-art.png', alt: 'Rosetta' },
        { id: '20', src: '/images/coffee-foam-macro.png', alt: 'Crema' },
    ];


    return (
        <section className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 py-24 overflow-hidden">
            {/* Section Title */}
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-copper-400 to-gold-400 bg-clip-text text-transparent mb-4">
                    The Collection
                </h2>
                <p className="text-xl text-gray-400">
                    Moments captured in time
                </p>
            </div>


            {/* Main Content Container - Centered Layout */}
            <div className="relative w-full max-w-[1400px] mx-auto px-6">
                <div className="relative w-full h-[1400px] flex items-center justify-center">

                    {/* Polaroids positioned in circular pattern */}
                    <div className="absolute inset-0">
                        {polaroids.map((polaroid, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: polaroid.rotation
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.05,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: 0,
                                    zIndex: 100,
                                    transition: { duration: 0.3 }
                                }}
                                className="absolute cursor-pointer"
                                style={polaroid.position}
                            >
                                {/* Polaroid Frame */}
                                <div className="bg-white p-4 pb-16 shadow-2xl hover:shadow-3xl transition-shadow">
                                    {/* Image */}
                                    <div className="relative w-[240px] h-[240px] bg-gray-200 overflow-hidden">
                                        <Image
                                            src={polaroid.src}
                                            alt={polaroid.caption}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Caption */}
                                    <p className="text-center mt-4 font-handwriting text-gray-800 text-lg">
                                        {polaroid.caption}
                                    </p>
                                </div>

                                {/* Tape Effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-100/40 rotate-1 blur-[0.5px]"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center: 3D Sphere Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative z-50"
                    >
                        <SphereImageGrid
                            images={sphereImages}
                            containerSize={650}
                            sphereRadius={280}
                            autoRotate={true}
                            autoRotateSpeed={0.2}
                            dragSensitivity={0.6}
                            baseImageScale={0.15}
                        />
                        {/* Decorative glow behind sphere */}
                        <div className="absolute inset-0 -z-10 bg-gradient-radial from-amber-300/40 via-amber-200/20 to-transparent blur-3xl scale-150"></div>
                    </motion.div>

                </div>
            </div>


            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-copper-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
        </section>
    );
}

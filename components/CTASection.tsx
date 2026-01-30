'use client';

import { motion } from 'framer-motion';
import VaporizeTextCycle, { Tag } from './VaporizeTextCycle';

export default function CTASection() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-800 to-black px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-5xl w-full"
            >
                {/* Vaporize Text Animation */}
                <div className="mb-16 h-48 flex items-center justify-center">
                    <VaporizeTextCycle
                        texts={["Ready for the", "Experience?", "Drink the Drama."]}
                        font={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "80px",
                            fontWeight: 700
                        }}
                        color="rgb(218, 165, 32)"
                        spread={5}
                        density={7}
                        animation={{
                            vaporizeDuration: 2,
                            fadeInDuration: 1.2,
                            waitDuration: 1
                        }}
                        direction="left-to-right"
                        alignment="center"
                        tag={Tag.H2}
                    />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-gradient-to-r from-copper-500 to-gold-500 hover:from-copper-400 hover:to-gold-400 text-white text-xl font-bold rounded-full transition-all shadow-lg shadow-copper-500/30"
                    >
                        Order Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 border-2 border-copper-500 hover:bg-copper-500/20 text-copper-400 hover:text-copper-300 text-xl font-bold rounded-full transition-all backdrop-blur-sm"
                    >
                        Explore Flavors
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}

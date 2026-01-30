'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PaymentSection() {
    const paymentMethods = [
        { name: 'Visa', icon: '/payment/visa.png', position: { top: '20%', right: '15%' }, delay: 0.1 },
        { name: 'Mastercard', icon: '/payment/mastercard.png', position: { top: '35%', left: '10%' }, delay: 0.2 },
        { name: 'Apple Pay', icon: '/payment/apple-pay.png', position: { top: '55%', left: '35%' }, delay: 0.3 },
        { name: 'PayPal', icon: '/payment/paypal.png', position: { top: '40%', left: '25%' }, delay: 0.4 },
        { name: 'Google Pay', icon: '/payment/google-pay.png', position: { top: '45%', right: '30%' }, delay: 0.5 },
        { name: 'Amex', icon: '/payment/amex.png', position: { bottom: '30%', left: '5%' }, delay: 0.6 },
    ];


    return (
        <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black py-24 overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-copper-500/5 rounded-full blur-3xl top-10 left-10"></div>
                <div className="absolute w-96 h-96 bg-gold-500/5 rounded-full blur-3xl bottom-10 right-10"></div>
            </div>

            <div className="relative container mx-auto px-6">
                {/* Main Content */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold mb-4"
                    >
                        <span className="text-white">Don&apos;t just crave it.</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 to-gold-400">
                            Get it.
                        </span>
                    </motion.h2>

                    {/* Handwritten style notes */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute top-20 left-10 md:left-32 transform -rotate-6"
                    >
                        <p className="font-handwriting text-2xl text-copper-300">
                            Next Day
                            <br />
                            Delivery
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="absolute bottom-32 right-10 md:right-32 transform rotate-3"
                    >
                        <p className="font-handwriting text-2xl text-copper-300">
                            Free Shipping over
                            <br />
                            $50.00
                        </p>
                    </motion.div>
                </div>

                {/* Payment Method Circles */}
                <div className="relative w-full max-w-5xl mx-auto h-[500px]">
                    {paymentMethods.map((method, index) => (
                        <motion.div
                            key={method.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: method.delay,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            className="absolute"
                            style={method.position}
                        >
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-copper-500/20 hover:border-copper-500/40 transition-all duration-300">
                                <Image
                                    src={method.icon}
                                    alt={method.name}
                                    width={96}
                                    height={96}
                                    className="object-contain max-w-[70%] max-h-[70%]"
                                    priority
                                />

                            </div>
                        </motion.div>
                    ))}

                    {/* Additional decorative circles (partial, like in the reference) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-40 h-40 rounded-full bg-white/30 blur-sm"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="absolute -right-20 top-1/3 w-48 h-48 rounded-full bg-white/20 blur-sm"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="absolute left-1/4 -bottom-16 w-36 h-36 rounded-full bg-white/25 blur-sm"
                    ></motion.div>
                </div>

                {/* Trust badges or additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-32"
                >
                    <p className="text-gray-400 text-lg">
                        Secure checkout • Easy returns • Premium quality guaranteed
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

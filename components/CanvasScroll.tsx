'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface CanvasScrollProps {
    frameCount: number;
    scrollHeight?: string;
}

export default function CanvasScroll({ frameCount = 192, scrollHeight = 'h-[600vh]' }: CanvasScrollProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [autoPlayComplete, setAutoPlayComplete] = useState(false);

    // Auto-play settings
    const AUTO_PLAY_END_FRAME = 96; // The frame shown in the uploaded image
    const AUTO_PLAY_DURATION = 3000; // 3 seconds for the intro animation

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Camera push-in effect
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    // Preload all images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `/frames/ezgif-frame-${frameNumber}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                    console.log(`✅ All ${frameCount} frames loaded successfully`);
                }
            };

            img.onerror = () => {
                console.error(`Failed to load frame ${frameNumber}`);
            };

            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, [frameCount]);

    // Helper function to draw a specific frame on canvas
    const drawFrame = (frameIndex: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context || !images[frameIndex]) return;

        const img = images[frameIndex];
        if (img && img.complete) {
            // Set canvas size to match image aspect ratio
            const aspectRatio = img.width / img.height;
            const maxWidth = window.innerWidth;
            const maxHeight = window.innerHeight;

            let width = maxWidth;
            let height = maxWidth / aspectRatio;

            if (height > maxHeight) {
                height = maxHeight;
                width = maxHeight * aspectRatio;
            }

            canvas.width = width;
            canvas.height = height;

            // Clear and draw
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    };

    // Auto-play intro animation
    useEffect(() => {
        if (!imagesLoaded || autoPlayComplete) return;

        const startTime = Date.now();
        let animationFrameId: number;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / AUTO_PLAY_DURATION, 1);

            // Ease out cubic for smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const frameIndex = Math.floor(easeProgress * AUTO_PLAY_END_FRAME);

            setCurrentFrame(frameIndex);
            drawFrame(frameIndex);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setAutoPlayComplete(true);
                console.log('🎬 Auto-play complete, scroll enabled');
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [imagesLoaded, autoPlayComplete, AUTO_PLAY_END_FRAME, AUTO_PLAY_DURATION, images]);

    // Handle canvas rendering (scroll-based, only after auto-play)
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || images.length === 0 || !autoPlayComplete) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        const render = () => {
            const scrollProgress = scrollYProgress.get();

            // Map scroll to frames 96-191 (remaining frames after auto-play)
            const remainingFrames = frameCount - AUTO_PLAY_END_FRAME;
            const frameIndex = Math.min(
                frameCount - 1,
                AUTO_PLAY_END_FRAME + Math.floor(scrollProgress * remainingFrames)
            );

            if (frameIndex !== currentFrame) {
                setCurrentFrame(frameIndex);
                drawFrame(frameIndex);
            }
        };

        // Subscribe to scroll updates
        const unsubscribe = scrollYProgress.on('change', render);

        // Initial render
        render();

        return () => unsubscribe();
    }, [imagesLoaded, images, scrollYProgress, currentFrame, frameCount, autoPlayComplete, AUTO_PLAY_END_FRAME]);

    // Lock scroll during auto-play
    useEffect(() => {
        if (!autoPlayComplete) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [autoPlayComplete]);

    // Handle window resize
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const handleResize = () => {
            drawFrame(currentFrame);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imagesLoaded, images, currentFrame]);

    return (
        <div ref={containerRef} className={`relative ${scrollHeight}`}>
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ scale }} className="relative">
                    <canvas
                        ref={canvasRef}
                        className="max-w-full max-h-screen"
                        style={{ display: imagesLoaded ? 'block' : 'none' }}
                    />
                    {!imagesLoaded && (
                        <div className="flex items-center justify-center w-screen h-screen">
                            <div className="text-center">
                                <div className="w-16 h-16 border-4 border-copper-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-lg text-gray-400">Loading cinematic experience...</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

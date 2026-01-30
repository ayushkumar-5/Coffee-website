import CanvasScroll from '@/components/CanvasScroll';
import ScrollTextSection from '@/components/ScrollTextSection';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import PolaroidGallery from '@/components/PolaroidGallery';
import Testimonials from '@/components/Testimonials';
import PaymentSection from '@/components/PaymentSection';

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="relative">
                {/* Canvas Scroll Experience with Overlaid Text */}
                <div className="relative">
                    <CanvasScroll frameCount={192} scrollHeight="h-[600vh]" />

                    {/* Text Overlays - Positioned Absolutely Over Canvas */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Section 1: Early Scroll - Vortex Begins */}
                        <div className="absolute top-0 left-0 right-0" style={{ height: '150vh' }}>
                            <ScrollTextSection
                                title="From Nothing."
                                subtitle="Espresso and crema collide in slow motion."
                                scrollRange={[0, 0.15, 0.25, 0.35]}
                            />
                        </div>

                        {/* Section 2: Mid Scroll - Can Appears */}
                        <div className="absolute left-0 right-0" style={{ top: '150vh', height: '150vh' }}>
                            <ScrollTextSection
                                title="Precision Assembled."
                                subtitle="Matte black aluminum. Cold. Condensed. Perfect."
                                scrollRange={[0.35, 0.45, 0.55, 0.65]}
                            />
                        </div>



                        {/* Section 4: Final Lock */}
                        <div className="absolute left-0 right-0" style={{ top: '450vh', height: '150vh' }}>
                            <ScrollTextSection
                                title="Drink the Drama."
                                subtitle="Not just coffee. A cinematic experience."
                                scrollRange={[0.85, 0.9, 0.95, 1]}
                            />
                        </div>
                    </div>
                </div>

                {/* Polaroid Gallery */}
                <PolaroidGallery />

                {/* Testimonials */}
                <Testimonials />

                {/* CTA Section */}
                <CTASection />

                {/* Payment Section */}
                <PaymentSection />
            </main>
        </>
    );
}


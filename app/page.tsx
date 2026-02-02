'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';

// Dynamically import sections for better code splitting
const HeroSection = dynamic(() => import('@/app/sections/hero-section').then(m => ({ default: m.HeroSection })), {
  ssr: true,
  loading: () => <div className="min-h-[60vh] flex items-center justify-center"><div className="animate-pulse text-cyan-400">Loading...</div></div>
});

const TemplatesSection = dynamic(() => import('@/app/sections/templates-section').then(m => ({ default: m.TemplatesSection })), {
  ssr: true,
  loading: () => <div className="min-h-[40vh] bg-gradient-spotlight" />
});

const HowItWorksSection = dynamic(() => import('@/app/sections/how-it-works-section').then(m => ({ default: m.HowItWorksSection })), {
  ssr: true,
});

const FeaturesSection = dynamic(() => import('@/app/sections/features-section').then(m => ({ default: m.FeaturesSection })), {
  ssr: true,
  loading: () => <div className="min-h-[40vh] bg-gradient-spotlight" />
});

const PricingSection = dynamic(() => import('@/app/sections/pricing-section').then(m => ({ default: m.PricingSection })), {
  ssr: true,
});

const CTASection = dynamic(() => import('@/app/sections/cta-section').then(m => ({ default: m.CTASection })), {
  ssr: true,
});

// Floating shapes background - keep inline as it's lightweight
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-500" />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-float animation-delay-1000" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <Navbar />
      <FloatingShapes />

      <HeroSection />
      <TemplatesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />

      <Footer />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import StrategySection from "./components/StrategySection";
import HowItWorks from "./components/HowItWorks";
import WhatYouLearn from "./components/WhatYouLearn";
import Coaches from "./components/Coaches";
import PivotIncludes from "./components/PivotIncludes";
import AgentTrust from "./components/AgentTrust";
import PricingSection from "./components/PricingSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export default function App() {
  return (
    <div className="min-h-screen bg-ifactor-cream text-pivot-dark flex flex-col font-sans select-none antialiased relative">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Main content zones */}
      <main className="flex-1">
        {/* Core display and headline pitch */}
        <Hero />

        {/* Pivot philosophy and focus matrix nodes */}
        <StrategySection />

        {/* Dynamic week-by-week program structure steps */}
        <HowItWorks />

        {/* Scrolling tape marquee, schedule, and live chat simulation */}
        <WhatYouLearn />

        {/* Mastermind Coach bios and closing metrics sliders */}
        <Coaches />

        {/* Complete curriculum grid package benefits checklist */}
        <PivotIncludes />

        {/* Agent testimonial reels */}
        <AgentTrust />

        {/* ADDED SERVICE INTRODUCTION: 3 CUSTOMER TIER PACKAGES (Basic, Pro, Elite) as requested */}
        <PricingSection />

        {/* Accordion list FAQ triggers */}
        <FAQ />
      </main>

      {/* 4. Multi-column social footer block */}
      <Footer />

      {/* Persistent floating triggers for instantaneous conversions */}
      <FloatingContact />
    </div>
  );
}


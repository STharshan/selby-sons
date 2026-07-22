import React from 'react';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenVideo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0d0f11]">
      {/* Background Hero Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Luxury glazing extension at dusk"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Dark subtle vignetting & gradient for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f11]/90 via-[#0d0f11]/70 to-[#0d0f11]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11] via-transparent to-[#0d0f11]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Label with Accent Line */}
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-[#dfd7c6]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#dfd7c6] uppercase">
              uPVC & ALUMINIUM GLAZING SPECIALISTS
            </span>
          </div>

          {/* Main Headline */}
          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] font-['Outfit'] mb-6"
          >
            BETTER VIEWS.<br />
            <span className="text-[#f5f3ee] relative">
              BUILT TO LAST.
              <span className="inline-block w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#dfd7c6] ml-2 animate-pulse" />
            </span>
          </h1>

          {/* Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8 max-w-lg"
          >
            Premium glazing solutions for homes across Loughborough and surrounding areas.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary Button */}
            <button
              onClick={onOpenQuote}
              className="px-7 py-4 bg-[#dfd7c6] hover:bg-[#ece5d6] text-[#111214] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-3 group cursor-pointer"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary Video Button */}
            <button
              onClick={onOpenVideo}
              className="px-6 py-4 border border-white/20 hover:border-white/60 bg-black/20 hover:bg-black/40 text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-3 group cursor-pointer backdrop-blur-sm"
            >
              <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[#dfd7c6] transition-all">
                <Play className="w-3.5 h-3.5 fill-white group-hover:fill-[#dfd7c6] text-transparent ml-0.5" />
              </div>
              <span className="group-hover:text-[#dfd7c6] transition-colors">Watch our work</span>
            </button>
          </div>
        </div>
      </div>

      {/* Location Badge (Bottom Right) */}
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="absolute bottom-8 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-2 px-4 py-2 bg-black/60 border border-white/10 backdrop-blur-md rounded-none text-xs text-gray-300 shadow-2xl"
      >
        <MapPin className="w-3.5 h-3.5 text-[#dfd7c6]" />
        <span>Based in Loughborough</span>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/content';

interface CallToActionProps {
  onOpenQuote: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#0e1012] text-white overflow-hidden border-t border-white/10">
      {/* Background with dusk window image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={ASSETS.hero}
          alt="Home glazing background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1012] via-[#0e1012]/90 to-[#0e1012]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Outfit'] mb-2">
              Ready to upgrade your home?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal">
              Get in touch today for a free, no obligation quote.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div data-aos="fade-left" className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-[#dfd7c6] hover:bg-[#ece5d6] text-[#111214] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-lg"
            >
              <span>Get a quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="px-6 py-3.5 border border-white/30 hover:border-white bg-black/40 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

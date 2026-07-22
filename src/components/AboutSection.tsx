import React from 'react';
import { ArrowRight, ShieldCheck, Award, MapPinCheck } from 'lucide-react';
import { ASSETS } from '../data/content';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f5f4ef] text-[#1a1c1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Frame Detail Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 shadow-2xl border-4 border-white bg-white overflow-hidden group">
              <img
                src={ASSETS.frameDetail}
                alt="Close-up detail of high quality window frame"
                className="w-full h-[450px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            {/* Architectural decorative border frame behind */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#1a1c1e]/20 -z-0 hidden sm:block" />
          </div>

          {/* Right Side: Copy & Trust Highlights */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8c7453] uppercase font-['Outfit']">
                ABOUT SELBY & SON
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111214] tracking-tight leading-tight font-['Outfit'] mb-6">
              Local glaziers,<br />
              focused on <span className="relative inline-block text-[#a68656]">
                quality
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#a68656]/40" />
              </span>.
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-8 max-w-xl font-normal">
              A family run business delivering high-performance uPVC and aluminium glazing with a personal, reliable service. From windows and doors to conservatories, we ensure every installation is completed to the highest standard.
            </p>

            {/* Story Button & Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start pt-2">
              {/* Button */}
              <div className="sm:col-span-5">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 bg-transparent border-2 border-[#1a1c1e] text-[#1a1c1e] hover:bg-[#1a1c1e] hover:text-white transition-all duration-300 text-xs font-semibold tracking-wider uppercase flex items-center justify-between gap-3 group w-full sm:w-auto cursor-pointer"
                >
                  <span>Our story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Badges List */}
              <div className="sm:col-span-7 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 bg-[#e8e4da] text-[#1a1c1e] group-hover:bg-[#1a1c1e] group-hover:text-[#dfd7c6] transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111214]">FENSA Registered</h4>
                    <p className="text-xs text-gray-600">Peace of mind guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 bg-[#e8e4da] text-[#1a1c1e] group-hover:bg-[#1a1c1e] group-hover:text-[#dfd7c6] transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111214]">High quality materials</h4>
                    <p className="text-xs text-gray-600">Built for performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 bg-[#e8e4da] text-[#1a1c1e] group-hover:bg-[#1a1c1e] group-hover:text-[#dfd7c6] transition-colors">
                    <MapPinCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111214]">Local & trusted</h4>
                    <p className="text-xs text-gray-600">Proudly serving Loughborough and beyond</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

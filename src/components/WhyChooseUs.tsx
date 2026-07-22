import React from 'react';
import { Check } from 'lucide-react';
import { WHY_CHOOSE_US, ASSETS } from '../data/content';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0e1012] text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.bifold}
          alt="Modern extension bi-fold doors background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f11]/95 via-[#0d0f11]/85 to-[#0d0f11]/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11] via-transparent to-[#0d0f11]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Spacer on Left for Large Screen visual composition */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Right Content Panel */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="lg:col-span-7 bg-[#141619]/90 backdrop-blur-md p-8 sm:p-12 border border-white/10 shadow-2xl"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-[#dfd7c6] uppercase font-['Outfit'] block mb-3">
              WHY CHOOSE US
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit'] mb-6">
              A smarter upgrade for <span className="text-[#dfd7c6]">your home.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-8">
              We combine expert installation with premium products to deliver glazing that looks incredible, performs better and adds real value to your home.
            </p>

            {/* 2-Column Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {WHY_CHOOSE_US.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#dfd7c6]/20 border border-[#dfd7c6] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#dfd7c6]" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-[#dfd7c6] hover:bg-[#ece5d6] text-[#111214] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg"
            >
              Get a free consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

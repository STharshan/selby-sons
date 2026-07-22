import React from 'react';
import { STATS } from '../data/content';
import { ShieldCheck } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-[#e2ddd0] text-[#111214] py-10 sm:py-12 border-y border-[#d4cebe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#c7c0af]">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="flex flex-col items-center text-center px-4 py-2"
            >
              {stat.isBadge ? (
                <div className="flex flex-col items-center">
                  <div className="border-2 border-[#111214] px-4 py-1 mb-2 font-bold tracking-widest text-lg font-['Outfit'] flex items-center gap-1">
                    <ShieldCheck className="w-5 h-5 text-[#111214]" />
                    <span>FENSA</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700 tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              ) : (
                <>
                  <span className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-[#111214] mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide">
                    {stat.label}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

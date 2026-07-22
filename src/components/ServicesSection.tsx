import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#121417] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#dfd7c6] uppercase font-['Outfit'] block mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit']">
            Complete glazing solutions for <span className="text-[#dfd7c6]">your home.</span>
          </h2>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => onSelectService(service)}
              className="group bg-[#1a1d21] border border-white/10 hover:border-[#dfd7c6]/60 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d21] via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-[#dfd7c6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Arrow Link */}
                <div className="pt-6 flex items-center justify-end text-gray-400 group-hover:text-[#dfd7c6] transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

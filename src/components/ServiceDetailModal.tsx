import React from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Settings } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl bg-[#141619] border border-white/20 shadow-2xl text-white overflow-hidden my-6 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#1a1d21] border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] font-bold text-[#dfd7c6] uppercase tracking-widest block font-['Outfit']">
              Service Details
            </span>
            <h3 className="text-xl font-bold font-['Outfit']">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Banner Photo */}
          <div className="relative h-60 overflow-hidden bg-black border border-white/10">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-transparent to-transparent" />
          </div>

          {/* Description */}
          <div>
            <p className="text-sm text-gray-200 leading-relaxed">
              {service.fullDetails?.longDescription || service.description}
            </p>
          </div>

          {/* Key Features List */}
          {service.fullDetails?.features && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfd7c6] font-['Outfit']">
                Key Performance Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.fullDetails.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#1a1d21] border border-white/5">
                    <CheckCircle className="w-4 h-4 text-[#dfd7c6] shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          {service.fullDetails?.specifications && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfd7c6] font-['Outfit'] flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5" />
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {service.fullDetails.specifications.map((spec, idx) => (
                  <div key={idx} className="p-2.5 bg-[#181b1e] border border-white/5 text-gray-300">
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guarantee */}
          {service.fullDetails?.guarantee && (
            <div className="p-4 bg-[#dfd7c6]/10 border border-[#dfd7c6]/40 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#dfd7c6] shrink-0" />
              <div>
                <span className="text-xs font-bold text-[#dfd7c6] block uppercase font-['Outfit']">
                  Warranty & Guarantee
                </span>
                <span className="text-xs text-gray-300">{service.fullDetails.guarantee}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#1a1d21] border-t border-white/10 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white uppercase"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-6 py-2.5 bg-[#dfd7c6] text-[#111214] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#ece5d6]"
          >
            <span>Get Quote For {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

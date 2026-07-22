import React from 'react';
import { X, Play } from 'lucide-react';
import { ASSETS } from '../data/content';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#141619] border border-white/20 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#1a1d21] border-b border-white/10">
          <span className="text-xs font-bold text-[#dfd7c6] uppercase font-['Outfit']">
            Selby & Son Glazing Project Tour
          </span>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Mock with High-Def Image Showcase */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <img
            src={ASSETS.hero}
            alt="Video preview background"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          
          <div className="relative z-10 text-center px-4">
            <div className="w-16 h-16 rounded-full bg-[#dfd7c6] text-[#111214] flex items-center justify-center mx-auto mb-4 cursor-pointer shadow-2xl hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-[#111214] ml-1" />
            </div>
            <h4 className="text-xl font-bold text-white font-['Outfit']">
              Craftsmanship & Attention to Detail
            </h4>
            <p className="text-xs text-gray-300 mt-1 max-w-md mx-auto">
              See how our team precision fits bi-fold doors, uPVC sash windows, and solid composite doors in Loughborough.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

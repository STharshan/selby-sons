import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer id="contact" className="bg-[#0b0d0e] text-gray-400 text-xs border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Socials */}
          <div className="lg:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 border-2 border-[#dfd7c6] flex items-center justify-center p-1">
                <div className="w-full h-full border border-[#dfd7c6]/60 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#dfd7c6]">S&S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wider text-white uppercase font-['Outfit']">
                  SELBY & SON
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#dfd7c6] uppercase">
                  GLAZING
                </span>
              </div>
            </a>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#dfd7c6] hover:text-[#dfd7c6] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#dfd7c6] hover:text-[#dfd7c6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">Windows</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Doors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bi-fold Doors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conservatories</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Roofline</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Repairs & Maintenance</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#dfd7c6] shrink-0 mt-0.5" />
                <a href="tel:01509237763" className="hover:text-white transition-colors">
                  01509 237763
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dfd7c6] shrink-0 mt-0.5" />
                <span>
                  Loughborough<br />
                  Serving Loughborough and surrounding areas
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#dfd7c6] shrink-0 mt-0.5" />
                <a href="mailto:info@selbyandson.com" className="hover:text-white transition-colors">
                  info@selbyandson.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: FENSA Registered Badge */}
          <div className="flex flex-col items-start lg:items-end justify-start">
            <div className="border border-white/20 p-4 text-center w-full max-w-[180px]">
              <div className="border border-white/40 px-3 py-1 font-bold tracking-widest text-white text-sm mb-1 font-['Outfit']">
                FENSA
              </div>
              <span className="text-[10px] tracking-wider text-gray-400 block uppercase">
                Registered Company
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2024 Selby & Son Glazing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

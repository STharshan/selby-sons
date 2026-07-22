import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import logoImage from '../../assets/logo.png';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching reference image */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="Selby & Son Glazing logo"
              className="w-25 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-200">
            <a href="#home" className="hover:text-[#dfd7c6] transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-[#dfd7c6] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#dfd7c6] transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-[#dfd7c6] transition-colors">
              Gallery
            </a>
            <a href="#reviews" className="hover:text-[#dfd7c6] transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-[#dfd7c6] transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTA & Phone */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:01509237763"
              className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#dfd7c6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfd7c6]" />
              <span>01509 237763</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-none border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs font-semibold tracking-wider flex items-center gap-2 group uppercase cursor-pointer"
            >
              <span>Get a quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 border border-[#dfd7c6]/60 text-[#dfd7c6] text-xs font-medium uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 mt-2 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white hover:text-[#dfd7c6]"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white hover:text-[#dfd7c6]"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white hover:text-[#dfd7c6]"
          >
            About Us
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white hover:text-[#dfd7c6]"
          >
            Gallery
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white hover:text-[#dfd7c6]"
          >
            Customer Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white hover:text-[#dfd7c6]"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href="tel:01509237763"
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <Phone className="w-4 h-4 text-[#dfd7c6]" />
              <span>Call: 01509 237763</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-[#dfd7c6] text-[#111214] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Calculator } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    postcode: 'LE11',
    serviceType: 'Windows',
    propertyType: 'Detached',
    timeframe: '1-3 Months',
    notes: ''
  });
  const [quantity, setQuantity] = useState(4);
  const [frameFinish, setFrameFinish] = useState('Anthracite Grey');

  if (!isOpen) return null;

  const calculateEstimate = () => {
    let base = 350;
    if (formData.serviceType === 'Bi-fold Doors') base = 1200;
    if (formData.serviceType === 'Conservatories') base = 4500;
    if (formData.serviceType === 'Doors') base = 650;
    if (formData.serviceType === 'Repairs & Maintenance') base = 95;

    const total = base * quantity;
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.15)
    };
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else {
      setSubmitted(true);
    }
  };

  const estimate = calculateEstimate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#141619] border border-white/20 shadow-2xl text-white overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#1a1d21]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#dfd7c6] text-[#111214] flex items-center justify-center font-bold text-xs">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Outfit']">Free Instant Quote Estimate</h3>
              <p className="text-xs text-gray-400">Selby & Son Glazing Loughborough</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#dfd7c6]/20 border border-[#dfd7c6] text-[#dfd7c6] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-['Outfit']">Thank You, {formData.name}!</h4>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Your quote request for <span className="text-[#dfd7c6] font-semibold">{formData.serviceType}</span> has been received. Our senior glazier will call you on <span className="text-white font-mono">{formData.phone}</span> shortly to discuss details and confirm your site survey.
              </p>
              <div className="p-4 bg-[#1a1d21] border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1">
                <p className="text-gray-400">Estimated Budget Range:</p>
                <p className="text-lg font-bold text-[#dfd7c6]">£{estimate.min.toLocaleString()} – £{estimate.max.toLocaleString()}</p>
                <p className="text-[10px] text-gray-500">Includes FENSA registration, VAT, & installation.</p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  onClose();
                }}
                className="mt-6 px-6 py-3 bg-[#dfd7c6] text-[#111214] text-xs font-bold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-6">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-semibold uppercase tracking-wider">
                <span className={step >= 1 ? 'text-[#dfd7c6]' : 'text-gray-600'}>1. Project Type</span>
                <span className={step >= 2 ? 'text-[#dfd7c6]' : 'text-gray-600'}>2. Specifications</span>
                <span className={step >= 3 ? 'text-[#dfd7c6]' : 'text-gray-600'}>3. Contact Details</span>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase text-gray-300">
                    Select Service Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Windows', 'Doors', 'Bi-fold Doors', 'Conservatories', 'Repairs & Maintenance'].map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: srv })}
                        className={`p-3 text-xs font-semibold text-left border transition-all ${
                          formData.serviceType === srv
                            ? 'border-[#dfd7c6] bg-[#dfd7c6]/10 text-[#dfd7c6]'
                            : 'border-white/10 bg-[#1a1d21] text-gray-300 hover:border-white/30'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#1a1d21] border border-white/10 p-3 text-xs text-white focus:border-[#dfd7c6] outline-none"
                    >
                      <option value="Detached">Detached House</option>
                      <option value="Semi-Detached">Semi-Detached</option>
                      <option value="Terraced">Terraced Property</option>
                      <option value="Bungalow">Bungalow</option>
                      <option value="Apartment">Apartment / Flat</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-2">
                      Number of Units / Openings ({quantity})
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-full accent-[#dfd7c6]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>1 Unit</span>
                      <span>5 Units</span>
                      <span>15+ Units</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-2">
                      Frame Colour Finish
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Anthracite Grey', 'Chartwell Green', 'Classic White', 'Smooth Black'].map((finish) => (
                        <button
                          key={finish}
                          type="button"
                          onClick={() => setFrameFinish(finish)}
                          className={`p-2.5 text-[11px] font-medium border text-center ${
                            frameFinish === finish
                              ? 'border-[#dfd7c6] bg-[#dfd7c6]/20 text-[#dfd7c6]'
                              : 'border-white/10 bg-[#1a1d21] text-gray-400'
                          }`}
                        >
                          {finish}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Estimate Display */}
                  <div className="p-4 bg-[#1a1d21] border border-[#dfd7c6]/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-gray-400 block">Guide Price Estimate</span>
                      <span className="text-xl font-bold text-[#dfd7c6] font-['Outfit']">
                        £{estimate.min.toLocaleString()} – £{estimate.max.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-[#dfd7c6]" />
                      <span>FENSA Guaranteed</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1a1d21] border border-white/10 p-3 text-xs text-white focus:border-[#dfd7c6] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1a1d21] border border-white/10 p-3 text-xs text-white focus:border-[#dfd7c6] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#1a1d21] border border-white/10 p-3 text-xs text-white focus:border-[#dfd7c6] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                        Postcode (Loughborough & Area)
                      </label>
                      <input
                        type="text"
                        placeholder="LE11 1AA"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full bg-[#1a1d21] border border-white/10 p-3 text-xs text-white focus:border-[#dfd7c6] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                      Additional Notes / Dimensions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify sizes or special requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#1a1d21] border border-white/10 p-3 text-xs text-white focus:border-[#dfd7c6] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as 1 | 2)}
                    className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white uppercase"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#dfd7c6] text-[#111214] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#ece5d6]"
                >
                  <span>{step === 3 ? 'Submit Request' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

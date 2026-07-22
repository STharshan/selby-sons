import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#f5f4ef] text-[#111214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Column */}
          <div data-aos="fade-right" className="lg:col-span-4">
            <div className="text-4xl text-[#a68656] font-serif mb-2">
              <Quote className="w-12 h-12 text-[#a68656]/80 fill-[#a68656]/20" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111214] tracking-tight leading-tight font-['Outfit'] mb-4">
              What our<br />
              customers say.
            </h2>
            <div className="w-16 h-1 bg-[#a68656]" />
          </div>

          {/* Right 3 Review Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review, idx) => (
              <div
                key={review.id}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="bg-white/80 backdrop-blur-sm p-6 border border-[#e2ddd0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#c8a97e] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c8a97e] text-transparent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-6 font-normal">
                    "{review.quote}"
                  </p>
                </div>

                {/* Author & Location */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-[#111214] block">
                    {review.author}, {review.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

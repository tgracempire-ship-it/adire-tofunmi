import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/weddingPackages';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070A0F] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FDFBF7] font-heading">
            Worn by Celebrated <span className="text-gold font-royal">Kings & Queens</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2">
            Hear from Nigerian couples and event coordinators across Lagos, Ibadan, the UK, and North America.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="luxury-card p-6 sm:p-8 flex flex-col justify-between relative"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#243044] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D4AF37]/50 flex-shrink-0 bg-black">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-heading">{item.name}</h4>
                  <span className="text-[11px] text-gold block">{item.event}</span>
                  <span className="text-[10px] text-[#A0AEC0] block">{item.package}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/weddingPackages';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--chalk)] relative border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--cobalt)] mb-2">
            Matrimonial Words
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading text-[var(--ink)]">
            Worn by Celebrated Kings & Queens
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted)] mt-2">
            Hear from Nigerian couples and event coordinators across Lagos, Ibadan, the UK, and North America.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--paper)] border border-[var(--line-strong)] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--saffron)] text-[var(--saffron)]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[var(--cobalt)]/25" />
                </div>

                <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[var(--cobalt)]/30 flex-shrink-0 bg-[#e8e2d8]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--ink)] font-heading">{item.name}</h4>
                  <span className="text-[11px] text-[var(--cobalt)] font-semibold block">{item.event}</span>
                  <span className="text-[10px] text-[var(--muted)] block">{item.package}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Clock, Globe, MessageCircle } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface HeroProps {
  onOpenCustomizer: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomizer, onExploreCollection }) => {
  return (
    <section className="relative overflow-hidden bg-heritage-weave py-16 lg:py-24 border-b border-[#D4AF37]/20">
      {/* Background Ambient Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#8A1528]/15 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Brand Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FDFBF7] tracking-tight leading-[1.12]">
              Purveyor of <br className="hidden sm:inline" />
              <span className="text-gold font-royal">Luxurious Aso Oke</span> <br />
              for Royal Occasions.
            </h1>

            {/* Tagline & Subtitle */}
            <p className="text-base sm:text-lg text-[#D1D5DB] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From majestic crimson <span className="text-gold-light font-semibold">Alaari</span> groom Agbadas and sculptured golden <span className="text-gold-light font-semibold">Geles</span>, to aristocratic wild-silk <span className="text-gold-light font-semibold">Sanyan</span> and deep indigo <span className="text-gold-light font-semibold">Etu</span>. Woven strip by strip by master artisan <strong>{VENDOR_DETAILS.name}</strong> on traditional wooden narrow-looms.
            </p>

            {/* Three Sacred Weaves Visual Legend */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111724] border border-[#8A1528]/50 text-xs text-[#E5E7EB]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8A1528]" />
                <span className="font-semibold text-white">Alaari:</span>
                <span className="text-[#9CA3AF]">Royal Crimson</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111724] border border-[#C8AA82]/40 text-xs text-[#E5E7EB]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8AA82]" />
                <span className="font-semibold text-white">Sanyan:</span>
                <span className="text-[#9CA3AF]">Wild Raw Silk</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111724] border border-[#2B4C7E]/50 text-xs text-[#E5E7EB]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2B4C7E]" />
                <span className="font-semibold text-white">Etu:</span>
                <span className="text-[#9CA3AF]">Deep Indigo Navy</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenCustomizer}
                className="w-full sm:w-auto px-7 py-4 rounded-xl gold-button text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#070A0F]" />
                <span>Launch Bespoke Loom Simulator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-6 py-4 rounded-xl gold-button-outline text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Lookbook</span>
              </button>

              <a
                href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20would%20like%20to%20order%20bespoke%20Aso%20Oke%20from%20Threads%20of%20Heritage`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-[#0D1422] border border-[#25D366]/40 text-[#25D366] hover:bg-[#151D2C] text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {VENDOR_DETAILS.phone}</span>
              </a>
            </div>

            {/* Key Provenance Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/15">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-gold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">100% Handloom</span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">Zero synthetic industrial imitation</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-gold mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold text-sm text-white tabular-nums">2–4 Wks Lead Time</span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">Dedicated rush bridal slots</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-gold mb-1">
                  <Globe className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">Global Courier</span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">DHL to UK, US, Canada & Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Splendor Collage of Real Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Aura Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#8A1528]/20 to-[#D4AF37]/20 rounded-3xl blur-xl opacity-75" />

              {/* Main Photo Card Grid */}
              <div className="relative grid grid-cols-2 gap-3.5 p-3.5 bg-[#0D1422] border border-[#D4AF37]/30 rounded-2xl shadow-2xl">
                {/* Groom Crimson Agbada Showcase */}
                <div className="group relative overflow-hidden rounded-xl bg-black border border-[#D4AF37]/25 shadow-md">
                  <img
                    src="/images/groom-agbada-portrait.jpg"
                    alt="Royal Groom in Crimson Alaari Agbada and Fila with Coral Beads"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Royal Groom</span>
                    <span className="text-xs font-semibold text-white">Alaari Crimson Agbada</span>
                  </div>
                </div>

                {/* Bride Shimmering Gele Showcase */}
                <div className="group relative overflow-hidden rounded-xl bg-black border border-[#D4AF37]/25 shadow-md">
                  <img
                    src="/images/bride-grey-gold.jpg"
                    alt="Bride in Luxury Grey and Gold Polka-dot Gele and Ensemble"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Bridal Suite</span>
                    <span className="text-xs font-semibold text-white">Sculpted Metallic Gele</span>
                  </div>
                </div>

                {/* Bottom Full-width Official Banner Bar */}
                <div className="col-span-2 relative overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#070A0F] p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#D4AF37]/40 flex-shrink-0">
                      <img
                        src="/images/brand-flyer.jpg"
                        alt="Threads of Heritage Brand Emblem"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#FDFBF7] block">Threads of Heritage</span>
                      <span className="text-[11px] text-[#A0AEC0]">New Week. Timeless Elegance. Order Now.</span>
                    </div>
                  </div>

                  <a
                    href="#collection"
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F4E4BA] text-xs font-semibold hover:bg-[#D4AF37] hover:text-[#070A0F] transition-all"
                  >
                    View Fabrics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

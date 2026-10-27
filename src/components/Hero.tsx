import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Clock, Globe, MessageCircle } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface HeroProps {
  onOpenCustomizer: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomizer, onExploreCollection }) => {
  return (
    <section className="relative overflow-hidden bg-loom-pattern py-16 lg:py-24 border-b border-[#D4AF37]/20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#8A1528]/20 via-[#D4AF37]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-[#1C283F]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Brand Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182234] border border-[#D4AF37]/40 text-xs text-[#F4E4BA] tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span>Authentic Yoruba Handloom • Master Artisan <strong>{VENDOR_DETAILS.name}</strong></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FDFBF7] tracking-tight leading-[1.15]">
              Purveyor of <br className="hidden sm:inline" />
              <span className="gold-gradient-text font-royal">Luxurious Aso Oke</span> <br />
              for Royal Occasions.
            </h1>

            {/* Tagline & Subtitle */}
            <p className="text-base sm:text-lg text-[#D1D5DB] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From majestic crimson <span className="text-[#F4E4BA] font-semibold">Alaari</span> groom Agbadas and sculptured golden <span className="text-[#F4E4BA] font-semibold">Geles</span>, to earthy <span className="text-[#F4E4BA] font-semibold">Sanyan</span> and indigo <span className="text-[#F4E4BA] font-semibold">Etu</span>. Woven strip by strip with unbroken ancestral mastery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenCustomizer}
                className="w-full sm:w-auto px-7 py-4 rounded-xl gold-button text-sm tracking-wide font-bold flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#0A0E17]" />
                <span>Launch Custom Loom Builder</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-6 py-4 rounded-xl gold-button-outline text-sm tracking-wide font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Lookbook Collection</span>
              </button>

              <a
                href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20would%20like%20to%20order%20bespoke%20Aso%20Oke%20from%20Threads%20of%20Heritage`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-[#131B29] border border-[#25D366]/40 text-[#25D366] hover:bg-[#1E2B3E] text-sm tracking-wide font-medium flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {VENDOR_DETAILS.phone}</span>
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/15">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-sm sm:text-base text-white">100% Handloom</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#9CA3AF]">Zero industrial imitation</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold text-sm sm:text-base text-white">2–4 Wks Turnaround</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#9CA3AF]">Rush bridal slots available</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                  <Globe className="w-4 h-4" />
                  <span className="font-bold text-sm sm:text-base text-white">Global Courier</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#9CA3AF]">DHL to UK, US, Canada & Nationwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Splendor Collage of Real Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Aura Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/30 via-[#8A1528]/25 to-[#D4AF37]/30 rounded-3xl blur-xl opacity-75" />

              {/* Main Photo Card Carousel / Grid */}
              <div className="relative grid grid-cols-2 gap-3 p-3 bg-[#111724] border border-[#D4AF37]/30 rounded-2xl shadow-2xl">
                {/* Groom Crimson Agbada Showcase */}
                <div className="group relative overflow-hidden rounded-xl bg-black border border-[#D4AF37]/20 shadow-md">
                  <img
                    src="/images/groom-agbada-portrait.jpg"
                    alt="Royal Groom in Crimson Alaari Agbada and Fila with Coral Beads"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Royal Groom</span>
                    <span className="text-xs font-semibold text-white">Alaari Crimson Agbada</span>
                  </div>
                </div>

                {/* Bride Shimmering Gele Showcase */}
                <div className="group relative overflow-hidden rounded-xl bg-black border border-[#D4AF37]/20 shadow-md">
                  <img
                    src="/images/bride-grey-gold.jpg"
                    alt="Bride in Luxury Grey and Gold Polka-dot Gele and Ensemble"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Bridal Suite</span>
                    <span className="text-xs font-semibold text-white">Sculpted Metallic Gele</span>
                  </div>
                </div>

                {/* Bottom Full-width Official Banner Bar */}
                <div className="col-span-2 relative overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0E1522] p-3 flex items-center justify-between">
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
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F4E4BA] text-xs font-semibold hover:bg-[#D4AF37] hover:text-[#0A0E17] transition-all"
                  >
                    View Fabrics
                  </a>
                </div>
              </div>

              {/* Floating Floating Pill: Royal Heritage Guarantee */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#161F2E]/95 border border-[#D4AF37] rounded-xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#8A1528] flex items-center justify-center text-[#F3E5AB]">
                  👑
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Ancestral Yoruba Silk & Cotton</span>
                  <span className="text-[10px] text-[#D4AF37]">Bespoke Loom Commission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

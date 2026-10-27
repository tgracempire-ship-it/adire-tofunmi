import React from 'react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Mail, Phone, Instagram, MapPin, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A10] border-t border-[#D4AF37]/25 text-[#A0AEC0] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1C2638]">
          {/* Brand Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#131B29] border border-[#D4AF37]/50 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 19L8 5L12 11L16 5L20 19" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 15h12" strokeLinecap="round" />
                  <circle cx="12" cy="7" r="1.5" fill="#D4AF37" />
                </svg>
              </div>
              <div>
                <span className="font-royal text-lg font-bold text-white block tracking-wider">
                  THREADS OF HERITAGE
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-semibold">
                  Purveyor of Luxurious Aso Oke
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#9CA3AF]">
              New Week. Timeless Elegance. Order Now. Preserving authentic Yoruba handloom traditions for kings, queens, and celebrated occasions across the globe.
            </p>

            <div className="text-xs text-[#CBD5E1]">
              Master Artisan: <strong className="text-white">{VENDOR_DETAILS.name}</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Couture Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Royal Groom Crimson Alaari Agbada
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Bridal Sculpted Gele & Iro/Buba
                </a>
              </li>
              <li>
                <a href="#wedding-packages" className="hover:text-[#D4AF37] transition-colors">
                  Oba & Olori Wedding Twinning Suites
                </a>
              </li>
              <li>
                <a href="#aso-ebi-calc" className="hover:text-[#D4AF37] transition-colors">
                  Aso Ebi Bulk Production (10–200 Sets)
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Little Monarch Children Milestone Wraps
                </a>
              </li>
            </ul>
          </div>

          {/* Ancestral Weaves */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Traditional Weaves
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#loom-builder" className="hover:text-[#D4AF37] transition-colors">
                  Alaari (Imperial Crimson Silk)
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-[#D4AF37] transition-colors">
                  Sanyan (Aristocratic Khaki Wild Silk)
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-[#D4AF37] transition-colors">
                  Etu (Midnight Indigo & Blue Striped)
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-[#D4AF37] transition-colors">
                  Lurex Metallic Shimmer & Gold Thread
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-[#D4AF37] transition-colors">
                  Crystal & Coral Bead Embellished
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Official Contact & Atelier
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={`tel:${VENDOR_DETAILS.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {VENDOR_DETAILS.phone} ({VENDOR_DETAILS.phoneInternational})
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={`mailto:${VENDOR_DETAILS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {VENDOR_DETAILS.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={VENDOR_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {VENDOR_DETAILS.instagram}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{VENDOR_DETAILS.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} <strong>Threads of Heritage</strong>. All rights reserved. Purveyor of Luxurious Aso Oke.
          </div>
          <div className="flex items-center gap-1">
            <span>Handwoven with</span>
            <Heart className="w-3.5 h-3.5 fill-[#8A1528] text-[#8A1528]" />
            <span>by Master Artisan <strong>Jesutofunmi</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

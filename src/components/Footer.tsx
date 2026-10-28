import React from 'react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Mail, Phone, Instagram, MapPin, Heart, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[var(--ink)] text-[#d1d5db] pt-16 pb-12 border-t border-[var(--ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="brand-mark bg-[var(--cobalt)] text-white" aria-hidden="true">TH</span>
              <div>
                <span className="font-royal text-lg font-bold text-white block tracking-wider">
                  THREADS OF HERITAGE
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#a8b8d8] block font-semibold">
                  Purveyor of Luxurious Aso Oke
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#9ca3af]">
              Preserving authentic Yoruba handloom traditions for kings, queens, and celebrated occasions across the globe. Handwoven in Nigeria, delivered worldwide.
            </p>

            <div className="text-xs text-white">
              Master Artisan: <strong>{VENDOR_DETAILS.name}</strong>
            </div>

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="mt-2 inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[var(--cobalt)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--cobalt-deep)] transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            )}
          </div>

          {/* Couture Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Couture Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Royal Groom Crimson Alaari Agbada
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Bridal Sculpted Gele & Iro/Buba
                </a>
              </li>
              <li>
                <a href="#wedding-packages" className="hover:text-white transition-colors">
                  Oba & Olori Wedding Twinning Suites
                </a>
              </li>
              <li>
                <a href="#aso-ebi-calc" className="hover:text-white transition-colors">
                  Aso Ebi Bulk Production (10–200 Sets)
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
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
                <a href="#loom-builder" className="hover:text-white transition-colors">
                  Alaari (Imperial Crimson Silk)
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-white transition-colors">
                  Sanyan (Aristocratic Khaki Wild Silk)
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-white transition-colors">
                  Etu (Midnight Indigo & Blue Striped)
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-white transition-colors">
                  Lurex Metallic Shimmer & Gold Thread
                </a>
              </li>
              <li>
                <a href="#loom-builder" className="hover:text-white transition-colors">
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
                <Phone className="w-4 h-4 text-[#a8b8d8] flex-shrink-0" />
                <a
                  href={`tel:${VENDOR_DETAILS.phone}`}
                  className="hover:text-white transition-colors tabular-nums"
                >
                  {VENDOR_DETAILS.phone} ({VENDOR_DETAILS.phoneInternational})
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#a8b8d8] flex-shrink-0" />
                <a
                  href={`mailto:${VENDOR_DETAILS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {VENDOR_DETAILS.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#a8b8d8] flex-shrink-0" />
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
                <MapPin className="w-4 h-4 text-[#a8b8d8] flex-shrink-0 mt-0.5" />
                <span>{VENDOR_DETAILS.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-[#9ca3af]">
          <div>
            © {new Date().getFullYear()} <strong>Threads of Heritage</strong>. All rights reserved. Purveyor of Luxurious Aso Oke.
          </div>
          <div className="flex items-center gap-1">
            <span>Handwoven with ancestral devotion by Master Artisan <strong>{VENDOR_DETAILS.name}</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

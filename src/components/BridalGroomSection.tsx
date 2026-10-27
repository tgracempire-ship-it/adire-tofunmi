import React from 'react';
import { WEDDING_PACKAGES } from '../data/weddingPackages';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Crown, Sparkles, Check, MessageCircle, Calendar, Gift, HeartHandshake } from 'lucide-react';

interface BridalGroomSectionProps {
  onSelectPackage?: (pkg: any) => void;
}

export const BridalGroomSection: React.FC<BridalGroomSectionProps> = ({ onSelectPackage }) => {

  return (
    <section id="wedding-packages" className="py-20 bg-[#0C121E] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#500B17] border border-[#D4AF37]/40 text-xs font-semibold text-[#F4E4BA] mb-3">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Matrimonial Sovereign Collections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
            Royal Bridal & Groom <span className="gold-gradient-text font-royal">Wedding Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] mt-3">
            Woven simultaneously on twin looms to guarantee identical dye saturation, weave tension, and harmonized golden embroidery across both bride and groom ensembles.
          </p>
        </div>

        {/* Wedding Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WEDDING_PACKAGES.map((pkg) => {
            const isCrown = pkg.tier === 'Royalty';
            const whatsappUrl = `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              `Hello Jesutofunmi, I want to book a consultation for *${pkg.name}* for our upcoming wedding traditional engagement.`
            )}`;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative overflow-hidden ${
                  isCrown
                    ? 'bg-gradient-to-b from-[#1C283F] via-[#131B29] to-[#0E1522] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 scale-100 lg:-translate-y-2'
                    : 'bg-[#111724] border border-[#243044] hover:border-[#D4AF37]/50 shadow-xl'
                }`}
              >
                {/* Popular / Royalty Badge */}
                {isCrown && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D4AF37] to-[#BF9522] text-[#0A0E17] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-md">
                    Most Requested by Royal Couples
                  </div>
                )}

                <div>
                  {/* Tier & Name */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#D4AF37]">
                      {pkg.tier} Tier Suite
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#A0AEC0] mt-1 italic">
                    "{pkg.tagline}"
                  </p>

                  {/* Pricing / Commission Banner */}
                  <div className="mt-5 pb-5 border-b border-[#243044]">
                    <span className="text-xs text-[#A0AEC0] block">Full Matrimonial Couple Suite:</span>
                    <span className="text-xl sm:text-2xl font-bold text-[#D4AF37] uppercase tracking-wider font-royal">
                      Pricing Upon Consultation
                    </span>
                    <span className="text-[11px] text-[#A0AEC0] block mt-1">
                      Lead Time: <strong className="text-white">{pkg.leadTime}</strong> (Rush slots available)
                    </span>
                  </div>

                  {/* Outfits Breakdown */}
                  <div className="mt-6 space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-[#F4E4BA] flex items-center gap-1.5 uppercase tracking-wider mb-1">
                        <span>👰</span>
                        <span>Bride’s Sovereign Attire:</span>
                      </h4>
                      <p className="text-[#CBD5E1] pl-5 leading-relaxed">
                        {pkg.brideOutfit}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#F4E4BA] flex items-center gap-1.5 uppercase tracking-wider mb-1">
                        <span>🤵</span>
                        <span>Groom’s Monarch Attire:</span>
                      </h4>
                      <p className="text-[#CBD5E1] pl-5 leading-relaxed">
                        {pkg.groomOutfit}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                        Included Suite Luxuries:
                      </h4>
                      <ul className="space-y-1.5 text-[#9CA3AF]">
                        {pkg.accessories.map((acc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                            <span>{acc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-[#243044] space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isCrown
                        ? 'gold-button shadow-lg shadow-[#D4AF37]/30'
                        : 'bg-[#182234] border border-[#D4AF37]/40 text-[#F4E4BA] hover:bg-[#D4AF37] hover:text-[#0A0E17]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Reserve Package on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wedding Planning Timeline Guide Box */}
        <div className="mt-16 bg-[#111724] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#243044]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Traditional Wedding Timeline</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                When Should You Order Your Aso Oke?
              </h3>
            </div>
            <a
              href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20would%20like%20to%20consult%20on%20my%20wedding%20timeline`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Free Consultation with Jesutofunmi</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="p-4 rounded-xl bg-[#0E1522] border border-[#243044]">
              <span className="text-[#D4AF37] text-xs font-black block mb-1">10–12 WEEKS BEFORE</span>
              <h4 className="text-sm font-bold text-white mb-1">Loom Slot & Palette</h4>
              <p className="text-xs text-[#9CA3AF]">
                Initial consultation with Jesutofunmi to select your weave base (Alaari, Sanyan, or Etu) and lock in your color palette.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0E1522] border border-[#243044]">
              <span className="text-[#D4AF37] text-xs font-black block mb-1">6–8 WEEKS BEFORE</span>
              <h4 className="text-sm font-bold text-white mb-1">Weaving & Swatch Proof</h4>
              <p className="text-xs text-[#9CA3AF]">
                Jesutofunmi sets up the wooden loom warp and sends video proofs of your raw weave in progress for approval.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0E1522] border border-[#243044]">
              <span className="text-[#D4AF37] text-xs font-black block mb-1">4 WEEKS BEFORE</span>
              <h4 className="text-sm font-bold text-white mb-1">Tailoring & Embroidery</h4>
              <p className="text-xs text-[#9CA3AF]">
                Strips are hand-joined, golden chest medallions embroidered, and crystal tassels stitched by master seamstresses.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0E1522] border border-[#243044]">
              <span className="text-[#D4AF37] text-xs font-black block mb-1">2 WEEKS BEFORE</span>
              <h4 className="text-sm font-bold text-white mb-1">Final Steaming & Delivery</h4>
              <p className="text-xs text-[#9CA3AF]">
                Ensemble is hand-steamed, inspected, and dispatched in luxury monogrammed presentation chests via DHL/courier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

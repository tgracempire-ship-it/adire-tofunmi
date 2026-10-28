import React from 'react';
import { WEDDING_PACKAGES } from '../data/weddingPackages';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Check, MessageCircle, Calendar, Gift, HeartHandshake } from 'lucide-react';

interface BridalGroomSectionProps {
  onSelectPackage?: (pkg: any) => void;
}

export const BridalGroomSection: React.FC<BridalGroomSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="wedding-packages" className="py-20 bg-[#070A0F] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
            Royal Bridal & Groom <span className="text-gold font-royal">Wedding Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] mt-3">
            Woven simultaneously on twin narrow-looms to guarantee identical dye saturation, yarn tension, and harmonized golden embroidery across both bride and groom ensembles.
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
                    ? 'bg-[#0D1422] border-2 border-[#D4AF37] shadow-2xl scale-100 lg:-translate-y-2'
                    : 'bg-[#0D1422] border border-[#243044] hover:border-[#D4AF37]/50 shadow-xl'
                }`}
              >
                {/* Popular / Royalty Badge */}
                {isCrown && (
                  <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#070A0F] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-md">
                    Most Requested Suite
                  </div>
                )}

                <div>
                  {/* Tier & Name */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-gold">
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
                    <span className="text-xl sm:text-2xl font-bold text-gold uppercase tracking-wider font-royal">
                      Pricing Upon Consultation
                    </span>
                    <span className="text-[11px] text-[#A0AEC0] block mt-1 tabular-nums">
                      Production Window: <strong className="text-white">{pkg.leadTime}</strong> (Rush slots available)
                    </span>
                  </div>

                  {/* Outfits Breakdown */}
                  <div className="mt-6 space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-gold-light flex items-center gap-1.5 uppercase tracking-wider mb-1">
                        <span>👰</span>
                        <span>Bride’s Sovereign Attire:</span>
                      </h4>
                      <p className="text-[#CBD5E1] pl-5 leading-relaxed">
                        {pkg.brideOutfit}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gold-light flex items-center gap-1.5 uppercase tracking-wider mb-1">
                        <span>🤵</span>
                        <span>Groom’s Monarch Attire:</span>
                      </h4>
                      <p className="text-[#CBD5E1] pl-5 leading-relaxed">
                        {pkg.groomOutfit}
                      </p>
                    </div>

                    {/* Features / Accessories Checklist */}
                    <div className="pt-2">
                      <h4 className="font-bold text-white uppercase tracking-wider mb-2">
                        Included Suite Services:
                      </h4>
                      <ul className="space-y-1.5 pl-1">
                        {(pkg.accessories || (pkg as any).features || []).map((feat: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-[#9CA3AF]">
                            <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Package Booking Action */}
                <div className="mt-8 pt-5 border-t border-[#243044] space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md text-center ${
                      isCrown ? 'gold-button' : 'gold-button-outline'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire for Wedding Suite</span>
                  </a>

                  <p className="text-[10px] text-center text-[#9CA3AF]">
                    Includes private video measurement call with Jesutofunmi
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Matrimonial Assurance Banner */}
        <div className="mt-12 bg-[#0D1422] border border-[#243044] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8A1528] flex items-center justify-center flex-shrink-0 text-white">
              <HeartHandshake className="w-6 h-6 text-[#F4E4BA]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-heading">
                Twin-Loom Dye-Lot Guarantee
              </h4>
              <p className="text-xs text-[#A0AEC0] max-w-xl mt-0.5">
                Every couple’s suite is woven concurrently from a unified vat of kettle-dyed yarn. We guarantee zero shade divergence between bride and groom.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20we%20want%20to%20reserve%20a%20wedding%20loom%20slot%20for%20our%20date`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl gold-button text-xs uppercase tracking-wider font-bold whitespace-nowrap cursor-pointer shadow-md"
          >
            <span>Reserve Wedding Loom Slot</span>
          </a>
        </div>
      </div>
    </section>
  );
};

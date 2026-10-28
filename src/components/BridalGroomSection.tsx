import React from 'react';
import { WEDDING_PACKAGES } from '../data/weddingPackages';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Check, MessageCircle, Calendar, HeartHandshake } from 'lucide-react';

interface BridalGroomSectionProps {
  onSelectPackage?: (pkg: any) => void;
  onOpenBooking?: (occasion?: string) => void;
}

export const BridalGroomSection: React.FC<BridalGroomSectionProps> = ({
  onSelectPackage,
  onOpenBooking
}) => {
  return (
    <section id="wedding-packages" className="py-20 bg-[var(--chalk)] relative border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--cobalt)] mb-2">
            Matrimonial Lineage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--ink)]">
            Royal Bridal & Groom Wedding Packages
          </h2>
          <p className="text-sm text-[var(--muted)] mt-3">
            Woven simultaneously on twin narrow-looms to guarantee identical dye saturation, yarn tension, and harmonized golden embroidery across both bride and groom ensembles.
          </p>
        </div>

        {/* Wedding Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WEDDING_PACKAGES.map((pkg) => {
            const isCrown = pkg.tier === 'Royalty';
            const whatsappUrl = `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              `Hello Jesutofunmi, I want to book a consultation for *${pkg.name}* for our upcoming traditional wedding.`
            )}`;

            return (
              <div
                key={pkg.id}
                className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all relative overflow-hidden bg-[var(--paper)] ${
                  isCrown
                    ? 'border-2 border-[var(--cobalt)] shadow-xl'
                    : 'border border-[var(--line-strong)] hover:border-[var(--cobalt)]/40 shadow-sm'
                }`}
              >
                {/* Popular / Royalty Badge */}
                {isCrown && (
                  <div className="absolute top-0 right-0 bg-[var(--cobalt)] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-lg shadow-sm">
                    Most Requested Suite
                  </div>
                )}

                <div>
                  {/* Tier & Name */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-[var(--cobalt)]">
                      {pkg.tier} Tier Suite
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-[var(--ink)]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1 italic">
                    "{pkg.tagline}"
                  </p>

                  {/* Pricing / Commission Banner */}
                  <div className="mt-5 pb-5 border-b border-[var(--line)]">
                    <span className="text-xs text-[var(--muted)] block">Full Matrimonial Couple Suite:</span>
                    <span className="text-xl font-bold text-[var(--cobalt)] uppercase tracking-wider font-royal">
                      Pricing Upon Consultation
                    </span>
                    <span className="text-[11px] text-[var(--muted)] block mt-1 tabular-nums">
                      Production Window: <strong className="text-[var(--ink)]">{pkg.leadTime}</strong> (Rush slots available)
                    </span>
                  </div>

                  {/* Outfits Breakdown */}
                  <div className="mt-6 space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-[var(--ink)] flex items-center gap-1.5 uppercase tracking-wider mb-1">
                        <span>👰</span>
                        <span>Bride’s Sovereign Attire:</span>
                      </h4>
                      <p className="text-[var(--muted)] pl-5 leading-relaxed">
                        {pkg.brideOutfit}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[var(--ink)] flex items-center gap-1.5 uppercase tracking-wider mb-1">
                        <span>🤵</span>
                        <span>Groom’s Monarch Attire:</span>
                      </h4>
                      <p className="text-[var(--muted)] pl-5 leading-relaxed">
                        {pkg.groomOutfit}
                      </p>
                    </div>

                    {/* Features / Accessories Checklist */}
                    <div className="pt-2">
                      <h4 className="font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                        Included Suite Services:
                      </h4>
                      <ul className="space-y-1.5 pl-1">
                        {(pkg.accessories || (pkg as any).features || []).map((feat: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-[var(--muted)]">
                            <Check className="w-3.5 h-3.5 text-[var(--cobalt)] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Package Booking Action */}
                <div className="mt-8 pt-5 border-t border-[var(--line)] space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm text-center ${
                      isCrown
                        ? 'bg-[var(--cobalt)] text-white hover:bg-[var(--cobalt-deep)]'
                        : 'bg-[var(--chalk)] border border-[var(--line-strong)] text-[var(--ink)] hover:border-[var(--cobalt)] hover:text-[var(--cobalt)]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire for {pkg.name}</span>
                  </a>

                  {onOpenBooking && (
                    <button
                      onClick={() => onOpenBooking(pkg.name)}
                      className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-[var(--cobalt)] hover:bg-[var(--cobalt-light)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reserve Wedding Loom Date</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Matrimonial Assurance Banner */}
        <div className="mt-12 bg-[var(--paper)] border border-[var(--line-strong)] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--cobalt-light)] flex items-center justify-center flex-shrink-0 text-[var(--cobalt)]">
              <HeartHandshake className="w-6 h-6 text-[var(--cobalt)]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[var(--ink)] font-heading">
                Twin-Loom Dye-Lot Guarantee
              </h4>
              <p className="text-xs text-[var(--muted)] max-w-xl mt-0.5">
                Every couple’s suite is woven concurrently from a unified vat of kettle-dyed yarn. We guarantee zero shade divergence between bride and groom.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20we%20want%20to%20reserve%20a%20wedding%20loom%20slot%20for%20our%20date`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-lg bg-[var(--cobalt)] text-white text-xs uppercase tracking-wider font-bold whitespace-nowrap cursor-pointer shadow-md hover:bg-[var(--cobalt-deep)] transition-colors"
          >
            <span>Reserve Wedding Loom Slot</span>
          </a>
        </div>
      </div>
    </section>
  );
};

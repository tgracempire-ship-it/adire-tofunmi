import React, { useState } from 'react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Users, Package, Calculator, MessageCircle, Gift, CheckCircle2, Calendar } from 'lucide-react';

interface AsoEbiCalculatorProps {
  onOpenBooking?: (occasion?: string) => void;
}

export const AsoEbiCalculator: React.FC<AsoEbiCalculatorProps> = ({ onOpenBooking }) => {
  const [guestCount, setGuestCount] = useState<number>(30);
  const [bundleType, setBundleType] = useState<'standard-5yd' | 'lurex-shimmer' | 'dual-gele-ipele'>('dual-gele-ipele');
  const [packagingTier, setPackagingTier] = useState<'gold-box' | 'satin-bag' | 'standard-band'>('gold-box');
  const [destination, setDestination] = useState<'lagos-local' | 'nigeria-state' | 'uk-europe' | 'us-canada'>('lagos-local');
  const [eventDate, setEventDate] = useState<string>('');

  const BUNDLE_RATES = {
    'dual-gele-ipele': { name: 'Gele & Ipele Set (Head-tie & Shoulder Sash)', desc: 'Most popular for wedding female guests & bridal train' },
    'standard-5yd': { name: 'Full 5-Yard Loom Bundle (For tailored outfits)', desc: 'Complete cut for tailored Buba/Iro or men’s kaftan yokes' },
    'lurex-shimmer': { name: 'Luxury Metallic Lurex 5-Yard Bundle', desc: 'High-shine celebratory weave for mothers of the day and VIPs' }
  };

  const PACKAGING_RATES = {
    'gold-box': { name: 'Rigid Keepsake Box with Ribbon', note: 'Luxury Wedding Keepsake' },
    'satin-bag': { name: 'Monogrammed Drawstring Satin Pouch', note: 'Reusable Elegance' },
    'standard-band': { name: 'Standard Gold Ribbon & Tag Wrapping', note: 'Eco Artisanal Band' }
  };

  const getVolumeTier = (count: number) => {
    if (count >= 100) return 'VIP Wholesale Tier (15% Volume Rebate)';
    if (count >= 50) return 'Royal Bulk Tier (10% Volume Rebate)';
    if (count >= 25) return 'Group Privilege Tier (5% Volume Rebate)';
    return 'Standard Artisanal Commission';
  };

  const volumeTier = getVolumeTier(guestCount);

  const calculateLeadTime = (count: number) => {
    if (count <= 20) return '2–3 weeks';
    if (count <= 50) return '3–4 weeks';
    if (count <= 100) return '4–6 weeks';
    return '6–8 weeks';
  };

  const leadTime = calculateLeadTime(guestCount);

  const generateAsoEbiWhatsApp = () => {
    const text = `👑 *THREADS OF HERITAGE - ASO EBI BULK INQUIRY*
----------------------------------------
*Artisan:* Jesutofunmi (@Threads of Heritage)

*Target Headcount:* ${guestCount} Guests / Sets
*Aso Ebi Package:* ${BUNDLE_RATES[bundleType].name}
*Packaging Selected:* ${PACKAGING_RATES[packagingTier].name}
*Destination Region:* ${destination}
*Event Date:* ${eventDate || 'To be confirmed'}
*Volume Tier:* ${volumeTier}
*Production Lead Time:* ${leadTime}
----------------------------------------
Hello Jesutofunmi, please provide a wholesale bulk quotation and loom scheduling for our Aso Ebi production!`;

    return `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="aso-ebi-calc" className="py-20 bg-[var(--chalk)] relative border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--cobalt)] mb-2">
            Harmonized Guest Attire
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--ink)]">
            Aso Ebi Bulk Estimator & Timeline
          </h2>
          <p className="text-sm text-[var(--muted)] mt-3">
            Ensure color harmony across your wedding guests and bridal train. Estimate bundles, custom packaging, and production timelines with worldwide courier distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-[var(--paper)] border border-[var(--line-strong)] rounded-xl p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[var(--cobalt)]" />
                  <span>Number of Guests / Bundles</span>
                </label>
                <span className="text-xl font-bold text-[var(--cobalt)] bg-[var(--chalk)] px-4 py-1.5 rounded-lg border border-[var(--line-strong)] font-heading tabular-nums">
                  {guestCount} Sets
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-[#e2dcce] rounded-lg appearance-none cursor-pointer accent-[var(--cobalt)]"
              />

              <div className="flex justify-between text-[11px] text-[var(--muted)] mt-2 tabular-nums">
                <span>10 Sets (Intimate)</span>
                <span>50 Sets (Standard Wedding)</span>
                <span>100+ Sets (Grand Matrimony)</span>
              </div>
            </div>

            {/* Bundle Configuration */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2 mb-3">
                <Package className="w-4 h-4 text-[var(--cobalt)]" />
                <span>Select Weave Format for Guests</span>
              </label>

              <div className="space-y-2.5">
                {Object.entries(BUNDLE_RATES).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setBundleType(key as any)}
                    className={`w-full p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                      bundleType === key
                        ? 'border-[var(--cobalt)] bg-[var(--cobalt-light)] shadow-sm'
                        : 'border-[var(--line)] bg-[var(--chalk)] hover:border-[var(--cobalt)]/40 text-[var(--ink)]'
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-bold block ${bundleType === key ? 'text-[var(--cobalt)]' : 'text-[var(--ink)]'}`}>
                        {val.name}
                      </span>
                      <span className="text-[11px] text-[var(--muted)] block mt-0.5">
                        {val.desc}
                      </span>
                    </div>
                    {bundleType === key && <CheckCircle2 className="w-4 h-4 text-[var(--cobalt)] flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Packaging Presentation */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2 mb-3">
                <Gift className="w-4 h-4 text-[var(--cobalt)]" />
                <span>Custom Guest Presentation Packaging</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(PACKAGING_RATES).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPackagingTier(key as any)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      packagingTier === key
                        ? 'border-[var(--cobalt)] bg-[var(--cobalt-light)] shadow-sm'
                        : 'border-[var(--line)] bg-[var(--chalk)] hover:border-[var(--cobalt)]/40 text-[var(--ink)]'
                    }`}
                  >
                    <span className={`text-xs font-bold block mb-1 ${packagingTier === key ? 'text-[var(--cobalt)]' : 'text-[var(--ink)]'}`}>
                      {val.name.split(' ')[0]} {val.name.split(' ')[1]}
                    </span>
                    <span className="text-[10px] text-[var(--muted)] block leading-tight">
                      {val.note}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Region & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-[var(--muted)] block mb-1 font-medium">Delivery Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value as any)}
                  className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
                >
                  <option value="lagos-local">Lagos State (Doorstep Courier)</option>
                  <option value="nigeria-state">Other Nigerian States (Express Parcel)</option>
                  <option value="uk-europe">United Kingdom & Europe (DHL Express)</option>
                  <option value="us-canada">United States & Canada (DHL Express)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-[var(--muted)] block mb-1 font-medium">Wedding Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded-lg px-3.5 py-2 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Real-time Bulk Quotation Card */}
          <div className="lg:col-span-5 bg-[var(--paper)] border border-[var(--line-strong)] rounded-xl p-6 sm:p-8 shadow-md relative">
            <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-4 pb-3 border-b border-[var(--line)]">
              Aso Ebi Production Schedule
            </h3>

            {/* Volume Tier Privilege Badge */}
            <div className="p-3.5 rounded-lg bg-[var(--cobalt-light)] border border-[var(--cobalt)]/25 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[var(--cobalt)] block">Loom Allocation Tier:</span>
                <span className="text-xs font-bold text-[var(--ink)]">{volumeTier}</span>
              </div>
              <span className="w-8 h-8 rounded-full bg-[var(--cobalt)] text-white flex items-center justify-center text-xs">
                👑
              </span>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs text-[var(--ink)] border-b border-[var(--line)] pb-5">
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Requested Sets:</span>
                <span className="font-bold tabular-nums">{guestCount} Guest Bundles</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Fabric Style:</span>
                <span className="font-semibold text-right max-w-[200px] truncate">{BUNDLE_RATES[bundleType].name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Packaging:</span>
                <span className="font-semibold">{PACKAGING_RATES[packagingTier].name.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Estimated Weave Duration:</span>
                <span className="font-bold text-[var(--cobalt)] tabular-nums">{leadTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Dye Consistency:</span>
                <span className="font-semibold text-[var(--coral)]">100% Single-Vat Guaranteed</span>
              </div>
            </div>

            {/* Price on Request Banner */}
            <div className="py-5">
              <span className="text-xs text-[var(--muted)] block mb-1">Bulk Commission Investment:</span>
              <span className="text-2xl font-bold text-[var(--cobalt)] uppercase tracking-wider font-royal block">
                Quotation on Request
              </span>
              <span className="text-[11px] text-[var(--muted)] block mt-1">
                Wholesale bulk tier pricing tailored to guest count, custom yarn dyeing, and packaging selection.
              </span>
            </div>

            {/* Action CTA */}
            <div className="space-y-2.5 pt-2">
              <a
                href={generateAsoEbiWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-lg bg-[var(--cobalt)] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:bg-[var(--cobalt-deep)] transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Wholesale Quotation via WhatsApp</span>
              </a>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenBooking('Aso Ebi Group')}
                  className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-[var(--cobalt)] hover:bg-[var(--cobalt-light)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Bulk Production Slot</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

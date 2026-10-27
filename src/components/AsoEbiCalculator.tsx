import React, { useState } from 'react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Users, Package, Calculator, Truck, MessageCircle, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

export const AsoEbiCalculator: React.FC = () => {
  // State
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
    'gold-box': { name: 'Rigid Gold-Foil Keepsake Box with Ribbon', note: 'Luxury Wedding Keepsake' },
    'satin-bag': { name: 'Monogrammed Drawstring Satin Pouch', note: 'Reusable Elegance' },
    'standard-band': { name: 'Standard Gold Ribbon & Tag Wrapping', note: 'Eco Artisanal Band' }
  };

  // Discount percentage by volume
  const getVolumeTier = (count: number) => {
    if (count >= 100) return 'VIP Wholesale Tier (15% Volume Rebate)';
    if (count >= 50) return 'Royal Bulk Tier (10% Volume Rebate)';
    if (count >= 25) return 'Group Privilege Tier (5% Volume Rebate)';
    return 'Standard Artisanal Commission';
  };

  const volumeTier = getVolumeTier(guestCount);

  // Lead time calculator
  const calculateLeadTime = (count: number) => {
    if (count <= 20) return '2–3 weeks';
    if (count <= 50) return '3–4 weeks';
    if (count <= 100) return '4–6 weeks';
    return '6–8 weeks';
  };

  const leadTime = calculateLeadTime(guestCount);

  // WhatsApp Proposal Message
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
    <section id="aso-ebi-calc" className="py-20 bg-[#0A0F1A] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182234] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Harmonized Guest Attire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
            Aso Ebi <span className="gold-gradient-text font-royal">Bulk Estimator</span> & Timeline
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] mt-3">
            Ensure color harmony across your wedding guests and bridal train. Estimate bundles, custom packaging, and production timelines with worldwide courier distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-[#111724] border border-[#243044] rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-[#F4E4BA] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>Number of Guests / Bundles</span>
                </label>
                <span className="text-xl font-extrabold text-white bg-[#182234] px-3.5 py-1 rounded-lg border border-[#D4AF37]/30 font-heading">
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
                className="w-full h-2 bg-[#1C2638] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />

              <div className="flex justify-between text-[11px] text-[#A0AEC0] mt-2">
                <span>10 sets (Intimate bridal train)</span>
                <span>50 sets (Standard wedding)</span>
                <span>200+ sets (Mega celebration)</span>
              </div>

              {/* Volume Discount Notice */}
              <div className="mt-3 p-2.5 rounded-lg bg-[#162030] border border-[#D4AF37]/30 flex items-center gap-2 text-xs text-[#F4E4BA]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>
                  <strong>Tier Applied:</strong> {volumeTier}
                </span>
              </div>
            </div>

            {/* Bundle Type */}
            <div>
              <label className="text-sm font-bold text-[#F4E4BA] block mb-3">
                Select Aso Ebi Cloth Package
              </label>
              <div className="space-y-2.5">
                {(Object.keys(BUNDLE_RATES) as (keyof typeof BUNDLE_RATES)[]).map((key) => {
                  const b = BUNDLE_RATES[key];
                  const active = bundleType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setBundleType(key)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        active
                          ? 'border-[#D4AF37] bg-[#1E293B] shadow-sm'
                          : 'border-[#243044] bg-[#0E1522] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-semibold text-white">{b.name}</span>
                        <span className="text-xs font-semibold text-[#D4AF37]">Bespoke Weave</span>
                      </div>
                      <span className="text-[11px] text-[#A0AEC0] block">{b.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Packaging Option */}
            <div>
              <label className="text-sm font-bold text-[#F4E4BA] block mb-3">
                Presentation & Packaging Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(PACKAGING_RATES) as (keyof typeof PACKAGING_RATES)[]).map((key) => {
                  const p = PACKAGING_RATES[key];
                  const active = packagingTier === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPackagingTier(key)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        active
                          ? 'border-[#D4AF37] bg-[#1E293B] shadow-sm'
                          : 'border-[#243044] bg-[#0E1522] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <span className="text-xs font-semibold text-white block mb-1">{p.name}</span>
                      <span className="text-[11px] text-[#D4AF37] block">{p.note}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Event Date & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#243044]">
              <div>
                <label className="text-xs text-[#A0AEC0] block mb-1">Target Event Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#0E1522] border border-[#243044] rounded-lg px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-[#A0AEC0] block mb-1">Shipping Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value as any)}
                  className="w-full bg-[#0E1522] border border-[#243044] rounded-lg px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="lagos-local">Lagos Island / Mainland Delivery</option>
                  <option value="nigeria-state">Other Nigerian States (Abuja, Ibadan, PH)</option>
                  <option value="uk-europe">United Kingdom & Europe (DHL Express)</option>
                  <option value="us-canada">United States & Canada (DHL Express)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#182234] to-[#0E1624] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/25">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                    Volume Specification
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {guestCount} Guest Aso Ebi Order
                  </h3>
                </div>
                <Package className="w-8 h-8 text-[#D4AF37]" />
              </div>

              {/* Breakdown */}
              <div className="space-y-3 py-4 border-b border-[#243044] text-xs">
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Package Selected:</span>
                  <span className="text-white font-medium">{BUNDLE_RATES[bundleType].name.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Wholesale Tier:</span>
                  <span className="text-[#D4AF37] font-semibold">{volumeTier}</span>
                </div>
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Packaging:</span>
                  <span className="text-white font-medium">{PACKAGING_RATES[packagingTier].name.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Estimated Production Lead Time:</span>
                  <span className="text-[#F4E4BA] font-bold">{leadTime}</span>
                </div>
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Dye Consistency:</span>
                  <span className="text-white font-medium">100% Kettle Batch Harmonized</span>
                </div>
              </div>

              {/* Quotation Notice */}
              <div className="pt-4">
                <span className="text-[11px] uppercase tracking-wider text-[#A0AEC0] block">
                  Wholesale Bulk Pricing:
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#D4AF37] uppercase tracking-wide font-royal block mt-1">
                  Quotation on Request
                </span>
                <span className="text-[11px] text-[#A0AEC0] block mt-0.5">
                  Includes yarn dyeing, weaving, and optional luxury packaging.
                </span>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href={generateAsoEbiWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-lg shadow-green-500/20 hover:brightness-110 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Request Bulk Quote from Jesutofunmi</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-[#243044] text-[11px] text-[#9CA3AF] text-center">
                Need color sample swatches shipped before full production? Ask Jesutofunmi directly on WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

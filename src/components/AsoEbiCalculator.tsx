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
    <section id="aso-ebi-calc" className="py-20 bg-[#070A0F] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
            Aso Ebi <span className="text-gold font-royal">Bulk Estimator</span> & Timeline
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] mt-3">
            Ensure color harmony across your wedding guests and bridal train. Estimate bundles, custom packaging, and production timelines with worldwide courier distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-[#0D1422] border border-[#243044] rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gold-light flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  <span>Number of Guests / Bundles</span>
                </label>
                <span className="text-xl font-bold text-white bg-[#070A0F] px-4 py-1.5 rounded-lg border border-[#D4AF37]/35 font-heading tabular-nums">
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
                className="w-full h-2 bg-[#070A0F] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />

              <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-2 tabular-nums">
                <span>10 Sets (Intimate)</span>
                <span>50 Sets (Standard Wedding)</span>
                <span>100+ Sets (Grand Matrimony)</span>
              </div>
            </div>

            {/* Bundle Configuration */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gold-light flex items-center gap-2 mb-3">
                <Package className="w-4 h-4 text-gold" />
                <span>Select Weave Format for Guests</span>
              </label>

              <div className="space-y-2.5">
                {Object.entries(BUNDLE_RATES).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setBundleType(key as any)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      bundleType === key
                        ? 'border-[#D4AF37] bg-[#141C2B] shadow-md'
                        : 'border-[#243044] bg-[#070A0F]/60 hover:border-[#D4AF37]/50 text-gray-300'
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-bold block ${bundleType === key ? 'text-gold' : 'text-white'}`}>
                        {val.name}
                      </span>
                      <span className="text-[11px] text-[#A0AEC0] block mt-0.5">
                        {val.desc}
                      </span>
                    </div>
                    {bundleType === key && <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Packaging Presentation */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gold-light flex items-center gap-2 mb-3">
                <Gift className="w-4 h-4 text-gold" />
                <span>Custom Guest Presentation Packaging</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(PACKAGING_RATES).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPackagingTier(key as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      packagingTier === key
                        ? 'border-[#D4AF37] bg-[#141C2B] shadow-md'
                        : 'border-[#243044] bg-[#070A0F]/60 hover:border-[#D4AF37]/50 text-gray-300'
                    }`}
                  >
                    <span className={`text-xs font-bold block mb-1 ${packagingTier === key ? 'text-gold' : 'text-white'}`}>
                      {val.name.split(' ')[0]} {val.name.split(' ')[1]}
                    </span>
                    <span className="text-[10px] text-[#9CA3AF] block leading-tight">
                      {val.note}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Region & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-[#A0AEC0] block mb-1 font-medium">Delivery Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value as any)}
                  className="w-full bg-[#070A0F] border border-[#243044] rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="lagos-local">Lagos State (Doorstep Courier)</option>
                  <option value="nigeria-state">Other Nigerian States (Express Parcel)</option>
                  <option value="uk-europe">United Kingdom & Europe (DHL Express)</option>
                  <option value="us-canada">United States & Canada (DHL Express)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-[#A0AEC0] block mb-1 font-medium">Wedding Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#070A0F] border border-[#243044] rounded-xl px-3.5 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Real-time Bulk Quotation Card */}
          <div className="lg:col-span-5 bg-[#0D1422] border border-[#D4AF37]/35 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-lg font-bold text-white font-heading mb-4 pb-3 border-b border-[#243044]">
              Aso Ebi Production Schedule
            </h3>

            {/* Volume Tier Privilege Badge */}
            <div className="p-3.5 rounded-xl bg-[#070A0F] border border-[#D4AF37]/30 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-gold block">Loom Allocation Tier:</span>
                <span className="text-xs font-bold text-white">{volumeTier}</span>
              </div>
              <span className="w-8 h-8 rounded-full bg-[#8A1528] flex items-center justify-center text-sm">
                👑
              </span>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs text-[#CBD5E1] border-b border-[#243044] pb-5">
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Requested Sets:</span>
                <span className="font-bold text-white tabular-nums">{guestCount} Guest Bundles</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Fabric Style:</span>
                <span className="font-semibold text-white text-right max-w-[200px] truncate">{BUNDLE_RATES[bundleType].name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Packaging:</span>
                <span className="font-semibold text-white">{PACKAGING_RATES[packagingTier].name.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Estimated Weave Duration:</span>
                <span className="font-bold text-gold tabular-nums">{leadTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Dye Consistency:</span>
                <span className="font-semibold text-[#86EFAC]">100% Single-Vat Guaranteed</span>
              </div>
            </div>

            {/* Price on Request Banner */}
            <div className="py-5">
              <span className="text-xs text-[#9CA3AF] block mb-1">Bulk Commission Investment:</span>
              <span className="text-2xl font-bold text-gold uppercase tracking-wider font-royal block">
                Quotation on Request
              </span>
              <span className="text-[11px] text-[#9CA3AF] block mt-1">
                Wholesale bulk tier pricing tailored to guest count, custom yarn dyeing, and packaging selection.
              </span>
            </div>

            {/* Action CTA */}
            <div className="space-y-3 pt-2">
              <a
                href={generateAsoEbiWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl gold-button text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#070A0F]" />
                <span>Request Wholesale Quotation via WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-[#9CA3AF]">
                Includes sample swatch approval before commencing full bulk loom production
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

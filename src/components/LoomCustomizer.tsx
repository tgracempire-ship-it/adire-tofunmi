import React, { useState } from 'react';
import { TraditionalWeaveType } from '../types';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Sparkles, MessageCircle, Check, Info, Palette, Clock, Scissors, Send } from 'lucide-react';

interface LoomCustomizerProps {
  onAddCustomToCart?: (item: any) => void;
}

export const LoomCustomizer: React.FC<LoomCustomizerProps> = ({ onAddCustomToCart }) => {
  // Customizer State
  const [weaveType, setWeaveType] = useState<TraditionalWeaveType>('alaari');
  const [ensemble, setEnsemble] = useState<'bridal-full' | 'groom-agbada' | 'couple-twinning' | 'aso-ebi-set' | 'children-occasion'>('groom-agbada');
  const [baseColor, setBaseColor] = useState('Royal Crimson (#8A1528)');
  const [accentColor, setAccentColor] = useState('Champagne Gold (#D4AF37)');
  const [patternStyle, setPatternStyle] = useState<'solid-regal' | 'ancestral-pinstripe' | 'eyelet-perforated' | 'checker-herringbone'>('solid-regal');
  const [embellishment, setEmbellishment] = useState<'pure-classic' | 'bullion-embroidery' | 'coral-pearl-fringes' | 'crystal-stone-royal'>('bullion-embroidery');
  const [tailoringOption, setTailoringOption] = useState<'custom-tailored' | 'fabric-raw-cut'>('custom-tailored');
  const [headwearIncluded, setHeadwearIncluded] = useState(true);
  const [clientName, setClientName] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Weave Information & Cultural Significance
  const WEAVE_DETAILS: Record<TraditionalWeaveType, { title: string; subtitle: string; desc: string; defaultSample: string }> = {
    alaari: {
      title: 'Alaari (The Royal Magenta / Crimson)',
      subtitle: 'The King of Yoruba Weaves',
      desc: 'Historically reserved for kings, princes, and victorious celebration. Its crimson tone reflects vibrancy, royalty, and high authority.',
      defaultSample: '/images/groom-agbada-portrait.jpg'
    },
    sanyan: {
      title: 'Sanyan (The Aristocratic Wild Silk)',
      subtitle: 'Raw Earth Brown & Khaki Silk',
      desc: 'Woven from indigenous Anaphe silk moths. Warm fawn and beige hues symbolizing ancient prestige, wealth, and aristocratic restraint.',
      defaultSample: '/images/fabric-chocolate-roll.jpg'
    },
    etu: {
      title: 'Etu (The Indigo Guinea Fowl Weave)',
      subtitle: 'Deep Indigo Navy & Fine White Stripes',
      desc: 'Named after the dappled feathers of the guinea fowl. Striking midnight navy and cobalt lines symbolizing wisdom, eldership, and deep dignity.',
      defaultSample: '/images/fabric-blue-stripes.jpg'
    },
    lurex: {
      title: 'Metallic Lurex (Contemporary Shimmer)',
      subtitle: 'Modern Wedding Glamour & Gold Thread',
      desc: 'Intertwined with gleaming metallic filaments that capture photography flashes and ballroom chandeliers with majestic brilliance.',
      defaultSample: '/images/bride-grey-gold.jpg'
    },
    beaded: {
      title: 'Beaded & Stone Haute Couture',
      subtitle: 'Pearl Studded & Scalloped Trims',
      desc: 'Hand-sewn crystal beads, dangling fringe tassels, and intricate cord work placed along collar, cuffs, and hem.',
      defaultSample: '/images/bride-striped-gown.jpg'
    }
  };

  // Base ensemble details
  const ENSEMBLE_DETAILS = {
    'bridal-full': { name: 'Full Bridal Suite (Iro, Buba, Gele & Ipele)', leadWeeks: '3–4 weeks' },
    'groom-agbada': { name: 'Royal Groom Grand Agbada (4-Piece with Fila)', leadWeeks: '3–4 weeks' },
    'couple-twinning': { name: 'Oba & Olori Couple Twinning Suite (8 Pieces)', leadWeeks: '4–5 weeks' },
    'aso-ebi-set': { name: 'Aso Ebi 5-Yard Loom Bundle', leadWeeks: '2–3 weeks' },
    'children-occasion': { name: 'Little Monarch Children Milestone Wrap', leadWeeks: '1–2 weeks' }
  };

  // Embellishment options
  const EMBELLISHMENT_OPTIONS = {
    'pure-classic': { name: 'Pure Classic Handloom (Clean Weave)', note: 'Minimalist Ancestral' },
    'bullion-embroidery': { name: 'Handcrafted Golden Bullion Chest / Border Work', note: 'Royal Bullion Thread' },
    'coral-pearl-fringes': { name: 'Hand-strung Coral & Pearl Dangling Fringes', note: 'Luxury Beaded Hem' },
    'crystal-stone-royal': { name: 'All-over Swarovski Crystal & Diamond Stone Studding', note: 'Haute Couture Brilliance' }
  };

  // Generate WhatsApp Message Link
  const generateWhatsAppMessage = () => {
    const text = `👑 *THREADS OF HERITAGE - BESPOKE LOOM ORDER SPECIFICATION*
----------------------------------------
*Artisan:* Jesutofunmi (@Threads of Heritage)

*Client Name:* ${clientName || 'Valued Client'}
*Ensemble Selected:* ${ENSEMBLE_DETAILS[ensemble].name}
*Traditional Weave:* ${WEAVE_DETAILS[weaveType].title}
*Base Color:* ${baseColor}
*Accent Color:* ${accentColor}
*Pattern Style:* ${patternStyle}
*Embellishment:* ${EMBELLISHMENT_OPTIONS[embellishment].name}
*Tailoring Preference:* ${tailoringOption === 'custom-tailored' ? 'Full Bespoke Tailoring' : 'Raw Loom Fabric Only'}
*Headwear (Gele / Fila):* ${headwearIncluded ? 'Included' : 'Excluded'}
*Estimated Lead Time:* ${ENSEMBLE_DETAILS[ensemble].leadWeeks}
*Target Event Date:* ${targetDate || 'Not specified'}

*Special Notes / Measurements:*
${clientNotes || 'Standard consultation requested.'}
----------------------------------------
Please advise on custom quote, loom availability, and next steps for sample swatches. Thank you!`;

    return `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleAddToCart = () => {
    if (onAddCustomToCart) {
      onAddCustomToCart({
        id: `custom-loom-${Date.now()}`,
        title: `Bespoke ${WEAVE_DETAILS[weaveType].title.split(' ')[0]} ${ENSEMBLE_DETAILS[ensemble].name.split(' ')[0]}`,
        category: 'custom-loom',
        priceNGN: 0,
        image: WEAVE_DETAILS[weaveType].defaultSample,
        details: `${baseColor} with ${accentColor} • ${EMBELLISHMENT_OPTIONS[embellishment].name}`,
        quantity: 1
      });
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    }
  };

  return (
    <section id="loom-builder" className="py-20 bg-[#0C111D] relative border-b border-[#D4AF37]/20">
      {/* Decorative Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#8A1528]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182234] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Bespoke Loom Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
            Design Your Royal <span className="gold-gradient-text font-royal">Aso Oke</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] mt-3">
            Select your ancestral weave, custom color palette, and embroidery details. Master Weaver Jesutofunmi handcrafts each strip on authentic wooden looms to your exact specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Selection Controls */}
          <div className="lg:col-span-7 space-y-8 bg-[#111724]/90 border border-[#D4AF37]/25 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            {/* Step 1: Traditional Weave Selection */}
            <div>
              <label className="flex items-center justify-between text-sm font-bold text-[#F4E4BA] mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0A0E17] text-xs font-extrabold flex items-center justify-center">1</span>
                  Select Ancestral Weave Base
                </span>
                <span className="text-xs text-[#A0AEC0] font-normal">Authentic Handloom</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {(Object.keys(WEAVE_DETAILS) as TraditionalWeaveType[]).map((type) => {
                  const info = WEAVE_DETAILS[type];
                  const active = weaveType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setWeaveType(type)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        active
                          ? 'border-[#D4AF37] bg-[#1E293B] shadow-lg shadow-[#D4AF37]/15'
                          : 'border-[#243044] bg-[#0E1522] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold capitalize text-[#FDFBF7]">{type}</span>
                        {active && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                      </div>
                      <span className="text-[10px] text-[#A0AEC0] block line-clamp-1">{info.subtitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Informational Callout for Selected Weave */}
              <div className="mt-3 p-3 rounded-lg bg-[#161F2E] border border-[#D4AF37]/20 flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                <Info className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#F4E4BA]">{WEAVE_DETAILS[weaveType].title}:</strong> {WEAVE_DETAILS[weaveType].desc}
                </p>
              </div>
            </div>

            {/* Step 2: Ensemble Garment Type */}
            <div>
              <label className="flex items-center justify-between text-sm font-bold text-[#F4E4BA] mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0A0E17] text-xs font-extrabold flex items-center justify-center">2</span>
                  Select Ensemble / Package
                </span>
                <span className="text-xs text-[#A0AEC0] font-normal">Bespoke Fitting</span>
              </label>

              <div className="space-y-2">
                {(Object.keys(ENSEMBLE_DETAILS) as (keyof typeof ENSEMBLE_DETAILS)[]).map((key) => {
                  const ens = ENSEMBLE_DETAILS[key];
                  const active = ensemble === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setEnsemble(key)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        active
                          ? 'border-[#D4AF37] bg-[#1E293B] shadow-md shadow-[#D4AF37]/10'
                          : 'border-[#243044] bg-[#0E1522] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${active ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-[#4B5563]'}`}>
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-[#0A0E17]" />}
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-white block">{ens.name}</span>
                          <span className="text-[11px] text-[#A0AEC0]">Lead Time: {ens.leadWeeks}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#D4AF37]">
                        Bespoke Commission
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Color Palette & Accents */}
            <div>
              <label className="flex items-center justify-between text-sm font-bold text-[#F4E4BA] mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0A0E17] text-xs font-extrabold flex items-center justify-center">3</span>
                  Palette & Accent Harmony
                </span>
                <Palette className="w-4 h-4 text-[#D4AF37]" />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#A0AEC0] block mb-1.5">Primary Weave Tone</label>
                  <select
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="w-full bg-[#0E1522] border border-[#243044] rounded-lg px-3 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Royal Crimson (#8A1528)">Regal Alaari Crimson (#8A1528)</option>
                    <option value="Imperial Indigo Navy (#152238)">Imperial Indigo Navy (#152238)</option>
                    <option value="Earthy Sanyan Raw Champagne (#D9C3A3)">Earthy Sanyan Raw Champagne (#D9C3A3)</option>
                    <option value="Emerald Monarch Green (#0D3B26)">Emerald Monarch Green (#0D3B26)</option>
                    <option value="Pewter Slate & Silver (#4A5568)">Pewter Slate & Silver (#4A5568)</option>
                    <option value="Midnight Onyx Black (#0B0F17)">Midnight Onyx Black (#0B0F17)</option>
                    <option value="Burnt Orange & Terracotta (#C05621)">Burnt Orange & Terracotta (#C05621)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#A0AEC0] block mb-1.5">Accent & Thread Highlights</label>
                  <select
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-full bg-[#0E1522] border border-[#243044] rounded-lg px-3 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Champagne Gold (#D4AF37)">Champagne Metallic Gold</option>
                    <option value="Pure Lurex Silver (#E2E8F0)">Pure Lurex Silver</option>
                    <option value="Deep Wine Burgundy (#500B17)">Deep Wine Burgundy</option>
                    <option value="Warm Ivory (#FDFBF7)">Warm Ivory Raw Silk</option>
                    <option value="Benin Coral Red (#DD6B20)">Benin Coral Accent</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Embellishments & Tailoring Options */}
            <div>
              <label className="flex items-center justify-between text-sm font-bold text-[#F4E4BA] mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0A0E17] text-xs font-extrabold flex items-center justify-center">4</span>
                  Finishing & Embellishment Level
                </span>
                <Scissors className="w-4 h-4 text-[#D4AF37]" />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(EMBELLISHMENT_OPTIONS) as (keyof typeof EMBELLISHMENT_OPTIONS)[]).map((key) => {
                  const emb = EMBELLISHMENT_OPTIONS[key];
                  const active = embellishment === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setEmbellishment(key)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        active
                          ? 'border-[#D4AF37] bg-[#1E293B] shadow-sm'
                          : 'border-[#243044] bg-[#0E1522] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-white">{emb.name}</span>
                        {active && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                      </div>
                      <span className="text-[11px] text-[#A0AEC0]">
                        {emb.note}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Headwear & Tailoring Toggles */}
              <div className="mt-4 pt-4 border-t border-[#243044] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#D1D5DB]">Include Matching Headwear (Bridal Gele or Groom Fila Gobi):</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={headwearIncluded}
                      onChange={(e) => setHeadwearIncluded(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-[#243044] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#D4AF37]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#D1D5DB]">Tailoring Mode:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTailoringOption('custom-tailored')}
                      className={`px-2.5 py-1 rounded text-xs transition-all ${tailoringOption === 'custom-tailored' ? 'bg-[#D4AF37] text-[#0A0E17] font-bold' : 'bg-[#182234] text-[#A0AEC0]'}`}
                    >
                      Bespoke Tailored
                    </button>
                    <button
                      type="button"
                      onClick={() => setTailoringOption('fabric-raw-cut')}
                      className={`px-2.5 py-1 rounded text-xs transition-all ${tailoringOption === 'fabric-raw-cut' ? 'bg-[#D4AF37] text-[#0A0E17] font-bold' : 'bg-[#182234] text-[#A0AEC0]'}`}
                    >
                      Fabric Only
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Notes & Date */}
            <div className="pt-2 border-t border-[#243044] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#A0AEC0] block mb-1">Your Name / Event Host</label>
                <input
                  type="text"
                  placeholder="e.g., Folashade Adeleke"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#0E1522] border border-[#243044] rounded-lg px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-[#A0AEC0] block mb-1">Target Event Date (Optional)</label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full bg-[#0E1522] border border-[#243044] rounded-lg px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Order Specification Card & WhatsApp Trigger */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#182234] to-[#0E1624] border border-[#D4AF37]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Gold Ribbon Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/25">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                    Bespoke Loom Ticket
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {ENSEMBLE_DETAILS[ensemble].name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-lg">
                  🧵
                </div>
              </div>

              {/* Fabric Preview Visual */}
              <div className="my-5 rounded-xl overflow-hidden border border-[#D4AF37]/30 relative aspect-video bg-black">
                <img
                  src={WEAVE_DETAILS[weaveType].defaultSample}
                  alt={`${weaveType} Aso Oke sample`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3.5">
                  <span className="text-xs font-bold text-[#F3E5AB]">
                    Weave Style: {WEAVE_DETAILS[weaveType].title.split('(')[0]}
                  </span>
                  <span className="text-[11px] text-[#CBD5E1]">
                    Palette: {baseColor.split('(')[0]} + {accentColor.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Summary Breakdown */}
              <div className="space-y-2 text-xs border-b border-[#243044] pb-4">
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Weave Type:</span>
                  <span className="text-white font-medium capitalize">{weaveType} Handloom</span>
                </div>
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Embellishment:</span>
                  <span className="text-white font-medium">{EMBELLISHMENT_OPTIONS[embellishment].name.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Headwear:</span>
                  <span className="text-white font-medium">{headwearIncluded ? 'Included (Gele/Fila)' : 'Excluded'}</span>
                </div>
                <div className="flex justify-between text-[#A0AEC0]">
                  <span>Estimated Lead Time:</span>
                  <span className="text-[#F4E4BA] font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {ENSEMBLE_DETAILS[ensemble].leadWeeks}
                  </span>
                </div>
              </div>

              {/* Price / Quote Notice */}
              <div className="pt-4 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#A0AEC0] block">
                    Bespoke Commission:
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#D4AF37] font-royal uppercase">
                    Quotation on Request
                  </span>
                </div>
                <span className="text-[10px] text-[#D4AF37] font-medium bg-[#D4AF37]/10 px-2 py-1 rounded border border-[#D4AF37]/30">
                  Direct Weaver
                </span>
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-lg shadow-green-500/20 hover:brightness-110 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Specification to WhatsApp</span>
                </a>

                {onAddCustomToCart && (
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full py-2.5 px-4 rounded-xl gold-button-outline text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Save to My Inquiry Wishlist</span>
                  </button>
                )}

                {copiedNotification && (
                  <div className="p-2 text-center text-xs text-green-400 bg-green-950/40 border border-green-800 rounded-lg">
                    ✓ Custom configuration saved to your inquiry list!
                  </div>
                )}
              </div>

              {/* Artisan Note */}
              <div className="mt-4 pt-3 border-t border-[#243044] text-[11px] text-[#9CA3AF] text-center">
                Questions? Speak directly with <strong>Jesutofunmi</strong> on <strong>{VENDOR_DETAILS.phone}</strong> for custom measurements and matching coral bead advice.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { TraditionalWeaveType } from '../types';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Sparkles, MessageCircle, Check, Info, Palette, Scissors, Calendar } from 'lucide-react';

interface LoomCustomizerProps {
  onAddCustomToCart?: (item: any) => void;
  onOpenBooking?: (occasion?: string) => void;
}

export const LoomCustomizer: React.FC<LoomCustomizerProps> = ({ onAddCustomToCart, onOpenBooking }) => {
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
      title: 'Alaari (Royal Crimson / Magenta)',
      subtitle: 'The King of Yoruba Weaves',
      desc: 'Historically reserved for kings, princes, and victorious celebration. Its crimson tone reflects vibrancy, royalty, and high authority.',
      defaultSample: '/images/groom-agbada-portrait.jpg'
    },
    sanyan: {
      title: 'Sanyan (Aristocratic Wild Silk)',
      subtitle: 'Raw Earth Brown & Khaki Silk',
      desc: 'Woven from indigenous Anaphe silk moths. Warm fawn and beige hues symbolizing ancient prestige, wealth, and aristocratic restraint.',
      defaultSample: '/images/fabric-chocolate-roll.jpg'
    },
    etu: {
      title: 'Etu (Indigo Guinea Fowl Weave)',
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

  const handleAddSpecificationToCart = () => {
    if (onAddCustomToCart) {
      onAddCustomToCart({
        id: `custom-loom-${Date.now()}`,
        title: `Bespoke Loom: ${WEAVE_DETAILS[weaveType].title.split(' ')[0]}`,
        price: 0,
        currency: 'USD',
        category: 'custom',
        quantity: 1,
        details: `${ENSEMBLE_DETAILS[ensemble].name} | ${baseColor} + ${accentColor} | ${EMBELLISHMENT_OPTIONS[embellishment].name}`
      });
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    }
  };

  return (
    <section id="loom-builder" className="atelier-workbench py-20 bg-[var(--chalk)] relative border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="atelier-workbench__heading mb-12">
          <div className="text-xs uppercase font-bold tracking-[0.18em] text-[var(--cobalt)] mb-2">
            Artisan Customizer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--ink)]">
            Bespoke Loom Atelier Simulator
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2 max-w-2xl">
            Commission a one-of-a-kind royal piece. Select ancestral weave lineage, yarn palettes, custom embroidery, and tailoring preferences for artisan Jesutofunmi’s wooden looms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left & Center Columns */}
          <div className="atelier-controls lg:col-span-8 bg-[var(--paper)] border border-[var(--line-strong)] rounded-xl p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Step 1: Traditional Weave Heritage Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-[var(--cobalt)]" />
                <span>1. Select Traditional Weave Ancestry</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(WEAVE_DETAILS) as TraditionalWeaveType[]).map((key) => {
                  const item = WEAVE_DETAILS[key];
                  const isSelected = weaveType === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setWeaveType(key)}
                      type="button"
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[var(--cobalt)] bg-[var(--cobalt-light)] shadow-sm'
                          : 'border-[var(--line)] bg-[var(--chalk)] hover:border-[var(--cobalt)]/40 text-[var(--ink)]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-xs font-bold ${isSelected ? 'text-[var(--cobalt)]' : 'text-[var(--ink)]'}`}>
                            {item.title.split(' ')[0]}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[var(--cobalt)]" />}
                        </div>
                        <span className="text-[11px] text-[var(--muted)] block leading-tight">
                          {item.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Informative Weave Description */}
              <div className="mt-3 p-3.5 rounded-lg bg-[var(--chalk)] border border-[var(--line)] text-xs text-[var(--muted)] flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[var(--cobalt)] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--ink)] block mb-0.5">{WEAVE_DETAILS[weaveType].title}</strong>
                  <span>{WEAVE_DETAILS[weaveType].desc}</span>
                </div>
              </div>
            </div>

            {/* Step 2: Royal Ensemble Format */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2 mb-3">
                <Scissors className="w-4 h-4 text-[var(--cobalt)]" />
                <span>2. Choose Ensemble Silhouette</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(ENSEMBLE_DETAILS).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setEnsemble(key as any)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      ensemble === key
                        ? 'border-[var(--cobalt)] bg-[var(--cobalt-light)] shadow-sm'
                        : 'border-[var(--line)] bg-[var(--chalk)] hover:border-[var(--cobalt)]/40 text-[var(--ink)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold ${ensemble === key ? 'text-[var(--cobalt)]' : 'text-[var(--ink)]'}`}>
                        {val.name}
                      </span>
                      {ensemble === key && <Check className="w-3.5 h-3.5 text-[var(--cobalt)]" />}
                    </div>
                    <span className="text-[11px] text-[var(--muted)] block tabular-nums">
                      Production Window: {val.leadWeeks}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Yarn Palette Customization */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-[var(--cobalt)]" />
                <span>3. Custom Yarn Dye Palette</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-[var(--muted)] block mb-1.5 font-medium">Primary Ground Color</span>
                  <select
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
                  >
                    <option value="Royal Crimson (#8A1528)">Alaari Royal Crimson (#8A1528)</option>
                    <option value="Deep Indigo Navy (#152238)">Etu Deep Indigo Navy (#152238)</option>
                    <option value="Raw Silk Tan / Brown (#D9C3A3)">Sanyan Wild Raw Silk Tan (#D9C3A3)</option>
                    <option value="Onyx Midnight Black (#0A0A0A)">Onyx Midnight Black (#0A0A0A)</option>
                    <option value="Emerald Monarch Green (#0F382A)">Monarch Emerald Green (#0F382A)</option>
                    <option value="Pure Sovereign White (#FFFFFF)">Pure Sovereign White (#FFFFFF)</option>
                    <option value="Lavender Lilac Orchid (#7E5A8F)">Lilac / Orchid Violet (#7E5A8F)</option>
                    <option value="Custom Wedding Dye Match">Custom Wedding Fabric Swatch Dye</option>
                  </select>
                </div>

                <div>
                  <span className="text-xs text-[var(--muted)] block mb-1.5 font-medium">Accent / Metallic Stripe Yarn</span>
                  <select
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
                  >
                    <option value="Champagne Gold (#D4AF37)">Metallic Champagne Gold (#D4AF37)</option>
                    <option value="Polished Silver Lurex (#E2E8F0)">Polished Silver Lurex (#E2E8F0)</option>
                    <option value="Copper Rose Gold (#C87D55)">Copper Rose Gold (#C87D55)</option>
                    <option value="Cobalt Blue Highlights (#1E40AF)">Cobalt Blue Pinstripes (#1E40AF)</option>
                    <option value="Coral Peach Tones (#E27D60)">Coral Bead Peach Tone (#E27D60)</option>
                    <option value="Tone-on-Tone Monochromatic">Tone-on-Tone Monochromatic</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Embellishment & Detailing */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[var(--cobalt)]" />
                <span>4. Bullion Embroidery & Embellishment</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(EMBELLISHMENT_OPTIONS).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setEmbellishment(key as any)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      embellishment === key
                        ? 'border-[var(--cobalt)] bg-[var(--cobalt-light)] shadow-sm'
                        : 'border-[var(--line)] bg-[var(--chalk)] hover:border-[var(--cobalt)]/40 text-[var(--ink)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold ${embellishment === key ? 'text-[var(--cobalt)]' : 'text-[var(--ink)]'}`}>
                        {val.name}
                      </span>
                      {embellishment === key && <Check className="w-3.5 h-3.5 text-[var(--cobalt)]" />}
                    </div>
                    <span className="text-[11px] text-[var(--muted)] block">
                      {val.note}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tailoring & Add-ons */}
            <div className="pt-2 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-[var(--muted)] block mb-2 font-medium">Finishing State</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTailoringOption('custom-tailored')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer border ${
                      tailoringOption === 'custom-tailored'
                        ? 'bg-[var(--cobalt)] text-white border-[var(--cobalt)] font-bold'
                        : 'bg-[var(--chalk)] text-[var(--ink)] border-[var(--line)]'
                    }`}
                  >
                    Custom Tailored
                  </button>
                  <button
                    type="button"
                    onClick={() => setTailoringOption('fabric-raw-cut')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer border ${
                      tailoringOption === 'fabric-raw-cut'
                        ? 'bg-[var(--cobalt)] text-white border-[var(--cobalt)] font-bold'
                        : 'bg-[var(--chalk)] text-[var(--ink)] border-[var(--line)]'
                    }`}
                  >
                    Raw Loom Strips
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs text-[var(--muted)] block mb-2 font-medium">Headwear (Gele / Fila)</span>
                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-[var(--chalk)] border border-[var(--line)]">
                  <input
                    type="checkbox"
                    checked={headwearIncluded}
                    onChange={(e) => setHeadwearIncluded(e.target.checked)}
                    className="w-4 h-4 rounded text-[var(--cobalt)] accent-[var(--cobalt)]"
                  />
                  <span className="text-xs text-[var(--ink)]">Include Matching Auto-Gele or Fila</span>
                </label>
              </div>
            </div>

            {/* Client Notes & Target Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-[var(--muted)] block mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Chief Adeleke / Olori Mary"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded-lg px-3.5 py-2 text-xs text-[var(--ink)] placeholder:text-gray-400 focus:border-[var(--cobalt)] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-[var(--muted)] block mb-1">Target Event Date</label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded-lg px-3.5 py-2 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs text-[var(--muted)] block mb-1">Special Measurements / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Provide chest, agbada length, wedding color scheme, or delivery city..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded-lg px-3.5 py-2 text-xs text-[var(--ink)] placeholder:text-gray-400 focus:border-[var(--cobalt)] focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Specification & Live Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="atelier-summary bg-[var(--paper)] border border-[var(--line-strong)] rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--line)]">
                <h3 className="text-base font-bold text-[var(--ink)] font-heading">
                  Commission Specification
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--cobalt)] text-white">
                  Handloom
                </span>
              </div>

              {/* Sample Preview Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-[var(--line)] bg-[#e8e2d8]">
                <img
                  src={WEAVE_DETAILS[weaveType].defaultSample}
                  alt={WEAVE_DETAILS[weaveType].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                  <span className="text-[10px] font-bold text-[var(--saffron)] uppercase tracking-wider">
                    {WEAVE_DETAILS[weaveType].title}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {ENSEMBLE_DETAILS[ensemble].name}
                  </span>
                </div>
              </div>

              {/* Specification Attributes */}
              <div className="space-y-2.5 text-xs text-[var(--ink)] border-b border-[var(--line)] pb-4">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Weave Lineage:</span>
                  <span className="font-semibold">{WEAVE_DETAILS[weaveType].title.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Ground Yarn:</span>
                  <span className="font-semibold text-right max-w-[180px] truncate">{baseColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Accent / Metallic:</span>
                  <span className="font-semibold text-right max-w-[180px] truncate">{accentColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Embellishment:</span>
                  <span className="font-semibold text-right max-w-[180px] truncate">{EMBELLISHMENT_OPTIONS[embellishment].note}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Finishing:</span>
                  <span className="font-semibold">{tailoringOption === 'custom-tailored' ? 'Full Bespoke Tailored' : 'Raw Fabric Strips'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Headwear Included:</span>
                  <span className="font-semibold">{headwearIncluded ? 'Yes (Gele/Fila)' : 'Excluded'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Production Window:</span>
                  <span className="font-bold text-[var(--cobalt)] tabular-nums">{ENSEMBLE_DETAILS[ensemble].leadWeeks}</span>
                </div>
              </div>

              {/* Price on Request Banner */}
              <div className="py-4">
                <span className="text-xs text-[var(--muted)] block mb-0.5">Atelier Quotation:</span>
                <span className="text-xl font-bold text-[var(--cobalt)] uppercase tracking-wider font-royal block">
                  Price on Request
                </span>
                <span className="text-[11px] text-[var(--muted)] block mt-1">
                  Quotation customized to measurements, gold bullion density, and DHL destination.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-lg bg-[var(--cobalt)] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md hover:bg-[var(--cobalt-deep)] transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Spec to Jesutofunmi</span>
                </a>

                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={() => onOpenBooking(ENSEMBLE_DETAILS[ensemble].name)}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-[var(--cobalt)] hover:bg-[var(--cobalt-light)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Loom Consultation Slot</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleAddSpecificationToCart}
                  className="w-full py-2.5 px-4 rounded-lg border border-[var(--line-strong)] text-xs font-semibold text-[var(--ink)] hover:bg-[var(--chalk)] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[var(--cobalt)]" />
                  <span>Save Spec to Inquiry List</span>
                </button>

                {copiedNotification && (
                  <div className="p-2.5 rounded bg-[var(--cobalt-light)] border border-[var(--cobalt)]/30 text-xs text-[var(--cobalt)] text-center font-medium">
                    ✓ Specification added to your bespoke inquiry list!
                  </div>
                )}
              </div>
            </div>

            {/* Direct Workshop Notice */}
            <div className="p-4 rounded-xl bg-[var(--paper)] border border-[var(--line-strong)] text-xs text-[var(--muted)] space-y-1 shadow-sm">
              <span className="font-bold text-[var(--ink)] block">📍 Master Artisan Workshop</span>
              <span>Loom facilities located in Ibadan & Lagos, Nigeria. Worldwide express courier shipping with live video measurement consultations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

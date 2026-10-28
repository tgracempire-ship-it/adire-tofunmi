import React, { useState } from 'react';
import { ChevronDown, Droplets, Wind, Sparkles } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

export const CareAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I take measurements for an Agbada or Bridal ensemble if I am outside Nigeria?',
      a: 'Jesutofunmi provides a guided video measurement consultation over WhatsApp. You can also visit any local alterations tailor in the UK, US, or Canada with our standard measurement form (Chest, Shoulder-to-Shoulder, Agbada Length, Sleeve Length, Waist, Trouser Outseam, and Head Circumference for the Fila or Gele).'
    },
    {
      q: 'How long in advance should we place an order for a traditional wedding?',
      a: 'We strongly recommend 6 to 10 weeks before your event to allow adequate time for warp setting, handloom weaving, fine bullion embroidery, bead embellishment, and courier delivery. For urgent timelines, we have limited rush slots (14-day turnaround).'
    },
    {
      q: 'Can you match the groom’s Agbada and the bride’s Gele to our exact wedding color scheme?',
      a: 'Yes! We specialize in custom yarn dyeing. You can send us fabric swatches, Pantone color codes, or photos of your decor and bridesmaids’ dresses, and Jesutofunmi will dye test yarn batches for your approval before commencing full production.'
    },
    {
      q: 'How does international shipping work for clients in the UK, US, or Europe?',
      a: 'We ship worldwide via DHL Express or FedEx International Priority with live tracking. Delivery typically arrives within 3 to 5 business days after dispatch. Garments are carefully steamed, folded with acid-free tissue paper, and secured in waterproof luxury packaging.'
    },
    {
      q: 'What is the minimum quantity for Aso Ebi bulk orders?',
      a: 'Our minimum for custom-dyed Aso Ebi is 10 bundles. We offer volume rebates starting at 25 bundles (5% off), 50 bundles (10% off), and 100+ bundles (15% wholesale discount).'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#070A0F] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Fabric Care Guide */}
          <div className="lg:col-span-5 bg-[#0D1422] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white font-heading">
              Preserving Your <span className="text-gold font-royal">Heirloom Aso Oke</span>
            </h3>

            <p className="text-xs sm:text-sm text-[#A0AEC0] leading-relaxed">
              Authentic handwoven Aso Oke is created to become a family heirloom passed from mother to daughter, and father to son. Follow these essential care guidelines:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070A0F] border border-[#243044]">
                <Droplets className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Professional Dry Clean Only</h4>
                  <p className="text-[11px] text-[#9CA3AF]">
                    Never machine wash or soak in water. Handwoven natural silk and metallic lurex threads require gentle hydrocarbon dry cleaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070A0F] border border-[#243044]">
                <Wind className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Store in Breathable Cotton Bags</h4>
                  <p className="text-[11px] text-[#9CA3AF]">
                    Never store in sealed plastic bags for extended periods, as natural fibers need to breathe. Roll or fold neatly with acid-free tissue paper between folds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070A0F] border border-[#243044]">
                <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Press on Reverse Side with Warm Iron</h4>
                  <p className="text-[11px] text-[#9CA3AF]">
                    Use a pressing cloth or iron on the reverse side on medium heat to protect metallic threads, raised embroidery, and hand-strung beadwork.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C2638]">
              <a
                href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20have%20a%20question%20regarding%20Aso%20Oke%20care%20and%20orders`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl gold-button-outline text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Ask Jesutofunmi a Specific Question</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FDFBF7] font-heading">
                Frequently Asked <span className="text-gold font-royal">Questions</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2">
                Everything you need to know about bespoke commissions, international courier delivery, and custom yarn dyeing.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#243044] bg-[#0D1422] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#121A2A] transition-colors"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="text-sm font-bold text-white font-heading">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold transition-transform duration-300 flex-shrink-0 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="p-4 pt-1 text-xs text-[#CBD5E1] leading-relaxed border-t border-[#1C2638] bg-[#070A0F]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

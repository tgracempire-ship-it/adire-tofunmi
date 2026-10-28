import React, { useState } from 'react';
import { WEAVING_PROCESS_STEPS } from '../data/weddingPackages';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Play, CheckCircle2 } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="story" className="py-20 bg-[#070A0F] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Video & Loom Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl bg-black">
              {isPlayingVideo ? (
                <video
                  src="/images/video-loom-weaving-1.mp4"
                  controls
                  autoPlay
                  className="w-full aspect-[4/5] sm:aspect-square object-cover"
                />
              ) : (
                <div className="relative aspect-[4/5] sm:aspect-square">
                  <img
                    src="/images/fabric-chocolate-roll.jpg"
                    alt="Authentic traditional Yoruba loom weaving in progress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#8A1528] text-white text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/40">
                        Live Loom Craft
                      </span>
                    </div>

                    <div className="text-center my-auto">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#070A0F] flex items-center justify-center mx-auto shadow-2xl hover:scale-105 transition-transform cursor-pointer"
                        aria-label="Play loom weaving video"
                      >
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </button>
                      <span className="text-xs font-semibold text-[#FDFBF7] block mt-3 drop-shadow">
                        Watch Jesutofunmi Hand-Weave on the Wooden Loom
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#070A0F]/85 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-[#CBD5E1]">
                      📍 Traditional Wooden Narrow-Loom Workshop • Ibadan & Lagos, Nigeria
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Loom Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0D1422] border border-[#D4AF37] rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-lg">
                ✨
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Centuries of Lineage</span>
                <span className="text-[10px] text-[#A0AEC0]">Preserving sacred Yoruba weaving traditions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Artisan Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading leading-tight">
              Preserving Ancient Yoruba Weaving, <br />
              <span className="text-gold font-royal">Stitched for Modern Royalty.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              At <strong>Threads of Heritage</strong>, master artisan <strong>Jesutofunmi</strong> breathes soul into every yard of cloth. While modern industrial factories mass-produce synthetic imitations, we stay true to the sacred craft: pedal-driven narrow looms, natural fiber preparation, and hand-joined strips that possess the signature heavy drape of authentic Nigerian aristocracy.
            </p>

            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Whether it is the fiery crimson of <em>Alaari</em> worn by grooms, the earthy prestige of <em>Sanyan</em> wild silk passed down across generations, or metallic lurex woven for international brides in the UK and US, every commission is created with prayer, devotion, and uncompromising precision.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0D1422] border border-[#243044]">
                <h4 className="text-xs font-bold text-gold-light flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Dye-Lot Consistency</span>
                </h4>
                <p className="text-[11px] text-[#9CA3AF]">
                  Small batch kettle dyeing ensures matching shades for up to 150 Aso Ebi guests.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1422] border border-[#243044]">
                <h4 className="text-xs font-bold text-gold-light flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Handcrafted Bullion Work</span>
                </h4>
                <p className="text-[11px] text-[#9CA3AF]">
                  Heavy gold thread chest motifs and scalloped necklines tailored to your measurements.
                </p>
              </div>
            </div>

            {/* Artisan Direct Contact Signature */}
            <div className="pt-4 flex items-center gap-4 border-t border-[#1C2638]">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/50 bg-black flex-shrink-0">
                <img
                  src="/images/brand-flyer.jpg"
                  alt="Jesutofunmi Master Weaver"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-white block font-heading">
                  {VENDOR_DETAILS.name}
                </span>
                <span className="text-xs text-gold">
                  Master Weaver & Creative Director
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Ancestral Weaving Process */}
        <div className="mt-20 pt-16 border-t border-[#1C2638]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              The 4-Step Ancestral <span className="text-gold font-royal">Loom Journey</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2">
              From raw cocoons and dyed cotton skeins to the crowned garment worn on your wedding day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WEAVING_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="luxury-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#141C2B] border border-[#D4AF37]/40 text-gold flex items-center justify-center font-bold text-sm mb-4 tabular-nums">
                    0{step.step}
                  </div>
                  <h4 className="text-base font-bold text-white font-heading mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-gold pt-3 border-t border-[#243044] tabular-nums">
                  Duration: {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

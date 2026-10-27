import React, { useState } from 'react';
import { WEAVING_PROCESS_STEPS } from '../data/weddingPackages';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { Play, Sparkles, Award, Shield, CheckCircle2 } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="story" className="py-20 bg-[#0C111C] relative border-b border-[#D4AF37]/20">
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
                        className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#0A0E17] flex items-center justify-center mx-auto shadow-2xl shadow-[#D4AF37]/40 hover:scale-110 transition-transform cursor-pointer"
                        aria-label="Play loom weaving video"
                      >
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </button>
                      <span className="text-xs font-semibold text-[#FDFBF7] block mt-3 drop-shadow">
                        Watch Jesutofunmi Hand-Weave on the Wooden Loom
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-[#CBD5E1]">
                      📍 Traditional Wooden Narrow-Loom Workshop • Ibadan & Lagos, Nigeria
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Loom Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#161F2E] border border-[#D4AF37] rounded-xl p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 max-w-xs">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182234] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet the Master Artisan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading leading-tight">
              Preserving Ancient Yoruba Weaving, <br />
              <span className="gold-gradient-text font-royal">Stitched for Modern Royalty.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              At <strong>Threads of Heritage</strong>, master artisan <strong>Jesutofunmi</strong> breathes soul into every yard of cloth. While modern factories mass-produce synthetic imitations, we stay true to the sacred craft: pedal-driven narrow looms, natural fiber preparation, and hand-joined strips that possess the signature heavy drape of authentic Nigerian aristocracy.
            </p>

            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Whether it is the fiery crimson of <em>Alaari</em> worn by grooms, the earthy prestige of <em>Sanyan</em> wild silk passed down across generations, or metallic lurex woven for international brides in the UK and US, every commission is created with prayer, devotion, and uncompromising precision.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-3.5 rounded-xl bg-[#131B29] border border-[#243044]">
                <h4 className="text-xs font-bold text-[#F4E4BA] flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Dye-Lot Consistency</span>
                </h4>
                <p className="text-[11px] text-[#9CA3AF]">
                  Small batch kettle dyeing ensures matching shades for up to 150 Aso Ebi guests.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131B29] border border-[#243044]">
                <h4 className="text-xs font-bold text-[#F4E4BA] flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Heirloom Longevity</span>
                </h4>
                <p className="text-[11px] text-[#9CA3AF]">
                  Heavy-density warp threads that maintain their crisp structural drape for decades.
                </p>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20would%20like%20to%20learn%20more%20about%20your%20weaving%20process`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gold-button text-xs font-bold cursor-pointer"
              >
                <span>Consult with Jesutofunmi ({VENDOR_DETAILS.phone})</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="mt-24 pt-16 border-t border-[#D4AF37]/20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
              From Raw Cotton to Matrimonial Splendor
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              The 4 Sacred Stages of Our Weaving Loom
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {WEAVING_PROCESS_STEPS.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#111724] border border-[#243044] rounded-2xl p-6 relative group hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="text-3xl font-black text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors font-royal mb-3">
                  {s.step}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 font-heading">
                  {s.title}
                </h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

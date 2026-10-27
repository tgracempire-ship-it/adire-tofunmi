import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20am%20browsing%20Threads%20of%20Heritage%20and%20would%20like%20to%20inquire%20about%20ordering%20Aso%20Oke`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col bg-[#131B29] border border-[#D4AF37]/40 rounded-xl p-3.5 shadow-2xl max-w-xs text-xs text-white relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#A0AEC0] hover:text-white"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-bold text-[#F4E4BA]">Jesutofunmi is Online</span>
          </div>
          <p className="text-[11px] text-[#CBD5E1] leading-tight">
            Have questions about wedding colors or yardage? Chat directly on WhatsApp!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-2xl shadow-green-600/40 hover:scale-110 active:scale-95 transition-all cursor-pointer relative group"
        aria-label="Chat directly on WhatsApp with Jesutofunmi"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#8A1528] border-2 border-white rounded-full" />
      </a>
    </div>
  );
};

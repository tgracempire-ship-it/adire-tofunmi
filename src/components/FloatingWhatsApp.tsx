import React, { useState } from 'react';
import { MessageCircle, X, Calendar } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface FloatingWhatsAppProps {
  onOpenBooking?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20am%20browsing%20Threads%20of%20Heritage%20and%20would%20like%20to%20inquire%20about%20ordering%20Aso%20Oke`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col bg-[var(--paper)] border border-[var(--line-strong)] rounded-xl p-3.5 shadow-xl max-w-xs text-xs text-[var(--ink)] relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-bold text-[var(--cobalt)]">Jesutofunmi is Online</span>
          </div>
          <p className="text-[11px] text-[var(--muted)] leading-tight mb-2.5">
            Planning a traditional wedding or royal celebration? Reserve your loom slot or chat directly on WhatsApp.
          </p>

          <div className="flex items-center gap-2">
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="flex-1 py-1.5 px-2.5 rounded bg-[var(--cobalt)] text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-[var(--cobalt-deep)] transition-colors cursor-pointer"
              >
                <Calendar className="w-3 h-3" />
                <span>Book Slot</span>
              </button>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-2.5 rounded bg-[#25D366] text-[#070A0F] text-[11px] font-bold flex items-center justify-center gap-1 hover:brightness-105 transition-all cursor-pointer"
            >
              <MessageCircle className="w-3 h-3" />
              <span>Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Trigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-[#070A0F] flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative group"
        aria-label="Chat directly on WhatsApp with Jesutofunmi"
      >
        <MessageCircle className="w-7 h-7 fill-[#070A0F]" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[var(--crimson)] border-2 border-white rounded-full" />
      </a>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { X, Calendar, MessageCircle, Sparkles, Check, Phone, MapPin, User, Scissors } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOccasion?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  initialOccasion = 'Bridal Traditional Wedding'
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [occasion, setOccasion] = useState(initialOccasion);
  const [weavePreference, setWeavePreference] = useState('Alaari (Royal Crimson)');
  const [eventDate, setEventDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [location, setLocation] = useState('Lagos, Nigeria');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialOccasion) {
      setOccasion(initialOccasion);
    }
  }, [initialOccasion]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!isInDialog) {
      onClose();
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `👑 *THREADS OF HERITAGE - LOOM CONSULTATION BOOKING*
----------------------------------------
*Artisan:* Jesutofunmi (@Threads of Heritage)

*Client Name:* ${clientName || 'Valued Client'}
*Phone / WhatsApp:* ${clientPhone || 'Not provided'}
*Occasion / Attire:* ${occasion}
*Preferred Weave:* ${weavePreference}
*Event Date:* ${eventDate || 'To be confirmed'}
*Delivery Location:* ${location}

*Notes / Color Scheme:*
${notes || 'Standard wedding consultation requested.'}
----------------------------------------
Hello Jesutofunmi, I would like to reserve a loom consultation slot for our upcoming event. Please let me know your earliest availability. Thank you!`;

    return `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const occasions = [
    'Bridal Traditional Wedding',
    'Royal Groom Grand Agbada',
    'Oba & Olori Couple Twinning',
    'Aso Ebi Group (10–100+ sets)',
    'Milestone Celebration / Baby Wrap',
    'Raw Loom Fabric Rolls'
  ];

  const weaves = [
    'Alaari (Royal Crimson)',
    'Sanyan (Wild Raw Silk)',
    'Etu (Deep Indigo Navy)',
    'Metallic Lurex (Gold/Silver)',
    'Beaded & Stone Haute Couture'
  ];

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onCancel={onClose}
      aria-labelledby="booking-modal-title"
      className="m-auto rounded-none sm:rounded-xl bg-[#fffdf9] border border-[var(--ink)]/20 text-[var(--ink)] shadow-2xl max-w-xl w-full p-0 overflow-hidden outline-none backdrop:bg-[rgba(5,38,100,0.7)] backdrop:backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="bg-[var(--cobalt)] text-[var(--chalk)] p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--saffron)] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Loom Reservation</span>
            </div>
            <h2 id="booking-modal-title" className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              Book a Private Consultation
            </h2>
            <p className="text-xs text-[#dfe8ff] mt-1">
              Reserve your loom production slot with Master Artisan <strong>{VENDOR_DETAILS.name}</strong>.
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* Occasion Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-2">
              1. What is the occasion?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {occasions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setOccasion(item)}
                  className={`p-2.5 text-left text-xs font-semibold rounded transition-all cursor-pointer border ${
                    occasion === item
                      ? 'border-[var(--cobalt)] bg-[var(--cobalt)] text-white shadow-sm'
                      : 'border-[var(--line)] bg-[var(--chalk)] text-[var(--ink)] hover:border-[var(--cobalt)]/40'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Weave Lineage */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-2">
              2. Preferred Traditional Weave
            </label>
            <select
              value={weavePreference}
              onChange={(e) => setWeavePreference(e.target.value)}
              className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded p-2.5 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
            >
              {weaves.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          {/* Date & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--cobalt)]" />
                <span>Target Event Date</span>
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded p-2.5 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--cobalt)]" />
                <span>Delivery Destination</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded p-2.5 text-xs text-[var(--ink)] focus:border-[var(--cobalt)] focus:outline-none"
              >
                <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                <option value="Ibadan / Oyo State, Nigeria">Ibadan / Oyo State</option>
                <option value="Abuja / Other State, Nigeria">Abuja / Other Nigerian State</option>
                <option value="United Kingdom (DHL Express)">United Kingdom (DHL Express)</option>
                <option value="United States (DHL Express)">United States (DHL Express)</option>
                <option value="Canada (DHL Express)">Canada (DHL Express)</option>
                <option value="Europe / Worldwide">Europe / Worldwide</option>
              </select>
            </div>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[var(--cobalt)]" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Chief Adeleke / Olori Mary"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded p-2.5 text-xs text-[var(--ink)] placeholder:text-gray-400 focus:border-[var(--cobalt)] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[var(--cobalt)]" />
                <span>WhatsApp Phone</span>
              </label>
              <input
                type="tel"
                placeholder="+234 or +44 / +1"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded p-2.5 text-xs text-[var(--ink)] placeholder:text-gray-400 focus:border-[var(--cobalt)] focus:outline-none"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-1.5">
              Colors / Measurements / Special Requests
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Wedding colors are deep wine and gold. Need groom 4-piece and bride gele."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[var(--chalk)] border border-[var(--line)] rounded p-2.5 text-xs text-[var(--ink)] placeholder:text-gray-400 focus:border-[var(--cobalt)] focus:outline-none resize-none"
            />
          </div>

          {/* Booking CTA */}
          <div className="pt-2 border-t border-[var(--line)] space-y-2.5">
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded bg-[#25D366] text-[#070A0F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md cursor-pointer text-center"
            >
              <MessageCircle className="w-4 h-4 fill-[#070A0F]" />
              <span>Send Reservation to Jesutofunmi on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-[11px] text-[var(--muted)] px-1">
              <span>⚡ Direct artisan response within hours</span>
              <a
                href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20would%20like%20to%20book%20a%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[var(--cobalt)] font-semibold hover:text-[var(--ink)]"
              >
                Skip form & chat directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

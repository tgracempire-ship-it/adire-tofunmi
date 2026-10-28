import React, { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, Calendar, MessageCircle } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface NavbarProps {
  onOpenCustomizer: () => void;
  onOpenAsoEbi: () => void;
  orderCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCustomizer,
  onOpenAsoEbi,
  orderCount,
  onOpenCart,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const links = [
    { label: 'Lookbook', href: '#collection' },
    { label: 'Bespoke Loom', href: '#loom-builder', action: onOpenCustomizer },
    { label: 'Our Story', href: '#story' },
  ];

  const closeAndRun = (action?: () => void) => {
    action?.();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#fffdf9]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Emblem & Name */}
        <a href="#" className="group flex items-center gap-3.5" aria-label="Threads of Heritage home">
          <span className="brand-mark" aria-hidden="true">TH</span>
          <span className="leading-tight">
            <span className="font-royal block text-base sm:text-lg uppercase text-[var(--ink)] tracking-wider">
              Threads of Heritage
            </span>
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[var(--cobalt)]">
              Bespoke Yoruba Aso Oke · Jesutofunmi
            </span>
          </span>
        </a>

        {/* Desktop Primary Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.action}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Inquiry Bag & Prominent Quick Booking */}
        <div className="flex items-center gap-3">
          {/* Inquiry List Drawer Button */}
          <button
            onClick={onOpenCart}
            className="inquiry-button"
            aria-label={`Open inquiry bag with ${orderCount} items`}
          >
            <ShoppingBag className="h-4 w-4 text-[var(--cobalt)]" />
            <span className="hidden sm:inline">Inquiry</span>
            {orderCount > 0 && (
              <span className="tabular-nums px-1.5 py-0.2 bg-[var(--coral)] text-white text-[10px] font-bold rounded-full">
                {orderCount}
              </span>
            )}
          </button>

          {/* Frictionless Consultation Booking Action */}
          <button
            onClick={onOpenBooking}
            className="book-consultation-btn"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--line-strong)] text-[var(--ink)] lg:hidden cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[76px] h-[calc(100dvh-76px)] bg-[#fffdf9] border-b border-[var(--line)] px-6 py-8 text-[var(--ink)] overflow-y-auto lg:hidden">
          <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => closeAndRun(link.action)}
                className="flex items-center justify-between border-b border-[var(--line)] py-4 text-base font-semibold hover:text-[var(--cobalt)]"
              >
                <span className="font-heading text-xl uppercase tracking-wide">{link.label}</span>
                <span className="text-xs text-[var(--muted)] tabular-nums">0{index + 1}</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => closeAndRun(onOpenBooking)}
              className="w-full flex items-center justify-center gap-2 bg-[var(--cobalt)] py-4 px-5 rounded-lg font-bold uppercase tracking-wider text-white shadow-md cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Loom Consultation</span>
            </button>

            <a
              href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20would%20like%20to%20order%20Aso%20Oke`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] py-3.5 px-5 rounded-lg font-bold uppercase tracking-wider text-[#070A0F] shadow-sm text-center"
            >
              <MessageCircle className="h-4 w-4 fill-[#070A0F]" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

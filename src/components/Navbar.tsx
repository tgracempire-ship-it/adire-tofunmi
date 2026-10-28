import React, { useState } from 'react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { MessageCircle, Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenCustomizer: () => void;
  onOpenAsoEbi: () => void;
  orderCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCustomizer,
  onOpenAsoEbi,
  orderCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Lookbook', href: '#collection' },
    { label: 'Bespoke Loom Simulator', href: '#loom-builder', onClick: onOpenCustomizer },
    { label: 'Matrimonial Suites', href: '#wedding-packages' },
    { label: 'Aso Ebi Bulk', href: '#aso-ebi-calc', onClick: onOpenAsoEbi },
    { label: 'Artisan Heritage', href: '#story' },
    { label: 'Care & FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#070A0F]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      {/* Top Banner Notice */}
      <div className="bg-[#500B17] text-[#F7F2E8] py-2 px-4 text-xs font-medium text-center tracking-wide flex items-center justify-center gap-2 border-b border-[#D4AF37]/25">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
        <span>Bespoke Handwoven Aso Oke by Master Artisan <strong>{VENDOR_DETAILS.name}</strong> • Express Global Courier via DHL & FedEx</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Emblem & Monogram */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-[#0F1624] border border-[#D4AF37]/35 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-colors">
              {/* Gold Loom Shuttle Emblem */}
              <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 19L8 5L12 11L16 5L20 19" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 15h12" strokeLinecap="round" />
                <circle cx="12" cy="7" r="1.5" fill="#D4AF37" />
              </svg>
            </div>
            <div>
              <span className="font-royal text-lg sm:text-xl font-bold tracking-wider text-[#FDFBF7] block leading-tight group-hover:text-[#D4AF37] transition-colors">
                THREADS OF HERITAGE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-semibold">
                Purveyor of Luxurious Aso Oke
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                className="text-xs font-semibold uppercase tracking-wider text-[#D1D5DB] hover:text-[#D4AF37] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: WhatsApp & Inquiry List */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Inquiry Drawer Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-[#0D1422] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#151D2C] hover:border-[#D4AF37]/60 transition-all cursor-pointer"
              title="View your bespoke inquiry specification"
              aria-label="View Inquiry List"
            >
              <ShoppingBag className="w-5 h-5" />
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8A1528] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-[#D4AF37] tabular-nums">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20am%20inquiring%20about%20ordering%20Threads%20of%20Heritage%20Aso%20Oke`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-[#070A0F] text-xs font-bold hover:brightness-105 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-[#070A0F]" />
              <span>Direct WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-xl bg-[#0D1422] border border-[#D4AF37]/30 text-[#D4AF37]"
              aria-label="View Inquiry List"
            >
              <ShoppingBag className="w-5 h-5" />
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8A1528] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                  {orderCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0D1422] border border-[#D4AF37]/30 text-[#FDFBF7]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A0F] border-b border-[#D4AF37]/25 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (link.onClick) link.onClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#E5E7EB] hover:bg-[#121A2A] hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#1C2638] flex flex-col gap-2">
            <a
              href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20am%20inquiring%20about%20commissioning%20Aso%20Oke%20from%20Threads%20of%20Heritage`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-[#070A0F] text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-[#070A0F]" />
              <span>Chat with Artisan Jesutofunmi</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

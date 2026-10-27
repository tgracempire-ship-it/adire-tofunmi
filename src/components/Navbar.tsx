import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { Currency } from '../types';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { MessageCircle, Menu, X, Sparkles, ShoppingBag } from 'lucide-react';

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
  const { currency, setCurrency } = useCurrency();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currencies: Currency[] = ['NGN', 'USD', 'GBP'];

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Custom Loom Builder', href: '#loom-builder', onClick: onOpenCustomizer },
    { label: 'Wedding Packages', href: '#wedding-packages' },
    { label: 'Aso Ebi Calculator', href: '#aso-ebi-calc', onClick: onOpenAsoEbi },
    { label: 'Artisan Story', href: '#story' },
    { label: 'Care & FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0E17]/90 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#500B17] via-[#8A1528] to-[#500B17] text-[#F7F2E8] py-1.5 px-4 text-xs font-medium text-center tracking-wide flex items-center justify-center gap-2 border-b border-[#D4AF37]/30">
        <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
        <span>Bespoke Handwoven Aso Oke by Master Weaver <strong>Jesutofunmi</strong> • Worldwide Delivery via DHL / FedEx</span>
        <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1C2638] to-[#0E1624] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-all">
              {/* Gold Loom Shuttle Emblem */}
              <svg className="w-7 h-7 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 19L8 5L12 11L16 5L20 19" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 15h12" strokeLinecap="round" />
                <circle cx="12" cy="7" r="1.5" fill="#D4AF37" />
              </svg>
            </div>
            <div>
              <span className="font-royal text-xl sm:text-2xl font-bold tracking-wider text-[#FDFBF7] block leading-tight group-hover:text-[#D4AF37] transition-colors">
                THREADS OF HERITAGE
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] block font-medium">
                Purveyor of Luxurious Aso Oke
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                className="text-sm font-medium text-[#D1D5DB] hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Currency Selector, WhatsApp & Cart */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="flex items-center bg-[#131B29] border border-[#D4AF37]/30 rounded-lg p-0.5 text-xs font-medium">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    currency === curr
                      ? 'bg-[#D4AF37] text-[#0A0E17] font-bold shadow-sm'
                      : 'text-[#A0AEC0] hover:text-[#FFF]'
                  }`}
                  title={`Switch currency to ${curr}`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Quick Order Wishlist / Inquiry Drawer */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-[#131B29] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#1C2638] transition-all"
              title="View your custom inquiry list"
              aria-label="View Inquiry List"
            >
              <ShoppingBag className="w-5 h-5" />
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8A1528] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-[#D4AF37]">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20am%20inquiring%20about%20ordering%20Threads%20of%20Heritage%20Aso%20Oke`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg bg-[#131B29] border border-[#D4AF37]/30 text-[#D4AF37]"
              aria-label="View Inquiry List"
            >
              <ShoppingBag className="w-5 h-5" />
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8A1528] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {orderCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#131B29] border border-[#D4AF37]/30 text-[#FDFBF7]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D131F] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#232E42]">
            <span className="text-xs text-[#A0AEC0]">Select Currency:</span>
            <div className="flex items-center bg-[#131B29] border border-[#D4AF37]/30 rounded-lg p-0.5 text-xs">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-3 py-1 rounded-md ${
                    currency === curr
                      ? 'bg-[#D4AF37] text-[#0A0E17] font-bold'
                      : 'text-[#A0AEC0]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (link.onClick) link.onClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#EDE8DF] hover:bg-[#182234] hover:text-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20am%20inquiring%20about%20ordering%20Threads%20of%20Heritage%20Aso%20Oke`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat with Jesutofunmi ({VENDOR_DETAILS.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

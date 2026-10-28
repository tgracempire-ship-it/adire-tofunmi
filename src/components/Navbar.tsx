import React, { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCustomizer: () => void;
  onOpenAsoEbi: () => void;
  orderCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomizer, onOpenAsoEbi, orderCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const links = [
    { label: 'Atelier', href: '#loom-builder', action: onOpenCustomizer },
    { label: 'Collection', href: '#collection' },
    { label: 'Weddings', href: '#wedding-packages' },
    { label: 'Aso Ebi', href: '#aso-ebi-calc', action: onOpenAsoEbi },
    { label: 'Our Story', href: '#story' },
  ];

  const closeAndRun = (action?: () => void) => {
    action?.();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ink)]/15 bg-[var(--chalk)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="Threads of Heritage home">
          <span className="brand-mark" aria-hidden="true">TH</span>
          <span className="leading-none">
            <span className="font-display block text-[1.05rem] uppercase tracking-[-0.02em] text-[var(--ink)] sm:text-xl">Threads of Heritage</span>
            <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.24em] text-[var(--cobalt)]">Aso Oke Atelier · Nigeria</span>
          </span>
        </a>

        <nav className="hidden" aria-label="Primary navigation">
          {links.map((link) => <a key={link.label} href={link.href} onClick={link.action} className="nav-link">{link.label}</a>)}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onOpenCart} className="inquiry-button" aria-label={`Open inquiry bag with ${orderCount} items`}>
            <ShoppingBag className="h-4 w-4" /><span className="hidden sm:inline">Inquiry</span><span className="tabular-nums">{orderCount}</span>
          </button>
          <a href="#loom-builder" onClick={onOpenCustomizer} className="hidden items-center gap-2 bg-[var(--ink)] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--chalk)] transition-colors hover:bg-[var(--cobalt)] sm:flex">
            Begin <ArrowUpRight className="h-4 w-4" />
          </a>
          <button onClick={() => setMobileMenuOpen((open) => !open)} className="grid h-11 w-11 place-items-center border border-[var(--ink)]/20 lg:hidden" aria-expanded={mobileMenuOpen} aria-label="Toggle navigation">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] bg-[var(--cobalt)] px-6 py-10 text-[var(--chalk)] lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a key={link.label} href={link.href} onClick={() => closeAndRun(link.action)} className="flex items-baseline justify-between border-b border-white/25 py-5">
                <span className="font-display text-4xl uppercase">{link.label}</span><span className="text-xs tabular-nums">0{index + 1}</span>
              </a>
            ))}
          </nav>
          <button onClick={() => closeAndRun(onOpenCustomizer)} className="mt-8 flex w-full items-center justify-between bg-[var(--saffron)] p-5 font-bold uppercase tracking-[0.12em] text-[var(--ink)]">
            Build your Aso Oke <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </header>
  );
};

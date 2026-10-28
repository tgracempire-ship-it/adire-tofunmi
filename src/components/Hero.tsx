import React from 'react';
import { ArrowDownRight, ArrowRight, Globe2, Timer, Hand, Calendar, MessageCircle } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface HeroProps {
  onOpenCustomizer: () => void;
  onExploreCollection: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCustomizer,
  onExploreCollection,
  onOpenBooking
}) => (
  <section className="oriki-hero" aria-labelledby="hero-title">
    <div className="oriki-grid">
      {/* Intro Rail Column */}
      <div className="oriki-intro">
        <div>
          <p className="font-heading text-3xl uppercase leading-[1.05] sm:text-4xl lg:text-[2.6rem] text-[var(--ink)]">
            People.<br />
            Cloth.<br />
            Moments<br />
            that endure.
          </p>

          <p className="max-w-[18rem] text-xs sm:text-sm leading-relaxed text-[var(--muted)] mt-4">
            Bespoke Yoruba Aso Oke, handwoven strip by strip on traditional narrow looms for weddings, royal grooms, and milestone family celebrations.
          </p>
        </div>

        <div className="hero-rail-nav py-4" aria-label="Atelier sections">
          <a href="#loom-builder">Atelier Simulator</a>
          <a href="#collection">Heirloom Lookbook</a>
          <a href="#wedding-packages">Wedding Suites</a>
          <a href="#aso-ebi-calc">Aso Ebi Bulk</a>
          <a href="#story">Artisan Story</a>
        </div>

        <div className="space-y-2 pt-2">
          <button
            onClick={onOpenBooking}
            className="text-link text-xs"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Book Consultation Slot</span>
          </button>

          <div>
            <button
              onClick={onExploreCollection}
              className="text-link text-xs text-[var(--muted)] hover:text-[var(--ink)]"
            >
              <span>View Lookbook Collection</span>
              <ArrowDownRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Real Plate 1: Royal Groom in Alaari Agbada */}
      <figure className="oriki-photo oriki-groom">
        <img
          src="/assets/plates/groom-photo.webp"
          alt="Royal groom wearing a crimson handwoven Alaari Aso Oke ensemble with coral beads"
        />
        <figcaption>Royal Groom · Alaari Crimson</figcaption>
      </figure>

      {/* Real Plate 2: Bride in Shimmering Gele */}
      <figure className="oriki-photo oriki-bride">
        <img
          src="/assets/plates/bride-photo.webp"
          alt="Bride wearing a luxury handwoven ensemble with sculpted metallic Gele"
        />
        <figcaption>Bridal Suite · Sculpted Gele</figcaption>
      </figure>

      {/* Main Statement Banner: Cobalt & Deep Blue */}
      <div className="oriki-statement">
        <div className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--saffron)] mb-3">
          Master Artisan Jesutofunmi
        </div>
        <h1 id="hero-title">
          Dress the day your family will retell.
        </h1>
        <p>
          Unbroken ancestral mastery woven on authentic wooden looms. From royal crimson Alaari to wild-silk Sanyan and deep indigo Etu.
        </p>
      </div>

      {/* Action / Booking Column */}
      <div className="oriki-action">
        <div className="flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--ink)]">
          <span>Lagos & Ibadan</span>
          <span>Worldwide Courier</span>
        </div>

        <div className="oriki-action__buttons space-y-3">
          <button
            onClick={onOpenBooking}
            className="hero-primary"
          >
            <span>Book Consultation</span>
            <Calendar className="h-4 w-4" />
          </button>

          <button
            onClick={onOpenCustomizer}
            className="hero-secondary"
          >
            <span>Build Your Aso Oke</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href={`https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=Hello%20Jesutofunmi,%20I%20would%20like%20to%20order%20bespoke%20Aso%20Oke`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded text-[11px] font-bold bg-[#25D366] text-[#070A0F] shadow-sm hover:brightness-105 transition-all text-center"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-[#070A0F]" />
            <span>Chat: {VENDOR_DETAILS.phone}</span>
          </a>
        </div>

        <div className="oriki-swatch" aria-hidden="true">
          <img src="/assets/plates/tassel-photo.webp" alt="Handcrafted Aso Oke tassel" />
        </div>
      </div>
    </div>

    {/* Provenance Proof Band */}
    <div className="proof-band">
      <span><Hand className="h-4 w-4 text-[var(--coral)]" /> 100% Handloom by Jesutofunmi</span>
      <span><Timer className="h-4 w-4 text-[var(--coral)]" /> 2–4 Wks Lead Time (Rush Slots Open)</span>
      <span><Globe2 className="h-4 w-4 text-[var(--coral)]" /> DHL Express to UK, US & Nationwide</span>
    </div>

    {/* The 4-Step Process Strip */}
    <div className="atelier-path">
      <div className="atelier-path__heading">
        <span>The Atelier Path</span>
        <span>From first thread to crowned wedding fitting</span>
      </div>

      <div className="atelier-step">
        <strong>1. Choose Weave Lineage</strong>
        <p>Alaari crimson, Sanyan wild silk, Etu indigo, or metallic lurex.</p>
        <button onClick={onOpenCustomizer}>
          <span>Explore Weaves</span>
          <ArrowRight />
        </button>
      </div>

      <img src="/assets/plates/step-one-photo.webp" alt="Close detail of woven Aso Oke cloth" />

      <div className="atelier-step">
        <strong>2. Shape Your Silhouette</strong>
        <p>Groom Agbada 4-piece, bridal Iro & Buba, or matching couple suite.</p>
        <button onClick={onOpenCustomizer}>
          <span>Open Customizer</span>
          <ArrowRight />
        </button>
      </div>

      <img src="/assets/plates/step-two-photo.webp" alt="Hands working at a traditional loom" />

      <div className="atelier-step">
        <strong>3. Reserve Loom Slot</strong>
        <p>Share your event date and color scheme with Jesutofunmi for quotation.</p>
        <button onClick={onOpenBooking}>
          <span>Book Consultation</span>
          <ArrowRight />
        </button>
      </div>

      <img src="/assets/plates/step-three-photo.webp" alt="Traditional narrow loom weaving in progress" />
    </div>
  </section>
);

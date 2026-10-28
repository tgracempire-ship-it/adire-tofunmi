import React from 'react';
import { ArrowDownRight, ArrowRight, Globe2, Timer, Hand } from 'lucide-react';

interface HeroProps {
  onOpenCustomizer: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomizer, onExploreCollection }) => (
  <section className="oriki-hero" aria-labelledby="hero-title">
    <div className="oriki-grid">
      <div className="oriki-intro">
        <p className="font-display text-4xl uppercase leading-[0.92] sm:text-5xl lg:text-[3.5rem]">People.<br />Cloth.<br />Moments<br />that last.</p>
        <div className="hero-rail-nav" aria-label="Atelier sections">
          <a href="#loom-builder">Atelier</a>
          <a href="#collection">Collection</a>
          <a href="#wedding-packages">Weddings</a>
          <a href="#aso-ebi-calc">Aso Ebi</a>
          <a href="#story">Our story</a>
        </div>
        <p className="max-w-[18rem] text-sm leading-relaxed text-[var(--muted)]">Bespoke Yoruba Aso Oke, woven strip by strip in Nigeria for weddings and defining family moments.</p>
        <button onClick={onOpenCustomizer} className="mobile-hero-primary">Build your Aso Oke <ArrowRight className="h-4 w-4" /></button>
        <button onClick={onExploreCollection} className="text-link">See the commission book <ArrowDownRight className="h-4 w-4" /></button>
      </div>

      <figure className="oriki-photo oriki-groom">
        <img src="/assets/plates/groom-photo.png" alt="Groom wearing a crimson handwoven Aso Oke ensemble" />
        <figcaption>Groom · Alaari</figcaption>
      </figure>
      <figure className="oriki-photo oriki-bride">
        <img src="/assets/plates/bride-photo.png" alt="Bride wearing a grey handwoven ensemble and sculpted gele" />
        <figcaption>Bride · Metallic weave</figcaption>
      </figure>

      <div className="oriki-statement">
        <h1 id="hero-title" className="font-display">Dress the day your family will retell.</h1>
        <p>Authentic handwoven Aso Oke, shaped with you by artisan Jesutofunmi.</p>
      </div>

      <div className="oriki-action">
        <div className="flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.18em]"><span>Lagos · Worldwide</span><span>Made by hand</span></div>
        <div className="oriki-action__buttons space-y-3">
          <button onClick={onOpenCustomizer} className="hero-primary">Build your Aso Oke <ArrowRight className="h-5 w-5" /></button>
          <button onClick={onExploreCollection} className="hero-secondary">Browse commissions <ArrowDownRight className="h-4 w-4" /></button>
        </div>
        <div className="oriki-swatch" aria-hidden="true"><img src="/assets/plates/tassel-photo.png" alt="" /></div>
      </div>
    </div>

    <div className="proof-band">
      <span><Hand className="h-4 w-4" /> Handwoven by Jesutofunmi</span>
      <span><Timer className="h-4 w-4" /> 2–4 week lead time</span>
      <span><Globe2 className="h-4 w-4" /> Delivery across Nigeria & worldwide</span>
    </div>

    <div className="atelier-path">
      <div className="atelier-path__heading"><span>The atelier path</span><span>From first thread to final fitting</span></div>
      <div className="atelier-step"><strong>Choose your weave</strong><p>Begin with Alaari, Sanyan, Etu, metallic or beaded cloth.</p><button onClick={onOpenCustomizer}>Explore weaves <ArrowRight /></button></div>
      <img src="/assets/plates/step-one-photo.png" alt="Close detail of woven Aso Oke cloth" />
      <div className="atelier-step"><strong>Shape your ensemble</strong><p>Choose the silhouette, palette, detailing and finishing.</p><button onClick={onOpenCustomizer}>Open the atelier <ArrowRight /></button></div>
      <img src="/assets/plates/step-two-photo.png" alt="Hands working at a traditional loom" />
      <div className="atelier-step"><strong>Send your commission</strong><p>Share your specification with Jesutofunmi for a personal quote.</p><button onClick={onOpenCustomizer}>Start your brief <ArrowRight /></button></div>
      <img src="/assets/plates/step-three-photo.png" alt="Traditional narrow loom weaving in progress" />
    </div>
  </section>
);

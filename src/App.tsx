import React, { useState } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { Product, OrderItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LoomCustomizer } from './components/LoomCustomizer';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductModal } from './components/ProductModal';
import { BridalGroomSection } from './components/BridalGroomSection';
import { AsoEbiCalculator } from './components/AsoEbiCalculator';
import { HeritageStory } from './components/HeritageStory';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CareAndFaq } from './components/CareAndFaq';
import { OrderSummaryDrawer } from './components/OrderSummaryDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickBookingModal } from './components/QuickBookingModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingOccasion, setBookingOccasion] = useState('Bridal Traditional Wedding');

  const [cartItems, setCartItems] = useState<OrderItem[]>([
    {
      id: 'default-custom-1',
      title: 'Ade-Oba Royal Crimson Agbada Set',
      category: 'groom',
      priceNGN: 295000,
      image: '/images/groom-agbada-portrait.jpg',
      details: '4-Piece Grand Agbada, Buba, Kembe & Fila with Gold Medallion',
      quantity: 1,
    },
  ]);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleOpenBooking = (occasion?: string) => {
    if (occasion) {
      setBookingOccasion(occasion);
    }
    setIsBookingOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.name,
          category: product.category,
          priceNGN: product.priceNGN,
          image: product.image,
          details: `${product.weaveType.toUpperCase()} Handloom • ${product.leadTimeWeeks}`,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleAddCustomToCart = (item: OrderItem) => {
    setCartItems((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearItems = () => {
    setCartItems([]);
  };

  const scrollToCustomizer = () => {
    const el = document.getElementById('loom-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAsoEbi = () => {
    const el = document.getElementById('aso-ebi-calc');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-[var(--chalk)] text-[var(--ink)]">
        {/* Navigation Bar */}
        <Navbar
          onOpenCustomizer={scrollToCustomizer}
          onOpenAsoEbi={scrollToAsoEbi}
          orderCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        <main>
          <Hero
            onOpenCustomizer={scrollToCustomizer}
            onExploreCollection={scrollToCollection}
            onOpenBooking={() => handleOpenBooking()}
          />
          <LoomCustomizer
            onAddCustomToCart={handleAddCustomToCart}
            onOpenBooking={handleOpenBooking}
          />
          <ProductShowcase
            onSelectProduct={handleOpenProduct}
            onAddToCart={handleAddToCart}
          />
          <BridalGroomSection onOpenBooking={handleOpenBooking} />
          <AsoEbiCalculator onOpenBooking={handleOpenBooking} />
          <HeritageStory />
          <TestimonialsSection />
          <CareAndFaq onOpenBooking={() => handleOpenBooking()} />
        </main>

        {/* Accessible Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />

        {/* Custom Order Drawer */}
        <OrderSummaryDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={handleRemoveItem}
          onClearItems={handleClearItems}
        />

        {/* Quick Consultation & Loom Reservation Modal */}
        <QuickBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialOccasion={bookingOccasion}
        />

        {/* Always Accessible Floating WhatsApp Button */}
        <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

        {/* Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />
      </div>
    </CurrencyProvider>
  );
};

export default App;

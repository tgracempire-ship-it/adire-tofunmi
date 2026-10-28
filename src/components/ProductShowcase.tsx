import React, { useState } from 'react';
import { Product, WeaveCategory } from '../types';
import { ASO_OKE_PRODUCTS } from '../data/asoOkeProducts';
import { Eye, MessageCircle, Filter, ArrowUpRight } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface ProductShowcaseProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onOpenBooking?: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectProduct,
  onAddToCart,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<WeaveCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: WeaveCategory; label: string }[] = [
    { key: 'all', label: 'All Ensembles' },
    { key: 'bridal', label: 'Bridal Sovereignty' },
    { key: 'groom', label: 'Royal Groom Agbada' },
    { key: 'couples', label: 'Couples Twinning' },
    { key: 'children', label: 'Little Monarchs' },
    { key: 'raw-loom', label: 'Raw Handloom Rolls' },
  ];

  const filteredProducts = ASO_OKE_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.weaveType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.tags || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collection" className="py-20 bg-[var(--chalk)] relative border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[var(--line)] pb-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-[0.16em] text-[var(--cobalt)] mb-2">
              Bespoke Lookbook
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--ink)]">
              Curated Heirloom Commissions
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2 max-w-xl">
              Authentic handwoven masterpieces tailored for kings, queens, and celebrated milestone ceremonies. Every piece is woven upon bespoke request.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="mt-6 md:mt-0 w-full md:w-80">
            <input
              type="text"
              placeholder="Search by weave, color, or ensemble..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--paper)] border border-[var(--line-strong)] rounded-lg px-4 py-3 text-xs text-[var(--ink)] placeholder:text-gray-400 focus:border-[var(--cobalt)] focus:outline-none transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Filter className="w-4 h-4 text-[var(--cobalt)] flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[var(--cobalt)] text-white shadow-md'
                  : 'bg-[var(--paper)] border border-[var(--line-strong)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--cobalt)]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Balanced 3-Column Product Grid */}
        <div className="editorial-product-grid">
          {filteredProducts.map((product) => {
            const whatsappUrl = `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              `Hello Jesutofunmi, I want to book a consultation for the *${product.name}* from Threads of Heritage.`
            )}`;

            return (
              <div
                key={product.id}
                className="product-tile group"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e2d8]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Weave Badge */}
                    <div className="absolute top-3 left-3 bg-[var(--ink)] text-[var(--chalk)] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                      {product.weaveType} Weave
                    </div>

                    {product.popular && (
                      <div className="absolute top-3 right-3 bg-[var(--coral)] text-white px-2.5 py-1 rounded text-[10px] font-bold tracking-wide shadow-sm">
                        Most Requested
                      </div>
                    )}
                  </div>

                  {/* Product Metadata Content */}
                  <div className="product-tile__copy space-y-2">
                    <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                      <span>{product.piecesIncluded?.length ? `${product.piecesIncluded.length} Pieces` : 'Complete Ensemble'}</span>
                      <span className="text-[var(--cobalt)] font-bold uppercase tracking-wider text-[10px]">Handloom</span>
                    </div>

                    <h3 className="text-xl font-heading text-[var(--ink)] group-hover:text-[var(--cobalt)] transition-colors leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(product.tags || []).slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[var(--chalk)] border border-[var(--line)] text-[var(--muted)] px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Investment & Clear Booking Action */}
                <div className="product-tile__footer flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] block font-bold">
                      Investment:
                    </span>
                    <span className="text-xs font-bold text-[var(--cobalt)] uppercase tracking-wider font-royal">
                      Price on Request
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-3 py-2 rounded bg-[var(--paper)] hover:bg-[var(--chalk)] text-xs font-bold text-[var(--ink)] border border-[var(--line-strong)] transition-colors cursor-pointer flex items-center gap-1"
                      title="View garment details"
                    >
                      <span>Details</span>
                      <Eye className="w-3.5 h-3.5 text-[var(--cobalt)]" />
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-[#25D366] text-[#070A0F] hover:brightness-105 transition-all cursor-pointer shadow-sm"
                      title="Inquire directly on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#070A0F]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

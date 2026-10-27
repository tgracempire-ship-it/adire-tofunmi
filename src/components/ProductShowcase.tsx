import React, { useState } from 'react';
import { Product, WeaveCategory } from '../types';
import { ASO_OKE_PRODUCTS } from '../data/asoOkeProducts';
import { Eye, MessageCircle, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';

interface ProductShowcaseProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectProduct,
  onAddToCart,
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
      prod.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collection" className="py-20 bg-[#0A0E17] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182234] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Jesutofunmi Haute Couture Lookbook</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
              Curated <span className="gold-gradient-text font-royal">Heirloom Creations</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mt-2 max-w-xl">
              Authentic handwoven masterpieces tailored for kings, queens, and milestone ceremonies. Each piece is woven from scratch upon request.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="mt-6 md:mt-0 w-full md:w-72">
            <input
              type="text"
              placeholder="Search by weave, color, or attire..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131B29] border border-[#243044] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Filter className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#BF9522] text-[#0A0E17] shadow-lg shadow-[#D4AF37]/20 font-bold'
                  : 'bg-[#111724] border border-[#243044] text-[#A0AEC0] hover:text-white hover:border-[#D4AF37]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const whatsappUrl = `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              `Hello Jesutofunmi, I want to inquire about commissioning the *${product.name}* from Threads of Heritage.`
            )}`;

            return (
              <div
                key={product.id}
                className="luxury-card overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-80" />

                    {/* Weave Badge */}
                    <div className="absolute top-3 left-3 bg-[#0A0E17]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[10px] font-bold text-[#F4E4BA] uppercase tracking-wider">
                      {product.weaveType} Weave
                    </div>

                    {product.popular && (
                      <div className="absolute top-3 right-3 bg-[#8A1528] text-white px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide border border-[#D4AF37]/50 shadow-md">
                        Popular Choice
                      </div>
                    )}

                    {/* Hover Quick Action */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-4 py-2 rounded-xl bg-white text-[#0A0E17] font-bold text-xs flex items-center gap-1.5 shadow-xl hover:bg-[#F3E5AB] transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#25D366] text-white hover:brightness-110 shadow-xl transition-all cursor-pointer"
                        title="Inquire directly on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                      </a>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] text-[#A0AEC0] mb-1.5">
                      <span className="capitalize">{product.category} Collection</span>
                      <span>Lead: {product.leadTimeWeeks}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#9CA3AF] mt-2 line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>

                    {/* Pricing Display */}
                    <div className="mt-4 pt-3 border-t border-[#243044] flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-[#A0AEC0] block">
                          Bespoke Handwoven:
                        </span>
                        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-royal">
                          Price on Request
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectProduct(product)}
                        className="text-xs font-semibold text-[#D4AF37] hover:text-[#FFF] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#182234] border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#111724] border border-[#243044] rounded-2xl p-8">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-lg font-bold text-white">No creations match your filter</h3>
            <p className="text-xs text-[#A0AEC0] mt-1">Try resetting the category filter or searching for another term.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl gold-button text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

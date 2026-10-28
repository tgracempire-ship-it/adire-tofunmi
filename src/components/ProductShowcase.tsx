import React, { useState } from 'react';
import { Product, WeaveCategory } from '../types';
import { ASO_OKE_PRODUCTS } from '../data/asoOkeProducts';
import { Eye, MessageCircle, Filter, ArrowUpRight } from 'lucide-react';
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
    <section id="collection" className="py-20 bg-[#070A0F] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
              Curated <span className="text-gold font-royal">Heirloom Creations</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mt-2 max-w-xl">
              Authentic handwoven masterpieces tailored for kings, queens, and celebrated milestone ceremonies. Every piece is woven upon bespoke request.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="mt-6 md:mt-0 w-full md:w-72">
            <input
              type="text"
              placeholder="Search by weave, color, or ensemble..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D1422] border border-[#243044] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Filter className="w-4 h-4 text-gold flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#D4AF37] text-[#070A0F] font-bold shadow-md'
                  : 'bg-[#0D1422] border border-[#243044] text-[#A0AEC0] hover:text-white hover:border-[#D4AF37]/40'
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

                    {/* Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent opacity-80" />

                    {/* Weave Badge */}
                    <div className="absolute top-3 left-3 bg-[#070A0F]/90 px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[10px] font-bold text-[#F4E4BA] uppercase tracking-wider">
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
                        className="px-4 py-2 rounded-xl bg-white text-[#070A0F] font-bold text-xs flex items-center gap-1.5 shadow-xl hover:bg-[#F3E5AB] transition-colors cursor-pointer"
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

                  {/* Product Metadata Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                      <span>{product.piecesIncluded?.length ? `${product.piecesIncluded.length} Pieces` : 'Complete Ensemble'} Included</span>
                      <span className="text-gold font-medium">Bespoke Couture</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#FDFBF7] font-heading group-hover:text-gold transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#9CA3AF] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(product.tags || []).slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#141C2B] border border-[#243044] text-[#CBD5E1] px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price on Request & Actions */}
                <div className="p-5 pt-0 border-t border-[#1C2638] mt-3">
                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                        Investment:
                      </span>
                      <span className="text-sm font-bold text-gold uppercase tracking-wider font-royal">
                        Price on Request
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3.5 py-2 rounded-lg bg-[#141C2B] hover:bg-[#1E283C] text-xs font-semibold text-white flex items-center gap-1 border border-[#243044] hover:border-[#D4AF37]/50 transition-colors cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#25D366] text-[#070A0F] hover:brightness-105 transition-all cursor-pointer"
                        title="Chat about this piece"
                      >
                        <MessageCircle className="w-4 h-4 fill-[#070A0F]" />
                      </a>
                    </div>
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

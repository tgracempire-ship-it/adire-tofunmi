import React, { useEffect, useRef, useState } from 'react';
import { Product } from '../types';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { X, MessageCircle, Clock, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!isInDialog) {
      onClose();
    }
  };

  if (!product) return null;

  const allImages = [product.image, ...(product.additionalImages || [])];

  const whatsappInquiryUrl = `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Hello Jesutofunmi, I am interested in commissioning: *${product.name}*. Please advise on pricing, loom availability, and measurements.`
  )}`;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onCancel={onClose}
      aria-labelledby="modal-product-title"
      className="m-auto rounded-2xl bg-[#0D1422] border border-[#D4AF37]/35 text-[#EDE8DF] shadow-2xl max-w-4xl w-full p-0 overflow-hidden outline-none backdrop:bg-black/85 backdrop:backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#141C2B] border border-[#D4AF37]/40 flex items-center justify-center text-white hover:bg-[#8A1528] transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Column: Image Showcase */}
          <div className="md:col-span-6 bg-black/60 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#243044]">
            {/* Main Active Image Display */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#D4AF37]/25 bg-black">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-[#070A0F]/90 px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[11px] font-bold text-[#F4E4BA] capitalize">
                {product.weaveType} Traditional Weave
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                      activeImage === img ? 'border-[#D4AF37] scale-105' : 'border-[#243044] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & WhatsApp Ordering */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Badge & Category */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#8A1528] text-white text-[10px] font-bold uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-xs text-gold font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  By Master Weaver Jesutofunmi
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#A0AEC0] mt-1 leading-snug">
                {product.subtitle}
              </p>

              {/* Pricing Consultation Notice */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#070A0F] border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#9CA3AF] block font-semibold">
                    Bespoke Handwoven Commission:
                  </span>
                  <span className="text-sm font-bold text-gold tracking-wider uppercase font-royal">
                    Price on Request
                  </span>
                </div>
                <span className="text-[11px] text-[#A0AEC0] italic">
                  Direct atelier rates
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                {product.description}
              </p>

              {/* Pieces Included */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#070A0F] border border-[#243044]">
                <h4 className="text-xs font-bold text-gold-light mb-2 uppercase tracking-wider">
                  Pieces Included in this Ensemble:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                  {product.piecesIncluded.map((piece, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-gold" />
                      <span>{piece}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="mt-4 space-y-1.5">
                <h4 className="text-xs font-bold text-gold-light uppercase tracking-wider">
                  Craftsmanship Highlights:
                </h4>
                <ul className="space-y-1 text-xs text-[#9CA3AF]">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-gold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lead Time & Guarantee */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[#070A0F] border border-[#243044] flex items-center gap-2 text-[#A0AEC0] tabular-nums">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Lead Time: <strong className="text-white">{product.leadTimeWeeks}</strong></span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#070A0F] border border-[#243044] flex items-center gap-2 text-[#A0AEC0]">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>100% Authentic Handloom</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-[#243044]">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-[#070A0F] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-[#070A0F]" />
                <span>Order on WhatsApp with Jesutofunmi</span>
              </a>

              {onAddToCart && (
                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl gold-button-outline text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Add to My Inquiry Wishlist</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

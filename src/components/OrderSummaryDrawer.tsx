import React, { useEffect, useRef } from 'react';
import { OrderItem } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { VENDOR_DETAILS } from '../data/asoOkeProducts';
import { X, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface OrderSummaryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onRemoveItem: (id: string) => void;
  onClearItems: () => void;
}

export const OrderSummaryDrawer: React.FC<OrderSummaryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearItems,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { formatPrice } = useCurrency();

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

  const totalNGN = items.reduce((acc, curr) => acc + curr.priceNGN * curr.quantity, 0);

  const generateWhatsAppCheckout = () => {
    let msg = `👑 *THREADS OF HERITAGE - CUSTOM ORDER INQUIRY LIST*\n----------------------------------------\n*Artisan:* Jesutofunmi (@Threads of Heritage)\n\n`;

    items.forEach((item, idx) => {
      msg += `*${idx + 1}. ${item.title}*\n`;
      msg += `   • Details: ${item.details}\n`;
      msg += `   • Quantity: ${item.quantity}\n`;
      msg += `   • Price: ${formatPrice(item.priceNGN * item.quantity)}\n\n`;
    });

    msg += `----------------------------------------\n`;
    msg += `*Total Estimated Value:* ${formatPrice(totalNGN)}\n\n`;
    msg += `Hello Jesutofunmi, I would like to confirm loom availability and measurements for these items. Thank you!`;

    return `https://wa.me/${VENDOR_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onCancel={onClose}
      aria-labelledby="drawer-title"
      className="m-0 sm:ml-auto h-full max-h-screen w-full sm:max-w-md bg-[#0D131F] border-l border-[#D4AF37]/30 text-white p-0 shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="p-5 border-b border-[#243044] flex items-center justify-between bg-[#111724]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 id="drawer-title" className="text-base font-bold font-heading text-white">
              Your Custom Inquiry List
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#182234] text-[#A0AEC0] hover:text-white cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-[#A0AEC0] space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-[#243044]" />
              <p className="text-sm">Your inquiry list is empty.</p>
              <p className="text-xs text-[#6B7280]">
                Configure a custom loom piece or select an ensemble from our lookbook to add it here.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 rounded-xl gold-button text-xs font-bold"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#131B29] border border-[#243044] flex gap-3 items-center"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#D4AF37]/30 flex-shrink-0 bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate font-heading">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-[#A0AEC0] line-clamp-1 mt-0.5">
                      {item.details}
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#D4AF37]">
                        {formatPrice(item.priceNGN * item.quantity)}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-300 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onClearItems}
                  className="text-[11px] text-[#9CA3AF] hover:text-red-400 underline cursor-pointer"
                >
                  Clear All Items
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#243044] bg-[#111724] space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-[#A0AEC0] uppercase tracking-wider">
                Total Estimated Value:
              </span>
              <span className="text-2xl font-black text-white font-heading">
                {formatPrice(totalNGN)}
              </span>
            </div>

            <p className="text-[11px] text-[#9CA3AF]">
              Submitting this list generates a tailored WhatsApp invoice directly with Master Weaver Jesutofunmi.
            </p>

            <a
              href={generateWhatsAppCheckout()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs sm:text-sm shadow-lg shadow-green-500/20 hover:brightness-110 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Checkout Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </dialog>
  );
};

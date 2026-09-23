import React, { useState } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  id: string;
  product: Product;
  sizeName: string;
  unitPrice: number;
  quantity: number;
  addons: {
    vase: boolean;
    chocolate: boolean;
    calligraphyText: string;
  };
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [deliveryNote, setDeliveryNote] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const discount = promoApplied ? Math.round(rawSubtotal * 0.1) : 0;
  const deliveryFee = rawSubtotal > 150 ? 0 : 10;
  const finalTotal = Math.max(0, rawSubtotal - discount + deliveryFee);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'CHINAR10' || promoCode.trim().toUpperCase() === 'BAKU') {
      setPromoApplied(true);
    } else {
      alert('Daxil edilmiş promo kod keçərsizdir. "CHINAR10" kodunu yoxlaya bilərsiniz.');
    }
  };

  const handleWhatsAppCheckout = () => {
    let orderMsg = `🌿 *CHINAR FLORA — YENİ SİFARİŞ*\n\n`;
    items.forEach((item, idx) => {
      orderMsg += `${idx + 1}. *${item.product.title}*\n`;
      orderMsg += `   • Ölçü: ${item.sizeName}\n`;
      if (item.addons.vase) orderMsg += `   • Əlavə: Şüşə Vaza (+35 AZN)\n`;
      if (item.addons.chocolate) orderMsg += `   • Əlavə: Şokolad (+25 AZN)\n`;
      if (item.addons.calligraphyText) orderMsg += `   • Qeyd Kartı: "${item.addons.calligraphyText}"\n`;
      orderMsg += `   • Say: ${item.quantity} x ${item.unitPrice} AZN = ${item.quantity * item.unitPrice} AZN\n\n`;
    });
    if (recipientAddress) {
      orderMsg += `📍 *Çatdırılma Ünvanı:* ${recipientAddress}\n`;
    }
    if (deliveryNote) {
      orderMsg += `📝 *Xüsusi İstək:* ${deliveryNote}\n`;
    }
    if (promoApplied) {
      orderMsg += `🎟 *Endirim:* -${discount} AZN (CHINAR10)\n`;
    }
    orderMsg += `🚚 *Çatdırılma:* ${deliveryFee === 0 ? 'Ödənişsiz (150 AZN üzəri)' : `${deliveryFee} AZN`}\n`;
    orderMsg += `💰 *Cəmi Məbləğ:* ${finalTotal} AZN\n\n`;
    orderMsg += `Zəhmət olmasa sifarişi qəbul edib çatdırılma vaxtını dəqiqləşdirin.`;

    window.open(`https://wa.me/994124900020?text=${encodeURIComponent(orderMsg)}`, '_blank');
  };

  const handleDirectCheckout = () => {
    setOrderCompleted(true);
    setTimeout(() => {
      onClearCart();
      setOrderCompleted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#1c1c19]/50 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#fdf9f4] h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#e6e2dd] flex items-center justify-between bg-[#f7f3ee]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4f1122]">shopping_bag</span>
            <h2 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif">
              Səbətiniz ({items.reduce((sum, i) => sum + i.quantity, 0)})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-[#e6e2dd] flex items-center justify-center text-[#735758] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {orderCompleted ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#d7e8c8] text-[#1f2c17] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl">done</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-[#4f1122] font-serif mb-2">
              Sifarişiniz Qəbul Olundu!
            </h3>
            <p className="font-body-sm text-body-sm text-[#534345] max-w-xs">
              Florist komandamız dərhal hazırlığa başlayır. Buketiniz yola düşməzdən əvvəl fotosu WhatsApp nömrənizə göndəriləcək.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-5xl text-[#d8c1c3] mb-4">
              shopping_basket
            </span>
            <h3 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif mb-2">
              Səbətiniz Boşdur
            </h3>
            <p className="font-body-sm text-body-sm text-[#534345] max-w-xs mb-6">
              Kataloqumuza keçid edərək unikal çiçək buketlərindən birini seçin.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#4f1122] text-[#ffffff] font-label-md text-label-md uppercase tracking-wider cursor-pointer"
            >
              Güllərə Baxın
            </button>
          </div>
        ) : (
          /* Items List */
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.map((item) => (
              <div 
                key={item.id}
                className="flex gap-4 p-3.5 rounded-2xl bg-[#ffffff] border border-[#e6e2dd]/70 shadow-2xs"
              >
                <img 
                  src={item.product.image} 
                  alt={item.product.title} 
                  className="w-20 h-24 object-cover rounded-xl shrink-0"
                />
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-headline-sm text-sm text-[#4f1122] font-serif truncate">
                        {item.product.title.replace(/"/g, '')}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#735758] hover:text-[#ba1a1a] cursor-pointer"
                        title="Sil"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                    <span className="text-[11px] text-[#735758] block mt-0.5">
                      {item.sizeName}
                    </span>
                    {(item.addons.vase || item.addons.chocolate || item.addons.calligraphyText) && (
                      <div className="mt-1 text-[10px] text-[#534345] bg-[#f7f3ee] p-1.5 rounded-md">
                        {item.addons.calligraphyText && (
                          <div className="truncate">✦ Qeyd: "{item.addons.calligraphyText}"</div>
                        )}
                        {item.addons.vase && <div>✦ Vaza (+35 AZN)</div>}
                        {item.addons.chocolate && <div>✦ Şokolad (+25 AZN)</div>}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#f1ede8]">
                    <div className="flex items-center gap-2 border border-[#e6e2dd] rounded-full px-2 py-0.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="text-[#735758] hover:text-[#4f1122] text-sm"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-[#4f1122] min-w-3 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-[#735758] hover:text-[#4f1122] text-sm"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-headline-sm text-sm font-bold text-[#4f1122]">
                      {item.unitPrice * item.quantity} AZN
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Delivery address & note */}
            <div className="space-y-3 pt-2">
              <input
                type="text"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="Çatdırılma ünvanı (məs: Nizami 142, m. 15)..."
                className="w-full text-xs bg-[#ffffff] border border-[#e6e2dd] rounded-xl p-3 focus:outline-none focus:border-[#4f1122]"
              />
              <input
                type="text"
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
                placeholder="Kuryer üçün xüsusi qeyd və ya çatdırılma saatı..."
                className="w-full text-xs bg-[#ffffff] border border-[#e6e2dd] rounded-xl p-3 focus:outline-none focus:border-[#4f1122]"
              />
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-2 pt-1">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo kod (CHINAR10)"
                className="flex-1 text-xs uppercase bg-[#ffffff] border border-[#e6e2dd] rounded-xl px-3 py-2 focus:outline-none focus:border-[#4f1122]"
              />
              <button
                type="button"
                onClick={applyPromo}
                className="px-4 py-2 rounded-xl bg-[#e6e2dd] hover:bg-[#6b2737] hover:text-white text-[#1c1c19] text-xs font-semibold cursor-pointer transition-colors"
              >
                Tətbiq et
              </button>
            </div>
            {promoApplied && (
              <span className="text-[11px] text-[#24582c] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                %10 endirim tətbiq edildi!
              </span>
            )}
          </div>
        )}

        {/* Footer Subtotal & Buttons */}
        {!orderCompleted && items.length > 0 && (
          <div className="p-6 border-t border-[#e6e2dd] bg-[#f7f3ee] space-y-3">
            <div className="space-y-1.5 text-xs text-[#534345]">
              <div className="flex justify-between">
                <span>Məhsullar:</span>
                <span>{rawSubtotal} AZN</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-[#24582c] font-medium">
                  <span>Endirim:</span>
                  <span>-{discount} AZN</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Çatdırılma:</span>
                <span>{deliveryFee === 0 ? 'Ödənişsiz' : `${deliveryFee} AZN`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#4f1122] pt-2 border-t border-[#e6e2dd]">
                <span>Cəmi:</span>
                <span>{finalTotal} AZN</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20b858] text-[#ffffff] font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp ilə Sifariş Et</span>
              </button>

              <button
                type="button"
                onClick={handleDirectCheckout}
                className="w-full py-3.5 px-4 rounded-full bg-[#4f1122] hover:bg-[#6b2737] text-[#ffffff] font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Sifarişi Tamamla</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

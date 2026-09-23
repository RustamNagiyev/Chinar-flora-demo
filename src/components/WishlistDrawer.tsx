import React from 'react';
import { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="fixed inset-0 bg-[#1c1c19]/50 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#fdf9f4] h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#e6e2dd] flex items-center justify-between bg-[#f7f3ee]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ba1a1a]">favorite</span>
            <h2 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif">
              Bəyəndiklərim ({wishlist.length})
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

        {/* List or Empty State */}
        {wishlist.length === 0 ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-5xl text-[#d8c1c3] mb-4">
              favorite_border
            </span>
            <h3 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif mb-2">
              Bəyəndiyiniz gül yoxdur
            </h3>
            <p className="font-body-sm text-body-sm text-[#534345] max-w-xs mb-6">
              Kolleksiyadakı sevdiyiniz gülləri ürək ikonuna basaraq bura əlavə edə bilərsiniz.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#4f1122] text-[#ffffff] font-label-md text-label-md uppercase tracking-wider cursor-pointer"
            >
              Kataloqa Keç
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.map((product) => (
              <div 
                key={product.id}
                className="flex gap-4 p-3.5 rounded-2xl bg-[#ffffff] border border-[#e6e2dd]/70 shadow-2xs"
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="w-20 h-24 object-cover rounded-xl shrink-0 cursor-pointer"
                />
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="font-headline-sm text-sm text-[#4f1122] font-serif truncate cursor-pointer hover:underline"
                      >
                        {product.title.replace(/"/g, '')}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-[#735758] hover:text-[#ba1a1a] cursor-pointer"
                        title="Sil"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                    <span className="text-[11px] text-[#735758] block mt-0.5">
                      {product.subtitle || product.category}
                    </span>
                    <span className="font-headline-sm text-sm font-bold text-[#4f1122] mt-1 block">
                      {product.price} AZN
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    className="mt-2 py-1.5 px-3 rounded-full bg-[#f1ede8] hover:bg-[#4f1122] hover:text-white text-[#4f1122] text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">shopping_bag</span>
                    <span>Səbətə at</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

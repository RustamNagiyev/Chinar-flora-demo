/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './views/HomePage';
import { CatalogPage } from './views/CatalogPage';
import { ProductPage } from './views/ProductPage';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CalligraphyModal } from './components/CalligraphyModal';
import { InfoModals } from './components/InfoModals';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('ana-sehife');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [catalogCategory, setCatalogCategory] = useState<string>('Bütün Güllər');

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: PRODUCTS[0],
      sizeName: 'Standart (19 çiçək)',
      unitPrice: 185,
      quantity: 1,
      addons: {
        vase: false,
        chocolate: false,
        calligraphyText: 'Ən səmimi sevgi və təbriklərlə...',
      },
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Wishlist state
  const [wishlist, setWishlist] = useState<Product[]>([PRODUCTS[1], PRODUCTS[2]]);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  // Modals state
  const [isCalligraphyModalOpen, setIsCalligraphyModalOpen] = useState<boolean>(false);
  const [activeInfoModal, setActiveInfoModal] = useState<'haqqimizda' | 'catdirilma' | 'elaqe' | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path === 'haqqimizda' || path === 'catdirilma' || path === 'elaqe') {
      setActiveInfoModal(path);
      return;
    }
    setCurrentPath(path);
  };

  const handleSelectProduct = (prod: Product) => {
    setSelectedProduct(prod);
    setCurrentPath('mehsul');
  };

  const handleFilterCategory = (category: string) => {
    setCatalogCategory(category);
    setCurrentPath('kataloq');
  };

  const handleAddToCart = (
    prod: Product,
    sizeName?: string,
    addons?: { vase: boolean; chocolate: boolean; calligraphyText: string },
    quantity = 1
  ) => {
    const size = sizeName || (prod.sizes ? prod.sizes[0].name : 'Standart');
    const basePrice = prod.price;
    const vaseAdd = addons?.vase ? 35 : 0;
    const chocoAdd = addons?.chocolate ? 25 : 0;
    const unitPrice = basePrice + vaseAdd + chocoAdd;

    const newItem: CartItem = {
      id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      product: prod,
      sizeName: size,
      unitPrice,
      quantity,
      addons: addons || {
        vase: false,
        chocolate: false,
        calligraphyText: '',
      },
    };

    setCartItems((prev) => [newItem, ...prev]);
    showToast(`"${prod.title.replace(/"/g, '')}" səbətə əlavə edildi`);
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (itemId: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: qty } : i))
    );
  };

  const handleRemoveCartItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (prod: Product) => {
    const exists = wishlist.some((item) => item.id === prod.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== prod.id));
      showToast(`"${prod.title.replace(/"/g, '')}" sevimlilərdən çıxarıldı`);
    } else {
      setWishlist((prev) => [prod, ...prev]);
      showToast(`"${prod.title.replace(/"/g, '')}" sevimlilərə əlavə edildi`);
    }
  };

  const isWishlisted = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf9f4] text-[#1c1c19] selection:bg-[#ffdada] selection:text-[#4f1122]">
      {/* Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {currentPath === 'ana-sehife' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onOpenCalligraphyModal={() => setIsCalligraphyModalOpen(true)}
            featuredProducts={PRODUCTS}
            onFilterCategory={handleFilterCategory}
          />
        )}

        {currentPath === 'kataloq' && (
          <CatalogPage
            products={PRODUCTS}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            initialCategory={catalogCategory}
          />
        )}

        {currentPath === 'mehsul' && (
          <ProductPage
            product={selectedProduct}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            relatedProducts={PRODUCTS.filter((p) => p.id !== selectedProduct.id)}
          />
        )}
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onFilterCategory={handleFilterCategory} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={(id) => setWishlist((prev) => prev.filter((p) => p.id !== id))}
        onAddToCart={handleAddToCart}
        onSelectProduct={handleSelectProduct}
      />

      {/* Calligraphy Modal */}
      <CalligraphyModal
        isOpen={isCalligraphyModalOpen}
        onClose={() => setIsCalligraphyModalOpen(false)}
        onSaveMessage={(msg) => showToast('Kalliqrafik məktub yadda saxlanıldı')}
      />

      {/* Info Modals (Haqqımızda, Çatdırılma, Əlaqə) */}
      <InfoModals
        type={activeInfoModal}
        onClose={() => setActiveInfoModal(null)}
        onNavigateCatalog={() => setCurrentPath('kataloq')}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#4f1122] text-[#ffffff] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#6b2737] animate-fade-in text-sm font-medium">
          <span className="material-symbols-outlined text-[20px] text-[#ffd9de]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

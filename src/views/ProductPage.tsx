import React, { useState } from 'react';
import { Product } from '../data/products';

interface ProductPageProps {
  product: Product;
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (
    product: Product,
    sizeName?: string,
    addons?: { vase: boolean; chocolate: boolean; calligraphyText: string },
    quantity?: number
  ) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  relatedProducts: Product[];
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  relatedProducts,
}) => {
  const defaultSizes = product.sizes || [
    { name: 'Standart', flowers: 'Standart (19 çiçək)', price: product.price },
    { name: 'Premium', flowers: 'Premium (29 çiçək)', price: Math.round(product.price * 1.43) },
    { name: 'Deluxe Lüks', flowers: 'Deluxe Lüks (45 çiçək)', price: Math.round(product.price * 2.1) },
  ];

  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [hasCalligraphyCard, setHasCalligraphyCard] = useState<boolean>(true);
  const [calligraphyText, setCalligraphyText] = useState<string>('Sevgilər və ən səmimi arzularla...');
  const [hasVase, setHasVase] = useState<boolean>(false);
  const [hasChocolate, setHasChocolate] = useState<boolean>(false);
  const [zoomModalOpen, setZoomModalOpen] = useState<boolean>(false);

  const imagesList = [product.image, ...(product.thumbnails || [])];

  const currentSize = defaultSizes[selectedSizeIndex];
  const vasePrice = hasVase ? 35 : 0;
  const chocolatePrice = hasChocolate ? 25 : 0;
  const unitPrice = currentSize.price + vasePrice + chocolatePrice;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    onAddToCart(
      product,
      currentSize.name,
      {
        vase: hasVase,
        chocolate: hasChocolate,
        calligraphyText: hasCalligraphyCard ? calligraphyText : '',
      },
      quantity
    );
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Salam! CHINAR FLORA saytından sifariş vermək istəyirəm:\n\n• Məhsul: ${product.title}\n• Ölçü: ${currentSize.flowers}\n• Əlavələr: ${hasVase ? 'Şüşə Vaza (+35 AZN), ' : ''}${hasChocolate ? 'Şokolad (+25 AZN), ' : ''}${hasCalligraphyCard ? 'Xəttatlıq Kartı ("' + calligraphyText + '")' : 'Xeyr'}\n• Say: ${quantity} ədəd\n• Cəmi Məbləğ: ${totalPrice} AZN\n\nZəhmət olmasa çatdırılma üçün qeydiyyata alasınız.`
    );
    window.open(`https://wa.me/994124900020?text=${text}`, '_blank');
  };

  const wishlisted = isWishlisted(product.id);

  return (
    <div className="w-full bg-[#fdf9f4] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb Trail */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#735758] mb-8 font-label-sm flex-wrap">
          <button 
            type="button" 
            onClick={() => onNavigate('ana-sehife')}
            className="hover:text-[#4f1122] transition-colors cursor-pointer"
          >
            Ana Səhifə
          </button>
          <span>/</span>
          <button 
            type="button" 
            onClick={() => onNavigate('kataloq')}
            className="hover:text-[#4f1122] transition-colors cursor-pointer"
          >
            Buketlər
          </button>
          <span>/</span>
          <span className="text-[#534345]">{product.category}</span>
          <span>/</span>
          <span className="text-[#4f1122] font-semibold">{product.title.replace(/"/g, '')}</span>
        </nav>

        {/* 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Gallery & Thumbnails */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Big Main Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#f7f3ee] shadow-sm border border-[#e6e2dd]/60 group">
              <img 
                src={selectedImage} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-[#ffffff]/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-[#4f1122] shadow-sm font-semibold">
                  Əl İşi ✦ Bakı
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#f1ede8]/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-[#735758] shadow-sm">
                  100% Təravətli
                </span>
              </div>

              {/* Zoom Action */}
              <button
                type="button"
                onClick={() => setZoomModalOpen(true)}
                className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#4f1122] flex items-center justify-center shadow-md transition-transform hover:scale-110 cursor-pointer"
                title="Böyüt"
              >
                <span className="material-symbols-outlined text-[20px]">zoom_in</span>
              </button>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3.5">
              {imagesList.map((imgUrl, idx) => {
                const isActive = selectedImage === imgUrl;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative aspect-square rounded-2xl overflow-hidden bg-[#f7f3ee] transition-all cursor-pointer ${
                      isActive 
                        ? 'ring-2 ring-[#4f1122] ring-offset-2 ring-offset-[#fdf9f4] shadow-sm' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Information, Configurator & Purchase */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Overline & Category */}
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735758]">
                {product.subtitle || product.category} • Kod: CF-4029
              </span>
              <button 
                type="button"
                onClick={() => onToggleWishlist(product)}
                className="flex items-center gap-1.5 text-xs text-[#735758] hover:text-[#ba1a1a] transition-colors cursor-pointer"
              >
                <span className={`material-symbols-outlined text-[20px] ${wishlisted ? 'text-[#ba1a1a]' : ''}`}>
                  favorite
                </span>
                <span>{wishlisted ? 'Bəyənilib' : 'Bəyən'}</span>
              </button>
            </div>

            {/* Title */}
            <h1 className="font-headline-lg text-headline-lg text-[#4f1122] tracking-tight mb-3">
              {product.title}
            </h1>

            {/* Rating and Freshness Badge */}
            <div className="flex items-center gap-3 pb-6 border-b border-[#e6e2dd]/60 mb-6">
              <div className="flex items-center gap-1 text-[#b68237]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                ))}
              </div>
              <span className="font-label-sm text-label-sm text-[#4f1122] font-bold">
                {product.rating || 5.0}
              </span>
              <span className="text-[#d8c1c3]">•</span>
              <span className="font-body-sm text-body-sm text-[#735758]">
                ({product.reviewsCount || 28} müştəri rəyi)
              </span>
              <span className="text-[#d8c1c3]">•</span>
              <span className="font-label-sm text-label-sm text-[#24582c] font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#24582c]" />
                Təravətli Güllər
              </span>
            </div>

            {/* Dynamic Price Display */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-4xl text-[#4f1122] font-serif">
                {unitPrice}
              </span>
              <span className="font-body-lg text-body-lg text-[#735758]">AZN</span>
              {quantity > 1 && (
                <span className="text-xs text-[#735758] ml-2">
                  (Cəmi: <strong className="text-[#4f1122]">{totalPrice} AZN</strong>)
                </span>
              )}
            </div>

            {/* Description Paragraph */}
            <p className="font-body-md text-body-md text-[#534345] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Configuration 1: Size Switcher */}
            <div className="flex flex-col gap-3 mb-8">
              <span className="font-label-md text-label-md uppercase tracking-wider text-[#4f1122] font-semibold">
                Ölçü Seçimi
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {defaultSizes.map((sz, idx) => {
                  const isSelected = selectedSizeIndex === idx;
                  return (
                    <button
                      key={sz.name}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 ${
                        isSelected 
                          ? 'border-[#4f1122] bg-[#f7f3ee] shadow-sm' 
                          : 'border-[#e6e2dd] bg-[#ffffff] hover:border-[#4f1122]/40'
                      }`}
                    >
                      <span className="font-label-md text-label-md uppercase tracking-wider text-[#1c1c19] font-bold">
                        {sz.name}
                      </span>
                      <span className="text-xs text-[#735758]">{sz.flowers}</span>
                      <span className="text-sm font-semibold text-[#4f1122] mt-1">{sz.price} AZN</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Configuration 2: Complimentary Calligraphy & Add-ons */}
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd]/70 mb-8">
              <span className="font-label-md text-label-md uppercase tracking-wider text-[#4f1122] font-semibold">
                Hədiyyə Əlavələri
              </span>

              {/* Calligraphy Card Checkbox */}
              <div className="flex flex-col gap-2 pt-2 border-t border-[#e6e2dd]/60">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox"
                      checked={hasCalligraphyCard}
                      onChange={(e) => setHasCalligraphyCard(e.target.checked)}
                      className="accent-[#4f1122] w-4 h-4 cursor-pointer"
                    />
                    <span className="font-body-sm text-body-sm text-[#1c1c19] font-medium">
                      Fərdi xəttatlıq qeyd kartı
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#24582c] font-bold uppercase tracking-wider">
                    Ödənişsiz
                  </span>
                </label>
                {hasCalligraphyCard && (
                  <div className="pl-6 pt-1">
                    <input
                      type="text"
                      value={calligraphyText}
                      onChange={(e) => setCalligraphyText(e.target.value)}
                      placeholder="Qeyd kartına yazılacaq mətn..."
                      className="w-full text-xs font-body-sm bg-[#ffffff] border border-[#e6e2dd] rounded-lg p-2.5 text-[#1c1c19] focus:outline-none focus:border-[#4f1122]"
                    />
                    <span className="text-[11px] text-[#735758] mt-1 block">
                      Bakı xəttatı tərəfindən xüsusi Florentin kağızına yazılacaq.
                    </span>
                  </div>
                )}
              </div>

              {/* Glass Vase Checkbox */}
              <label className="flex items-center justify-between cursor-pointer pt-2 border-t border-[#e6e2dd]/60">
                <div className="flex items-center gap-2.5">
                  <input 
                    type="checkbox"
                    checked={hasVase}
                    onChange={(e) => setHasVase(e.target.checked)}
                    className="accent-[#4f1122] w-4 h-4 cursor-pointer"
                  />
                  <span className="font-body-sm text-body-sm text-[#1c1c19]">
                    Boutique şüşə vaza
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-[#4f1122] font-semibold">
                  +35 AZN
                </span>
              </label>

              {/* Chocolate Box Checkbox */}
              <label className="flex items-center justify-between cursor-pointer pt-2 border-t border-[#e6e2dd]/60">
                <div className="flex items-center gap-2.5">
                  <input 
                    type="checkbox"
                    checked={hasChocolate}
                    onChange={(e) => setHasChocolate(e.target.checked)}
                    className="accent-[#4f1122] w-4 h-4 cursor-pointer"
                  />
                  <span className="font-body-sm text-body-sm text-[#1c1c19]">
                    Fransa qənnadı şokoladı
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-[#4f1122] font-semibold">
                  +25 AZN
                </span>
              </label>
            </div>

            {/* Stepper and Add To Cart */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {/* Stepper */}
              <div className="inline-flex items-center justify-between rounded-full bg-[#ffffff] border border-[#e6e2dd] px-4 py-2.5 shadow-sm sm:w-36">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-[#735758] hover:text-[#4f1122] cursor-pointer p-1"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="font-headline-sm text-sm font-bold text-[#4f1122]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-[#735758] hover:text-[#4f1122] cursor-pointer p-1"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-4 px-8 rounded-full bg-[#4f1122] hover:bg-[#6b2737] text-[#ffffff] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 font-label-lg text-label-lg uppercase tracking-wider font-semibold cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                <span>Səbətə Əlavə Et • {totalPrice} AZN</span>
              </button>
            </div>

            {/* WhatsApp Direct Order Button */}
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 px-6 rounded-full bg-[#f1ede8] hover:bg-[#e6e2dd] text-[#4f1122] transition-colors flex items-center justify-center gap-2 font-label-md text-label-md uppercase tracking-wider font-semibold cursor-pointer mb-8"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>WhatsApp ilə dərhal sifariş</span>
            </button>

            {/* 3 Service Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#e6e2dd]/60">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#4f1122] shrink-0">local_shipping</span>
                <div>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-[#1c1c19] block">
                    2 Saat Ərzində
                  </span>
                  <span className="text-xs text-[#735758]">
                    Bakı daxili təhlükəsiz çatdırılma
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#4f1122] shrink-0">photo_camera</span>
                <div>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-[#1c1c19] block">
                    Foto Təsdiqi
                  </span>
                  <span className="text-xs text-[#735758]">
                    Göndərilməzdən öncə buket fotosu
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#4f1122] shrink-0">volunteer_activism</span>
                <div>
                  <span className="font-label-sm text-label-sm uppercase font-bold text-[#1c1c19] block">
                    Chrysal Hədiyyə
                  </span>
                  <span className="text-xs text-[#735758]">
                    Xüsusi gül qidalandırıcı tozu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Detail Tabs: Composition & Care Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 lg:p-12 rounded-3xl bg-[#f7f3ee] border border-[#e6e2dd]/70 mb-24">
          {/* Tərkib & Detallar */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735758] font-semibold">
              Buket Tərkibi
            </span>
            <h3 className="font-headline-md text-headline-md text-[#4f1122] font-serif">
              Tərkib & Detallar
            </h3>
            <p className="font-body-sm text-body-sm text-[#534345] mb-2">
              Hər bir kompozisiya təzə kəsilmiş Avropa çiçəklərindən hazırlanır.
            </p>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-[#1c1c19]">
              {(product.composition || [
                "11 ədəd fransız O'Hara pion qızılgülü",
                "5 ədəd İtaliya zərif ranunkulusu",
                "Evkalipt Cinerea təbii budaqları",
                "Pastel çalar şirin noxud çiçəkləri",
                "İpək atlas bordon lent bağlaması",
                "Xüsusi eko-nəmləndirici kapsula (Aqua-pack)"
              ]).map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f1122]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qulluq Qaydaları */}
          <div className="lg:col-span-6 flex flex-col gap-4 lg:border-l lg:border-[#e6e2dd] lg:pl-10">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735758] font-semibold">
              Uzunömürlü Təravət
            </span>
            <h3 className="font-headline-md text-headline-md text-[#4f1122] font-serif">
              Qulluq Qaydaları
            </h3>
            <div className="flex flex-col gap-4 mt-1 font-body-sm text-body-sm text-[#534345]">
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#4f1122] text-base">1.</span>
                <div>
                  <strong className="text-[#1c1c19] block mb-0.5">Budama</strong>
                  <span>Gülləri vazaya qoymazdan əvvəl gövdələri 45 dərəcə bucaq altında 1-2 sm kəsin.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#4f1122] text-base">2.</span>
                <div>
                  <strong className="text-[#1c1c19] block mb-0.5">Təmiz Su</strong>
                  <span>Suyu gündə bir dəfə dəyişin və paketdə verilən Chrysal qidasını əlavə edin.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#4f1122] text-base">3.</span>
                <div>
                  <strong className="text-[#1c1c19] block mb-0.5">İqlim Mühiti</strong>
                  <span>Buketi birbaşa günəş şüalarından, kondisioner və qızdırıcı küləyindən uzaq saxlayın.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel / Grid */}
        <div>
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#e6e2dd]/60">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735758] font-semibold block mb-1">
                Tövsiyə Olunan
              </span>
              <h2 className="font-headline-md text-headline-md text-[#4f1122] tracking-tight">
                Bu Kompozisiyanı Bəyənənlər Bunları da Seçir
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('kataloq')}
              className="text-[#4f1122] hover:text-[#6b2737] font-label-md text-label-md uppercase tracking-wider font-semibold cursor-pointer"
            >
              Hamısına bax
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 3).map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectProduct(rel)}
                className="group flex flex-col bg-[#f7f3ee] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e6e2dd]/60 cursor-pointer"
              >
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#f1ede8] mb-4">
                  <img 
                    src={rel.image} 
                    alt={rel.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {rel.badge && (
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-sm font-label-sm text-[10px] uppercase tracking-wider text-[#735758] shadow-sm font-semibold">
                      {rel.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif group-hover:text-[#6b2737] transition-colors line-clamp-1">
                    {rel.title.replace(/"/g, '')}
                  </h3>
                  <span className="font-headline-sm text-headline-sm text-[#4f1122] font-semibold whitespace-nowrap">
                    {rel.price} <span className="text-xs text-[#735758]">AZN</span>
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#534345] line-clamp-1">
                  {rel.subtitle || rel.flowerType}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#1c1c19]/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setZoomModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={selectedImage} 
              alt={product.title} 
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button 
              type="button"
              onClick={() => setZoomModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#fdf9f4]/90 text-[#4f1122] flex items-center justify-center shadow-lg"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

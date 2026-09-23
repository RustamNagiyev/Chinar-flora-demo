import React, { useState, useMemo } from 'react';
import { Product } from '../data/products';

interface CatalogPageProps {
  products: Product[];
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  initialCategory?: string;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  products,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  initialCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'Bütün Güllər');
  const [selectedFlowerType, setSelectedFlowerType] = useState<string>('Bütün');
  const [maxPrice, setMaxPrice] = useState<number>(350);
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Bütün');
  const [selectedColor, setSelectedColor] = useState<string>('Bütün');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    'Bütün Güllər',
    'Müəllif Buketləri',
    'Qutuda Güllər',
    'Ürək Kompozisiyaları',
    'Hədiyyə Dəstləri',
  ];

  const flowerTypes = [
    'Bütün',
    'Qızılgüllər (Pion & Ekvador)',
    'Pion və Ranunkulus',
    'Qortenziyalar',
    'Orxideyalar',
    'Lalələr və Freziyalar',
  ];

  const occasions = [
    'Bütün',
    'Ad Günü',
    'Romantika',
    'Yubiley',
    'Təşəkkür',
    'Toy & Tədbir',
  ];

  const colorTones = [
    { name: 'Bordo & Şərab', bg: '#4f1122' },
    { name: 'Pudra Çəhrayı', bg: '#e8a5b2' },
    { name: 'Ağ & Süd Rəngi', bg: '#ffffff', border: true },
    { name: 'Zərif Bənövşəyi', bg: '#a38ca8' },
    { name: 'Qızılı Şaftalı', bg: '#e8b894' },
  ];

  const resetFilters = () => {
    setSelectedCategory('Bütün Güllər');
    setSelectedFlowerType('Bütün');
    setMaxPrice(350);
    setSelectedOccasion('Bütün');
    setSelectedColor('Bütün');
    setSortBy('popular');
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      if (selectedCategory !== 'Bütün Güllər' && item.category !== selectedCategory) {
        return false;
      }
      if (selectedFlowerType !== 'Bütün' && item.flowerType !== selectedFlowerType) {
        return false;
      }
      if (item.price > maxPrice) {
        return false;
      }
      if (selectedOccasion !== 'Bütün' && (!item.occasion || !item.occasion.includes(selectedOccasion))) {
        return false;
      }
      if (selectedColor !== 'Bütün' && item.colorTone !== selectedColor) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.badge === 'Yeni' ? 1 : 0) - (a.badge === 'Yeni' ? 1 : 0);
      return (b.reviewsCount || 0) - (a.reviewsCount || 0);
    });
  }, [products, selectedCategory, selectedFlowerType, maxPrice, selectedOccasion, selectedColor, sortBy]);

  return (
    <div className="w-full bg-[#fdf9f4] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#735758] mb-8 font-label-sm">
          <button 
            type="button" 
            onClick={() => onNavigate('ana-sehife')}
            className="hover:text-[#4f1122] transition-colors cursor-pointer"
          >
            Ana Səhifə
          </button>
          <span>/</span>
          <span className="text-[#4f1122] font-semibold">Kataloq</span>
          {selectedCategory !== 'Bütün Güllər' && (
            <>
              <span>/</span>
              <span className="text-[#6b2737]">{selectedCategory}</span>
            </>
          )}
        </nav>

        {/* Catalog Header Hero Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#e6e2dd]/60 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#4f1122] font-semibold mb-2 block">
              Floristika Kataloqu
            </span>
            <h1 className="font-headline-lg text-headline-lg text-[#4f1122] tracking-tight mb-3">
              Eksklüziv Gül Kolleksiyası
            </h1>
            <p className="font-body-md text-body-md text-[#534345] font-light">
              Seçilmiş güllərdən hazırlanan eksklüziv buketlər, məxmər qutularda zərif kompozisiyalar və xüsusi hədiyyə dəstləri.
            </p>
          </div>

          {/* Quick Perks */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f1ede8] font-label-sm text-label-sm uppercase tracking-wider text-[#4f1122]">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              2 Saata Çatdırılma
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f1ede8] font-label-sm text-label-sm uppercase tracking-wider text-[#735758]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              100% Təravət Zəmanəti
            </span>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f1ede8] text-[#4f1122] font-label-md text-label-md uppercase tracking-wider cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Filtrləri {mobileFilterOpen ? 'Bağla' : 'Göstər'}</span>
          </button>
          <span className="text-xs text-[#534345]">
            {filteredProducts.length} məhsul
          </span>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sidebar Filter Column */}
          <aside className={`lg:col-span-3 flex-col gap-8 bg-[#f7f3ee] p-6 rounded-2xl border border-[#e6e2dd]/60 shadow-sm ${
            mobileFilterOpen ? 'flex' : 'hidden lg:flex'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-[#e6e2dd]">
              <span className="font-headline-sm text-headline-sm text-[#4f1122]">Filtrlər</span>
              <button
                type="button"
                onClick={resetFilters}
                className="font-label-sm text-label-sm uppercase tracking-wider text-[#735758] hover:text-[#ba1a1a] transition-colors cursor-pointer"
              >
                Sıfırla
              </button>
            </div>

            {/* 1. Kateqoriyalar */}
            <div className="flex flex-col gap-3">
              <span className="font-label-md text-label-md uppercase tracking-wider text-[#4f1122] font-semibold">
                Kateqoriya
              </span>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <label 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input 
                      type="radio"
                      name="catalogCategory"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="accent-[#4f1122] w-4 h-4 cursor-pointer"
                    />
                    <span className={`font-body-sm text-body-sm transition-colors ${
                      selectedCategory === cat 
                        ? 'text-[#4f1122] font-semibold' 
                        : 'text-[#534345] group-hover:text-[#4f1122]'
                    }`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 2. Çiçək Növləri */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#e6e2dd]">
              <span className="font-label-md text-label-md uppercase tracking-wider text-[#4f1122] font-semibold">
                Çiçək Növü
              </span>
              <div className="flex flex-col gap-2">
                {flowerTypes.map((type) => (
                  <label 
                    key={type}
                    onClick={() => setSelectedFlowerType(type)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input 
                      type="radio"
                      name="catalogFlowerType"
                      checked={selectedFlowerType === type}
                      onChange={() => setSelectedFlowerType(type)}
                      className="accent-[#4f1122] w-4 h-4 cursor-pointer"
                    />
                    <span className={`font-body-sm text-body-sm transition-colors ${
                      selectedFlowerType === type 
                        ? 'text-[#4f1122] font-semibold' 
                        : 'text-[#534345] group-hover:text-[#4f1122]'
                    }`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Qiymət Aralığı */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#e6e2dd]">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md uppercase tracking-wider text-[#4f1122] font-semibold">
                  Maksimum Qiymət
                </span>
                <span className="font-headline-sm text-sm text-[#4f1122] font-bold">
                  {maxPrice} AZN
                </span>
              </div>
              <input 
                type="range"
                min="100"
                max="350"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#4f1122] cursor-pointer"
              />
              <div className="flex items-center justify-between text-[11px] text-[#735758]">
                <span>100 AZN</span>
                <span>350 AZN</span>
              </div>
            </div>

            {/* 4. Məqsəd & Münasibət */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#e6e2dd]">
              <span className="font-label-md text-label-md uppercase tracking-wider text-[#4f1122] font-semibold">
                Münasibət
              </span>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setSelectedOccasion(occ)}
                    className={`px-3 py-1 rounded-full text-xs font-label-sm uppercase tracking-wider transition-all cursor-pointer ${
                      selectedOccasion === occ
                        ? 'bg-[#4f1122] text-white font-semibold shadow-sm'
                        : 'bg-[#f1ede8] text-[#534345] hover:bg-[#e6e2dd]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Rəng Harmoniyası */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#e6e2dd]">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md uppercase tracking-wider text-[#4f1122] font-semibold">
                  Rəng Harmoniyası
                </span>
                {selectedColor !== 'Bütün' && (
                  <button
                    type="button"
                    onClick={() => setSelectedColor('Bütün')}
                    className="text-[11px] text-[#ba1a1a] hover:underline"
                  >
                    Təmizlə
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-2">
                {colorTones.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(isSelected ? 'Bütün' : c.name)}
                      className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                        isSelected ? 'bg-[#f1ede8]' : 'hover:bg-[#f1ede8]/60'
                      }`}
                    >
                      <span 
                        className={`w-4 h-4 rounded-full shrink-0 shadow-inner ${c.border ? 'border border-[#d8c1c3]' : ''}`} 
                        style={{ backgroundColor: c.bg }} 
                      />
                      <span className={`text-xs ${isSelected ? 'font-semibold text-[#4f1122]' : 'text-[#534345]'}`}>
                        {c.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Product Grid Area */}
          <main className="lg:col-span-9 flex flex-col">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#e6e2dd]/60">
              <span className="font-body-sm text-body-sm text-[#534345]">
                Toplam <strong className="text-[#4f1122]">{filteredProducts.length}</strong> kompozisiya göstərilir
              </span>

              <div className="flex items-center gap-3">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#735758] whitespace-nowrap">
                  Sırala:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#f7f3ee] text-[#4f1122] text-xs font-label-md uppercase tracking-wider px-3.5 py-2 rounded-lg border border-[#e6e2dd] focus:outline-none focus:border-[#4f1122] cursor-pointer"
                >
                  <option value="popular">Ən çox seçilən</option>
                  <option value="newest">Yeni gələnlər</option>
                  <option value="price-asc">Qiymət: Artan</option>
                  <option value="price-desc">Qiymət: Azalan</option>
                </select>
              </div>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center flex flex-col items-center justify-center bg-[#f7f3ee] rounded-2xl border border-[#e6e2dd]/60 p-8">
                <span className="material-symbols-outlined text-4xl text-[#735758] mb-3">
                  filter_alt_off
                </span>
                <h3 className="font-headline-sm text-headline-sm text-[#4f1122] mb-2 font-serif">
                  Heç bir kompozisiya tapılmadı
                </h3>
                <p className="font-body-sm text-body-sm text-[#534345] max-w-sm mb-6">
                  Seçilmiş filtrlərə uyğun çiçək tapılmadı. Zəhmət olmasa filtrləri yeniləyin və ya sıfırlayın.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#4f1122] text-[#ffffff] font-label-md text-label-md uppercase tracking-wider cursor-pointer"
                >
                  Bütün məhsulları göstər
                </button>
              </div>
            ) : (
              /* 3-Column Luxury Product Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((bouquet) => {
                  const wishlisted = isWishlisted(bouquet.id);
                  return (
                    <div 
                      key={bouquet.id}
                      className="group flex flex-col bg-[#f7f3ee] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e6e2dd]/60"
                    >
                      {/* Image Frame */}
                      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#f1ede8] mb-4">
                        <img 
                          src={bouquet.image} 
                          alt={bouquet.title}
                          onClick={() => onSelectProduct(bouquet)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                        />
                        {/* Wishlist Button */}
                        <button 
                          aria-label="Bəyən" 
                          onClick={() => onToggleWishlist(bouquet)}
                          className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-[#fdf9f4]/85 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm cursor-pointer ${
                            wishlisted ? 'text-[#ba1a1a]' : 'text-[#1c1c19] hover:text-[#ba1a1a]'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[19px]">favorite</span>
                        </button>
                        {/* Badge */}
                        {bouquet.badge && (
                          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-sm font-label-sm text-[10px] uppercase tracking-wider text-[#735758] shadow-sm font-semibold">
                            {bouquet.badge}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 justify-between px-1 pb-1">
                        <div onClick={() => onSelectProduct(bouquet)} className="cursor-pointer">
                          <div className="flex items-baseline justify-between gap-2 mb-1">
                            <h3 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif group-hover:text-[#6b2737] transition-colors leading-snug line-clamp-1">
                              {bouquet.title.replace(/"/g, '')}
                            </h3>
                            <span className="font-headline-sm text-headline-sm text-[#4f1122] font-semibold whitespace-nowrap">
                              {bouquet.price} <span className="font-body-sm text-body-sm font-normal text-[#735758]">AZN</span>
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-[#534345] mb-5 line-clamp-1">
                            {bouquet.subtitle || bouquet.flowerType}
                          </p>
                        </div>

                        {/* Direct Add to Cart Button */}
                        <button 
                          type="button"
                          onClick={() => onAddToCart(bouquet)}
                          className="w-full py-2.5 px-4 rounded-full bg-[#e6e2dd] hover:bg-[#6b2737] text-[#1c1c19] hover:text-[#ffffff] transition-all duration-200 flex items-center justify-center gap-2 font-label-md text-label-md uppercase tracking-wider cursor-pointer font-semibold shadow-sm hover:shadow"
                        >
                          <span className="material-symbols-outlined text-[17px]">shopping_bag</span>
                          <span>Səbətə əlavə et</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {filteredProducts.length > 0 && (
              <div className="mt-14 pt-6 border-t border-[#e6e2dd]/60 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e6e2dd] text-[#534345] hover:border-[#4f1122] hover:text-[#4f1122] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold transition-colors cursor-pointer ${
                    currentPage === 1 ? 'bg-[#4f1122] text-[#ffffff]' : 'text-[#534345] hover:bg-[#f1ede8]'
                  }`}
                >
                  1
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage(2)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold transition-colors cursor-pointer ${
                    currentPage === 2 ? 'bg-[#4f1122] text-[#ffffff]' : 'text-[#534345] hover:bg-[#f1ede8]'
                  }`}
                >
                  2
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.min(2, currentPage + 1))}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e6e2dd] text-[#534345] hover:border-[#4f1122] hover:text-[#4f1122] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            )}

            {/* Bespoke Custom Order Banner */}
            <div className="mt-16 rounded-2xl bg-[#4f1122] text-[#ffffff] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="max-w-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#eb8fa0] font-semibold block mb-2">
                  Atelye Xidməti
                </span>
                <h3 className="font-headline-md text-headline-md font-serif text-[#ffffff] mb-2">
                  Fərdi və Özəl Kompozisiyalar
                </h3>
                <p className="font-body-sm text-body-sm text-[#ffffff]/80 leading-relaxed">
                  Özəl tədbirləriniz və ya xüsusi günləriniz üçün unikal buket arzulayırsınızsa, baş floristimizlə birbaşa əlaqə qurun.
                </p>
              </div>
              <a 
                href="https://wa.me/994124900020"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#ffffff] text-[#4f1122] hover:bg-[#fdf9f4] font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors shadow-sm shrink-0 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp ilə Florist</span>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

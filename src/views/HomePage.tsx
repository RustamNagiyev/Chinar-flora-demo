import React from 'react';
import { CATEGORIES, SOCIAL_GALLERY, Product } from '../data/products';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, sizeName?: string, addons?: { vase: boolean; chocolate: boolean; calligraphyText: string }) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onOpenCalligraphyModal: () => void;
  featuredProducts: Product[];
  onFilterCategory: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenCalligraphyModal,
  featuredProducts,
  onFilterCategory,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#f7f3ee] -mt-28">
        <div className="relative min-h-[921px] flex items-center pt-32 pb-16 lg:pt-36 lg:pb-24">
          {/* Background Ambient Glow & Imagery */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-1000 ease-out" 
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtEygDjVCyo4fcmypjfkIwzdSbKVJSAmGBmkePUqE9V5S-LLLRzNT6M0hoLp-cfLsBEj1JrYlg18XSLo5CPtcofgvsD5_r79p8p9xXksvr15zcc72Dx1qqicb9bGJDMjAnEUMyIqVO-YK1exJl5jQGfxJ9qjUQ6DzrSHYo5uTdWhy3eOg72mMdGtDXOJwn78mqp503enrf0PfYktySPvxIu2E9kDE6X-R1LwYAtcTvhkdOCEmYHECnbg')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fdf9f4]/95 via-[#fdf9f4]/80 to-[#fdf9f4]/30" />
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ffdada]/40 blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-2xl flex flex-col items-start">
              {/* Overline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1ede8] shadow-sm mb-6 border border-[#e6e2dd]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f1122] animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#4f1122] font-semibold">
                  Bakı Müəllif Floristikası
                </span>
                <span className="text-[#d8c1c3] text-[10px]">✦</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735758]">
                  100% Təravət Zəmanəti
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-display text-[#4f1122] font-normal tracking-tight leading-[1.12] mb-6">
                Zərif anlar üçün <span className="italic font-normal text-[#6b2737]">nadir gül</span> kompozisiyaları
              </h1>

              {/* Body Description */}
              <p className="font-body-lg text-body-lg text-[#534345] max-w-xl mb-10 leading-relaxed font-light">
                Hər bir ləçəkdə zəriflik və sevgi. Bakı daxilində xüsusi qutularda və təbii qablaşdırmada eyni gün zərif əl çatdırılması.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <button 
                  onClick={() => onNavigate('kataloq')}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6b2737] text-[#fdf9f4] hover:bg-[#4f1122] transition-all duration-300 shadow-md hover:shadow-lg font-label-lg text-label-lg uppercase tracking-widest group cursor-pointer"
                >
                  <span>Kataloqa bax</span>
                  <span className="material-symbols-outlined text-[18px] ml-2 group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </button>

                <button 
                  onClick={onOpenCalligraphyModal}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ffffff] text-[#1c1c19] hover:bg-[#f1ede8] transition-all duration-300 shadow-sm font-label-lg text-label-lg uppercase tracking-widest cursor-pointer border border-[#e6e2dd]/70"
                >
                  <span>Fərdi sifariş</span>
                </button>
              </div>

              {/* Key Highlights Footer */}
              <div className="grid grid-cols-3 gap-6 pt-12 mt-12 w-full max-w-lg border-t border-[#e6e2dd]/60">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-[#4f1122] font-serif">2 Saat</span>
                  <span className="font-label-sm text-label-sm uppercase text-[#534345] tracking-wider mt-1">
                    Ekspress Çatdırılma
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-[#4f1122] font-serif">Hollandiya</span>
                  <span className="font-label-sm text-label-sm uppercase text-[#534345] tracking-wider mt-1">
                    Birbaşa İdxal
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-[#4f1122] font-serif">Müəllif</span>
                  <span className="font-label-sm text-label-sm uppercase text-[#534345] tracking-wider mt-1">
                    Fərdi Dizayn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kolleksiyalar / Kateqoriyalar */}
      <section className="w-full py-space-xl bg-[#fdf9f4]" id="kolleksiyalar">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735758]">
                  Qalereya & İlham
                </span>
                <span className="w-8 h-[1px] bg-[#d8c1c3]" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-[#4f1122] tracking-tight">
                Zövqlə Seçilmiş Kolleksiyalar
              </h2>
            </div>
            <p className="font-body-md text-body-md text-[#534345] max-w-md font-light">
              Hər duyğuya, fəsillərin xüsusi ritminə və unudulmaz təbriklərə uyğun tərtib olunmuş zərif kolleksiyalarımızla tanış olun.
            </p>
          </div>

          {/* Category Cards Bento Rhythm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                onClick={() => {
                  onFilterCategory(cat.categoryFilter);
                  onNavigate('kataloq');
                }}
                className={`group relative flex flex-col rounded-2xl bg-[#f7f3ee] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  idx % 2 === 1 ? 'lg:translate-y-4' : ''
                }`}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4f1122]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#fdf9f4]/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-[#4f1122] shadow-sm">
                    {cat.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between bg-[#f7f3ee]">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-[#4f1122] mb-2 group-hover:text-[#6b2737] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-[#534345] line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-2 text-[#4f1122] font-label-md text-label-md uppercase tracking-widest group-hover:translate-x-1 transition-transform font-semibold">
                    <span>Kəşf et</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seçilmiş Buketlər (Featured Bouquets) */}
      <section className="w-full py-space-xl bg-[#ffffff]" id="kataloq-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 gap-4 border-b border-[#f1ede8]">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#4f1122] font-semibold mb-2 block">
                Florist Seçimi
              </span>
              <h2 className="font-headline-lg text-headline-lg text-[#4f1122] tracking-tight">
                Ən Çox Sevilən Buketlər
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('kataloq')}
              className="inline-flex items-center gap-2 text-[#4f1122] font-label-lg text-label-lg uppercase tracking-wider hover:text-[#6b2737] transition-colors group cursor-pointer"
            >
              <span>Bütün kolleksiyaya bax</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                east
              </span>
            </button>
          </div>

          {/* 4 Premium Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {featuredProducts.slice(0, 4).map((bouquet) => {
              const wishlisted = isWishlisted(bouquet.id);
              return (
                <div 
                  key={bouquet.id} 
                  className="group flex flex-col bg-[#f7f3ee] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e6e2dd]/40"
                >
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#f1ede8] mb-5">
                    <img 
                      src={bouquet.image} 
                      alt={bouquet.title}
                      onClick={() => onSelectProduct(bouquet)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                    />
                    <button 
                      aria-label="Bəyən" 
                      onClick={() => onToggleWishlist(bouquet)}
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-[#fdf9f4]/85 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm cursor-pointer ${
                        wishlisted ? 'text-[#ba1a1a]' : 'text-[#1c1c19] hover:text-[#ba1a1a]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    {bouquet.badge && (
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-sm font-label-sm text-label-sm uppercase tracking-wider text-[#735758] shadow-sm font-semibold">
                        {bouquet.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 justify-between px-1 pb-1">
                    <div onClick={() => onSelectProduct(bouquet)} className="cursor-pointer">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif group-hover:text-[#6b2737] transition-colors">
                          {bouquet.title.replace(/"/g, '')}
                        </h3>
                        <span className="font-headline-sm text-headline-sm text-[#4f1122] font-semibold whitespace-nowrap">
                          {bouquet.price} <span className="font-body-sm text-body-sm font-normal text-[#735758]">AZN</span>
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-[#534345] mb-6 line-clamp-1">
                        {bouquet.subtitle || bouquet.flowerType}
                      </p>
                    </div>

                    <button 
                      type="button"
                      onClick={() => onAddToCart(bouquet)}
                      className="w-full py-3 px-4 rounded-full bg-[#e6e2dd] hover:bg-[#6b2737] text-[#1c1c19] hover:text-[#ffffff] transition-all duration-200 flex items-center justify-center gap-2 font-label-md text-label-md uppercase tracking-wider cursor-pointer font-semibold shadow-sm hover:shadow"
                    >
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                      <span>Səbətə əlavə et</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Statement Section (Zərif Fəlsəfəmiz) */}
      <section className="relative w-full py-space-xl bg-[#f7f3ee] overflow-hidden border-y border-[#e6e2dd]/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center relative z-10">
          {/* Decorative Botanical Emblem */}
          <div className="w-14 h-14 rounded-full bg-[#f1ede8] flex items-center justify-center text-[#4f1122] mb-8 shadow-sm border border-[#d8c1c3]/50">
            <svg className="w-7 h-7 text-[#4f1122]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C12 2 13.5 6.5 16 9C18.5 11.5 22 12 22 12C22 12 17.5 13.5 15 16C12.5 18.5 12 22 12 22C12 22 10.5 17.5 8 15C5.5 12.5 2 12 2 12C2 12 6.5 10.5 9 8C11.5 5.5 12 2 12 2Z" />
            </svg>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-[#735758] mb-6 font-semibold">
            Atelye Fəlsəfəsi
          </span>
          {/* Quote */}
          <blockquote className="font-display text-headline-lg lg:text-display text-[#4f1122] italic font-normal leading-[1.25] mb-8">
            “Çiçək sadəcə bir hədiyyə deyil; o, hisslərin sözsüz, ən ali ifadəsidir.”
          </blockquote>
          <p className="font-body-lg text-body-lg text-[#534345] max-w-2xl leading-relaxed mb-10 font-light">
            CHINAR FLORA — Bakının ən seçkin botanika butiki olaraq hər bir kompozisiyanı sənət əsəri kimi yaradırıq. Təbiətin zərifliyini, fransız kompozisiya məktəbini və Bakı zərifliyini bir araya gətiririk.
          </p>
          {/* Signature Flourish */}
          <div className="flex items-center gap-6">
            <span className="w-16 h-[1px] bg-[#d8c1c3]" />
            <span className="font-headline-sm text-headline-sm text-[#4f1122] tracking-wider font-serif">
              CHINAR FLORA BOUTIQUE
            </span>
            <span className="w-16 h-[1px] bg-[#d8c1c3]" />
          </div>
        </div>
        {/* Soft Decorative Circle */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#fcd7d7]/20 blur-3xl pointer-events-none" />
      </section>

      {/* Complimentary Calligraphy Note Banner */}
      <section className="w-full py-16 bg-[#fdf9f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-[#f1ede8] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm border border-[#e6e2dd]/80">
            <div className="flex items-start gap-5 max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#4f1122] text-[#ffffff] flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[24px]">stylus_note</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-[#4f1122] mb-2 font-serif">
                  Hədiyyənizə Xüsusi Kalliqrafik Məktub
                </h3>
                <p className="font-body-sm text-body-sm text-[#534345] leading-relaxed">
                  Hər sifarişiniz xüsusi teksturalı kağızda, Bakı xəttatlarının əl yazısı ilə tərtib olunmuş zərif təbrik zərfi ilə tamamlanır. Bu xidmət tamamilə ödənişsizdir.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button 
                onClick={onOpenCalligraphyModal}
                className="px-6 py-3.5 rounded-full bg-[#4f1122] text-[#ffffff] font-label-md text-label-md uppercase tracking-wider hover:bg-[#6b2737] transition-colors shadow-sm cursor-pointer font-semibold"
              >
                Fərdi Mətn Yazın
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram / Sosial Qalereya (@chinarflora.az) */}
      <section className="w-full py-space-xl bg-[#f7f3ee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Intro */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#4f1122] font-semibold block mb-2">
                Sosial Qalereya
              </span>
              <h2 className="font-headline-lg text-headline-lg text-[#4f1122] tracking-tight">
                Gözəlliyi Bizimlə Bölüşün
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[#534345] font-label-md text-label-md uppercase tracking-widest">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#4f1122] font-bold hover:underline">
                @chinarflora.az
              </a>
              <span>•</span>
              <span>#ChinarFloraBaku</span>
            </div>
          </div>

          {/* 6-Photo Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SOCIAL_GALLERY.map((post, idx) => (
              <a 
                key={idx}
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#f1ede8] shadow-sm block" 
                href="https://instagram.com" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <img 
                  src={post.image} 
                  alt={`Chinar Flora gallery ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-[#4f1122]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#ffffff] gap-1 p-2 text-center">
                  <span className="material-symbols-outlined text-[24px]">favorite</span>
                  <span className="font-label-sm text-label-sm font-semibold">{post.likes} bəyənmə</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

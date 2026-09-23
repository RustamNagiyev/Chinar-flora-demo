import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onFilterCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterCategory }) => {
  return (
    <footer className="w-full bg-[#f7f3ee] text-[#1c1c19] border-t border-[#e6e2dd]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div 
              onClick={() => onNavigate('ana-sehife')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <img 
                alt="CHINAR FLORA" 
                className="h-7 w-auto object-contain opacity-90 transition-transform group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1UztnuOVq6mbJFGktnUzQDXgjCL04CPY7SgfIxev7fMOnmJhODDCFfUrm2vpEx0R2ELF52DFvDQ_xYtnbnivQ7N8bOZYaNVxkVOtTtm0NbZhln984meaewnCI-0LPB-nZaNIJlmXbuKzZLua-MM24fYC1uCf2Fn4Ut_yQO_LFAAy4eY5wEAJYWtrTh99-uI39dQz7iUOW8rohXVZ3i3c1PElHRSKuK6YDgiPblzd6QeQGi9kKV3aRkOfNn7"
              />
              <span className="font-headline-sm text-headline-sm text-[#4f1122] tracking-wide font-serif">
                CHINAR FLORA
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#534345] max-w-sm leading-relaxed mt-2">
              Bakının mərkəzində ən təravətli və nadir çiçəklərdən hazırlanmış müəllif kompozisiyaları. Hər bir çiçək zərif hisslərin incə tərcüməsidir.
            </p>
            <div className="flex items-center gap-3 mt-4 text-[#735758]">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Boutique Atelier</span>
              <span className="text-[#d8c1c3]">✦</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Baku, Azerbaijan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-[#4f1122] font-semibold">
              Tez Keçidlər
            </h3>
            <ul className="flex flex-col gap-2.5 mt-1">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('ana-sehife')}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Ana Səhifə
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('kataloq')}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Kataloq
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('haqqimizda')}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Haqqımızda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('catdirilma')}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Çatdırılma və Sifariş
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('elaqe')}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Əlaqə
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-[#4f1122] font-semibold">
              Kateqoriyalar
            </h3>
            <ul className="flex flex-col gap-2.5 mt-1">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onFilterCategory) onFilterCategory('Müəllif Buketləri');
                    onNavigate('kataloq');
                  }}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Gül Buketləri
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onFilterCategory) onFilterCategory('Qutuda Güllər');
                    onNavigate('kataloq');
                  }}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Qutuda Güllər
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onFilterCategory) onFilterCategory('Ürək Kompozisiyaları');
                    onNavigate('kataloq');
                  }}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Ürək Kompozisiyaları
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onFilterCategory) onFilterCategory('Hədiyyə Dəstləri');
                    onNavigate('kataloq');
                  }}
                  className="font-body-sm text-body-sm text-[#534345] hover:text-[#4f1122] transition-colors text-left"
                >
                  Hədiyyə Dəstləri
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-[#4f1122] font-semibold">
              Əlaqə və Ünvan
            </h3>
            <div className="flex flex-col gap-2.5 mt-1 font-body-sm text-body-sm text-[#534345]">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#4f1122] shrink-0 mt-0.5">location_on</span>
                <span>Nizami küçəsi 142, Səbail r-nu, Bakı</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#4f1122] shrink-0">call</span>
                <a href="tel:+994124900020" className="hover:text-[#4f1122] transition-colors">+994 (12) 490 00 20</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#4f1122] shrink-0">mail</span>
                <a href="mailto:info@chinarflora.az" className="hover:text-[#4f1122] transition-colors">info@chinarflora.az</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#4f1122] shrink-0">share</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4f1122] transition-colors">@chinarflora.az</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-[#e6e2dd] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body-sm text-body-sm text-[#534345]">
            © 2025 CHINAR FLORA. Bütün hüquqlar qorunur.
          </p>
          <p className="font-label-sm text-label-sm tracking-widest uppercase text-[#735758]">
            ✦ Zəriflik və Təbiət Ahəngi ✦
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  cartCount,
  onOpenCart,
  wishlistCount,
  onOpenWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Ana Səhifə', path: 'ana-sehife' },
    { label: 'Kataloq', path: 'kataloq' },
    { label: 'Məhsul', path: 'mehsul' },
    { label: 'Haqqımızda', path: 'haqqimizda' },
    { label: 'Çatdırılma', path: 'catdirilma' },
    { label: 'Əlaqə', path: 'elaqe' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fdf9f4]/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(107,39,55,0.04)] transition-all">
      {/* Top Notice Strip */}
      <div className="w-full bg-[#4f1122] text-[#ffffff] py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ffffff]/90 text-[11px]">
            Bakı daxilində eyni gün çatdırılma • Fərdi sifarişlər: +994 (12) 490 00 20
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => { onNavigate('ana-sehife'); setMobileMenuOpen(false); }}
          className="flex items-center gap-4 shrink-0 cursor-pointer group"
        >
          <img 
            alt="CHINAR FLORA Logo" 
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105 duration-300" 
            src="https://lh3.googleusercontent.com/aida/AEtjO1UztnuOVq6mbJFGktnUzQDXgjCL04CPY7SgfIxev7fMOnmJhODDCFfUrm2vpEx0R2ELF52DFvDQ_xYtnbnivQ7N8bOZYaNVxkVOtTtm0NbZhln984meaewnCI-0LPB-nZaNIJlmXbuKzZLua-MM24fYC1uCf2Fn4Ut_yQO_LFAAy4eY5wEAJYWtrTh99-uI39dQz7iUOW8rohXVZ3i3c1PElHRSKuK6YDgiPblzd6QeQGi9kKV3aRkOfNn7"
          />
          <span className="font-headline-sm text-headline-sm text-[#4f1122] tracking-wide hidden sm:inline-block font-serif group-hover:text-[#6b2737] transition-colors">
            CHINAR FLORA
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => onNavigate(item.path)}
                className={`font-label-md text-label-md uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#4f1122] font-bold border-b border-[#4f1122]/40 pb-0.5'
                    : 'text-[#534345] hover:text-[#4f1122]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {/* WhatsApp Direct link */}
          <a 
            className="hidden md:flex items-center gap-2 text-[#534345] hover:text-[#4f1122] transition-colors duration-200" 
            href="https://wa.me/994124900020" 
            rel="noopener noreferrer" 
            target="_blank"
            title="WhatsApp ilə əlaqə"
          >
            <span className="material-symbols-outlined text-[20px] text-[#4f1122]">chat</span>
            <span className="font-label-sm text-label-sm hidden lg:inline tracking-wider uppercase">WhatsApp</span>
          </a>

          {/* Wishlist Button */}
          <button 
            aria-label="Bəyəndiklərim" 
            onClick={onOpenWishlist}
            className="relative text-[#534345] hover:text-[#4f1122] transition-colors duration-200 flex items-center justify-center p-1.5 cursor-pointer rounded-full hover:bg-[#f1ede8]" 
            title="Bəyəndiklərim"
          >
            <span className={`material-symbols-outlined text-[22px] ${wishlistCount > 0 ? 'text-[#ba1a1a]' : ''}`}>
              favorite
            </span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ba1a1a] text-white font-label-sm text-[9px] flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Button */}
          <button 
            aria-label="Səbət" 
            onClick={onOpenCart}
            className="relative text-[#534345] hover:text-[#4f1122] transition-colors duration-200 flex items-center justify-center p-1.5 cursor-pointer rounded-full hover:bg-[#f1ede8]" 
            title="Səbət"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#4f1122] text-[#ffffff] font-label-sm text-[9px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>

          {/* Profile Circle Icon */}
          <div 
            onClick={() => onNavigate('haqqimizda')}
            className="w-8 h-8 rounded-full bg-[#4f1122] hover:bg-[#6b2737] transition-colors cursor-pointer flex items-center justify-center shadow-sm"
            title="Müştəri Kabineti"
          >
            <span className="material-symbols-outlined text-[#ffffff] text-[18px]">person</span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="xl:hidden text-[#4f1122] p-1.5 rounded-lg hover:bg-[#f1ede8]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menyu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fdf9f4] border-b border-[#e6e2dd] px-6 py-5 shadow-xl transition-all">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-label-md text-label-md uppercase tracking-wider py-2 transition-colors ${
                  currentPath === item.path
                    ? 'text-[#4f1122] font-bold'
                    : 'text-[#534345] hover:text-[#4f1122]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#e6e2dd] flex items-center justify-between">
              <a 
                className="flex items-center gap-2 text-[#4f1122] font-label-md uppercase tracking-wider" 
                href="https://wa.me/994124900020" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp ilə Sifariş</span>
              </a>
              <span className="text-[#534345] text-xs">+994 (12) 490 00 20</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

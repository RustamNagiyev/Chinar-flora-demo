import React from 'react';

interface InfoModalProps {
  type: 'haqqimizda' | 'catdirilma' | 'elaqe' | null;
  onClose: () => void;
  onNavigateCatalog?: () => void;
}

export const InfoModals: React.FC<InfoModalProps> = ({
  type,
  onClose,
  onNavigateCatalog,
}) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#1c1c19]/60 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#fdf9f4] rounded-3xl shadow-2xl z-10 border border-[#e6e2dd] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#f7f3ee] border-b border-[#e6e2dd] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#4f1122] text-2xl">
              {type === 'haqqimizda' && 'nature_people'}
              {type === 'catdirilma' && 'local_shipping'}
              {type === 'elaqe' && 'call'}
            </span>
            <h3 className="font-headline-md text-headline-md text-[#4f1122] font-serif">
              {type === 'haqqimizda' && 'Haqqımızda — CHINAR FLORA'}
              {type === 'catdirilma' && 'Çatdırılma və Xidmət Qaydaları'}
              {type === 'elaqe' && 'Bizimlə Əlaqə'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-[#e6e2dd] flex items-center justify-center text-[#735758] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body content based on type */}
        <div className="p-8 overflow-y-auto space-y-6">
          {type === 'haqqimizda' && (
            <>
              <div className="space-y-4 font-body-md text-body-md text-[#534345] leading-relaxed">
                <p>
                  <strong>CHINAR FLORA</strong> — Bakının qəlbində yerləşən, çiçək sənətini və yüksək estetikanı özündə birləşdirən müəllif floristika atelyesidir.
                </p>
                <p>
                  Biz çiçəkləri təkcə bitki kimi deyil, ən səmimi duyğuların, sevginin və hörmətin bənzərsiz dili kimi qəbul edirik. Qönçələrimiz Hollandiya, Ekvador, Kolumbiya və Keniyanın ən nüfuzlu plantasiyalarından hər həftə xüsusi soyuducu reyslərlə birbaşa Bakıya gətirilir.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd]">
                    <span className="font-headline-sm text-[#4f1122] font-serif block">10+ İl</span>
                    <span className="text-xs text-[#735758]">Peşəkar floristika təcrübəsi</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd]">
                    <span className="font-headline-sm text-[#4f1122] font-serif block">25,000+</span>
                    <span className="text-xs text-[#735758]">Təbəssümlə təhvil verilmiş buket</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd]">
                    <span className="font-headline-sm text-[#4f1122] font-serif block">100%</span>
                    <span className="text-xs text-[#735758]">Təravət və dəqiqlik zəmanəti</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {type === 'catdirilma' && (
            <>
              <div className="space-y-5 font-body-sm text-body-sm text-[#534345]">
                <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd] space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#4f1122]">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span>2 Saat Ərzində Ekspress Çatdırılma</span>
                  </div>
                  <p className="text-xs">
                    Sifariş təsdiqləndikdən sonra 120 dəqiqə ərzində Bakı şəhəri daxilində ünvanınıza çatdırılır.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd] space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#4f1122]">
                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                    <span>Öncədən Foto və Video Təsdiqi</span>
                  </div>
                  <p className="text-xs">
                    Buket kuryerə verilməzdən əvvəl baş floristimiz hazır kompozisiyanın şəklini çəkərək sizin WhatsApp nömrənizə göndərir.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd] space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#4f1122]">
                    <span className="material-symbols-outlined text-[18px]">water_drop</span>
                    <span>Aqua-Pack Nəmləndirici Qablaşdırma</span>
                  </div>
                  <p className="text-xs">
                    Hər bir buket xüsusi su kapsulunda daşınır, bu da yol boyu güllərin solmasının qarşısını alır.
                  </p>
                </div>

                <div className="text-xs text-[#735758] pt-2">
                  ✦ 150 AZN üzəri sifarişlər üçün Bakı daxilində çatdırılma tamamilə <strong>ÖDƏNİŞSİZDİR</strong>.
                </div>
              </div>
            </>
          )}

          {type === 'elaqe' && (
            <>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd] flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4f1122] text-xl">location_on</span>
                    <div>
                      <strong className="text-xs font-semibold uppercase tracking-wider text-[#4f1122] block mb-1">
                        Ünvan
                      </strong>
                      <p className="text-xs text-[#534345]">
                        Nizami küçəsi 142, Səbail rayonu, Bakı, Azərbaycan
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd] flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4f1122] text-xl">call</span>
                    <div>
                      <strong className="text-xs font-semibold uppercase tracking-wider text-[#4f1122] block mb-1">
                        Telefon
                      </strong>
                      <p className="text-xs text-[#534345]">
                        +994 (12) 490 00 20<br />
                        +994 (50) 490 00 20
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd] flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4f1122] text-xl">mail</span>
                    <div>
                      <strong className="text-xs font-semibold uppercase tracking-wider text-[#4f1122] block mb-1">
                        E-poçt
                      </strong>
                      <p className="text-xs text-[#534345]">
                        info@chinarflora.az<br />
                        order@chinarflora.az
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f7f3ee] border border-[#e6e2dd] flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4f1122] text-xl">schedule</span>
                    <div>
                      <strong className="text-xs font-semibold uppercase tracking-wider text-[#4f1122] block mb-1">
                        İş Saatları
                      </strong>
                      <p className="text-xs text-[#534345]">
                        Hər gün: 08:30 — 22:30<br />
                        Onlayn sifarişlər: 24/7
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f1ede8] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#25D366] text-2xl">chat</span>
                    <div>
                      <span className="font-semibold text-xs text-[#1c1c19] block">WhatsApp Birbaşa Xətt</span>
                      <span className="text-[11px] text-[#735758]">Dərhal canlı cavab və foto seçimi</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/994124900020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#20b858] transition-colors"
                  >
                    Yazın
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#f7f3ee] border-t border-[#e6e2dd] flex items-center justify-between">
          <span className="text-xs text-[#735758]">CHINAR FLORA • Bakı Butiki</span>
          <div className="flex items-center gap-3">
            {onNavigateCatalog && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateCatalog();
                }}
                className="px-5 py-2 rounded-full bg-[#4f1122] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#6b2737] cursor-pointer"
              >
                Kataloqa Keç
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-[#e6e2dd] text-xs font-semibold text-[#534345] hover:bg-[#e6e2dd] cursor-pointer"
            >
              Bağla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

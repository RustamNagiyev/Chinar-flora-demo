import React, { useState } from 'react';

interface CalligraphyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveMessage?: (text: string) => void;
}

export const CalligraphyModal: React.FC<CalligraphyModalProps> = ({
  isOpen,
  onClose,
  onSaveMessage,
}) => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('Həyatımın ən parlaq çiçəyinə, hər zaman xoşbəxt və təbəssümlü qalmağın diləyi ilə...');
  const [signature, setSignature] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    const fullText = `${recipient ? `Hörmətlə ${recipient},\n` : ''}${message}${signature ? `\n\n— ${signature}` : ''}`;
    if (onSaveMessage) {
      onSaveMessage(fullText);
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#1c1c19]/60 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#fdf9f4] rounded-3xl shadow-2xl z-10 border border-[#e6e2dd] overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#f7f3ee] border-b border-[#e6e2dd] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#4f1122]">stylus_note</span>
            <h3 className="font-headline-sm text-headline-sm text-[#4f1122] font-serif">
              Fərdi Kalliqrafik Məktub
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#e6e2dd] flex items-center justify-center text-[#735758] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-[#534345] leading-relaxed">
            Hər bir sifarişə Florentin kağızında baş xəttatımız tərəfindən mürəkkəblə yazılan xüsusi təbrik kartı daxildir. Zəhmət olmasa arzu etdiyiniz mətni qeyd edin.
          </p>

          <div className="space-y-3">
            <div>
              <label className="text-[11px] font-semibold text-[#4f1122] uppercase tracking-wider block mb-1">
                Kimə:
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Məs: Əziz Leyla"
                className="w-full text-xs bg-[#ffffff] border border-[#e6e2dd] rounded-xl px-3 py-2.5 text-[#1c1c19] focus:outline-none focus:border-[#4f1122]"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-[#4f1122] uppercase tracking-wider block mb-1">
                Təbrik Mətni:
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ürək sözlərinizi daxil edin..."
                className="w-full text-xs bg-[#ffffff] border border-[#e6e2dd] rounded-xl p-3 text-[#1c1c19] focus:outline-none focus:border-[#4f1122]"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-[#4f1122] uppercase tracking-wider block mb-1">
                İmza (Kimdən):
              </label>
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="Məs: Sevgiylə, Rəşad"
                className="w-full text-xs bg-[#ffffff] border border-[#e6e2dd] rounded-xl px-3 py-2.5 text-[#1c1c19] focus:outline-none focus:border-[#4f1122]"
              />
            </div>
          </div>

          {/* Live Preview Paper */}
          <div className="mt-4 p-5 rounded-2xl bg-[#fffefc] border border-[#d8c1c3]/70 shadow-inner relative font-serif">
            <div className="absolute top-2 right-3 text-[10px] uppercase font-sans tracking-widest text-[#735758]/60">
              Kalliqrafiya Önbaxışı
            </div>
            {recipient && (
              <p className="text-sm font-semibold text-[#4f1122] mb-2 italic">
                {recipient},
              </p>
            )}
            <p className="text-sm text-[#1c1c19] leading-relaxed italic">
              {message || 'Mətn daxil edilməyib...'}
            </p>
            {signature && (
              <p className="text-right text-xs text-[#4f1122] mt-3 italic font-semibold">
                — {signature}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 bg-[#f7f3ee] border-t border-[#e6e2dd] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[#e6e2dd] text-xs font-semibold uppercase tracking-wider text-[#534345] hover:bg-[#e6e2dd] transition-colors cursor-pointer"
          >
            Ləğv et
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-full bg-[#4f1122] text-[#ffffff] text-xs font-semibold uppercase tracking-wider hover:bg-[#6b2737] transition-colors shadow-sm cursor-pointer"
          >
            {savedSuccess ? 'Yadda Saxlanıldı ✓' : 'Mətni Təsdiqlə'}
          </button>
        </div>
      </div>
    </div>
  );
};

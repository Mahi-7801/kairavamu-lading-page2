import { useEffect, useState } from 'react';


export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 transition-all duration-500 md:right-6 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <a href="tel:+917998777666" aria-label="Call Kairavam" className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white shadow-luxury-lg transition-transform hover:scale-110 animate-pulse-gold">
        <span className="material-symbols-outlined text-xl">phone</span>
      </a>
      <a href="https://wa.me/918478060606" target="_blank" rel="noopener" aria-label="WhatsApp Kairavam" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury-lg transition-transform hover:scale-110">
        <span className="material-symbols-outlined text-2xl">chat</span>
      </a>
    </div>
  );
}

export function OfferRibbon() {
  return null;
}

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('kairavam_popup_seen')) return;
    const onScroll = () => {
      const halfway = document.documentElement.scrollHeight * 0.5;
      if (window.scrollY + window.innerHeight >= halfway && !seen) {
        setOpen(true);
        setSeen(true);
        sessionStorage.setItem('kairavam_popup_seen', '1');
      }
    };
    window.addEventListener('scroll', onScroll, { once: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [seen]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/60 bg-white p-7 shadow-luxury-lg animate-scale-in">
        <button onClick={() => setOpen(false)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink-50 text-ink-700" aria-label="Close">
            <span className="material-symbols-outlined text-base">close</span>
        </button>
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-white shadow-gold animate-pulse-gold">
            <span className="material-symbols-outlined text-3xl">local_offer</span>
          </div>
        </div>
        <h3 className="mt-4 text-center font-display text-3xl font-semibold text-ink-900">Wait! Don't Miss Your Chance</h3>
        <p className="mt-2 text-center text-sm text-ink-600">Get exclusive offers on selected treatments. Limited time only!</p>
        <div className="mt-5 flex flex-col gap-3">
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold w-full"><span className="material-symbols-outlined text-base">calendar_today</span> Book Consultation Now</a>
          <a href="https://wa.me/918478060606" target="_blank" rel="noopener" className="btn-whatsapp w-full"><span className="material-symbols-outlined text-base">chat</span> WhatsApp for Offer</a>
        </div>
        <p className="mt-4 text-center text-[11px] text-ink-400">Limited appointments available</p>
      </div>
    </div>
  );
}

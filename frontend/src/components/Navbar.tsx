import { useEffect, useState } from 'react';


const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about-doctor', label: 'About Doctor' },
  { href: '#treatments', label: 'PMU Treatments' },
  { href: '#results', label: 'Results' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/85 shadow-luxury backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-lg font-semibold text-white shadow-gold">
              K
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-semibold text-ink-900">Kairavam</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-champagne-600">PMU & Aesthetic Studio</div>
            </div>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-ink-700 transition-colors hover:text-champagne-600"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="https://wa.me/918478060606" target="_blank" rel="noopener" className="btn-whatsapp !px-5 !py-2.5 text-xs">
              <span className="material-symbols-outlined text-base">chat</span> WhatsApp
            </a>
            <a href="#contact" className="btn-gold !px-5 !py-2.5 text-xs">Book Consultation</a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-300 bg-white/70 text-ink-800 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white p-6 shadow-luxury-lg animate-scale-in">
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-semibold text-ink-900">Menu</span>
              <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-700" aria-label="Close menu">
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            <ul className="mt-8 flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-champagne-50 hover:text-champagne-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3">
              <a href="https://wa.me/918478060606" target="_blank" rel="noopener" className="btn-whatsapp w-full">
                <span className="material-symbols-outlined text-base">chat</span> WhatsApp Now
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold w-full">Book Consultation</a>
              <a href="tel:+917998777666" className="btn-outline w-full">
                <span className="material-symbols-outlined text-base">phone</span> Call 79987 77666
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 px-4 py-14 text-ink-200 md:px-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-champagne-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-champagne-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-lg font-semibold text-white">K</div>
            <div>
              <div className="font-display text-xl font-semibold text-white">Kairavam</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-champagne-300">PMU & Aesthetic Studio</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            Premium Permanent Makeup clinic in Vijayawada — PMU Brows, Lip Blush, Eyeliner PMU, Brow Correction &
            Scalp Micropigmentation. Natural results, premium pigments.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold-gradient"><span className="material-symbols-outlined text-base">camera</span></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Treatments</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-300">
            {['PMU Brows', 'Lip Blush', 'Eyeliner PMU', 'Brow Correction', 'Scalp Micropigmentation'].map((t) => (
              <li key={t}><a href="#treatments" className="transition hover:text-champagne-300">{t}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-300">
            <li><a href="#about-doctor" className="transition hover:text-champagne-300">About Doctor</a></li>
            <li><a href="#results" className="transition hover:text-champagne-300">Before & After</a></li>
            <li><a href="#reviews" className="transition hover:text-champagne-300">Reviews</a></li>
            <li><a href="#faq" className="transition hover:text-champagne-300">FAQ</a></li>
            <li><a href="#contact" className="transition hover:text-champagne-300">Book Consultation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Get In Touch</h4>
          <ul className="mt-3 space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-base mt-0.5 flex-shrink-0 text-champagne-400">location_on</span> Fortune Murali Park Road, Above Apollo Pharmacy, 3rd Floor, Moghalrajpuram, Vijayawada – 520010</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base flex-shrink-0 text-champagne-400">schedule</span> 10:00 AM – 8:00 PM</li>
            <li><a href="tel:+917998777666" className="flex items-center gap-2 transition hover:text-champagne-300"><span className="material-symbols-outlined text-base text-champagne-400">phone</span> 79987 77666</a></li>
            <li><a href="https://wa.me/918478060606" target="_blank" rel="noopener" className="flex items-center gap-2 transition hover:text-champagne-300"><span className="material-symbols-outlined text-base text-champagne-400">chat</span> 84780 60606 (WhatsApp)</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-ink-400">
          Looking for the best <span className="text-champagne-300">Permanent Makeup Clinic in Vijayawada</span>? Kairavam serves clients from Vijayawada, Benz Circle, Moghalrajpuram, Labbipet, Poranki, Gunadala and surrounding areas.
        </p>
        <p className="mt-3 text-[11px] text-ink-500">© {new Date().getFullYear()} Kairavam PMU & Aesthetic Studio. All rights reserved.</p>
        <p className="mt-2 text-[11px] text-ink-500">Powered by <a href="https://digitalverto.com" target="_blank" rel="noopener noreferrer" className="text-champagne-400 transition hover:text-champagne-300">Digital Verto</a></p>
      </div>
    </footer>
  );
}

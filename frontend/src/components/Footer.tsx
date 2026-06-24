
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../utils';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white px-4 py-14 text-ink-600 md:px-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo_kairavam.png" alt="Kairavam" className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-500">
            Premium Permanent Makeup clinic in Vijayawada — PMU Brows, Lip Blush, Eyeliner PMU, Brow Correction &
            Scalp Micropigmentation. Natural results, premium pigments.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition hover:bg-gold-gradient hover:text-white"><span className="material-symbols-outlined text-base">camera</span></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-ink-900">Treatments</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            {['PMU Brows', 'Lip Blush', 'Eyeliner PMU', 'Brow Correction', 'Scalp Micropigmentation'].map((t) => (
              <li key={t}><a href="#treatments" className="transition hover:text-gold-600">{t}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-ink-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><a href="#about-doctor" className="transition hover:text-gold-600">About Doctor</a></li>
            <li><a href="#results" className="transition hover:text-gold-600">Before & After</a></li>
            <li><a href="#reviews" className="transition hover:text-gold-600">Reviews</a></li>
            <li><a href="#faq" className="transition hover:text-gold-600">FAQ</a></li>
            <li><a href="#contact" className="transition hover:text-gold-600">Book Consultation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-ink-900">Get In Touch</h4>
          <ul className="mt-3 space-y-3 text-sm text-ink-500">
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-base mt-0.5 flex-shrink-0 text-gold-500">location_on</span> Fortune Murali Park Road, Above Apollo Pharmacy, 3rd Floor, Moghalrajpuram, Vijayawada – 520010</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base flex-shrink-0 text-gold-500">schedule</span> 10:00 AM – 8:00 PM</li>
            <li><a href="tel:+917998777666" className="flex items-center gap-2 transition hover:text-gold-600"><span className="material-symbols-outlined text-base text-gold-500">phone</span> 79987 77666</a></li>
            <li><a href={getWhatsAppUrl()} target="_blank" rel="noopener" className="flex items-center gap-2 transition hover:text-gold-600"><WhatsAppIcon className="text-base text-gold-500" /> 84780 60606 (WhatsApp)</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-cream-200 pt-6 text-center">
        <p className="text-xs text-ink-500">
          Looking for the best <span className="text-gold-600">Permanent Makeup Clinic in Vijayawada</span>? Kairavam serves clients from Vijayawada, Benz Circle, Moghalrajpuram, Labbipet, Poranki, Gunadala and surrounding areas.
        </p>
        <p className="mt-3 text-[11px] text-ink-400">© {new Date().getFullYear()} Kairavam PMU & Aesthetic Studio. All rights reserved.</p>
        <p className="mt-2 text-[11px] text-ink-400">
          Powered by <a href="https://digitalverto.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-500 transition hover:text-gold-600">Digital Verto</a>
          <img src="/dv-logo.png" alt="Digital Verto" className="ml-1 inline-block h-[30px] w-auto animate-wave align-middle transition hover:opacity-80" />
        </p>
      </div>
    </footer>
  );
}

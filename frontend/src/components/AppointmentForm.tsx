import { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../utils';


const TREATMENTS = ['Carbon Laser', 'Laser Toning', 'Laser Hair Reduction', 'Hair GFC', 'Hair Transplant', 'PMU Brows', 'Lip Blush', 'Scalp Micropigmentation', 'Consultation Only'];

type Errors = Partial<Record<keyof typeof initialForm, string>>;

const initialForm = { name: '', phone: '', email: '', treatment: TREATMENTS[0], preferred_date: '', message: '' };

const VALIDATORS: Record<string, (v: string) => string | null> = {
  name: (v) => !v.trim() ? 'Name is required' : /^[a-zA-Z\s]{2,50}$/.test(v.trim()) ? null : 'Enter a valid name (letters only)',
  phone: (v) => !v.trim() ? 'Phone is required' : /^[6-9]\d{9}$/.test(v.trim()) ? null : 'Enter a valid 10-digit Indian mobile number',
  email: (v) => !v.trim() ? null : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Enter a valid email address',
  preferred_date: (v) => {
    if (!v) return null;
    const d = new Date(v);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d >= today ? null : 'Date must be today or later';
  },
  message: () => null,
};

export function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const API = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const update = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (touched.has(k)) {
      const err = VALIDATORS[k]?.(v);
      setErrors((p) => ({ ...p, [k]: err }));
    }
  };

  const blur = (k: string) => {
    setTouched((p) => new Set(p).add(k));
    const err = VALIDATORS[k]?.(form[k as keyof typeof form]);
    setErrors((p) => ({ ...p, [k]: err }));
  };

  const validate = () => {
    const errs: Errors = {};
    for (const k of Object.keys(VALIDATORS)) {
      const err = VALIDATORS[k]?.(form[k as keyof typeof form]);
      if (err) errs[k as keyof Errors] = err;
    }
    setErrors(errs);
    setTouched(new Set(Object.keys(VALIDATORS)));
    return Object.keys(errs).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch(`${API}/api/consultation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send');

      const msg = `Hello Kairavam, I'd like to book a PMU consultation.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ATreatment: ${encodeURIComponent(form.treatment)}%0APreferred Date: ${encodeURIComponent(form.preferred_date)}%0AMessage: ${encodeURIComponent(form.message)}`;
      window.open(`https://wa.me/918478060606?text=${msg}`, '_blank', 'noopener');

      setStatus('success');
      setForm(initialForm);
      setErrors({});
      setTouched(new Set());
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-champagne-radial px-4 py-20 md:px-8">
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-champagne-200/40 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal">
          <span className="section-eyebrow">✦ Contact Us</span>
          <h2 className="mt-3 section-title">Kairavam PMU & <span className="gold-text">Aesthetic Studio</span></h2>
          <p className="mt-3 text-ink-600">Book your consultation today. Limited appointments available with up to 40% OFF on selected treatments.</p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-luxury backdrop-blur">
              <span className="material-symbols-outlined text-xl mt-0.5 flex-shrink-0 text-champagne-600">location_on</span>
              <div className="text-sm text-ink-700">
                Fortune Murali Park Road, Above Apollo Pharmacy, 3rd Floor, Moghalrajpuram, Vijayawada – 520010
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-luxury backdrop-blur">
                <span className="material-symbols-outlined text-xl flex-shrink-0 text-champagne-600">schedule</span>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-500">Clinic Hours</div>
                  <div className="text-sm font-semibold text-ink-800">10:00 AM – 8:00 PM</div>
                </div>
              </div>
              <a href="tel:+917998777666" className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-luxury backdrop-blur transition hover:border-champagne-300">
                <span className="material-symbols-outlined text-xl flex-shrink-0 text-champagne-600">phone</span>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-500">Call</div>
                  <div className="text-sm font-semibold text-ink-800">79987 77666</div>
                </div>
              </a>
            </div>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener" className="btn-whatsapp w-full justify-center">
              <WhatsAppIcon className="text-base" /> WhatsApp: 84780 60606
            </a>

            <div className="mt-2 overflow-hidden rounded-2xl border border-champagne-200 shadow-luxury">
              <iframe
                title="Kairavam PMU Studio Location - Vijayawada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650.852375143656!2d80.64465607460865!3d16.504568027637607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb1531f3efc5%3A0xf99a9d5c3d3ccae6!2sKairavam!5e0!3m2!1sen!2sin!4v1781778191420!5m2!1sen!2sin"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gold-gradient opacity-15 blur-2xl" />
          <form onSubmit={submit} noValidate className="relative rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-luxury-lg backdrop-blur-xl md:p-8">
            <div className="flex items-center gap-2 text-champagne-600">
              <span className="material-symbols-outlined text-xl">calendar_month</span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">Book Your Consultation</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">Up To 40% OFF — Limited Slots</h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *" error={touched.has('name') ? errors.name : undefined}>
                <input value={form.name} onChange={(e) => update('name', e.target.value)} onBlur={() => blur('name')} className="input" placeholder="Your name" />
              </Field>
              <Field label="Phone *" error={touched.has('phone') ? errors.phone : undefined}>
                <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} onBlur={() => blur('phone')} className="input" placeholder="10-digit mobile" />
              </Field>
              <Field label="Email" error={touched.has('email') ? errors.email : undefined}>
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} onBlur={() => blur('email')} className="input" placeholder="you@email.com" />
              </Field>
              <Field label="Preferred Date" error={touched.has('preferred_date') ? errors.preferred_date : undefined}>
                <input type="date" value={form.preferred_date} onChange={(e) => update('preferred_date', e.target.value)} onBlur={() => blur('preferred_date')} className="input" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Treatment">
                  <select value={form.treatment} onChange={(e) => update('treatment', e.target.value)} className="input">
                    {TREATMENTS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message">
                  <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={3} className="input resize-none" placeholder="Tell us about your goals (optional)" />
                </Field>
              </div>
            </div>

            <button type="submit" disabled={status === 'loading'} className="btn-gold mt-6 w-full">
              {status === 'loading' ? (<><span className="material-symbols-outlined text-base animate-spin">refresh</span> Sending…</>) : status === 'success' ? (<><span className="material-symbols-outlined text-base">check_circle</span> Request Sent!</>) : 'Book Consultation'}
            </button>
            {status === 'success' && <p className="mt-3 text-center text-xs text-green-700">We received your request. Opening WhatsApp to confirm your appointment…</p>}
            {status === 'error' && <p className="mt-3 text-center text-xs text-champagne-700">Something went wrong. Please WhatsApp us directly at 84780 60606.</p>}
            <p className="mt-3 text-center text-[11px] text-ink-500">By submitting, you agree to be contacted about your PMU consultation.</p>
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #EDE1D6;
          background: rgba(255,255,255,0.7);
          padding: 0.625rem 0.85rem;
          font-size: 0.875rem;
          color: #242E28;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          outline: none;
          border-color: #A68263;
          box-shadow: 0 0 0 3px rgba(166,130,99,0.18);
        }
        .input-error {
          border-color: #d4645a !important;
        }
        .input-error:focus {
          box-shadow: 0 0 0 3px rgba(212,100,90,0.18) !important;
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink-500">{label}</span>
      {children}
      {error && <span className="mt-1 block text-[11px]" style={{ color: '#d4645a' }}>{error}</span>}
    </label>
  );
}

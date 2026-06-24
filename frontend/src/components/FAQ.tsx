import { useState } from 'react';


const FAQS = [
  { q: 'How Long Does PMU Last?', a: 'Results can last several years depending on skin type, lifestyle and aftercare. Periodic touch-ups help maintain freshness.' },
  { q: 'Is PMU Painful?', a: 'Most clients experience minimal discomfort during the procedure. Topical numbing is used to enhance comfort throughout.' },
  { q: 'How Long Is The Recovery Period?', a: 'Mild healing generally occurs within a few days to a few weeks. Detailed aftercare guidance is provided after each session.' },
  { q: 'Can Old Brows Be Corrected?', a: 'Yes. Brow correction techniques can improve previous PMU or tattoo work, restoring symmetry and a natural appearance.' },
  { q: 'Is Lip Blush Safe?', a: 'Yes. The procedure is performed using professional pigments and hygienic techniques in a sterile clinical environment.' },
  { q: 'What Is Scalp Micropigmentation?', a: 'SMP is a non-surgical procedure that creates the appearance of fuller hair using specialized pigmentation techniques.' },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ Frequently Asked Questions</span>
          <h2 className="mt-3 section-title">Everything You <span className="forest-text">Want To Know</span></h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal overflow-hidden rounded-2xl border border-cream-200 bg-white/70 shadow-luxury backdrop-blur">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-lg font-semibold text-ink-900">{f.q}</span>
                  <span className={`material-symbols-outlined flex-shrink-0 text-gold-600 transition-transform duration-300 text-xl ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

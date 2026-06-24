import { useState } from 'react';
import { BeforeAfter, PMU_VISUALS } from './BeforeAfter';

const HIGHLIGHTS = [
  { icon: 'auto_awesome', label: 'Enhanced Brows' },
  { icon: 'mood', label: 'Naturally Tinted Lips' },
  { icon: 'visibility', label: 'Defined Eyes' },
  { icon: 'content_cut', label: 'Improved Facial Symmetry' },
  { icon: 'trending_up', label: 'Fuller Looking Scalp' },
  { icon: 'trending_up', label: 'Confidence Boosting Results' },
];

export function Results() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="results" className="relative px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ Before & After Results</span>
          <h2 className="mt-3 section-title">Real Beauty <span className="forest-text">Transformations</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-600">Drag the slider to reveal the natural difference PMU can make.</p>
        </div>

        {/* Before & After Interactive Slider */}
        <div className="reveal mt-10 flex flex-col items-center">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 rounded-full border border-cream-200 bg-white/50 p-1.5 backdrop-blur shadow-luxury">
            {PMU_VISUALS.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-gold-gradient text-white shadow-luxury'
                    : 'text-ink-700 hover:bg-cream-50 hover:text-gold-700'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* Slider Container */}
          <div className="w-full max-w-2xl px-2">
            <BeforeAfter visual={PMU_VISUALS[activeTab]} />
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="flex flex-col items-center gap-2 rounded-2xl border border-white/70 bg-white/70 p-4 text-center shadow-luxury backdrop-blur transition-all hover:-translate-y-1 hover:border-cream-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50 text-gold-600">
                <span className="material-symbols-outlined text-xl">{h.icon}</span>
              </div>
              <span className="text-xs font-medium text-ink-700">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

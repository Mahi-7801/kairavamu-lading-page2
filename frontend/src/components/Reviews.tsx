

import { useRef, useState } from 'react';

interface ReviewPhoto {
  src: string;
}

interface GoogleReview {
  author: string;
  avatar: string | null;
  stars: number;
  role: string;
  date: string;
  text: string;
  services?: string[];
  photos?: string[];
  link?: string;
  source: string;
}

const REVIEWS: GoogleReview[] = [
  {
    author: "Swathi Komakula (swathikomakula24)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXVH1IijQteqyI8awHOzPLQxJA4kl2otblwIbjr-T5_cQK0aKU=w90-h90-p-rp-mo-ba12-br100",
    stars: 5,
    role: "Local Guide · 15 reviews · 4 photos",
    date: "a year ago",
    text: "✨ Amazing Hair Botox Experience at Kairavaram Salon! ✨\n\nI recently had a Hair Botox treatment at Kairavaram Salon, and I couldn't be happier with the results! From start to finish, the experience was absolutely fantastic. The team was professional, attentive, and made sure I was comfortable throughout the process.\n\nMy hair feels silky smooth, frizz-free, and healthier than ever! The shine and softness are truly unbelievable, and I can already feel the long-lasting benefits of the treatment. The salon ambiance was relaxing, and the service was top-notch.\n\nIf you're looking for expert hair care and a transformation that makes you fall in love with your hair again, I highly recommend Kairavaram Salon! Thank you for the incredible service! ✨",
    services: ["Hairstyling"],
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3HjMozC75nTEVvysL4PN__CSQ76sBYNCZJ0g1s03KMJauZKKOLh0kyaU57eXCsksN4bfUe80YYAvVXsKjOqLyf02wLzARlaBEPgF5rI64440nHmUm-GRNmCj2ujXr6NIbfLGDR=s157-p-k-rw",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2bYrlpX_fkYIPYN_84yk-DdiBHwtmFMVEYNg-7c_dzP0NBEknHhb6b1f5x_8ItfwmhAmHIrwUs0e983YxlocwFv4eLdyJy2HEmcv4r3Lc2uUpb-SdJRpzuO2mMUBOaFyzGcKKm=s157-p-k-rw"
    ],
    source: "Google Maps"
  },
  {
    author: "Dr.Arshad Shaik",
    avatar: null,
    stars: 5,
    role: "1 review · 3 photos",
    date: "10 months ago",
    text: "Mr Reehan..\nHad done a very good styling with a decent look\nVery much satisfied with the service\nMust visit",
    services: ["Shampoo & conditioning", "Shaving", "Hairstyling"],
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3gAlWC-VwcQGLQZ8LqGUzgWQu_DAVtUUKWlm-goSmB4SnmOHIDQgRuY5-XSnd-o6z5MuskTcd0jIe0Wgny-WoDvJf4XlYPh_q-ObtX5hE5pLrNzW7ms5YsytL-V-FmUanYIz1Nv0hpLwya=s157-p-k-rw",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1cEc-XjP4-lo9vdxKppQbECGMlaQbH7Zml1HHuR0KGcUIp_rXCpJ9K2hG7aYSA3HuAAwetSMyMROwWC2RQ2R36TKF2ax2MEdVG9eogwYvp1MIfKITFVKSvypFvmEKtmi6xAmCLguhavcY=s157-p-k-rw",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2gGKGfxs4jLlpRSfNEp_nDmG-DBqIwMLp-vq5WkebKbMxNQ__KdXV-X8nbjNN4Nr1HzL5kAeDQHNFqnR6lgscU6Mh_fPICySrKAXtwk8V1kZ50i-cCUavImXsk-JTqmwMhfcZGXgT6Jx3m=s157-p-k-rw"
    ],
    source: "Google Maps"
  },
  {
    author: "saiprakash tirupati",
    avatar: null,
    stars: 5,
    role: "3 reviews · 1 photo",
    date: "a year ago",
    text: "Wonderful Facial Treatment,Super relaxing thinking about details such as Lighting,Soft music.....staff are well trained and professional...and my skin was silky soft afterwards 💕... Haircut and Beard was done Greatly.....\n\nWorthy for every single rupee..\n\nHere you can VIP Rooms...I took that one only.. I'm posting my review and Photo.... Definately Biggest salon in Andhra Pradesh",
    services: ["Haircut", "Manicure", "Shampoo & conditioning", "Blowouts", "Shaving"],
    link: "https://maps.app.goo.gl/BTTjxbWby2cxPYUG9",
    source: "Google Maps"
  },
  {
    author: "chandu sapparapu",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWtXvJ8R-qyqlW51fZua2at-fnE13rU1bedsTY-eBiOw4oGSaBr=w45-h45-p-rp-mo-br100",
    stars: 5,
    role: "4 reviews",
    date: "a year ago",
    text: "Best experience in this salon me and my family have visited they doing kids haircut also and my kid was not crying at all....Very happy after the haircut..for kids and ladies Best Salon in Vijayawada.....\n\nThey are offering VIP Rooms Also for Premium Customers and Kitty parties also there for Ladies package....",
    services: ["Haircut", "Manicure", "Shampoo & conditioning", "Eyebrow beautification", "Blowouts", "Body waxing", "Hairstyling", "Pedicure", "Waxing", "Facials"],
    source: "Google Maps"
  },
  {
    author: "Bharath Gupta",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUsQDvwQSBCy32xfp91tlArUjFkTuJE93TsAkhgwiFpqJk9wvFZjg=w45-h45-p-rp-mo-ba12-br100",
    stars: 5,
    role: "Local Guide · 139 reviews · 201 photos",
    date: "a year ago",
    text: "Amazing experience\nWorth every penny\n\nHad de tan treatment and shaving.\nThe staff is extremely professional and well versed in their crafts\n\nHighly recommended",
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2jT5PvI_Ir9lZc437dYgv9pWKt9aoMr2NZ9ECUl3JpR89v3_2aRUDjuJuZHaG99v2rYE-d6lxcdJpvVOVjkZmE3VV6WyfA4NYkze_D8oySNz0EV123fYPtLb6_8aWW1cZAJz3W=s157-p-k-rw"
    ],
    source: "Google Maps"
  },
  {
    author: "Pavan Naidu",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUew5R_S0awCUNddFiJqpyArLktQ9GzXhCOSFOIqiq9rzKnH1iX=w90-h90-p-rp-mo-br100",
    stars: 5,
    role: "1 review",
    date: "a month ago",
    text: "I had a really nice experience at this place. The atmosphere was pleasant, the staff were friendly and helpful, and everything was well maintained. I truly enjoyed my time here and would definitely recommend it to others.",
    source: "Google Maps"
  },
  {
    author: "BOBBY .08",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUgZjFjbbyAU_bK4O8xLowj-sdFWL0ia4VDbryrOl2Onpzqqt1KWA=w90-h90-p-rp-mo-ba12-br100",
    stars: 5,
    role: "Local Guide · 7 reviews · 34 photos",
    date: "10 months ago",
    text: "Recently visited Kairavam Hair Saloon and was impressed from start to finish. The ambience is modern, clean, and relaxing & also a place where you instantly feel comfortable. The service was attentive and professional, with the staff ensuring every detail was taken care of. Pricing is reasonable for the quality, and the friendly team makes you feel like a valued guest. Their membership plan is genuinely worth it, offering great savings and perks. I especially appreciated the free, expert guidance on hair care, which felt personalised and genuinely helpful. Definitely a must visit place.",
    source: "Google Maps"
  },
  {
    author: "AKSHARA VUMMITI",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVlLW7n5oRqjhGFOcSmHqduQLVaBdqM_4hjQUp4IGHYo33AdTw2=w90-h90-p-rp-mo-br100",
    stars: 5,
    role: "7 reviews",
    date: "10 months ago",
    text: "Really good service! They did my eyebrows very nicely, waxing was smooth, and the hair spa made my hair feel soft and healthy. The place looks nice and has a relaxing vibe. I liked it a lot.\nHighly recommend!",
    source: "Google Maps"
  },
  {
    author: "Venkataapparao Yandrapu",
    avatar: null,
    stars: 5,
    role: "1 review · 1 photo",
    date: "a year ago",
    text: "Services are next level and Hospitality is another next level...They are greeting customers in a Good way....If any problem is there they are telling us before the service then they are doing the Services...",
    services: ["Haircut", "Manicure", "Shampoo & conditioning", "Pedicure", "Online beauty salon booking"],
    source: "Google Maps"
  },
  {
    author: "SRAVYA KODATI",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUbSLAaSRLxDHFrhnsH5wlVcAnH8qt8G0vk-NKJ2zjobfrVU1Y=w90-h90-p-rp-mo-br100",
    stars: 5,
    role: "2 reviews",
    date: "a year ago",
    text: "Recently, I have undergone hair spa and hair cut service. It was good and done by Sameer. The ambience is nice. One of the premium salons in vijayawada.",
    services: ["Spa services"],
    source: "Google Maps"
  }
];

function InstaVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };
  return (
    <button type="button" onClick={toggle} className="group relative aspect-square overflow-hidden rounded-2xl bg-ink-100 text-left">
      <video ref={ref} src={src} className="h-full w-full object-cover" muted loop playsInline onEnded={() => setPlaying(false)} />
      {!playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition-all group-hover:bg-black/30">
          <span className="material-symbols-outlined text-4xl text-white/90">play_circle</span>
        </div>
      )}
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
        <span className="material-symbols-outlined text-sm">play_arrow</span> Instagram Reel
      </div>
    </button>
  );
}

export function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-champagne-50 to-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ Google Reviews</span>
          <h2 className="mt-3 section-title">Loved By Clients <span className="gold-text">Across Vijayawada</span></h2>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-champagne-200 bg-white px-4 py-1.5 shadow-sm">
            <span className="text-champagne-500">★★★★★</span>
            <span className="text-sm font-semibold text-ink-800">5.0 Rating</span>
            <span className="text-xs text-ink-500">· {REVIEWS.length} Reviews</span>
          </div>
        </div>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-champagne-50 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />
        <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <figure key={i} className="w-[320px] flex-shrink-0 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-luxury backdrop-blur md:w-[400px]">
              <div className="flex items-center gap-3">
                {r.avatar ? (
                  <img src={r.avatar} alt={r.author} className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne-200 text-sm font-semibold text-champagne-700">
                    {r.author.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="truncate text-sm font-semibold text-ink-900">{r.author}</div>
                  <div className="text-[11px] text-ink-500 truncate">{r.role}</div>
                </div>
              </div>
              <blockquote className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-700">{r.text}</blockquote>
              {r.photos && r.photos.length > 0 && (
                <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
                  {r.photos.map((p, pi) => (
                    <img key={pi} src={p} alt="" className="h-16 w-16 flex-shrink-0 rounded-lg object-cover" />
                  ))}
                </div>
              )}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-ink-500">{r.date}</div>
                <div className="flex gap-0.5 text-champagne-500">
                  {Array.from({ length: r.stars }).map((_, si) => <span key={si} className="material-symbols-outlined text-sm fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>)}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Instagram Section */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-pink-100 bg-gradient-to-r from-pink-50/80 to-purple-50/80 px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="url(#ig-gradient)">
              <defs>
                <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24">
                  <stop offset="0%" stopColor="#feda75" />
                  <stop offset="25%" stopColor="#fa7e1e" />
                  <stop offset="50%" stopColor="#d62976" />
                  <stop offset="75%" stopColor="#962fbf" />
                  <stop offset="100%" stopColor="#4f5bd5" />
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-900">kairavam</h3>
              <p className="text-[11px] text-ink-500">Beauty &amp; Aesthetics</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/kairavam_/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-5 py-2 text-xs font-bold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
          >
            Follow
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {['hollywood-peel.mp4', 'luxury-salon.mp4', 'new-look.mp4', 'pmu-eyebrows.mp4'].map((v) => (
            <InstaVideo key={v} src={`/instgram-videos/${v}`} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.instagram.com/kairavam_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Watch on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

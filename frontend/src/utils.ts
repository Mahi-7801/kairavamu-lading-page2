const WHATSAPP_NUMBER = '918478060606';

const SERVICES_LIST = [
  'PMU Brows (Microblading / Ombre / Combination)',
  'Lip Blush',
  'Eyeliner PMU',
  'Brow Correction',
  'Scalp Micropigmentation (SMP)',
  'Carbon Laser',
  'Laser Toning',
  'Laser Hair Reduction',
  'Hair GFC',
  'Hair Transplant',
];

export const WHATSAPP_SERVICES_MSG =
  `Hi! 👋 I'd like to know more about your services:%0A%0A${SERVICES_LIST.map((s, i) => `${i + 1}. ${s}`).join('%0A')}%0A%0ACould you please share details & pricing?`;

export function getWhatsAppUrl(msg?: string) {
  const text = msg ? encodeURIComponent(msg) : WHATSAPP_SERVICES_MSG;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

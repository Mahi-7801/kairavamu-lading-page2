import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChoose } from './components/WhyChoose';
import { About } from './components/About';
import { Results } from './components/Results';
import { Treatments } from './components/Treatments';
import { Procedure } from './components/Procedure';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';
import { FloatingActions, OfferRibbon, ExitIntentPopup } from './components/Floating';
import { useRevealAll } from './hooks/useReveal';

export default function App() {
  useRevealAll();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div className="relative min-h-screen bg-cream-100">
      <OfferRibbon />
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <About />
        <Treatments />
        <Results />
        <Procedure />
        <Reviews />
        <FAQ />
        <AppointmentForm />
      </main>
      <Footer />
      <FloatingActions />
      <ExitIntentPopup />
    </div>
  );
}

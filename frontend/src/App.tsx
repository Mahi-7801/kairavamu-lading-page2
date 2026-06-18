import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChoose } from './components/WhyChoose';
import { AboutDoctor } from './components/AboutDoctor';
import { Treatments } from './components/Treatments';
import { Results } from './components/Results';
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
    <div className="relative min-h-screen bg-champagne-50/40">
      <OfferRibbon />
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <AboutDoctor />
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

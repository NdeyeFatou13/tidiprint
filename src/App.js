import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// Importez d'autres composants si nécessaire

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      disable: false, // Activer les animations sur tous les appareils
    });

    // Fonction pour rafraîchir AOS lors du défilement
    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', refreshAOS);
    return () => window.removeEventListener('scroll', refreshAOS);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      {/* Ajoutez d'autres composants ici */}
    </div>
  );
}

export default App;
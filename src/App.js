import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // false permet aux animations de se répéter
      mirror: true, // permet aux animations de se déclencher lors du défilement vers le haut aussi
    });
  }, []);

  // Ajoutez cette fonction pour rafraîchir AOS lors du défilement
  useEffect(() => {
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
      <Portfolio/>
      <Contact/>
      {/* Ajoutez ici les autres composants lorsqu'ils seront créés */}
    </div>
  );
}

export default App;
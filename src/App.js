import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'

function App() {
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
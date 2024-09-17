import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      {/* Ajoutez ici les autres composants lorsqu'ils seront créés */}
    </div>
  );
}

export default App;
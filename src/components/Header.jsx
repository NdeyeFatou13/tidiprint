import React, { useState, useEffect } from 'react';
import logo from '../logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('Accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['Accueil', 'Services', 'Portfolio', 'Contact'];
      let current = '';

      if (scrollPosition < 100) {
        // Si le scroll est près du haut, considérez "Accueil" comme actif
        current = 'Accueil';
      } else {
        for (let section of sections) {
          const element = document.getElementById(section.toLowerCase());
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section;
              break;
            }
          }
        }
      }

      if (current && current !== activePage) {
        setActivePage(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const menuItems = ['Accueil', 'Services', 'Portfolio', 'Contact'];

  const handleMenuClick = (item) => {
    setActivePage(item);
    setIsMenuOpen(false);
    
    if (item === 'Accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
      <nav className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[70px]' : 'h-[100px] lg:h-[130px]'}`}>
          <div className="flex items-center h-full">
            <img 
              src={logo} 
              alt="TIDIPRINT" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-[50px]' : 'h-[60px] md:h-[75px] lg:h-[95px]'} object-contain`}
            />
          </div>
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-secondary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex items-center">
            {menuItems.map((item, index) => (
              <li key={item} className={index < menuItems.length - 1 ? 'mr-8 xl:mr-25' : ''}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`text-secondary hover:text-primary font-semibold ${isScrolled ? 'text-base' : 'text-lg xl:text-xl'} transition-all duration-300 relative`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item);
                  }}
                >
                  {item}
                  {activePage === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu mobile */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
          <ul className="py-4">
            {menuItems.map((item) => (
              <li key={item} className="mb-4">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`block px-4 py-2 text-secondary hover:text-primary font-semibold text-base ${
                    activePage === item ? 'font-extrabold border-l-4 border-primary' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
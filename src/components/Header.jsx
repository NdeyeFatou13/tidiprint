import React, { useState, useEffect } from 'react';
import logo from '../logo.png'; // Assurez-vous que le chemin est correct

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('Accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Accueil', 'Services', 'Portfolio', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between h-[130px]">
        <div className="flex items-center h-full">
          <img 
            src={logo} 
            alt="TIDIPRINT" 
            className="w-auto h-[95px] object-contain"
          />
        </div>
        <ul className="flex items-center">
          {menuItems.map((item, index) => (
            <li key={item} className={index < menuItems.length - 1 ? 'mr-25' : ''}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className={`text-secondary hover:text-primary font-semibold text-xl ${
                  activePage === item ? 'font-extrabold border-b-2 border-primary' : ''
                }`}
                onClick={() => setActivePage(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
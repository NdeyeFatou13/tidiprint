import React from 'react';
import PropTypes from 'prop-types';
import Bnoor from '../Bnoor.png';
import Builden from '../Builden.png';

const PortfolioItem = ({ title, subtitle, imageUrl, index }) => (
  <div 
    className="mb-8"
    data-aos="fade-up"
    data-aos-delay={index * 100}
    data-aos-duration="1000"
    data-aos-anchor-placement="top-bottom"
  >
    <div className="w-full aspect-square mb-2 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-300">{subtitle}</p>
  </div>
);

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Portfolio = () => {
  const portfolioItems = [
    { title: "B'Noor", subtitle: "Brand Kit", imageUrl: Bnoor},
    { title: "Building Aboul Abass", subtitle: "Packaging", imageUrl: Builden },
    { title: "Le Spotlight Tech", subtitle: "Logo, Interface", imageUrl: Builden },
    { title: "Jewerly by B'Noor", subtitle: "Packaging", imageUrl: Bnoor },
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-white mb-4 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Portfolio
        </h2>
        <p 
          className="text-primary text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Découvrez une gamme de produits personnalisables, conçus pour répondre à vos besoins et dépasser vos attentes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
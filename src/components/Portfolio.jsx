import React from 'react';
import PropTypes from 'prop-types';
import Bnoor from '../Bnoor.png';
import Builden from '../Builden.png';
// import Brand from '../Brand.png';


const PortfolioItem = ({ title, subtitle, imageUrl }) => (
  <div className="mb-8">
    <div className="w-full aspect-square mb-2 overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-300">{subtitle}</p>
  </div>
);

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
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
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Portfolio</h2>
        <p className="text-primary text-center mb-12">
          Découvrez une gamme de produits personnalisables, conçus pour répondre à vos besoins et dépasser vos attentes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
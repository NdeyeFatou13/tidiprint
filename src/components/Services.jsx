import React from 'react';
import PropTypes from 'prop-types';

const TextBlock = ({ title, description }) => (
  <div className="bg-white p-8 flex flex-col justify-center">
    <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary mb-4">Nos services</h2>
        <p className="text-gray-600 mb-16">Nous vous accompagnons à chaque étape, de l&apos;idée initiale à la livraison finale.</p>
        
        <div className="grid grid-cols-2 grid-rows-3 w-[792px] h-[1485px] mx-auto">
          <div className="bg-secondary"></div>
          <TextBlock 
            title="Conception graphique" 
            description="Nous créons des designs uniques et percutants qui captent l'attention et transmettent votre message avec impact."
          />
          <TextBlock 
            title="Impression de qualité" 
            description="Nos techniques d'impression de pointe garantissent des résultats d'une qualité exceptionnelle pour tous vos supports."
          />
          <div className="bg-primary"></div>
          <div className="bg-secondary"></div>
          <TextBlock 
            title="Livraison rapide" 
            description="Nous nous engageons à respecter les délais pour que vos projets soient livrés à temps, chaque fois."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
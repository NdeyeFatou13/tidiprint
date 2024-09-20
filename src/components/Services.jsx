import React from 'react';
import PropTypes from 'prop-types';

// Importez vos images ici
import eventImage from '../event-image.png';
import businessImage from '../business-image.png';
import familyImage from '../family-image.png';

const TextBlock = ({ title, description }) => (
  <div className="bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-center h-full">
    <h3 
      className="text-xl sm:text-2xl font-bold text-secondary mb-2 sm:mb-4"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      {title}
    </h3>
    <p 
      className="text-sm sm:text-base text-gray-600 whitespace-pre-line"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="100"
    >
      {description}
    </p>
  </div>
);

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const ServiceItem = ({ imageUrl, title, description, reverse, index }) => (
  <div 
    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay={index * 100}
  >
    <div 
      className="w-full md:w-1/2"
      data-aos="zoom-in"
      data-aos-duration="600"
      data-aos-delay={200 + index * 50}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div 
      className="w-full md:w-1/2"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={300 + index * 50}
    >
      <TextBlock title={title} description={description} />
    </div>
  </div>
);

ServiceItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

const Services = () => {
  const services = [
    {
      imageUrl: eventImage,
      title: "Evènementiel",
      description: "- Invitations personnalisées\n- Affiches et banderoles grand format\n- Badges et supports promotionnels\n- Signalétique évènementielle\n- Service de design graphique sur mesure"
    },
    {
      imageUrl: businessImage,
      title: "Entreprises",
      description: "- Création de logo et identité visuelle\n- Cartes de visite et papeterie d'entreprise\n- Brochures et catalogues produits\n- Packaging personnalisé\n- Support marketing (flyers, dépliants)"
    },
    {
      imageUrl: familyImage,
      title: "Famille",
      description: "- Faire-part et cartons d'invitation\n- Menus et marque-place personnalisés\n- Albums photos et livres souvenirs\n- Décorations imprimées (banderoles, affiches)\n- Cadeaux personnalisés (mugs, t-shirts ...)"
    }
  ];

  return (
    <section id="services" className="py-10 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-secondary mb-2 sm:mb-4 text-center"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Nos services
        </h2>
        <p 
          className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 md:mb-16 text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Nous vous accompagnons à chaque étape, de l&apos;idée initiale à la livraison finale.
        </p>
        
        <div className="max-w-[992px] mx-auto">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              {...service}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
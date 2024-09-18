import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TextBlock = ({ title, description }) => (
  <div className="bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-center h-full">
    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2 sm:mb-4">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{description}</p>
  </div>
);

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const ServiceItem = ({ imageClass, title, description, reverse }) => (
  <div 
    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div 
      className={`${imageClass} aspect-square md:w-1/2`}
      data-aos={reverse ? "fade-left" : "fade-right"}
      data-aos-delay="200"
    ></div>
    <div 
      className="md:w-1/2"
      data-aos={reverse ? "fade-right" : "fade-left"}
      data-aos-delay="400"
    >
      <TextBlock title={title} description={description} />
    </div>
  </div>
);

ServiceItem.propTypes = {
  imageClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="services" className="py-10 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-secondary mb-2 sm:mb-4 text-center"
          data-aos="fade-down"
        >
          Nos services
        </h2>
        <p 
          className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 md:mb-16 text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Nous vous accompagnons à chaque étape, de l&apos;idée initiale à la livraison finale.
        </p>
        
        <div className="max-w-[992px] mx-auto">
          <ServiceItem 
            imageClass="bg-secondary"
            title="Evènementiel"
            description="- Invitations personnalisées
- Affiches et banderoles grand format
- Badges et supports promotionnels
- Signalétique évènementielle
- Service de design graphique sur mesure"
          />
          <ServiceItem 
            imageClass="bg-primary"
            title="Entreprises"
            description="- Création de logo et identité visuelle
- Cartes de visite et papeterie d'entreprise
- Brochures et catalogues produits
- Packaging personnalisé
- Support marketing (flyers, dépliants)"
            reverse
          />
          <ServiceItem 
            imageClass="bg-secondary"
            title="Famille"
            description="- Faire-part et cartons d'invitation
- Menus et marque-place personnalisés
- Albums photos et livres souvenirs
- Décorations imprimées (banderoles, affiches)
- Cadeaux personnalisés (mugs, t-shirts ...)"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
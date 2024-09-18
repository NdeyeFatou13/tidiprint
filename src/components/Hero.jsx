import React from 'react';
import heroImage from '../hero.png'; 

const Hero = () => {
  return (
    <section className="bg-background pt-[150px] pb-10 sm:pb-16 md:pb-20"> {/* Espacement fixe en haut */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="font-inter font-bold text-3xl sm:text-4xl md:text-[40px] leading-tight text-secondary mb-4">
              Des solutions d&apos;impression{' '}
              <span className="hidden sm:inline"><br /></span>
              et de design qui racontent{' '}
              <span className="hidden sm:inline"><br /></span>
              votre histoire
            </h1>
            <p className="font-openSans font-normal text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Nous transformons vos idées en créations imprimées de qualité.
              <span className="hidden sm:inline"><br /></span>
              Que ce soit pour un projet personnel ou professionnel, nous{' '}
              <span className="hidden sm:inline"><br /></span>
              vous accompagnons de la conception au produit fini.
            </p>
            <button className="w-full sm:w-[215px] h-[50px] bg-[#1E3A5F] text-white rounded-[20px] font-inter font-bold text-base hover:bg-opacity-90 transition-colors duration-300">
              Découvrez nos services
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src={heroImage} 
              alt="Nos services d'impression et de design" 
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[556px] h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
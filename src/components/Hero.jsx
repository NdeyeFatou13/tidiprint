import React from 'react';
import heroImage from '../hero.png'; 

const Hero = () => {
  return (
    <section className="bg-background pt-[186px] md:pt-[216px] lg:pt-[246px] pb-10 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="font-inter font-bold text-3xl md:text-[36px] lg:text-[40px] leading-tight text-secondary mb-4">
            Des solutions d&apos;impression <br className="hidden md:inline" /> et de design qui racontent <br className="hidden md:inline" /> votre histoire
          </h1>
          <p className="font-openSans font-normal text-sm md:text-base text-gray-600 mb-8">
            Nous transformons vos idées en créations imprimées de qualité.<br className="hidden md:inline"/> Que ce soit pour un projet personnel ou professionnel, nous <br className="hidden md:inline"/>  vous accompagnons de la conception au produit fini.
          </p>
          <button className="w-full md:w-[215px] h-[50px] bg-[#1E3A5F] text-white rounded-[20px] font-inter font-bold text-base hover:bg-opacity-90 transition-colors duration-300">
            Découvrez nos services
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={heroImage} 
            alt="Nos services d'impression et de design" 
            className="w-full max-w-[400px] lg:max-w-[556px] h-auto lg:h-[490px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
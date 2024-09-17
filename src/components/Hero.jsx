import React from 'react';
import heroImage from '../hero.png'; 


const Hero = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
        <h1 className="font-inter font-bold text-[40px] leading-tight text-secondary mb-4">
            Des solutions d&apos;impression <br /> et de design qui racontent <br /> votre histoire
          </h1>
          <p className="font-openSans font-normal text-base text-gray-600 mb-8">
          Nous transformons vos idées en créations imprimées de qualité.<br/> Que ce soit pour un projet personnel ou professionnel, nous <br />  vous accompagnons de la conception au produit fini.
          </p>
          <button className="w-[215px] h-[50px] bg-[#1E3A5F] text-white rounded-[20px] font-inter font-bold text-base hover:bg-opacity-90 transition-colors duration-300">
            Découvrez nos services
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <img 
            src={heroImage} 
            alt="Nos services d'impression et de design" 
            className="w-[556px] h-[490px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
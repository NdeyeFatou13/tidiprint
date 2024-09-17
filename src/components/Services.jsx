import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-secondary mb-10 text-center">Nos services</h2>
        <div className="flex justify-between">
          <div className="w-1/3 bg-secondary h-64"></div>
          <div className="w-1/4 bg-primary h-48 self-end"></div>
          <div className="w-1/3 bg-secondary h-64"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
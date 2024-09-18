import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log(formData);
  };

  return (
    <>
      <section id="contact" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-secondary mb-4 text-center">Contact</h2>
          <p className="text-gray-600 text-center mb-12">
            Nous sommes là pour répondre à vos questions et vous aider à réaliser votre projet.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="nom" className="block text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Adresse email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded h-32"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-300">
              Envoyer
            </button>
          </form>
        </div>
      </section>
      
      <footer className="bg-secondary text-white text-center py-4">
        <p>© 2024 Tidiprint. Tous droits réservés</p>
      </footer>
    </>
  );
};

export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.nom.trim()) tempErrors.nom = "Le nom est requis";
    if (!formData.email.trim()) {
      tempErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "L'email est invalide";
    }
    if (!formData.message.trim()) tempErrors.message = "Le message est requis";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitMessage('');
      
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Erreur lors de l\'envoi');
        }

        setSubmitMessage('Votre message a été envoyé avec succès!');
        setFormData({ nom: '', email: '', message: '' }); // Reset form
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <section id="contact" className="bg-background py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-center">Contact</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 md:mb-16">
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
                className={`w-full p-2 border rounded ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Adresse email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border rounded h-32 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className={`w-full bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
          {submitMessage && (
            <p className={`mt-4 text-center ${submitMessage.includes('succès') ? 'text-green-500' : 'text-red-500'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </section>
      
      <footer className="bg-secondary text-white text-center py-4">
        <p>© 2024 Tidiprint. Tous droits réservés</p>
      </footer>
    </>
  );
};

export default Contact;
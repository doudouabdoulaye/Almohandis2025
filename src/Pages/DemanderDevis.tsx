import { useState } from "react";

function DemanderDevis() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeProjet: "",
    localisation: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre demande de devis ! Notre équipe vous contactera rapidement.");
  };

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Demander un <span className="text-amber-600">devis personnalisé</span>
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nom */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nom complet</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              placeholder="Ex : Mahamat Doudou"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="exemple@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              placeholder="+235 ..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          {/* Type de projet */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Type de projet</label>
            <select
              name="typeProjet"
              value={formData.typeProjet}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            >
              <option value="">Sélectionnez un type</option>
              <option value="batiment">Construction de bâtiment</option>
              <option value="pont">Pont / Ouvrage d’art</option>
              <option value="etude">Études techniques</option>
              <option value="suivi">Suivi & contrôle des travaux</option>
              <option value="autre">Autre projet</option>
            </select>
          </div>

          {/* Localisation */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Localisation du projet</label>
            <input
              type="text"
              name="localisation"
              value={formData.localisation}
              onChange={handleChange}
              placeholder="Ex : N'Djamena, Moundou, Abéché..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          {/* Budget estimatif */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Budget estimatif (facultatif)</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Ex : 50 millions FCFA"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Détails du projet</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Décrivez brièvement votre projet (objectifs, délais, besoins spécifiques...)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>

          {/* Bouton */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium text-lg px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Envoyer la demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DemanderDevis;

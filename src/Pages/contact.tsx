import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { getCookie } from "./utiles/csrf";
import { API_BASE_URL } from "../config/api";

// Animation Framer Motion
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Interface pour le statut
interface SubmissionStatusProps {
  status: { type: "success" | "error"; message: string } | null;
}

// Composant d'affichage du statut
const SubmissionStatus: React.FC<SubmissionStatusProps> = ({ status }) => {
  if (!status) return null;
  const color = status.type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = status.type === "success" ? "" : "";

  return (
    <div
      className={`mt-4 p-4 rounded-lg text-white ${color} flex items-center shadow-lg`}
    >
      <span className="text-xl mr-3">{icon}</span>
      <p className="font-semibold">{status.message}</p>
    </div>
  );
};

// 🧩 Fonction d'envoi du message
async function sendContact(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const csrftoken = getCookie("csrftoken");

  const res = await fetch(`${API_BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken ?? "",
    },
    credentials: "include",
    body: JSON.stringify({
      nom: formData.name,
      email: formData.email,
      sujet: formData.subject,
      message: formData.message,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ detail: "Erreur serveur" }));
    throw new Error(JSON.stringify(errorData));
  }

  return await res.json();
}

const Contact: React.FC = () => {
  // États
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gestion des champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmissionStatus(null);
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      await sendContact(formData);
      setSubmissionStatus({
        type: "success",
        message: "Votre message a été envoyé avec succès ! ",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmissionStatus({
        type: "error",
        message: "Erreur : " + (error instanceof Error ? error.message : String(error)),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 py-24 px-6 min-h-screen text-white font-sans">
      {/* --- Titre --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500 mb-2">
          Restons Connectés
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Contactez <span className="text-amber-500">AL-MOHANDIS</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Une question, un projet ou besoin d’un devis ? Notre équipe est disponible
          pour vous accompagner avec rigueur et professionnalisme.
        </p>
      </motion.div>

      {/* --- Formulaire + Info --- */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* === Formulaire === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-8 border-b border-amber-600/50 pb-3">
            Envoyez-nous un message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champs */}
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-300 mb-2 capitalize"
                >
                  {field === "name"
                    ? "Nom complet"
                    : field === "email"
                    ? "Adresse email"
                    : "Sujet"}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required={field !== "subject"}
                  className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500 transition"
                  placeholder={
                    field === "name"
                      ? "Votre nom et prénom"
                      : field === "email"
                      ? "nom@exemple.com"
                      : "Projet de construction, Devis, Partenariat..."
                  }
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
                placeholder="Décrivez votre projet ou votre demande en détail."
              ></textarea>
            </div>

            {/* Bouton */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-amber-600/40 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                      5.291A7.962 7.962 0 014 12H0c0 
                      3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Envoyer le message</span>
                </>
              )}
            </motion.button>

            <SubmissionStatus status={submissionStatus} />
          </form>
        </motion.div>

        {/* === Coordonnées === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-gray-900 flex flex-col rounded-2xl space-y-8"
        >
          {/* Infos */}
          <div className="p-8 md:p-12 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-xl border-l-4 border-amber-600">
                <MapPin className="text-amber-500 w-6 h-6 mt-1" />
                <div>
                  <p className="text-amber-500 font-semibold">Adresse</p>
                  <p className="text-gray-300">Quartier Moundou Centre, Tchad</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-xl border-l-4 border-amber-600">
                <Phone className="text-amber-500 w-6 h-6 mt-1" />
                <div>
                  <p className="text-amber-500 font-semibold">Téléphone</p>
                  <p className="text-gray-300">+235 66 00 00 00</p>
                  <p className="text-gray-300">+235 90 00 00 00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-xl border-l-4 border-amber-600">
                <Mail className="text-amber-500 w-6 h-6 mt-1" />
                <div>
                  <p className="text-amber-500 font-semibold">Email</p>
                  <p className="text-gray-300">contact@almohandis.td</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte */}
          <div className="w-full h-96 rounded-b-2xl overflow-hidden shadow-2xl">
            <iframe
              title="Localisation AL-MOHANDIS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5210.572325541068!2d15.102882688614224!3d12.129261248117297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111963ea454014cb%3A0x307c858ea673b4dd!2sPharmacie%20Bahri!5e0!3m2!1sfr!2std!4v1762161539103!5m2!1sfr!2std"
              loading="lazy"
              className="w-full h-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

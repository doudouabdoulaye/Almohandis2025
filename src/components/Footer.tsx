import { motion } from "framer-motion";
import { SiFacebook, SiWhatsapp, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import arise from "../assets/logo/arise.jpg";
import gsi from "../assets/logo/gsi.jpg";
import encobat from "../assets/logo/encobat.jpg";
import laham from "../assets/logo/laham.jpg";
import logo from "../assets/logo/WhatsApp_Image_2025-06-21_at_10.18.43-removebg-preview.png";

const partners = [arise, gsi, encobat, laham, logo];

const socialLinks = [
  { icon: <SiFacebook className="text-blue-500" />, url: "https://facebook.com/votrepage" },
  { icon: <SiWhatsapp className="text-green-500" />, url: "https://wa.me/23565708383" },
  { icon: <SiLinkedin className="text-blue-400" />, url: "https://linkedin.com/in/votreprofil" },
  { icon: <SiInstagram className="text-pink-500" />, url: "https://instagram.com/votrecompte" },
  { icon: <SiX className="text-gray-300" />, url: "https://x.com/votrecompte" },
];

const PartnerSlider = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-gray-950 to-gray-900 py-8 border border-gray-800/60 rounded-2xl shadow-[0_0_30px_rgba(255,191,0,0.08)]">
    <motion.div
      className="flex gap-20 items-center"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
    >
      {[...partners, ...partners].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Partenaire ${index + 1}`}
          className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 transform hover:scale-110"
        />
      ))}
    </motion.div>

    {/* Fading edges */}
    <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-gray-950 via-transparent to-transparent pointer-events-none" />
    <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-gray-950 via-transparent to-transparent pointer-events-none" />
  </div>
);

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-300 pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">

        {/* --- Logo & Réseaux sociaux --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-14 border-b border-gray-800/70 pb-10">
          <div className="flex items-center space-x-4 mb-6 lg:mb-0">
            <img
              src={logo}
              alt="Logo AL-MOHANDIS"
              className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,193,7,0.4)]"
            />
            <span className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
              AL-MOHANDIS
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <h5 className="hidden sm:block text-gray-400 font-medium">Suivez-nous :</h5>
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-125 transition-transform duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Grille principale --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 text-sm leading-relaxed">
          <div>
            <h4 className="text-amber-400 text-lg font-semibold mb-6 uppercase tracking-wider border-b border-gray-700/40 pb-2">
              L'Entreprise
            </h4>
            {["À propos de nous", "Nos Projets", "Carrières", "Actualités & Blog"].map((text, i) => (
              <p
                key={i}
                className="mb-3 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors duration-300"
              >
                {text}
              </p>
            ))}
          </div>

          <div>
            <h4 className="text-amber-400 text-lg font-semibold mb-6 uppercase tracking-wider border-b border-gray-700/40 pb-2">
              Nos Expertises
            </h4>
            {[
              "Forage & Hydraulique",
              "Drainage & Canaux",
              "Études Techniques",
              "Construction Civile & BTP",
              "Gestion de Projets",
            ].map((text, i) => (
              <p
                key={i}
                className="mb-3 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors duration-300"
              >
                {text}
              </p>
            ))}
          </div>

          <div>
            <h4 className="text-amber-400 text-lg font-semibold mb-6 uppercase tracking-wider border-b border-gray-700/40 pb-2">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt text-amber-500 mr-3 mt-1"></i> Port 0578, Moundou, Tchad
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone-alt text-amber-500 mr-3"></i> +235 65 70 83 83
              </p>
              <p className="flex items-center">
                <i className="fas fa-mobile-alt text-amber-500 mr-3"></i> +235 99 10 12 88
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope text-amber-500 mr-3"></i> contact@al-mohandis.td
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-amber-400 text-lg font-semibold mb-6 uppercase tracking-wider border-b border-gray-700/40 pb-2">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4 text-sm">
              Recevez nos actualités et projets récents.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="p-3 text-sm w-full bg-gray-800/70 text-white border border-gray-700 rounded-l-md focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
              <button className="bg-amber-500 text-black px-5 py-3 text-sm font-bold rounded-r-md hover:bg-amber-600 transition-colors">
                S’abonner
              </button>
            </div>
          </div>
        </div>

        {/* --- Partenaires --- */}
        <div className="mt-20">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-300 mb-8 uppercase tracking-widest">
            Nos Partenaires de Confiance
          </h3>
          <PartnerSlider />
        </div>

        {/* --- Copyright --- */}
        <div className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800/60 pt-6">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-bold">AL-MOHANDIS</span> — Tous droits réservés.
          </p>
          <p className="mt-2 text-xs">
            Conception par{" "}
            <a
              href="https://linkedin.com/in/votreprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Doudou Abdoulaye Mahamat
            </a>
          </p>
        </div>
      </div>

      {/* Effet lumineux décoratif */}
      <motion.div
        className="absolute -bottom-10 left-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
};

export default Footer;

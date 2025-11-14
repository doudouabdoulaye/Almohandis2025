import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants, type Easing } from "framer-motion";
import { Hammer, ArrowDown, Construction } from 'lucide-react';

import heroImage1 from "../assets/logo/accueil.png";
import heroImage2 from "../assets/logo/accueil2.png";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] as Easing } // TS-safe cubic-bezier
  },
};

const bgVariants: Variants = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: { opacity: 1, scale: 1, transition: { duration: 3, ease: [0.42, 0, 0.58, 1] as Easing } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 3, ease: [0.42, 0, 0.58, 1] as Easing } },
};

function Hero() {
  const images = [heroImage1, heroImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950 font-sans">

      {/* SLIDESHOW / IMAGE DE FOND */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          variants={bgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>

      {/* Overlay Ambré et Radial */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/70 to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1)_0%,transparent_70%)]" />

      {/* CONTENU CENTRAL */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 text-white max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="text-xl sm:text-2xl font-semibold uppercase tracking-widest text-amber-500 mb-4 flex items-center justify-center">
            <Construction className="w-6 h-6 mr-3" />
            L'Excellence au Service du Développement
          </p>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              AL-MOHANDIS
            </span>{" "}
            <span className="text-gray-100">BTP</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
            Partenaire stratégique en <strong>Ingénierie, Génie Civil et Construction</strong> pour les infrastructures durables en Afrique Centrale.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(217, 119, 6, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-black font-extrabold text-lg transition-all duration-300 shadow-2xl shadow-amber-600/40 flex items-center justify-center space-x-2"
            >
              <Hammer className="w-5 h-5" />
              <span>Démarrer un Projet</span>
            </motion.a>

            <motion.a
              href="contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-xl border-2 border-gray-500 hover:border-amber-600 text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <span>Demander un Devis</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* INDICATEUR DE DÉFILEMENT */}
      <motion.a
        href="#apropos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-16 flex flex-col items-center text-amber-400/80 cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest font-medium group-hover:text-amber-300 transition-colors">
          En Savoir Plus
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="mt-2"
        >
          <ArrowDown className="w-6 h-6 text-amber-600 group-hover:text-amber-400" />
        </motion.div>
      </motion.a>

      {/* VAGUE DE SÉPARATION */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[100px] text-gray-950" 
        viewBox="0 0 1440 100" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 100L0 100L0 0C240 70 480 100 720 100C960 100 1200 70 1440 0V100Z"/>
      </svg>
    </section>
  );
}

export default Hero;

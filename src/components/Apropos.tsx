import { motion, type Variants, type Easing } from "framer-motion";

// Image de remplacement professionnelle (Thème BTP/Ingénierie)
import imageSrc from "../assets/equipes/dg.jpeg";

// Définition des easings valides pour Framer Motion
const easeInOut: Easing = [0.42, 0, 0.58, 1]; // cubic-bezier

// Animation fadeIn
const fadeIn: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.9, ease: easeInOut } 
  },
};

// Animation scaleUp
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: easeInOut, delay: 0.2 } 
  },
};

const Apropos = () => {
  return (
    <section 
        id="apropos" 
        className="relative bg-gray-950 py-28 md:py-40 px-6 overflow-hidden border-t border-b border-gray-800/50"
    >
      {/* Effets de fond subtils */}
      <motion.div
        className="absolute -top-10 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-gray-700/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: easeInOut }}
      />
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Colonne Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleUp}
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          {/* Cadre décoratif */}
          <motion.div
            className="absolute top-0 left-0 w-80 h-full bg-transparent border-t-4 border-l-4 border-amber-600/30 rounded-br-[4rem] hidden md:block"
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
            style={{ borderRadius: '20px 0 64px 0' }}
          ></motion.div>

          {/* Image principale */}
          <motion.img
            src={imageSrc} 
            alt="Présentation d'AL-MOHANDIS BTP"
            className="relative w-full max-w-lg h-auto object-cover rounded-xl shadow-2xl shadow-black/80 border-4 border-gray-700/50 transition-all duration-700 ease-out z-20 aspect-[4/3] md:max-w-md lg:max-w-none" 
            whileHover={{ y: -8, scale: 1.02, rotate: 0.5, borderColor: '#fbbf24' }}
          />

          {/* Décoration inférieure */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-600/50 rounded-full blur-sm z-30 opacity-70"></div>
        </motion.div>

        {/* Colonne Texte */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500 mb-4 transform scale-y-110">
             L'Innovation au Service du Développement
          </p>
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
            Bâtir l'Avenir avec l'<span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Excellence</span> Tchadienne
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 border-l-4 border-amber-600 pl-4 bg-gray-900/40 p-4 rounded-lg shadow-inner">
            <span className="font-extrabold text-white">AL-MOHANDIS BTP</span> est le pilier de l'ingénierie et de la construction, spécialisée en **Génie Civil**, **Maîtrise d’Œuvre (AMO/MOE)** et **Solutions Technologiques**.
          </p>

          <p className="text-gray-400 text-base leading-relaxed mb-10">
            Notre engagement est inébranlable : livrer des projets d'envergure en respectant les **normes de sécurité internationales** et l'impératif de la durabilité environnementale.
          </p>

          <motion.a
            href="/Apropos"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(251, 191, 36, 0.7)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-amber-600 hover:bg-amber-500 text-gray-950 font-extrabold uppercase rounded-full px-12 py-4 shadow-2xl shadow-amber-600/40 transition-all duration-300 tracking-wider ring-4 ring-amber-600/20"
          >
            Découvrir notre Histoire
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Apropos;

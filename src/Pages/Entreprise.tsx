import { motion, type Variants, easeInOut } from "framer-motion";
import djafar from "../assets/equipes/djafar.jpeg";
import bob from "../assets/equipes/bob.jpeg";
import team3 from "../assets/equipes/abanga.jpeg";

// Placeholders
const logoUrl = "https://placehold.co/200x80/374151/f59e0b?text=AL-MOHANDIS";
const certifUrl = "https://placehold.co/200x80/374151/f59e0b?text=CERTIFICATION";

// Icônes
import { Award, Scale, Lightbulb, Eye, Target, ShieldCheck } from 'lucide-react';

// Animation variants typés
const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut }, // 
  },
};

const Entreprise = () => {
  const valeurs = [
    { title: "Excellence Technique", icon: Award, text: "Nous visons la perfection à chaque étape, du concept à la réalisation, en adoptant les standards de l'ingénierie mondiale." },
    { title: "Intégrité & Transparence", icon: Scale, text: "Nos opérations sont menées avec la plus grande éthique, assurant rigueur, transparence et responsabilité envers nos partenaires." },
    { title: "Innovation Durable", icon: Lightbulb, text: "Nous intégrons les dernières technologies et méthodes (BIM, LCA) pour des solutions de construction écologiques et résilientes." },
  ];

  const equipe = [ 
    { name: "Ing. Djafar Adoum Djime", role: "Directeur Général | Expert en Génie Civil", img: djafar },
    { name: "Ing. Abdelmadjid Tidjani", role: "Responsable Études Techniques | Structure & VRD", img: bob },
    { name: "Ing. Abanga Padja Mboké", role: "Chef de Projet BTP | Conduite de Travaux", img: team3 },
  ];

  return (
    <div className="bg-gray-900 text-gray-50 font-sans overflow-hidden">

      {/* --- HERO --- */}
      <section className="relative bg-gray-950 text-white py-32 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <img src={logoUrl} alt="Logo AL-MOHANDIS" className="h-24 w-auto mx-auto mb-6 drop-shadow-xl rounded-lg"/>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500 mb-2">Notre Histoire</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            À propos d'<span className="text-amber-500">AL-MOHANDIS CIC</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Fondée sur l’excellence et l’intégrité, notre société d’ingénierie et de construction est déterminée à transformer les visions en infrastructures durables et performantes.
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.1)_0%,transparent_70%)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </section>

      {/* --- VALEURS --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center relative bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
        >
          Notre <span className="text-amber-600">Identité</span> et Nos Valeurs
        </motion.h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
          Ces principes fondamentaux guident chaque décision et chaque projet que nous entreprenons.
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {valeurs.map((v, i) => (
            <motion.div
              key={i}
              variants={itemAnimation}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(217, 119, 6, 0.25)", y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <v.icon size={36} className="text-amber-500 stroke-[1.5]"/> 
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{v.title}</h3>
              <p className="text-gray-400 text-base">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-24 px-6 md:px-12 bg-gray-950 relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={itemAnimation}
          className="text-4xl font-extrabold text-center mb-16 text-white"
        >
          Vision & <span className="text-amber-500">Mission</span>
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemAnimation}
            whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(217, 119, 6, 0.2)" }}
            className="bg-gray-800 rounded-xl shadow-xl p-8 border-l-4 border-amber-600/70 transition-all duration-300"
          >
            <Eye size={32} className="text-amber-500 mb-4"/>
            <h3 className="text-2xl font-bold text-white mb-3">Notre Vision Stratégique</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Être le leader de l’ingénierie et de la construction en Afrique Centrale, reconnu pour notre capacité à livrer des ouvrages d’art et des infrastructures qui définissent l'avenir du continent.
            </p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(217, 119, 6, 0.2)" }}
            className="bg-gray-800 rounded-xl shadow-xl p-8 border-l-4 border-amber-600/70 transition-all duration-300"
          >
            <Target size={32} className="text-amber-500 mb-4"/>
            <h3 className="text-2xl font-bold text-white mb-3">Notre Mission Quotidienne</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Concevoir, construire et superviser des projets d’ingénierie de haute précision, en maximisant l'efficacité, la sécurité et la satisfaction du client, tout en agissant de manière responsable envers l'environnement.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ÉQUIPE --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center relative bg-gray-900">
        <motion.h2
          variants={itemAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
        >
          Une <span className="text-amber-600">Équipe</span> d’Experts Passionnés
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {equipe.map((m, i) => (
            <motion.div
              key={i}
              variants={itemAnimation}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(217, 119, 6, 0.25)" }}
              className="group relative bg-gray-800 rounded-xl shadow-xl overflow-hidden border-b-4 border-amber-600/0 hover:border-amber-600 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{m.name}</h3>
                <p className="text-amber-500 text-sm font-medium">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section className="py-24 px-6 md:px-12 bg-gray-950 text-white text-center relative overflow-hidden">
        <motion.h2
          variants={itemAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Gage de <span className="text-amber-500">Qualité Internationale</span>
        </motion.h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-xl leading-relaxed mb-10 font-medium">
          Nos certifications et reconnaissances attestent de la rigueur de nos processus et de notre engagement indéfectible envers l'excellence opérationnelle.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-block bg-gray-800 text-gray-800 shadow-2xl rounded-2xl p-10 border-2 border-amber-600 hover:shadow-amber-500/50 transition-all duration-300"
        >
          <ShieldCheck size={48} className="text-amber-500 mx-auto mb-4" />
          <img src={certifUrl} alt="Certification AL-MOHANDIS" className="h-20 mx-auto mb-4 filter brightness-150 rounded-lg" />
          <p className="text-gray-300 text-lg">
            Procédure <span className="font-extrabold text-amber-600">Certifiée ISO</span>
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Entreprise;

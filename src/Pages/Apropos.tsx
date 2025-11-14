import { motion, type Variants, type Easing } from "framer-motion";
import { Briefcase, Eye, Target, Users, Award, Landmark } from 'lucide-react'; 
import dg from "../assets/equipes/dg.jpeg";

const certificationUrl = "https://placehold.co/300x150/1f2937/d97706?text=ISO+9001";

// TS-safe Variants
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
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as Easing },
  },
};

const Apropos = () => {

  const identiteItems = [
    { title: "Notre Mission", icon: Briefcase, desc: "Offrir des solutions d’ingénierie et de construction qui allient performance, sécurité et innovation, adaptées au contexte africain." },
    { title: "Notre Vision", icon: Eye, desc: "Être un acteur de référence dans le développement des infrastructures modernes et durables en Afrique Centrale, grâce à une excellence inégalée." },
    { title: "Nos Valeurs", icon: Target, desc: "Intégrité, Excellence, Innovation, Engagement client et forte Responsabilité sociale et environnementale." },
  ];

  return (
    <div className="bg-gray-900 text-gray-50 font-sans overflow-hidden">

      {/* --- HERO / TITRE DE SECTION --- */}
      <section className="relative bg-gray-950 text-white py-32 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500 mb-2">Historique et Principes</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            AL-MOHANDIS : Bâtir <span className="text-amber-500">l'Avenir</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Une entreprise d’ingénierie et de construction dédiée à l’excellence, 
            à l’innovation et à la durabilité. Nous bâtissons avec passion et rigueur 
            l’avenir du Tchad et de l’Afrique Centrale.
          </p>
        </motion.div>

        {/* Effet lumineux animé subtil */}
        <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.1)_0%,transparent_70%)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: [0.42, 0, 0.58, 1] as Easing }}
        />
      </section>

      {/* --- PRÉSENTATION DÉTAILLÉE --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-gray-900">
        <motion.div
          variants={itemAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="relative"
        >
          <img
            src={dg}
            alt="AL-MOHANDIS Présentation"
            className="rounded-2xl shadow-2xl border-4 border-amber-600/50 hover:shadow-amber-400/50 transition-all duration-500"
          />
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.h2 variants={itemAnimation} className="text-4xl font-extrabold mb-6 text-white">
            Une entreprise <span className="text-amber-600">visionnaire</span> au service de l'Afrique
          </motion.h2>
          <motion.p variants={itemAnimation} className="text-gray-300 text-lg leading-relaxed">
            Fondée sur des valeurs d’intégrité, de performance et de responsabilité, 
            <strong className="text-amber-300"> AL-MOHANDIS BTP </strong> met son savoir-faire au service du développement durable.
            <br />
            Nous intervenons dans plusieurs domaines clés : études techniques, maîtrise d’œuvre, génie civil,
            infrastructures (VRD) et l'intégration de l'innovation technologique dans la construction.
          </motion.p>
          <motion.p variants={itemAnimation} className="mt-4 text-gray-400 text-lg leading-relaxed border-l-4 border-amber-600 pl-4 italic">
            "Notre ambition est de contribuer activement à la modernisation des infrastructures du Tchad
            et d’offrir des solutions techniques fiables, économiques et respectueuses de l’environnement."
          </motion.p>
        </motion.div>
      </section>

      {/* --- MISSION / VISION / VALEURS --- */}
      <section className="py-24 px-6 md:px-12 bg-gray-950">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={itemAnimation}
          className="text-4xl font-extrabold text-center mb-16 text-white"
        >
          Notre <span className="text-amber-600">Identité</span> & Fondations
        </motion.h2>

        <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {identiteItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemAnimation}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(217, 119, 6, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-gray-800 rounded-xl shadow-xl p-8 border-t-4 border-amber-600/0 hover:border-amber-600 transition-all duration-300"
            >
              <item.icon size={48} className="mx-auto mb-6 text-amber-500 group-hover:rotate-6 transition-transform duration-300"/>
              
              <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- ÉQUIPE --- */}
      <section className="py-24 px-6 md:px-12 text-center max-w-7xl mx-auto bg-gray-900">
        <motion.h2
          variants={itemAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-extrabold mb-14 text-white"
        >
          Notre <span className="text-amber-600">Force</span> : L'Équipe Pluridisciplinaire
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                variants={itemAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="relative"
            >
                <img
                    src={dg}
                    alt="Équipe AL-MOHANDIS"
                    className="rounded-2xl w-full shadow-2xl hover:scale-[1.02] transition-transform duration-500 border border-gray-700"
                />
            </motion.div>
            <motion.div
                variants={itemAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-left"
            >
                <div className="flex items-center text-amber-500 mb-4">
                    <Users size={32} className="mr-3" />
                    <h3 className="text-2xl font-semibold text-white">L'Excellence Humaine</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Notre équipe regroupe des ingénieurs, architectes, techniciens, économistes de la construction
                    et experts en environnement. Chaque membre est sélectionné pour son expertise et son engagement envers la qualité.
                </p>
                <ul className="mt-6 space-y-3 text-gray-400">
                    <li className="flex items-center"><Award size={20} className="text-amber-600 mr-3 min-w-5"/> Expertise en Génie Civil et Bâtiment (BTP)</li>
                    <li className="flex items-center"><Landmark size={20} className="text-amber-600 mr-3 min-w-5"/> Maîtrise d'Œuvre et Supervision de Projet</li>
                    <li className="flex items-center"><Briefcase size={20} className="text-amber-600 mr-3 min-w-5"/> Solutions Intégrées (du concept à la livraison)</li>
                </ul>
            </motion.div>
        </div>
      </section>

      {/* --- CERTIFICATIONS & CTA --- */}
      <section className="py-24 px-6 md:px-12 bg-gray-950 text-white text-center relative overflow-hidden">
        <motion.h2
          variants={itemAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-extrabold mb-6"
        >
          Nos <span className="text-amber-500">Engagements</span> & Qualité Certifiée
        </motion.h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed mb-10">
          AL-MOHANDIS BTP est engagée dans une démarche qualité et sécurité continue,
          conforme aux standards internationaux. Nos projets respectent les normes environnementales et de gestion durable.
        </p>

        <motion.img
          src={certificationUrl}
          alt="Certifications Qualité"
          className="mx-auto w-56 md:w-64 rounded-xl border-4 border-amber-500 shadow-xl mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] as Easing }}
        />

        <motion.a
          href="#"
          whileHover={{ scale: 1.07, backgroundColor: "#b45309" }}
          className="mt-10 inline-block bg-amber-600 text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-amber-600/30 transition-all duration-300 uppercase tracking-wider"
        >
          Lancer votre projet avec nous
        </motion.a>

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,193,7,0.15)_0%,transparent_80%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
      </section>
    </div>
  );
};

export default Apropos;

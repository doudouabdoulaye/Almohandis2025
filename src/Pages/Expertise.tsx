import { motion, type Variants, easeInOut } from "framer-motion";
// Importation des icônes pour remplacer les images locales
import { LayoutGrid, Building, Sun, Droplet, Users, Layers, Shield } from 'lucide-react'; 

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
    transition: { duration: 0.7, ease: easeInOut } // ✅ TS-safe
  },
};

// Données des domaines (utilisant des icônes vectorielles)
const expertisesDomaines = [
    { title: "Génie Civil & Structures", icon: Layers, text: "Conception, exécution et supervision des ouvrages d'art, ponts et infrastructures stratégiques selon les normes Eurocodes." },
    { title: "Bâtiment & Construction (BTP)", icon: Building, text: "Réalisation de complexes industriels, publics et résidentiels avec accent sur l'efficacité énergétique et la qualité des finitions." },
    { title: "VRD & Aménagements Urbains", icon: LayoutGrid, text: "Études et travaux de Voirie et Réseaux Divers (VRD), assainissement et modernisation des réseaux urbains." },
    { title: "Énergie & Solutions Durables", icon: Sun, text: "Développement et installation de centrales solaires photovoltaïques et d'infrastructures électriques haute tension." },
    { title: "Infrastructures Hydrauliques", icon: Droplet, text: "Ouvrages hydro-agricoles, gestion des ressources en eau, études topographiques et géotechniques associées." },
];

// Données des Pôles Majeurs
const polesMajeurs = [
    { title: "Ingénierie de Conception", desc: "Modélisation 3D (BIM), études techniques avancées et délivrance de plans d'exécution conformes aux standards internationaux (ISO)." },
    { title: "Pilotage & Exécution (EPC)", desc: "Gestion des chantiers 'Engineering, Procurement, Construction' (EPC), contrôle qualité rigoureux et optimisation des coûts." },
    { title: "Consultance & Audit Technique", desc: "Expertise technique, audit de conformité, et maîtrise d’ouvrage déléguée pour garantir la viabilité de vos investissements." },
];


const Expertise = () => {
  return (
    // Le fond s'aligne sur bg-gray-900 pour la cohérence
    <div className="bg-gray-900 text-gray-50 font-sans overflow-hidden">

      {/* --- HERO / TITRE DE SECTION (Design Premium, fond sombre) --- */}
      <section className="relative bg-gray-950 border-b-4 border-amber-600/50 text-white py-32 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500 mb-2">Notre Champ d'Action</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Ingénierie de <span className="text-amber-500">Haute Précision</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            AL-MOHANDIS CIC est le partenaire de référence, offrant une expertise multidisciplinaire 
            axée sur la **résilience**, la **qualité** et la **conformité internationale**.
          </p>
        </motion.div>

        {/* Effet lumineux animé subtil */}
        <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.1)_0%,transparent_70%)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </section>

      {/* --- 1. DOMAINES D’EXPERTISE (Cartes 3D sur fond gris foncé) --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center relative bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
        >
          Nos <span className="text-amber-600">Secteurs Stratégiques</span>
        </motion.h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Des compétences spécialisées, de la conception des structures complexes à la mise en œuvre des réseaux énergétiques.
        </p>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {expertisesDomaines.map((d, i) => (
            <motion.div
              key={i}
              variants={itemAnimation}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(217, 119, 6, 0.25)",
                y: -5 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform perspective-1000"
            >
              <div className="flex items-center justify-center mb-4">
                {/* Icône élégante, couleur d'accentuation */}
                <d.icon size={40} className="text-amber-500 stroke-[1.5]"/> 
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
              <p className="text-gray-400 text-sm">{d.text}</p>
              
              {/* Ligne d'accentuation discrète */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-amber-600 rounded-b-lg" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 2. PÔLES MAJEURS (Fond contrastant) --- */}
      <section className="py-24 px-6 md:px-12 bg-gray-950 relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={itemAnimation}
          className="text-4xl font-extrabold text-center mb-16 text-white"
        >
          Nos <span className="text-amber-500">Piliers Opérationnels</span>
        </motion.h2>

        <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {polesMajeurs.map((p, i) => (
            <motion.div
              key={i}
              variants={itemAnimation}
              whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(217, 119, 6, 0.2)" }}
              className="bg-gray-800 rounded-xl shadow-xl p-8 border-l-4 border-amber-600/70 transition-all duration-300"
            >
              <Users size={32} className="text-amber-500 mb-4"/>
              <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed text-base">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 3. EXPERTISES TECHNIQUES DÉTAILLÉES (Liste Pro) --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-900">
        <motion.h2
          variants={itemAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
        >
          Compétences <span className="text-amber-600">Certifiées</span>
        </motion.h2>

        <motion.div 
            className="grid md:grid-cols-2 gap-x-12 gap-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "Évaluation de la viabilité financière et analyse du cycle de vie (LCA) des actifs.",
            "Maîtrise d’œuvre (MOE) complète et gestion contractuelle selon les conditions FIDIC.",
            "Modélisation et dimensionnement des structures en béton armé (BIM, Eurocodes / ACI).",
            "Conception de réseaux d’assainissement, d'adduction d'eau potable et de gestion des eaux pluviales.",
            "Relevés topographiques haute précision, y compris par technologies LiDAR et GPS différentiel.",
            "Études géotechniques approfondies (sondages, essais labo) et recommandations pour fondations.",
            "Aménagements hydro-agricoles, conception de barrages et systèmes d'irrigation modernes.",
            "Études d’impact environnemental et social (EIES) pour une conformité totale.",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemAnimation}
              whileHover={{ scale: 1.01, backgroundColor: "#374151" }} // bg-gray-700/50
              className="bg-gray-800 rounded-xl p-6 border-l-4 border-amber-600 shadow-md transition-all duration-300 flex items-start space-x-4"
            >
                <Shield size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-snug">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 4. POURQUOI NOUS CHOISIR (Call to Action Final) --- */}
      <section className="py-24 px-6 md:px-12 bg-amber-600 text-gray-950 text-center relative overflow-hidden">
        <motion.h2
          variants={itemAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Exigez l'Excellence. <span className="text-gray-950">Contactez-nous.</span>
        </motion.h2>
        <p className="max-w-4xl mx-auto text-gray-900 text-xl leading-relaxed mb-10 font-medium">
          Sous le management de l’Ingénieur DJA-AFAR ADOUM DJIME, notre équipe garantit une **gestion irréprochable** et un **respect strict des cahiers des charges internationaux**.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.07, boxShadow: "0 0 20px rgba(0,0,0,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gray-950 hover:bg-gray-700 text-amber-500 px-12 py-5 rounded-full font-bold uppercase tracking-wider shadow-lg transition-transform duration-300"
        >
          Démarrer un Partenariat
        </motion.a>
      </section>
    </div>
  );
};

export default Expertise;

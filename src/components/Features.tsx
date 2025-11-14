import { motion, type Variants } from "framer-motion";
import { Wrench, Zap, Droplet, Layers, Package, BarChart2 } from "lucide-react";

// Easing cubic-bezier pour Framer Motion

// Services
const services = [
  { title: "Forage & Maintenance des Puits (WWDS)", description: "Accès fiable à l'eau souterraine : forage de puits d'eau, installation de pompes et maintenance pour divers usages.", icon: <Droplet className="w-8 h-8 md:w-10 md:h-10" />, key: 'wwds' },
  { title: "Aménagements Hydro-Agricoles", description: "Conception et mise en œuvre de systèmes d'irrigation et de drainage pour une gestion optimale et la valorisation des terres.", icon: <Layers className="w-8 h-8 md:w-10 md:h-10" />, key: 'hydro-agri' },
  { title: "Construction Civile (CCS)", description: "De la planification à la réalisation : services complets pour les projets d'infrastructures et de bâtiments complexes.", icon: <Wrench className="w-8 h-8 md:w-10 md:h-10" />, key: 'ccs' },
  { title: "Études Hydrogéologiques", description: "Analyse détaillée des aquifères, modélisation des flux d'eau souterraine et gestion durable des ressources.", icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />, key: 'hydrogeo' },
  { title: "Études Géophysiques", description: "Application des principes physiques pour l'exploration du sous-sol, détection des structures et des ressources.", icon: <BarChart2 className="w-8 h-8 md:w-10 md:h-10" />, key: 'geophysics' },
  { title: "Campagnes Géotechniques", description: "Réalisation de sondages, essais in situ et en laboratoire pour caractériser les sols et roches de vos chantiers.", icon: <Package className="w-8 h-8 md:w-10 md:h-10" />, key: 'geotech' },
  { title: "CAO/DAO & Modélisation", description: "Maîtrise des logiciels de Conception et Dessin Assistés par Ordinateur pour la création de plans techniques précis et de modèles 3D.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
        <rect width="20" height="12" x="2" y="3" rx="2" />
        <path d="M6 15h12" />
        <path d="M12 15v6" />
        <circle cx="12" cy="21" r="1" />
      </svg>
  ), key: 'cad' },
];

// Variants TS-safe
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 } // TS-safe
  },
};

type Service = typeof services[0];

const ServiceCard = ({ service }: { service: Service }) => (
  <motion.div
    variants={itemVariants}
    className="group relative flex flex-col p-6 md:p-8 text-center bg-gray-900/50 rounded-xl overflow-hidden
               border border-gray-700/50 shadow-2xl shadow-black/70 transition-all duration-500 ease-out
               hover:bg-gray-800 hover:border-amber-600/70 hover:shadow-amber-500/20 hover:-translate-y-1"
  >
    <div className="absolute inset-0 border-4 border-transparent rounded-xl pointer-events-none 
                    group-hover:border-amber-500/30 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>

    <div className="mx-auto mb-6 flex items-center justify-center p-3 rounded-full 
                    bg-amber-600/10 text-amber-500 transition-all duration-500 
                    group-hover:bg-amber-600 group-hover:text-gray-950 group-hover:shadow-lg group-hover:shadow-amber-500/50">
      {service.icon}
    </div>

    <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-white transition-colors duration-300">
      {service.title}
    </h3>

    <p className="text-gray-400 group-hover:text-gray-300 text-base leading-relaxed mb-8 flex-grow transition-colors duration-300">
      {service.description}
    </p>

    <motion.a
      href={`/services/${service.key}`}
      className="inline-flex items-center justify-center mt-auto px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase
                 bg-amber-600 text-gray-950 shadow-md shadow-amber-600/30 border border-amber-600
                 transition-all duration-300 ease-in-out hover:bg-amber-500 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      En Savoir Plus
    </motion.a>
  </motion.div>
);

export const ServicesSection = () => (
  <section className="bg-gray-950 py-20 md:py-32 px-4 md:px-8 border-t border-b border-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto mb-16 md:mb-24 text-center">
        <p className="text-base font-bold uppercase tracking-[0.3em] text-amber-500 mb-4 transform scale-y-110">
          L'INGÉNIERIE D'EXCELLENCE
        </p>
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-none">
          Nos <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Domaines d'Expertise</span> Stratégiques
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-6 max-w-3xl mx-auto">
          AL-MOHANDIS BTP mobilise son savoir-faire Tchadien pour des solutions durables en Génie Civil, Hydraulique et Géosciences.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.slice(0, 6).map((s) => (
          <ServiceCard key={s.key} service={s} />
        ))}

        <div className="lg:col-span-3 flex justify-center mt-8">
          <div className="w-full md:w-3/4 lg:w-2/5">
            <ServiceCard key={services[6].key} service={services[6]} />
          </div>
        </div>
      </motion.div>

      <div className="mt-24 md:mt-32 bg-gray-900/60 backdrop-blur-md rounded-3xl border border-gray-700/50 
                      shadow-2xl shadow-black/80 ring-2 ring-amber-600/20 py-12 md:py-16 px-6 md:px-12">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
          <li className="text-center">
            <h3 className="text-amber-400 text-5xl md:text-6xl font-extrabold mb-1 drop-shadow-md">20+</h3>
            <p className="text-gray-300 text-sm md:text-base mt-2 font-semibold tracking-wider uppercase">Projets Majeurs</p>
          </li>
          <li className="text-center">
            <h3 className="text-amber-400 text-5xl md:text-6xl font-extrabold mb-1 drop-shadow-md">99%</h3>
            <p className="text-gray-300 text-sm md:text-base mt-2 font-semibold tracking-wider uppercase">Satisfaction Client</p>
          </li>
          <li className="text-center">
            <h3 className="text-amber-400 text-5xl md:text-6xl font-extrabold mb-1 drop-shadow-md">10+</h3>
            <p className="text-gray-300 text-sm md:text-base mt-2 font-semibold tracking-wider uppercase">Années d'Expérience</p>
          </li>
          <li className="text-center">
            <h3 className="text-amber-400 text-5xl md:text-6xl font-extrabold mb-1 drop-shadow-md">7</h3>
            <p className="text-gray-300 text-sm md:text-base mt-2 font-semibold tracking-wider uppercase">Piliers d'Expertise</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ServicesSection;

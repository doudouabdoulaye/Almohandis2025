import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
// Remplacement de react-router-dom par un routage basé sur l'état (useState)
import { ArrowLeft, MapPin, Calendar, Building2, Users, HardHat, TrendingUp, Cpu, Eye, Image } from "lucide-react";

// --- Configuration des Données Statiques des Projets (avec GALERIE) ---
const PROJECT_DATA = [
    {
      id: "1",
      title: "Construction du Pont de N'Djamena",
      location: "N'Djamena, Tchad",
      date: "2022 - 2024", 
      category: "Génie Civil",
      img: "https://placehold.co/1200x500/1e293b/d97706?text=Ouvrage+d'Art+Majeur",
      description:
        "Ce projet d’envergure internationale a consisté à la conception et à la construction d’un pont de 1,2 km traversant le fleuve Chari. L’ouvrage, réalisé selon les normes Eurocode (EN 1990 à 1999), améliore considérablement la mobilité urbaine et régionale. Les technologies de fondation profonde (pieux forés) et de béton précontraint ont été intégrées pour garantir une durabilité structurelle sur plus de 100 ans, un gage de qualité pour un un investissement public majeur.",
      expertise: [
        "Études géotechniques et hydrauliques (Modélisation FEA)",
        "Modélisation structurelle 3D (BIM Level 300)",
        "Suivi de chantier intelligent (IoT & Capteurs de contrainte)",
        "Assurance qualité ISO 9001 et Audit Externe",
      ],
      client: "Ministère des Infrastructures",
      gallery: [
          { url: "https://placehold.co/1600x900/1e293b/facc15?text=Vue+principale+du+pont+(Ouvrage+d'art)", caption: "Vue aérienne de l'ouvrage en phase finale." },
          { url: "https://placehold.co/1000x562/0f172a/94a3b8?text=Détail+de+la+poutraison+précontrainte", caption: "Installation des voussoirs en béton précontraint." },
          { url: "https://placehold.co/1000x1500/1e293b/94a3b8?text=Fondations+profondes", caption: "Forage des pieux de support et essais de charge." },
          { url: "https://placehold.co/1200x800/0f172a/facc15?text=Équipe+de+contrôle+qualité", caption: "L'équipe d'ingénieurs sur site vérifiant la conformité." },
      ],
    },
    {
      id: "2",
      title: "Complexe Administratif de Moundou",
      location: "Moundou, Tchad",
      date: "2020 - 2023", 
      category: "Bâtiments & Infrastructures",
      img: "https://placehold.co/1200x500/1e293b/d97706?text=Complexe+Moderne+et+%C3%89cologique",
      description:
        "Un complexe administratif moderne intégrant des espaces modulaires, un auditorium de 500 places et un système énergétique photovoltaïque de 150 kWc. Construit dans une approche éco-responsable et certifiée, il représente un modèle de durabilité urbaine en Afrique Centrale, réduisant l'empreinte carbone de 40% par rapport aux constructions traditionnelles.",
      expertise: [
        "Architecture bioclimatique et efficacité énergétique",
        "Gestion énergétique solaire (Systèmes On-Grid)",
        "Coordination et clash detection BIM",
        "Matériaux durables locaux et certifiés",
      ],
      client: "Gouvernement du Tchad",
      gallery: [
        { url: "https://placehold.co/1600x900/1e293b/facc15?text=Façade+principale+du+complexe", caption: "Design extérieur et approche bioclimatique." },
        { url: "https://placehold.co/1000x700/0f172a/94a3b8?text=Installation+photovoltaïque+sur+toit", caption: "Système de production solaire 150 kWc." },
        { url: "https://placehold.co/1200x800/1e293b/94a3b8?text=Intérieur+modulaire+et+moderne", caption: "Espace de travail flexible et lumineux." },
      ],
    },
    {
      id: "3",
      title: "Centre Technique de Formation BTP",
      location: "N'Djamena, Tchad",
      date: "2023 - 2025", 
      category: "Formation & Technologie",
      img: "https://placehold.co/1200x500/1e293b/d97706?text=Centre+de+Formation+Technologique",
      description:
        "Édifice d’enseignement technique intégrant des laboratoires de génie civil, de topographie et de mécanique des sols. Ce centre forme la nouvelle génération d’ingénieurs et techniciens du BTP au Tchad, en s'alignant sur les standards de formation internationaux.",
      expertise: [
        "Conception pédagogique du bâtiment",
        "Installation d’équipements de pointe",
        "Design acoustique et ventilation optimisée",
        "Supervision de chantier par drones",
      ],
      client: "Partenariat Privé-Public",
      gallery: [
        { url: "https://placehold.co/1600x900/1e293b/facc15?text=Laboratoire+de+Génie+Civil", caption: "Zone d'essais pour béton et matériaux." },
        { url: "https://placehold.co/1000x562/0f172a/94a3b8?text=Salle+de+classe+connectée", caption: "Espace pédagogique équipé de technologies numériques." },
        { url: "https://placehold.co/1200x800/1e293b/94a3b8?text=Vue+aérienne+du+campus", caption: "Aperçu du centre et de ses installations." },
      ],
    },
    {
        id: "4",
        title: "Réhabilitation du Réseau Routier",
        location: "Axe N'Djamena-Sarh, Tchad",
        date: "2024 - 2026", 
        category: "Travaux Publics",
        img: "https://placehold.co/1200x500/1e293b/d97706?text=Axe+Routier+Prioritaire",
        description:
          "Projet de réhabilitation et de renforcement de 450 km de réseau routier, incluant la conception de nouvelles couches de roulement en béton bitumineux et la mise en place d'un système de drainage performant pour résister aux inondations saisonnières.",
        expertise: [
          "Études de trafic et dimensionnement des chaussées",
          "Contrôle qualité des matériaux de carrière",
          "Géoréférencement par GPS et cartographie SIG",
          "Sécurité et signalisation routière conforme ISO 39001",
        ],
        client: "Banque Mondiale & Autorité Routière",
        gallery: [
            { url: "https://placehold.co/1600x900/1e293b/facc15?text=Pose+du+béton+bitumineux", caption: "Application des couches de roulement renforcées." },
            { url: "https://placehold.co/1000x562/0f172a/94a3b8?text=Travaux+de+drainage+et+caniveaux", caption: "Installation d'un système de gestion des eaux pluviales." },
            { url: "https://placehold.co/1200x800/1e293b/94a3b8?text=Équipement+lourd+sur+chantier", caption: "Engins de compactage et d'épandage en action." },
            { url: "https://placehold.co/1000x700/0f172a/facc15?text=Route+finalisée+et+signalisation", caption: "Section terminée avec marquage au sol." },
        ],
      },
  ];

// --- Définition des Variants pour Staggered Animation ---
const containerVariants: Variants = {
  hidden: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 120, damping: 15 } 
  },
};

// --- Composant d'Information Clé (ProjectInfoPill) ---
const ProjectInfoPill = ({ icon: Icon, label, value }) => (
    <motion.div 
        variants={itemVariants} 
        className="flex flex-col bg-gray-900/70 border border-gray-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm 
                   hover:border-amber-500/50 transition-all duration-300 transform hover:scale-[1.01]"
    >
        <div className="flex items-center text-amber-500 mb-3">
            <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-xs uppercase font-extrabold text-gray-400 tracking-widest">{label}</span>
        </div>
        <p className="text-xl font-bold text-white leading-snug">{value}</p>
    </motion.div>
);

// --- NOUVEAU: Composant de Galerie Photos ---
const ProjectGallery = ({ galleryItems }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = galleryItems[activeIndex];

    // Variants pour la transition de l'image principale
    const fadeVariants: Variants = {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.02 },
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20 p-6 bg-gray-900/70 rounded-3xl shadow-2xl border border-gray-800"
        >
            <h2 className="text-4xl font-extrabold mb-10 text-amber-400 flex items-center">
                <Image className="w-7 h-7 mr-3" />
                Galerie Photo
            </h2>

            {/* Image principale (avec AnimatePresence pour les transitions) */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                        key={activeIndex} // Clé pour forcer la transition lors du changement
                        src={activeItem.url}
                        alt={activeItem.caption}
                        variants={fadeVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover absolute top-0 left-0"
                    />
                </AnimatePresence>
            </div>
            
            {/* Légende de l'image principale */}
            <p className="text-center text-gray-400 italic mb-8 text-sm sm:text-base">
                {activeItem.caption}
            </p>

            {/* Barres de progression/Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto pb-2 justify-center">
                {galleryItems.map((item, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-20 h-14 sm:w-28 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === activeIndex
                                ? 'border-amber-500 ring-4 ring-amber-500/50 scale-105'
                                : 'border-gray-700 hover:border-amber-500/40 opacity-70 hover:opacity-100'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src={item.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};


// --- Composant de Détails du Projet (ProjectDetailsComponent) ---
const ProjectDetailsComponent = ({ projectId, onBack }) => {
  // Simule l'utilisation de useParams() en utilisant l'ID passé par props
  const projet = PROJECT_DATA.find((p) => p.id === projectId);

  if (!projet) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-amber-500 mb-4">Projet Introuvable (ID: {projectId})</h1>
        <p className="text-lg text-gray-400 mb-8">
          Désolé, mais la référence de ce projet n'existe pas.
        </p>
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 bg-amber-600 text-gray-950 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} /> Retour aux Réalisations
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.section 
        className="relative bg-gray-950 text-gray-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
      {/* Halo lumineux */}
      <motion.div
        className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-amber-400/5 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Bouton retour */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-all duration-300 p-2 rounded-lg mb-12"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} /> Retour aux Réalisations
        </motion.button>

        {/* Bloc Titre */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="mb-12"
        >
            <p className="text-sm md:text-md uppercase font-bold text-amber-400 tracking-[0.3em] mb-2">{projet.category}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">{projet.title}</h1>
        </motion.div>
        
        {/* NOUVEAU: Insertion de la Galerie */}
        {projet.gallery && projet.gallery.length > 0 && (
            <ProjectGallery galleryItems={projet.gallery} />
        )}

        {/* Informations Clés */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
            <ProjectInfoPill 
                icon={MapPin} 
                label="Localisation du site" 
                value={projet.location} 
            />
            <ProjectInfoPill 
                icon={Calendar} 
                label="Période d'exécution" 
                value={projet.date} 
            />
            <ProjectInfoPill 
                icon={Building2} 
                label="Client principal" 
                value={projet.client || "Non spécifié"} 
            />
            <ProjectInfoPill 
                icon={Users} 
                label="Partenaires & Équipe" 
                value="Équipe Pluridisciplinaire (INT.)" 
            />
        </motion.div>

        {/* Description Détaillée */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
        >
            <motion.div variants={itemVariants} className="lg:col-span-2">
                <h2 className="text-4xl font-extrabold mb-6 text-amber-400">
                    Notre Approche : Excellence et Pérennité
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-amber-600/50 pl-4 py-2">
                    {projet.description}
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-amber-500 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3" />
                    Focus Qualité
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-extrabold text-lg">•</span> Durabilité structurelle garantie</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-extrabold text-lg">•</span> Conformité aux normes Eurocode</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-extrabold text-lg">•</span> Gestion de projet BIM/Agile</li>
                </ul>
            </motion.div>
        </motion.div>

        {/* Domaines d’Expertise Mobilisés */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-16"
        >
            <motion.h2 
                variants={itemVariants}
                className="text-3xl font-extrabold mb-10 text-amber-400 flex items-center"
            >
                <HardHat className="w-7 h-7 mr-3" />
                Expertises Techniques Déployées
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projet.expertise.map((exp, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(217, 119, 6, 0.2)" }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-900/60 border border-amber-400/20 rounded-xl p-5 text-gray-300 text-base shadow-xl 
                                   hover:bg-gray-800/70 hover:border-amber-400/50 transition-all duration-300"
                    >
                        <Cpu className="w-5 h-5 text-amber-500 mb-3" />
                        <p className='font-medium'>{exp}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};


// --- Composant de Liste (Realisations) ---
const Realisations = ({ onSelectProject }) => {
    // Utilise les données enrichies pour la liste et le détail
    const projets = PROJECT_DATA.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description.substring(0, 100) + '...', // Description courte
        img: p.img, 
        category: p.category,
        location: p.location, // Ajout de la localisation pour la liste
        date: p.date,
    }));

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }, 
        },
    };

    return (
        <section id="realisations" className="relative bg-gray-950 text-gray-100 py-32 px-6 overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-amber-500 uppercase font-semibold tracking-widest mb-4">
                        Nos Réalisations
                    </h2>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
                        Des Projets qui <span className="text-amber-400">Façonnent l’Avenir</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Découvrez quelques-uns de nos projets emblématiques, alliant ingénierie, innovation et excellence dans l’exécution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projets.map((projet) => (
                        <motion.div
                            key={projet.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/20 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 cursor-pointer"
                            // Gestionnaire de clic pour le routage interne
                            onClick={() => onSelectProject(projet.id)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={projet.img}
                                    alt={projet.title}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <div className="absolute top-4 left-4 bg-amber-600 text-gray-950 font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                                    {projet.category}
                                </div>
                                <div className="absolute bottom-4 right-4 text-xs text-white bg-black/60 px-2 py-1 rounded-lg">
                                    {projet.location} ({projet.date})
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                                    {projet.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{projet.description}</p>

                                {/* Bouton qui déclenche la navigation via la prop */}
                                <button
                                    className="inline-flex items-center gap-2 bg-amber-600 text-gray-950 font-semibold px-5 py-2 rounded-full text-sm shadow-md hover:bg-amber-500 transition-all duration-300"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Empêche l'événement de se propager au conteneur motion.div
                                        onSelectProject(projet.id);
                                    }}
                                >
                                    <Eye className="w-4 h-4" />
                                    Voir le projet
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- Composant Principal de l'Application (Gestion du Routage Interne) ---
const App = () => {
    // État pour gérer la vue actuelle : 'list' (défaut) ou 'details'
    const [view, setView] = useState('list');
    // État pour stocker l'ID du projet sélectionné
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const handleSelectProject = (id) => {
        setSelectedProjectId(id);
        setView('details');
    };

    const handleBack = () => {
        setSelectedProjectId(null);
        setView('list');
        // Optionnel: Faire défiler vers le haut lors du retour à la liste
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Assurez-vous d'avoir le script Tailwind chargé pour ces styles
    return (
        <div className="min-h-screen bg-gray-950 font-inter">
            {view === 'list' && (
                <Realisations onSelectProject={handleSelectProject} />
            )}
            {view === 'details' && selectedProjectId && (
                <ProjectDetailsComponent projectId={selectedProjectId} onBack={handleBack} />
            )}
        </div>
    );
};

export default App;
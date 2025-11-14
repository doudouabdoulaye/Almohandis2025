import React, { useState } from 'react';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building2, Users, HardHat, TrendingUp, Cpu, ListFilter, Eye } from "lucide-react";

// --- Définition des Variants pour Staggered Animation (Haut de Gamme) ---
const containerVariants = {
  hidden: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 120, damping: 15 } 
  },
};

// --- Données Statiques des Projets (Incluant la période d'exécution) ---
const PROJECT_DATA = [
    {
      id: "1",
      title: "Construction du Pont de N'Djamena",
      location: "N'Djamena, Tchad",
      date: "2022 - 2024", 
      category: "Génie Civil",
      client: "Ministère des Infrastructures",
      img: "https://placehold.co/1200x500/1e293b/d97706?text=Ouvrage+d'Art+Majeur",
      description:
        "Ce projet d’envergure internationale a consisté à la conception et à la construction d’un pont de 1,2 km traversant le fleuve Chari. L’ouvrage, réalisé selon les normes Eurocode (EN 1990 à 1999), améliore considérablement la mobilité urbaine et régionale. Les technologies de fondation profonde (pieux forés) et de béton précontraint ont été intégrées pour garantir une durabilité structurelle sur plus de 100 ans, un gage de qualité pour un investissement public majeur.",
      expertise: [
        "Études géotechniques et hydrauliques (Modélisation FEA)",
        "Modélisation structurelle 3D (BIM Level 300)",
        "Suivi de chantier intelligent (IoT & Capteurs de contrainte)",
        "Assurance qualité ISO 9001 et Audit Externe",
      ],
    },
    {
      id: "2",
      title: "Complexe Administratif de Moundou",
      location: "Moundou, Tchad",
      date: "2020 - 2023", 
      category: "Bâtiments & Infrastructures",
      client: "Ville de Moundou",
      img: "https://placehold.co/1200x500/1e293b/d97706?text=Complexe+Moderne+et+%C3%89cologique",
      description:
        "Un complexe administratif moderne intégrant des espaces modulaires, un auditorium de 500 places et un système énergétique photovoltaïque de 150 kWc. Construit dans une approche éco-responsable et certifiée, il représente un modèle de durabilité urbaine en Afrique Centrale, réduisant l'empreinte carbone de 40% par rapport aux constructions traditionnelles.",
      expertise: [
        "Architecture bioclimatique et efficacité énergétique",
        "Gestion énergétique solaire (Systèmes On-Grid)",
        "Coordination et clash detection BIM",
        "Matériaux durables locaux et certifiés",
      ],
    },
    {
        id: "3",
        title: "Centre Technique de Formation BTP",
        location: "N'Djamena, Tchad",
        date: "2023 - 2025", 
        category: "Formation & Technologie",
        client: "Ministère de l’Enseignement Technique",
        img: "https://placehold.co/1200x500/1e293b/d97706?text=Centre+de+Formation+Technologique",
        description:
          "Édifice d’enseignement technique intégrant des laboratoires de génie civil, de topographie et de mécanique des sols. Ce centre forme la nouvelle génération d’ingénieurs et techniciens du BTP au Tchad, en s'alignant sur les standards de formation internationaux.",
        expertise: [
          "Conception pédagogique du bâtiment",
          "Installation d’équipements de pointe",
          "Design acoustique et ventilation optimisée",
          "Supervision de chantier par drones",
        ],
      },
  ];

// --- Composant d'Information Clé (Carte Premium) ---
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

// --- Composant de Détails du Projet (ProjectDetailsComponent) ---
// Ce composant est responsable de l'affichage détaillé d'un projet.
const ProjectDetailsComponent = ({ projet, onBack }) => {

  return (
    <motion.section 
        className="relative bg-gray-950 text-gray-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
      {/* 1. Halo lumineux pour effet Premium */}
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

        {/* 2. Titre et Image de Couverture */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/50 border border-amber-500/30 mb-16"
        >
          <img
            src={projet.img}
            alt={projet.title}
            className="w-full h-80 sm:h-[450px] lg:h-[550px] object-cover transition duration-500 hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex items-end">
            <div className="text-white">
                <p className="text-sm md:text-md uppercase font-bold text-amber-400 tracking-[0.3em] mb-2">{projet.category}</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">{projet.title}</h1>
            </div>
          </div>
        </motion.div>

        {/* 3. Informations Clés (Période d'exécution mise à jour) */}
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
                value={projet.client} 
            />
            <ProjectInfoPill 
                icon={Users} 
                label="Partenaires & Équipe" 
                value="Équipe Pluridisciplinaire (INT.)" 
            />
        </motion.div>

        {/* 4. Description Détaillée */}
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
                    Impacts Clés
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-extrabold text-lg">•</span> Durabilité garantie (100+ ans)</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-extrabold text-lg">•</span> Conformité aux normes Eurocode</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500 font-extrabold text-lg">•</span> Réduction de l'empreinte carbone</li>
                </ul>
            </motion.div>
        </motion.div>

        {/* 5. Domaines d’Expertise Mobilisés */}
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
        
        {/* Section CTA */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center py-16 px-8 bg-amber-600/10 border-t-4 border-b-4 border-amber-600 rounded-2xl my-16 shadow-2xl shadow-amber-600/20"
        >
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Discutons de votre prochain défi BTP
            </h3>
            <motion.button
                onClick={onBack} 
                className="bg-amber-600 hover:bg-amber-500 text-gray-950 font-bold py-3 px-8 rounded-full shadow-lg shadow-amber-600/50 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Retour à la liste des projets
            </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
};


// --- Composant de Liste (Realisation.jsx) ---
// Ce composant est responsable de l'affichage de la liste des réalisations.
const Realisation = ({ projets, onSelect }) => (
    <motion.div 
        className="relative bg-gray-950 text-gray-100 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
        <div className="max-w-7xl mx-auto z-10">
            <h1 className="text-5xl font-extrabold text-amber-400 mb-12 flex items-center">
                <ListFilter className="w-8 h-8 mr-4" />
                Nos Réalisations Clés
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {projets.map((p) => (
                    <motion.div
                        key={p.id}
                        className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 
                                   hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-[1.01]"
                        whileHover={{ y: -5 }}
                    >
                        <img 
                            src={p.img} 
                            alt={p.title} 
                            className="w-full h-48 object-cover" 
                        />
                        
                        <div className="p-6">
                            <p className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-1">{p.category}</p>
                            <h2 className="text-2xl font-bold text-white mb-3">{p.title}</h2>
                            <div className="flex items-center text-sm text-gray-400 mb-4">
                                <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                                <span>{p.location} | Période : {p.date}</span>
                            </div>
                            
                            {/* Bouton "Voir le projet" qui déclenche l'affichage du détail */}
                            <motion.button
                                onClick={() => onSelect(p.id)}
                                className="mt-3 w-full flex items-center justify-center gap-2 bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded-lg 
                                           hover:bg-amber-500 transition-colors shadow-lg shadow-amber-600/40"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Eye className="w-5 h-5" />
                                Voir le projet
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
             {/* CTA bas de page de liste */}
             <div className="text-center py-10 mt-16 text-gray-400">
                <p>Retrouvez tous nos succès et notre approche d'ingénierie détaillée.</p>
            </div>
        </div>
    </motion.div>
);


// --- Composant Principal de l'Application (Gestion de l'état) ---
// Simule le routage entre la liste et le détail
const App = () => {
    // selectedProjectId est l'état qui détermine quel composant afficher
    const [selectedProjectId, setSelectedProjectId] = useState(null); 
    
    // Trouver le projet correspondant à l'ID sélectionné
    const projet = PROJECT_DATA.find((p) => p.id === selectedProjectId);

    // Fonction passée aux cartes pour naviguer vers le détail
    const handleSelectProject = (id) => {
        setSelectedProjectId(id);
    };

    // Fonction passée au composant de détail pour revenir à la liste
    const handleBack = () => {
        setSelectedProjectId(null); 
    };

    if (projet) {
        // Affiche la page de détails du projet sélectionné
        return <ProjectDetailsComponent projet={projet} onBack={handleBack} />;
    }

    // Affiche la liste des réalisations par défaut
    return <Realisation projets={PROJECT_DATA} onSelect={handleSelectProject} />;
};

export default App;
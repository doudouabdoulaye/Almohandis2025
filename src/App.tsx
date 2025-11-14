/* import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts';
import Home from './Pages/Home';
import Apropos from './Pages/Apropos';
import Contact from './Pages/contact';
import DemanderDevis from './Pages/DemanderDevis';
import Entreprise from './Pages/Entreprise';
import Expertise from './Pages/Expertise';
import Realisations from './Pages/Realisations';
import './index.css';
import ProjectDetails from './Pages/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/DemanderDevis" element={<DemanderDevis/>}/>
          <Route path="/Entreprise" element={<Entreprise/>}/>
          <Route path="/Expertise" element={<Expertise/>}/>
          <Route path="/Apropos" element={<Apropos/>}/>
          <Route path='/Realisations' element={<Realisations/>}/>
          <Route path='/projects/:id' element={<ProjectDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './Layouts/MainLayouts';
import Home from './Pages/Home';
import Apropos from './Pages/Apropos';
import Contact from './Pages/contact';
import DemanderDevis from './Pages/DemanderDevis';
import Entreprise from './Pages/Entreprise';
import Expertise from './Pages/Expertise';
import Realisations from './Pages/Realisations';
import ProjectDetails from './Pages/ProjectDetails';
import Dashboard from './components/DashboardComplet/Dashboard';
import Login from './components/DashboardComplet/login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

// 🎨 Thème par défaut
const defaultTheme = {
  id: 'dark',
  primary: 'blue',
  background: 'bg-gray-900',
  text: 'text-white',
};

// 🧱 Données de démonstration
const sampleProjects = [
  { id: 1, title: 'Projet 1', description: 'Description projet 1', updatedAt: new Date() },
  { id: 2, title: 'Projet 2', description: 'Description projet 2', updatedAt: new Date() },
];

const sampleMessages = [
  { id: 1, sender: 'Alice', content: 'Message 1', createdAt: new Date() },
  { id: 2, sender: 'Bob', content: 'Message 2', createdAt: new Date() },
];

function App() {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  return (
    <BrowserRouter>
      {/* ✅ AuthProvider doit envelopper toutes les routes pour fournir l'authentification */}
      <AuthProvider>
        <Routes>
          {/* 🌐 Routes publiques avec le layout principal */}
          <Route element={<MainLayout currentTheme={currentTheme} />}>
            <Route index element={<Home />} />
            <Route path="Apropos" element={<Apropos />} />
            <Route path="contact" element={<Contact />} />
            <Route path="DemanderDevis" element={<DemanderDevis />} />
            <Route path="Entreprise" element={<Entreprise />} />
            <Route path="Expertise" element={<Expertise />} />
            <Route path="Realisations" element={<Realisations />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
          </Route>

          {/* 🔑 Login (hors MainLayout) */}
          <Route path="/login" element={<Login currentTheme={currentTheme} />} />

          {/* 🛡 Dashboard protégé */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  projects={sampleProjects}
                  messages={sampleMessages}
                  currentTheme={currentTheme}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;









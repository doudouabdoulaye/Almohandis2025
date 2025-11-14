import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface DashboardProps {
  projects: any[];
  messages: any[];
  currentTheme: any;
}

const Dashboard: React.FC<DashboardProps> = ({ projects, messages, currentTheme }) => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const unreadCount = messages.length;

  const handleViewChange = (viewId: string) => {
    setCurrentView(viewId);
  };

  const handleToggleCollapse = () => {
    // Pour mobile ou desktop
    if (window.innerWidth < 768) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleLogout = () => {
    console.log("Déconnexion !");
    // Ici tu peux vider le context auth et rediriger
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        currentView={currentView}
        onViewChange={handleViewChange}
        unreadCount={unreadCount}
        onLogout={handleLogout}
        currentTheme={currentTheme}
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
        isMobileOpen={isMobileOpen}
      />

      {/* Contenu principal */}
      <div className={`flex-1 flex flex-col transition-all duration-500 ${isCollapsed ? 'md:ml-20' : 'md:ml-64'} ml-0`}>
        {/* Header optionnel */}
        <header className="w-full p-4 bg-gray-900 text-white shadow-md flex justify-between items-center">
          <button className="md:hidden" onClick={handleToggleCollapse}>
            Menu
          </button>
          <h1 className="text-xl font-bold">Dashboard Premium</h1>
        </header>

        {/* Contenu dynamique selon currentView */}
        <main className="flex-1 p-6 bg-gray-950 text-white overflow-auto">
          {currentView === "dashboard" && <div>Bienvenue sur votre tableau de bord</div>}
          {currentView === "projects" && <div>Liste des projets</div>}
          {currentView === "inbox" && <div>Boîte de réception</div>}
          {currentView === "settings" && <div>Paramètres</div>}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

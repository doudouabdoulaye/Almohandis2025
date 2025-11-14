import React, { useState } from "react";
import Sidebar from "../DashboardComplet/Sidebar";
import Header from "../DashboardComplet/Header";
import { Outlet } from "react-router-dom";

interface Theme {
  id: string;
  primary: string;
  background: string;
  text: string;
}

interface DashboardLayoutProps {
  currentTheme?: Theme;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ currentTheme }) => {
  const theme = currentTheme || {
    id: "default",
    primary: "blue",
    background: "bg-gray-900",
    text: "text-white",
  };

  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = "/login"; // redirection
  };

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        onLogout={handleLogout}
        currentTheme={theme}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleMobileSidebar}
        isMobileOpen={isMobileSidebarOpen}
      />

      {/* Wrapper principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header onToggleSidebar={toggleMobileSidebar} currentTheme={theme} />

        {/* Main content */}
        <main className={`flex-1 p-6 pt-20 ${theme.background} ${theme.text} overflow-auto`}>
          <Outlet context={{ currentTheme: theme, currentView, setCurrentView }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

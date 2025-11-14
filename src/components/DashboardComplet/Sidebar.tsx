import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, FolderOpen, Mail, Settings, LogOut, Zap, Menu, X } from "lucide-react";

interface Theme {
  id: string;
  primary: string; // Ex: amber-600
  background: string; // Ex: bg-gray-950
  text: string;
}

interface SidebarProps {
  currentView: string;
  onViewChange: (viewId: string) => void;
  unreadCount: number;
  onLogout: () => void;
  currentTheme: Theme;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
}

const defaultTheme: Theme = {
  id: "fallback-amber-dark",
  primary: "amber-600",
  background: "bg-gray-950",
  text: "text-white",
};

const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onViewChange,
  unreadCount,
  onLogout,
  currentTheme = defaultTheme,
  isCollapsed,
  onToggleCollapse,
  isMobileOpen
}) => {
  const { primary, background } = currentTheme;

  const getTailwindClass = (colorClass: string, prefix: 'bg' | 'text' | 'shadow') => {
    const [color, shade = '600'] = colorClass.split('-');
    return `${prefix}-${color}-${shade}`;
  };

  const primaryBg = getTailwindClass(primary, 'bg');
  const primaryText = getTailwindClass(primary, 'text');
  const primaryShadow = `shadow-${primary.split('-')[0]}-600`;

  const itemVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 },
  };

  const NavItem = ({ viewId, Icon, label, count = 0 }: { viewId: string; Icon: any; label: string; count?: number }) => {
    const isActive = currentView === viewId;
    return (
      <motion.button
        onClick={() => onViewChange(viewId)}
        className={`group w-full flex items-center transition-all duration-300 transform
          ${isCollapsed ? 'justify-center p-3' : 'px-4 py-3'}
          rounded-full my-1
          ${isActive ? `${primaryBg} text-gray-950 shadow-md ${primaryShadow}/40 font-bold` : "text-gray-400 hover:bg-gray-800/70 hover:text-white"}
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'}`} />
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              className="flex-grow text-left whitespace-nowrap"
              variants={itemVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              transition={{ duration: 0.2 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
        {count > 0 && viewId === "inbox" && !isCollapsed && (
          <motion.span
            className="ml-auto bg-red-600 text-xs font-bold px-2 py-0.5 rounded-full text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {count}
          </motion.span>
        )}
      </motion.button>
    );
  };

  return (
    <>
      {/* Overlay mobile */}
      {isMobileOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onToggleCollapse}
        />
      )}

      {/* Sidebar principale */}
      <motion.div
        className={`
          ${isCollapsed ? 'md:w-20' : 'md:w-64'} ${background} 
          border-r border-gray-800 p-4 pt-6 flex flex-col justify-between flex-shrink-0
          h-full transition-all duration-500 ease-in-out
          fixed top-0 left-0 bottom-0 z-50 shadow-2xl md:shadow-none
          w-64 transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}
        initial={false}
        animate={{ width: isCollapsed ? '5rem' : '16rem' }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div>
          {/* Header */}
          <div className={`flex items-center mb-8 border-b border-gray-800 pb-4 ${isCollapsed ? 'justify-center' : ''}`}>
            <Zap size={28} className={`mr-3 ${primaryText}`} />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.h1
                  className="text-2xl font-extrabold text-white whitespace-nowrap"
                  variants={itemVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  transition={{ duration: 0.2 }}
                >
                  Dashboard Pro
                </motion.h1>
              )}
            </AnimatePresence>

            <motion.button
              onClick={onToggleCollapse}
              className={`text-gray-400 hover:${primaryText} transition ml-auto ${isCollapsed ? 'ml-0' : ''}`}
              aria-label={isCollapsed ? "Déplier la barre latérale" : "Replier la barre latérale"}
            >
              <span className="md:hidden"><X className="w-6 h-6" /></span>
              <span className="hidden md:block">
                <motion.div animate={{ rotate: isCollapsed ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <NavItem viewId="dashboard" Icon={LayoutDashboard} label="Tableau de Bord" />
            <NavItem viewId="projects" Icon={FolderOpen} label="Projets & Tâches" />
            <NavItem viewId="inbox" Icon={Mail} label="Boîte de Réception" count={unreadCount} />
            <NavItem viewId="settings" Icon={Settings} label="Paramètres" />
          </div>
        </div>

        {/* Déconnexion */}
        <motion.button
          onClick={onLogout}
          className={`w-full flex items-center justify-center gap-2 mt-6
            ${isCollapsed ? 'p-3' : 'px-4 py-3'} bg-red-700 text-white font-semibold rounded-full
            hover:bg-red-800 transition shadow-xl shadow-red-900/40`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogOut className="w-5 h-5" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                variants={itemVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                transition={{ duration: 0.2 }}
              >
                Déconnexion
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
};

export default Sidebar;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/WhatsApp_Image_2025-06-21_at_10.18.43-removebg-preview.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/Entreprise", label: "Entreprise" },
    { to: "/Expertise", label: "Expertises" },
    { to: "/Realisations", label: "Réalisations" },
    { to: "/Apropos", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ];

  const services = [
    { to: "/services/ingenierie", label: "Ingénierie & Études techniques" },
    { to: "/services/suivi", label: "Suivi & Contrôle des travaux" },
    { to: "/services/assistance", label: "Assistance à maîtrise d’ouvrage" },
    { to: "/services/prestations", label: "Prestations & Coordination" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-[0_4px_15px_rgba(0,0,0,0.04)] transition-all duration-500">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3">
        {/* === Logo + Nom === */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="AL-MOHANDIS Logo"
            className="h-10 sm:h-12 object-contain drop-shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <span className="text-2xl font-extrabold tracking-tight text-gray-800 leading-none">
            AL-
            <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
              MOHANDIS
            </span>
          </span>
        </Link>

        {/* === MENU Desktop === */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative py-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? "text-amber-600 after:w-full font-semibold"
                    : "text-gray-700 hover:text-amber-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* === Dropdown Services === */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-amber-600 transition font-medium">
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showServices ? "rotate-180 text-amber-600" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 mt-3 w-72 bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-xl py-3 z-50"
                >
                  {services.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-all duration-200"
                    >
                      {label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* === Bouton principal (optionnel) === */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/DemanderDevis"
            className="ml-6 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Demander un devis
          </Link>
        </div>

        {/* === MENU Mobile === */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-amber-600 transition"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* === Menu Mobile Expand === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl"
          >
            <ul className="flex flex-col space-y-3 py-5 px-6">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 hover:text-amber-600 transition font-medium"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="border-t border-gray-200 pt-3">
                <p className="text-sm text-gray-500 mb-1">Services</p>
                {services.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-2 text-gray-700 hover:text-amber-600 transition"
                  >
                    {label}
                  </NavLink>
                ))}
              </li>

              {/* Bouton Mobile */}
              <li>
                <Link
                  to="/DemanderDevis"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 text-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-500 text-white font-medium px-4 py-2 rounded-full shadow-md transition"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

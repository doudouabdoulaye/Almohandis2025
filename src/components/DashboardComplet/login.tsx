import React, { useState, useMemo, useEffect } from "react";
import { Mail, Lock, LogIn, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo/WhatsApp_Image_2025-06-21_at_10.18.43-removebg-preview.png";

interface Theme {
  id: string;
  primary: string;
  background: string;
  text: string;
}

interface LoginProps {
  currentTheme?: Theme;
}

type LanguageCode = "fr" | "en";
type Labels = Record<LanguageCode, { [key: string]: string }>;

const translations: Labels = {
  fr: {
    title: "Espace Administrateur",
    welcome: "Veuillez vous connecter pour accéder au tableau de bord.",
    emailLabel: "Adresse Email",
    passwordLabel: "Mot de passe",
    button: "Se Connecter",
    error: "Identifiants invalides. Accès réservé aux administrateurs.",
    placeholderEmail: "admin@votre-domaine.com",
    language: "Langue",
    footer: "Application sécurisée V3.0.0",
    success: " Connexion réussie ! Redirection...",
  },
  en: {
    title: "Administrator Area",
    welcome: "Please log in to access the dashboard.",
    emailLabel: "Email Address",
    passwordLabel: "Password",
    button: "Log In",
    error: "Invalid credentials. Access restricted to administrators.",
    placeholderEmail: "admin@your-domain.com",
    language: "Language",
    footer: "Secure Application V3.0.0",
    success: " Login successful! Redirecting...",
  },
};

const Login: React.FC<LoginProps> = ({ currentTheme }) => {
  const theme = currentTheme || {
    id: "amber-admin",
    primary: "amber-500",
    background: "bg-gray-950",
    text: "text-white",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [lang, setLang] = useState<LanguageCode>("fr");

  const { login } = useAuth();
  const navigate = useNavigate();
  const labels = useMemo(() => translations[lang], [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const isSuccess = login(email, password);
    if (isSuccess) {
      setSuccess(labels.success);
    } else {
      setError(labels.error);
    }
  };

  // Redirection après succès
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen p-4 font-sans ${theme.background} bg-gradient-to-t from-gray-900 to-gray-950`}
    >
      <AnimatePresence>
        {success && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50"
          >
            {success}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sélecteur de langue */}
      <div className="absolute top-8 right-8 z-10 text-gray-400 flex items-center gap-2">
        <Globe className="w-5 h-5 text-amber-400" />
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as LanguageCode)}
          className="bg-gray-800 border border-gray-700 rounded-xl text-white text-sm py-2 px-3 focus:ring-amber-600 focus:border-amber-600 cursor-pointer"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 z-10 p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800 w-full max-w-lg transition-all duration-500 hover:shadow-amber-500/40 hover:-translate-y-1"
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="h-28 w-28 object-contain rounded-full bg-gray-100 border-4 border-amber-500 shadow-2xl shadow-amber-500/30 mb-4"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/112x112/1e293b/f59e0b?text=LOGO";
            }}
          />
          <h1 className="text-4xl font-extrabold text-white mt-4">{labels.title}</h1>
          <p className="text-gray-500 text-sm mt-1">{labels.welcome}</p>
        </div>

        {error && (
          <div className="bg-red-900/40 text-red-300 p-4 rounded-xl mb-6 text-sm border border-red-800/50 flex items-center justify-center">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 text-sm font-semibold flex items-center text-amber-300">
            <Mail className="w-4 h-4 mr-2 text-amber-500" />
            {labels.emailLabel}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300 shadow-inner shadow-gray-950/50"
            placeholder={labels.placeholderEmail}
            required
          />
        </div>

        {/* Mot de passe */}
        <div className="mb-8">
          <label className="block text-gray-300 mb-2 text-sm font-semibold flex items-center text-amber-300">
            <Lock className="w-4 h-4 mr-2 text-amber-500" /> {labels.passwordLabel}
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300 shadow-inner shadow-gray-950/50"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-gray-950 font-extrabold text-lg rounded-xl shadow-lg shadow-amber-500/40 transition duration-300 flex items-center justify-center gap-3 transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <LogIn className="w-5 h-5" />
          {labels.button}
        </button>
      </form>

      <p className="mt-8 z-10 text-xs text-gray-600">
        {labels.footer} - &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Login;

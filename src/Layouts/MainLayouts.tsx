/* import Header from '../components/Header';
import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom'; // Assurez-vous d'importer Outlet pour les routes imbriquées



function MainLayout() {
  return (
   <> 
    <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
   </>
  );
}

export default MainLayout;





 */
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

interface Theme {
  id: string;
  primary: string;
  background: string;
  text: string;
}

interface MainLayoutProps {
  currentTheme?: Theme;
}

function MainLayout({ currentTheme }: MainLayoutProps) {
  // Valeur par défaut si currentTheme est undefined
  const theme = currentTheme || {
    id: "default",
    primary: "blue",
    background: "gray-900",
    text: "text-white"
  };

  return (
    <>
      <Header currentTheme={theme} />
      <main className={`${theme.background} min-h-screen`}>
        <Outlet context={{ currentTheme: theme }} />
      </main>
      <Footer currentTheme={theme} />
    </>
  );
}

export default MainLayout;


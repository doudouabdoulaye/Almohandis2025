// src/components/Header/headerConfig.ts

export interface SubItem {
  to: string;
  label: string;
}

export interface MenuItem {
  label: string;
  to?: string;
  children?: SubItem[];
}

export const menuItems: MenuItem[] = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  {
    label: 'Services',
    children: [
      { to: '/services/etudes-techniques', label: 'Études techniques' },
      { to: '/services/ingenierie', label: 'Ingénierie' },
      { to: '/services/expertises', label: 'Expertises' },
      { to: '/services/suivi-travaux', label: 'Suivi des travaux' },
    ],
  },
  { to: '/projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

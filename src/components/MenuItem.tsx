// src/components/Header/MenuItem.tsx

import { NavLink } from 'react-router-dom';
import type { MenuItem as ItemType } from './headerConfig';



const MenuItem = ({ to, label }: ItemType) => (
  <NavLink
    to={to!}
    className={({ isActive }) =>
      isActive
        ? 'text-blue-700 font-semibold border-b-2 border-blue-700 pb-1'
        : 'text-gray-700 hover:text-blue-600 transition-colors'
    }
  >
    {label}
  </NavLink>
);

export default MenuItem;

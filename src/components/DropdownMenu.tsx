import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import type { MenuItem as ItemType } from './headerConfig';

interface Props {
  item: ItemType;
  isMobile?: boolean;
}

const DropdownMenu = ({ item, isMobile = false }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${isMobile ? 'w-full' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between gap-1 text-gray-700 hover:text-blue-700 transition-colors w-full ${
          isMobile ? 'py-2 px-2 border-b text-left' : ''
        }`}
      >
        {item.label}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Dropdown Items */}
      {open && (
        <div
          className={`${
            isMobile
              ? 'pl-4 mt-1 flex flex-col space-y-1'
              : 'absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-48 z-50'
          }`}
        >
          {item.children?.map((child, index) => (
            <NavLink
              key={index}
              to={child.to}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm ${
                  isActive ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`
              }
              onClick={() => {
                if (isMobile) setOpen(false);
              }}
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

import { Menu, Bell, Mail, UserCircle } from "lucide-react";

<header
  className={`flex items-center justify-between w-full px-6 py-4 ${currentTheme.background} ${currentTheme.text} shadow-md fixed top-0 left-0 right-0 z-50`}
>
  <div className="flex items-center gap-4">
    <button
      className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition"
      onClick={onToggleSidebar}
      aria-label="Toggle Sidebar"
    >
      <Menu className="w-6 h-6" />
    </button>
    <h1 className="text-2xl font-bold">Dashboard Premium</h1>
  </div>

  <div className="flex items-center gap-4">
    <button className="relative p-2 rounded-lg hover:bg-gray-800/50 transition">
      <Bell className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full font-bold">
        3
      </span>
    </button>

    <button className="relative p-2 rounded-lg hover:bg-gray-800/50 transition">
      <Mail className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-gray-950 px-1.5 py-0.5 rounded-full font-bold">
        5
      </span>
    </button>

    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800/50 transition">
        <UserCircle className="w-8 h-8 text-gray-300" />
        <span className="hidden md:block font-semibold">Admin</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
        <button className="w-full text-left px-4 py-2 hover:bg-gray-800/50 transition rounded-t-lg">
          Profil
        </button>
        <button className="w-full text-left px-4 py-2 hover:bg-gray-800/50 transition rounded-b-lg">
          Déconnexion
        </button>
      </div>
    </div>
  </div>
</header>
function onToggleSidebar(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  throw new Error("Function not implemented.");
}


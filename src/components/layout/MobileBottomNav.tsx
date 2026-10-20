import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Zap, 
  Compass, 
  HelpCircle, 
  LayoutDashboard 
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'GİRİŞ', icon: Home, exact: true },
    { to: '/hizli-cozum', label: 'ÇÖZÜM', icon: Zap, badge: 'YENİ' },
    { to: '/analiz', label: 'ANALİZ', icon: Compass },
    { to: '/sorunlar', label: 'SORUNLAR', icon: HelpCircle },
    { to: '/panel', label: 'PANEL', icon: LayoutDashboard }
  ];

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-t-2 border-black dark:border-white select-none pb-[env(safe-area-inset-bottom,0px)]">
      <div className="grid grid-cols-5 h-16 items-center px-1">
        {navItems.map((item) => {
          const isActive = item.exact 
            ? location.pathname === item.to 
            : location.pathname.startsWith(item.to);

          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center h-full py-1 transition-all relative ${
                isActive
                  ? 'text-red-600 dark:text-red-500 font-black'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-600" />
              )}

              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {item.badge && !isActive && (
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-600 rounded-full" />
                )}
              </div>

              <span className={`font-mono text-[9px] uppercase tracking-wider mt-1 ${
                isActive ? 'font-black' : 'font-bold'
              }`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

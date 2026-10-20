import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const FloatingClickerButton: React.FC = () => {
  const location = useLocation();

  // Hide the floating button if user is already on /clicker
  if (location.pathname === '/clicker') {
    return null;
  }

  return (
    <Link
      to="/clicker"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 flex items-center gap-1.5 px-3 py-2 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all select-none group"
      title="Sesli Dijital Clicker & Seans Zamanlayıcısını Aç"
      aria-label="Clicker Aç"
    >
      <Zap className="w-4 h-4 fill-yellow-300 text-yellow-300 group-hover:scale-110 transition-transform" />
      <span className="tracking-wider">CLİCKER</span>
    </Link>
  );
};

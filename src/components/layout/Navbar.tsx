import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDog } from '@/context/DogContext';
import { useTheme } from 'next-themes';
import { 
  Compass, 
  HelpCircle, 
  CalendarCheck, 
  BookOpen, 
  MessageSquareHeart, 
  LayoutDashboard, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { activeDog, dogs, setActiveDog } = useDog();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/analiz', label: 'ANALİZ', icon: Compass, badge: 'MOTOR' },
    { to: '/sorunlar', label: 'SORUNLAR', icon: HelpCircle },
    { to: '/egitim-planlari', label: 'PLANLAR', icon: CalendarCheck },
    { to: '/kutuphane', label: 'KÜTÜPHANE', icon: BookOpen },
    { to: '/patiasistan', label: 'PATİASİSTAN', icon: MessageSquareHeart, badge: 'AI' },
    { to: '/panel', label: 'PANEL', icon: LayoutDashboard }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-zinc-950 border-b-2 border-black dark:border-white select-none">
      <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo: Swiss Modernist KUCHU ■ */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white flex items-center justify-center font-black text-lg shadow-brutal-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
              🐾
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tightest text-black dark:text-white">
                  KUCHU <span className="text-red-600">■</span>
                </span>
                <span className="font-mono text-[10px] font-bold uppercase bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 border border-black dark:border-white">
                  ETHOLOGY
                </span>
              </div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hidden sm:block">
                KÖPEK PSİKOLOJİSİ VE EĞİTİMİ
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-black uppercase tracking-wider border-2 transition-all ${
                    isActive
                      ? 'bg-red-600 text-white border-black dark:border-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                      : 'border-transparent text-black dark:text-white hover:border-black dark:hover:border-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-black px-1 py-0.2 border ${
                      isActive ? 'bg-white text-black border-black' : 'bg-red-600 text-white border-black dark:border-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Area: Dog Pill, Theme Switch, Quick CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Active Dog Pill */}
            {activeDog && (
              <div className="hidden sm:flex items-center gap-2 bg-stone-100 dark:bg-zinc-900 border-2 border-black dark:border-white px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#ffffff]">
                <span>🐕</span>
                <span className="text-red-600">{activeDog.name}</span>
                {dogs.length > 1 && (
                  <select
                    value={activeDog.id}
                    onChange={(e) => {
                      const selected = dogs.find((d) => d.id === e.target.value);
                      if (selected) setActiveDog(selected);
                    }}
                    className="bg-transparent text-[11px] font-bold focus:outline-hidden cursor-pointer ml-1"
                  >
                    {dogs.map((d) => (
                      <option key={d.id} value={d.id} className="text-black bg-white">
                        {d.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              title="Tema Değiştir"
              aria-label="Tema Değiştir"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hızlı Analiz Button */}
            <Link
              to="/analiz"
              className="hidden sm:flex items-center gap-1.5 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white px-4 py-2 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#dc2626] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>HIZLI ANALİZ</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#ffffff]"
              aria-label="Menü"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t-2 border-black dark:border-white bg-white dark:bg-zinc-950 p-4 space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between p-3 border-2 text-xs font-black uppercase ${
                  isActive
                    ? 'bg-red-600 text-white border-black dark:border-white shadow-[3px_3px_0px_0px_#000000]'
                    : 'border-black dark:border-white text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          {activeDog && (
            <div className="p-3 border-2 border-black dark:border-white bg-stone-100 dark:bg-zinc-900 flex items-center justify-between text-xs font-black uppercase">
              <span>AKTİF KÖPEK:</span>
              <span className="text-red-600">🐕 {activeDog.name} ({activeDog.breed})</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

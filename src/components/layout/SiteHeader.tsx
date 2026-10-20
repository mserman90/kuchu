import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDog } from '@/context/DogContext';
import { useAppAuth } from '@/contexts/AppAuthContext';
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
  Sparkles,
  UserCheck,
  LogIn,
  Zap,
  ShieldAlert
} from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const location = useLocation();
  const { activeDog, dogs, setActiveDog } = useDog();
  const { authState, user, logout } = useAppAuth();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const navLinks = [
    { to: '/hizli-cozum', label: 'HIZLI ÇÖZÜM', icon: Zap, badge: 'YENİ' },
    { to: '/clicker', label: 'CLİCKER', icon: Zap, badge: 'SESLİ' },
    { to: '/analiz', label: 'ANALİZ', icon: Compass, badge: 'MOTOR' },
    { to: '/sorunlar', label: 'SORUNLAR', icon: HelpCircle },
    { to: '/zehirli-gidalar', label: 'ZEHİRLİ GIDALAR', icon: ShieldAlert, badge: 'ACİL' },
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
                  className={`flex items-center gap-1.5 px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                    isActive
                      ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                      : 'border-transparent text-black dark:text-white hover:border-black dark:hover:border-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-mono font-black px-1 py-0.2 border ${
                      isActive ? 'bg-white text-black border-black' : 'bg-red-600 text-white border-black dark:border-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Area: Dog Selector, Auth status, Theme Switch, Quick CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Active Dog Pill */}
            {activeDog && (
              <div className="hidden sm:flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 border-2 border-black dark:border-white px-3 py-1 font-mono text-xs font-bold uppercase shadow-brutal-sm">
                <span>🐕</span>
                <span className="text-red-600">{activeDog.name}</span>
                {dogs.length > 1 && (
                  <select
                    value={activeDog.id}
                    onChange={(e) => {
                      const selected = dogs.find((d) => d.id === e.target.value);
                      if (selected) setActiveDog(selected);
                    }}
                    className="bg-transparent text-[11px] font-mono font-bold focus:outline-hidden cursor-pointer ml-1"
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

            {/* Auth Indicator */}
            {authState === 'authenticated' && user ? (
              <button
                onClick={logout}
                title={`${user.name} (Çıkış yapmak için tıklayın)`}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 border-2 border-black dark:border-white font-mono text-[11px] font-bold uppercase shadow-brutal-sm hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-green-600" />
                <span className="truncate max-w-[80px]">{user.name}</span>
              </button>
            ) : (
              <Link
                to="/panel"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 border-2 border-black dark:border-white font-mono text-[11px] font-bold uppercase shadow-brutal-sm hover:bg-zinc-200 transition-colors"
                title="Giriş Yap"
              >
                <LogIn className="w-3.5 h-3.5 text-red-600" />
                <span>GİRİŞ</span>
              </Link>
            )}

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-1.5"
              title={isDark ? 'Gündüz Moduna Geç' : 'Gece Moduna Geç'}
              aria-label={isDark ? 'Gündüz Moduna Geç' : 'Gece Moduna Geç'}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span className="hidden md:inline font-mono text-[10px] font-black uppercase text-yellow-400">GÜNDÜZ</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-zinc-900 dark:text-white" />
                  <span className="hidden md:inline font-mono text-[10px] font-black uppercase">GECE</span>
                </>
              )}
            </button>

            {/* Clicker Direct Access Button */}
            <Link
              to="/clicker"
              className="hidden md:flex items-center gap-1.5 bg-red-600 text-white border-2 border-black dark:border-white px-2.5 py-1.5 font-mono text-xs font-black uppercase tracking-wider shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              title="Sesli Dijital Clicker & Seans Zamanlayıcı"
            >
              <Zap className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
              <span>CLİCKER</span>
            </Link>

            {/* Hızlı Analiz Button */}
            <Link
              to="/analiz"
              className="hidden sm:flex items-center gap-1.5 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>HIZLI ANALİZ</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white shadow-brutal-sm"
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
                className={`flex items-center justify-between p-3 border-2 font-mono text-xs font-bold uppercase ${
                  isActive
                    ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
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
            <div className="p-3 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 flex items-center justify-between font-mono text-xs font-bold uppercase">
              <span>AKTİF KÖPEK:</span>
              <span className="text-red-600">🐕 {activeDog.name} ({activeDog.breed})</span>
            </div>
          )}

          {/* Theme Selector for Mobile */}
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between font-mono text-xs font-bold uppercase">
            <span className="flex items-center gap-1.5">
              {isDark ? <Moon className="w-4 h-4 text-yellow-400" /> : <Sun className="w-4 h-4 text-red-600" />}
              GÖRÜNÜM / TEMA:
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`px-2.5 py-1 text-[11px] font-black border-2 border-black dark:border-white transition-all cursor-pointer ${
                  !isDark 
                    ? 'bg-red-600 text-white shadow-brutal-sm' 
                    : 'bg-white text-black dark:bg-zinc-800 dark:text-zinc-300'
                }`}
              >
                GÜNDÜZ
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`px-2.5 py-1 text-[11px] font-black border-2 border-black dark:border-white transition-all cursor-pointer ${
                  isDark 
                    ? 'bg-red-600 text-white shadow-brutal-sm' 
                    : 'bg-white text-black dark:bg-zinc-800 dark:text-zinc-300'
                }`}
              >
                GECE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

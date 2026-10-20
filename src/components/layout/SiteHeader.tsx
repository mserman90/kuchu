import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDog } from '@/context/DogContext';
import { useAppAuth } from '@/contexts/AppAuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import { KuchuLogo } from '@/components/common/KuchuLogo';
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
  ShieldAlert,
  Globe
} from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const location = useLocation();
  const { activeDog, dogs, setActiveDog } = useDog();
  const { authState, user, logout } = useAppAuth();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { lang, setLang, t, toggleLang } = useLanguage();
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
    { to: '/hizli-cozum', label: t('nav.quickSolution'), icon: Zap, badge: t('nav.badge.new') },
    { to: '/clicker', label: t('nav.clicker'), icon: Zap, badge: t('nav.badge.audio') },
    { to: '/analiz', label: t('nav.analysis'), icon: Compass, badge: t('nav.badge.motor') },
    { to: '/sorunlar', label: t('nav.problems'), icon: HelpCircle },
    { to: '/zehirli-gidalar', label: t('nav.toxicFoods'), icon: ShieldAlert, badge: t('nav.badge.emergency') },
    { to: '/egitim-planlari', label: t('nav.plans'), icon: CalendarCheck },
    { to: '/kutuphane', label: t('nav.library'), icon: BookOpen },
    { to: '/patiasistan', label: t('nav.patiasistan'), icon: MessageSquareHeart, badge: t('nav.badge.ai') },
    { to: '/panel', label: t('nav.panel'), icon: LayoutDashboard }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-zinc-950 border-b-2 border-black dark:border-white select-none">
      
      {/* Top Utility Bar: Highly-Visible Segmented Language & Theme Selectors */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border-b-2 border-black dark:border-white">
        <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between font-mono text-[11px]">
          
          <div className="hidden sm:flex items-center gap-2 font-black tracking-wider text-black dark:text-white uppercase text-[10px]">
            <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" />
            <span>{t('header.topbar.tag')}</span>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 sm:gap-4 ml-auto">
            
            {/* Language Switcher (Segmented TR / EN) */}
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] font-black uppercase text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                <Globe className="w-3 h-3 text-red-600" />
                <span>DİL / LANG:</span>
              </span>
              <div className="inline-flex border-2 border-black dark:border-white bg-white dark:bg-black shadow-brutal-xs">
                <button
                  type="button"
                  onClick={() => setLang('tr')}
                  className={`px-2 py-0.5 font-mono text-[10px] font-black uppercase transition-all cursor-pointer ${
                    lang === 'tr'
                      ? 'bg-red-600 text-white'
                      : 'text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                  title="Türkçe"
                >
                  🇹🇷 TR
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 font-mono text-[10px] font-black uppercase transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-red-600 text-white'
                      : 'text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                  title="English"
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>

            {/* Day / Night Theme Switcher (Segmented Light / Dark) */}
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] font-black uppercase text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                <Sun className="w-3 h-3 text-amber-500" />
                <span>TEMA:</span>
              </span>
              <div className="inline-flex border-2 border-black dark:border-white bg-white dark:bg-black shadow-brutal-xs">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`px-2 py-0.5 font-mono text-[10px] font-black uppercase flex items-center gap-1 transition-all cursor-pointer ${
                    !isDark
                      ? 'bg-amber-400 text-black font-black'
                      : 'text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                  title={t('header.theme.toLight')}
                >
                  <Sun className="w-3 h-3 text-black" />
                  <span>{t('header.theme.light')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`px-2 py-0.5 font-mono text-[10px] font-black uppercase flex items-center gap-1 transition-all cursor-pointer ${
                    isDark
                      ? 'bg-zinc-900 text-white border-l border-zinc-700 font-black'
                      : 'text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                  title={t('header.theme.toDark')}
                >
                  <Moon className="w-3 h-3 text-yellow-400" />
                  <span>{t('header.theme.dark')}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo: Swiss Modernist KUCHU ■ */}
          <Link to="/" className="cursor-pointer" aria-label="Kuçu Ana Sayfa">
            <KuchuLogo />
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

            {/* Language Switch Button (TR / EN) */}
            <button
              onClick={toggleLang}
              className="p-2 sm:px-2.5 sm:py-1.5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-1.5 font-mono text-xs font-black uppercase"
              title={lang === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
              aria-label="Dil / Language"
            >
              <Globe className="w-4 h-4 text-red-600" />
              <span className="font-mono text-xs font-black">{lang === 'tr' ? 'TR' : 'EN'}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-1.5"
              title={isDark ? t('header.theme.toLight') : t('header.theme.toDark')}
              aria-label={isDark ? t('header.theme.toLight') : t('header.theme.toDark')}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span className="hidden md:inline font-mono text-[10px] font-black uppercase text-yellow-400">
                    {t('header.theme.light')}
                  </span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-zinc-900 dark:text-white" />
                  <span className="hidden md:inline font-mono text-[10px] font-black uppercase">
                    {t('header.theme.dark')}
                  </span>
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
              <span>{t('header.activeDog')}:</span>
              <span className="text-red-600">🐕 {activeDog.name} ({activeDog.breed})</span>
            </div>
          )}

          {/* Language Selector for Mobile */}
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between font-mono text-xs font-bold uppercase">
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-red-600" />
              {t('header.lang.label')}:
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setLang('tr')}
                className={`px-3 py-1 text-[11px] font-black border-2 border-black dark:border-white transition-all cursor-pointer ${
                  lang === 'tr'
                    ? 'bg-red-600 text-white shadow-brutal-sm'
                    : 'bg-white text-black dark:bg-zinc-800 dark:text-zinc-300'
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-[11px] font-black border-2 border-black dark:border-white transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-red-600 text-white shadow-brutal-sm'
                    : 'bg-white text-black dark:bg-zinc-800 dark:text-zinc-300'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Theme Selector for Mobile */}
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between font-mono text-xs font-bold uppercase">
            <span className="flex items-center gap-1.5">
              {isDark ? <Moon className="w-4 h-4 text-yellow-400" /> : <Sun className="w-4 h-4 text-red-600" />}
              {t('header.theme.label')}:
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
                {t('header.theme.light')}
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
                {t('header.theme.dark')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

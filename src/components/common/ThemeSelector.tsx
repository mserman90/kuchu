import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop } from 'lucide-react';

interface ThemeSelectorProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ 
  className = '',
  variant = 'compact'
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`p-1 bg-zinc-100 dark:bg-zinc-900 border-2 border-black dark:border-white font-mono text-xs ${className}`}>
        Yükleniyor...
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-0.5 shadow-brutal-sm ${className}`}>
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1 px-2.5 py-1 font-mono text-[11px] font-black uppercase transition-all cursor-pointer ${
            theme === 'light'
              ? 'bg-red-600 text-white shadow-brutal-sm'
              : 'text-black dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
          title="Gündüz Modu"
        >
          <Sun className="w-3.5 h-3.5 text-yellow-400" />
          <span>GÜNDÜZ</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1 px-2.5 py-1 font-mono text-[11px] font-black uppercase transition-all cursor-pointer ${
            theme === 'dark'
              ? 'bg-red-600 text-white shadow-brutal-sm'
              : 'text-black dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
          title="Gece Modu"
        >
          <Moon className="w-3.5 h-3.5" />
          <span>GECE</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] font-black uppercase text-red-600">
            ARAYÜZ KONTRASTI VE ERİŞİLEBİLİRLİK
          </span>
          <h4 className="text-base font-black uppercase text-black dark:text-white">
            GÖRÜNÜM TEMASI (GECE / GÜNDÜZ)
          </h4>
        </div>
        <div className="font-mono text-xs font-black uppercase px-2 py-0.5 border border-black dark:border-white bg-zinc-100 dark:bg-zinc-800">
          AKTİF: {isDark ? '🌙 GECE MODU' : '☀️ GÜNDÜZ MODU'}
        </div>
      </div>

      <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
        Swiss Modernist yüksek kontrastlı tasarımımız, gece geç saatlerde yürüyüş yaparken veya loş ışıkta göz yorgunluğunu önlemek için özel olarak optimize edilmiştir.
      </p>

      <div className="grid grid-cols-3 gap-2 pt-1">
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`p-3 border-2 border-black dark:border-white flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer font-mono text-xs font-black uppercase ${
            theme === 'light'
              ? 'bg-red-600 text-white shadow-brutal-sm'
              : 'bg-zinc-50 dark:bg-zinc-950 text-black dark:text-white hover:bg-zinc-100'
          }`}
        >
          <Sun className="w-5 h-5 text-yellow-400" />
          <span>GÜNDÜZ</span>
          <span className="text-[10px] font-normal opacity-80">Açık Tema</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`p-3 border-2 border-black dark:border-white flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer font-mono text-xs font-black uppercase ${
            theme === 'dark'
              ? 'bg-red-600 text-white shadow-brutal-sm'
              : 'bg-zinc-50 dark:bg-zinc-950 text-black dark:text-white hover:bg-zinc-100'
          }`}
        >
          <Moon className="w-5 h-5 text-zinc-300" />
          <span>GECE</span>
          <span className="text-[10px] font-normal opacity-80">Koyu Tema</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme('system')}
          className={`p-3 border-2 border-black dark:border-white flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer font-mono text-xs font-black uppercase ${
            theme === 'system'
              ? 'bg-red-600 text-white shadow-brutal-sm'
              : 'bg-zinc-50 dark:bg-zinc-950 text-black dark:text-white hover:bg-zinc-100'
          }`}
        >
          <Laptop className="w-5 h-5 text-blue-400" />
          <span>SİSTEM</span>
          <span className="text-[10px] font-normal opacity-80">Otomatik</span>
        </button>
      </div>
    </div>
  );
};

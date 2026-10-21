import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PwaInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  useEffect(() => {
    // Check if dismissed in this session
    if (sessionStorage.getItem('kuchu_pwa_dismissed')) {
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setIsDismissed(true);
    sessionStorage.setItem('kuchu_pwa_dismissed', 'true');
  };

  if (!showPrompt || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 border-2 border-black dark:border-white bg-white dark:bg-zinc-950 p-4 shadow-brutal-xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-black border-2 border-black dark:border-white shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xs font-black uppercase text-black dark:text-white">
                {isEn ? 'INSTALL APP' : 'UYGULAMAYI YÜKLE'}
              </span>
              <span className="font-mono text-[9px] font-black bg-black text-white dark:bg-white dark:text-black px-1 border border-black dark:border-white">
                PWA
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium leading-tight">
              {isEn
                ? 'Add Kuchu to your home screen for one-tap, offline-ready instant access anywhere.'
                : "Kuchu'yu ana ekranınıza ekleyerek tek dokunuşla ve internetsiz bile kesintisiz kullanın."}
            </p>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="text-zinc-500 hover:text-black dark:hover:text-white p-1 cursor-pointer"
          aria-label={isEn ? 'Close' : 'Kapat'}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-end gap-2 mt-3 pt-3 border-t-2 border-black dark:border-white">
        <button
          onClick={handleDismiss}
          className="px-3 py-1.5 font-mono text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer"
        >
          {isEn ? 'Later' : 'Daha Sonra'}
        </button>
        <button
          onClick={handleInstallClick}
          className="px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          {isEn ? 'Install' : 'Yükle'}
        </button>
      </div>
    </div>
  );
};


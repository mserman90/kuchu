import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
      <div className="inline-block p-6 bg-red-600 text-white font-mono text-4xl sm:text-6xl font-black border-2 border-black dark:border-white shadow-brutal-xl">
        404 ■ SAYFA BULUNAMADI
      </div>
      
      <p className="text-base sm:text-lg font-medium text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
        Aradığınız etolojik veri veya sayfa mevcut değil ya da yeri değiştirilmiş.
      </p>

      <div className="pt-4 flex justify-center gap-4">
        <Link
          to="/"
          className="h-[44px] px-6 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ANA SAYFAYA DÖN</span>
        </Link>
        <Link
          to="/analiz"
          className="h-[44px] px-6 bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2"
        >
          <Compass className="w-4 h-4" />
          <span>DAVRANIŞ ANALİZİ</span>
        </Link>
      </div>
    </div>
  );
};

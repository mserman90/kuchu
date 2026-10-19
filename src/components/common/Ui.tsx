import React from 'react';
import { AlertTriangle, ShieldAlert, AlertCircle, RefreshCw, LogIn } from 'lucide-react';
import { RiskLevel } from '@/lib/data/types';
import { useAppAuth } from '@/contexts/AppAuthContext';

// 1. Risk Badge
export const RiskBadge: React.FC<{ level: RiskLevel; text?: string; className?: string }> = ({
  level,
  text,
  className = ''
}) => {
  const defaultText = level === 'green' ? 'GÜVENLİ (YEŞİL)' : level === 'yellow' ? 'TEMKİNLİ (SARI)' : 'YÜKSEK RİSK (KIRMIZI)';
  const colorClass =
    level === 'green'
      ? 'bg-green-600 text-white'
      : level === 'yellow'
      ? 'bg-yellow-400 text-black'
      : 'bg-red-600 text-white';

  return (
    <span
      className={`font-mono text-xs font-black uppercase px-2.5 py-1 border-2 border-black dark:border-white shadow-brutal-sm ${colorClass} ${className}`}
    >
      {text || defaultText}
    </span>
  );
};

// 2. Disclaimer Bar
export const DisclaimerBar: React.FC<{ variant?: 'compact' | 'standard'; className?: string }> = ({
  variant = 'standard',
  className = ''
}) => {
  if (variant === 'compact') {
    return (
      <div
        className={`p-3 bg-yellow-400 text-black border-2 border-black shadow-brutal-sm text-xs font-bold leading-snug flex items-start gap-2.5 ${className}`}
      >
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-black" />
        <p>
          <strong className="font-mono font-black uppercase">YASAL & ETOLOJİK BİLDİRİM:</strong> Bu analiz ve içerikler genel bilimsel rehberlik amaçlıdır; veteriner hekim teşhisi niteliği taşımaz. Ciddi agresyon vakalarında profesyonel veteriner davranış uzmanına danışınız.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`p-4 sm:p-5 bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black dark:border-white shadow-brutal ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-3.5">
        <div className="w-10 h-10 bg-red-600 text-white border-2 border-black dark:border-white flex items-center justify-center shrink-0 shadow-brutal-sm">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
              BİLİMSEL STANDART & SORUMLULUK REDDİ BİLDİRİMİ
            </h4>
            <span className="font-mono text-[10px] font-bold uppercase bg-red-600 text-white px-2 py-0.5 border border-black dark:border-white">
              %100 Force-Free Standart
            </span>
          </div>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            Kuchu platformundaki algoritmalar; Turid Rugaas sakinleşme sinyalleri, Vallortigara & Quaranta nöro-etoloji bulguları ve AVSAB pozitif pekiştirme prensiplerine göre çalışır. 
            <strong className="block mt-1 text-black dark:text-white font-black">
              Bu araç tıbbi veya bireysel klinik tedavi hizmeti sunmaz. Kendine veya çevreye zarar verme riski taşıyan acil durumlarda mutlaka sertifikalı veteriner davranış uzmanına başvurunuz.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

// 3. Loading State
export const LoadingState: React.FC<{ message?: string }> = ({ message = 'Yükleniyor...' }) => (
  <div className="p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal text-center space-y-3">
    <div className="inline-block animate-spin text-red-600 font-mono text-xl">■</div>
    <div className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
      {message}
    </div>
  </div>
);

// 4. Empty State
export const EmptyState: React.FC<{
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}> = ({ title, description, actionText, onAction }) => (
  <div className="p-8 sm:p-12 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal text-center space-y-4">
    <div className="w-12 h-12 mx-auto bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white flex items-center justify-center text-xl">
      🐾
    </div>
    <div className="space-y-1">
      <h3 className="text-lg font-black uppercase text-black dark:text-white">{title}</h3>
      <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
        {description}
      </p>
    </div>
    {actionText && onAction && (
      <button
        onClick={onAction}
        className="h-[40px] px-6 bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
      >
        {actionText}
      </button>
    )}
  </div>
);

// 5. Error State
export const ErrorState: React.FC<{
  title?: string;
  message: string;
  onRetry?: () => void;
}> = ({ title = 'HATA OLUŞTU', message, onRetry }) => (
  <div className="p-6 border-2 border-black dark:border-white bg-red-50 dark:bg-zinc-950 shadow-brutal space-y-3">
    <div className="flex items-center gap-2 text-red-600">
      <AlertCircle className="w-5 h-5 stroke-[2.5]" />
      <span className="font-mono text-xs font-black uppercase">{title}</span>
    </div>
    <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="flex items-center gap-1.5 h-[36px] px-4 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase border-2 border-black dark:border-white shadow-brutal-sm cursor-pointer"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>TEKRAR DENE</span>
      </button>
    )}
  </div>
);

// 6. Login Prompt (for anonymous state)
export const LoginPrompt: React.FC<{ message?: string }> = ({
  message = 'Bu özelliği kullanmak ve verilerinizi senkronize tutmak için giriş yapın.'
}) => {
  const { login } = useAppAuth();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await login(email);
    setLoading(false);
  };

  return (
    <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
      <div className="flex items-center gap-2 text-red-600">
        <LogIn className="w-5 h-5 stroke-[2.5]" />
        <h4 className="font-mono text-xs font-black uppercase tracking-wider">
          HESAP GİRİŞİ / KAYIT
        </h4>
      </div>
      <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{message}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eposta@adresiniz.com"
          className="flex-1 h-[40px] px-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold focus:outline-hidden"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="h-[40px] px-6 bg-red-600 text-white font-mono text-xs font-bold uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
        >
          {loading ? 'GİRİŞ YAPILIYOR...' : 'GİRİŞ YAP →'}
        </button>
      </form>
    </div>
  );
};

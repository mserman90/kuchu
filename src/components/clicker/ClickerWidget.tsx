import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Volume1, 
  VolumeX, 
  Zap, 
  Sparkles,
  Trophy,
  Info,
  Clock,
  Radio
} from 'lucide-react';
import { clickerAudio, ClickerTone } from '@/lib/audio/clickerAudio';

interface ClickerWidgetProps {
  className?: string;
  defaultTimerMinutes?: number;
  onSessionComplete?: (stats: { durationSeconds: number; clickCount: number; ratePerMinute: number }) => void;
}

export const ClickerWidget: React.FC<ClickerWidgetProps> = ({
  className = '',
  defaultTimerMinutes = 3,
  onSessionComplete
}) => {
  const { lang } = useLanguage();
  // Tone & Volume
  const [tone, setTone] = useState<ClickerTone>('classic');
  const [volume, setVolume] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Click counter & visual state
  const [clickCount, setClickCount] = useState<number>(0);
  const [isPressing, setIsPressing] = useState<boolean>(false);
  const [flashEffect, setFlashEffect] = useState<boolean>(false);

  // Timer states
  const [targetMinutes, setTargetMinutes] = useState<number>(defaultTimerMinutes);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(defaultTimerMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isSessionEnded, setIsSessionEnded] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Audio Click Trigger
  const triggerClick = useCallback(() => {
    setIsPressing(true);
    setFlashEffect(true);

    if (!isMuted) {
      clickerAudio.playClick(tone, volume);
    }

    setClickCount((prev) => prev + 1);

    // Auto start timer on first click if not started
    if (!hasStarted && !isTimerRunning && remainingSeconds > 0) {
      setHasStarted(true);
      setIsTimerRunning(true);
    }

    setTimeout(() => setIsPressing(false), 90);
    setTimeout(() => setFlashEffect(false), 180);
  }, [tone, volume, isMuted, hasStarted, isTimerRunning, remainingSeconds]);

  // Spacebar keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        triggerClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerClick]);

  // Timer Interval
  useEffect(() => {
    if (isTimerRunning && remainingSeconds > 0) {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsTimerRunning(false);
            setIsSessionEnded(true);
            clickerAudio.playSessionEndChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, remainingSeconds]);

  // Handle session completion callback
  useEffect(() => {
    if (isSessionEnded && onSessionComplete) {
      const elapsedSeconds = targetMinutes * 60 - remainingSeconds;
      const rate = elapsedSeconds > 0 ? Number(((clickCount / elapsedSeconds) * 60).toFixed(1)) : 0;
      onSessionComplete({
        durationSeconds: elapsedSeconds,
        clickCount,
        ratePerMinute: rate
      });
    }
  }, [isSessionEnded, onSessionComplete, targetMinutes, remainingSeconds, clickCount]);

  // Reset Session
  const handleReset = (newMinutes: number = targetMinutes) => {
    setIsTimerRunning(false);
    setHasStarted(false);
    setIsSessionEnded(false);
    setClickCount(0);
    setTargetMinutes(newMinutes);
    setRemainingSeconds(newMinutes * 60);
  };

  const elapsedSeconds = targetMinutes * 60 - remainingSeconds;
  const progressPercent = Math.min(100, Math.max(0, (elapsedSeconds / (targetMinutes * 60)) * 100));
  const ratePerMinute = elapsedSeconds > 5 ? Number(((clickCount / elapsedSeconds) * 60).toFixed(1)) : 0;

  // Format time MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal p-6 space-y-6 ${className}`}>
      
      {/* Top Header & Mode Selectors */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center font-mono font-black text-xs border border-black">
              KL
            </span>
            <span className="font-mono text-xs font-black uppercase text-red-600 tracking-wider">
              {lang === 'tr' ? 'WEB AUDIO API DİJİTAL İŞARETLEYİCİ (MARKER)' : 'WEB AUDIO API DIGITAL BEHAVIOR MARKER'}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white mt-1">
            {lang === 'tr' ? 'SESLİ DİJİTAL CLİCKER & SEANS ZAMANLAYICI' : 'AUDIO DIGITAL CLICKER & SESSION TIMER'}
          </h3>
        </div>

        {/* Tone Picker */}
        <div className="flex items-center gap-1 border-2 border-black dark:border-white p-1 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold">
          <span className="px-2 text-zinc-500 text-[10px] uppercase">{lang === 'tr' ? 'TON:' : 'TONE:'}</span>
          {(
            [
              { id: 'classic', label: lang === 'tr' ? 'KLASİK' : 'CLASSIC' },
              { id: 'soft', label: lang === 'tr' ? 'YUMUŞAK' : 'SOFT' },
              { id: 'double', label: lang === 'tr' ? 'ÇİFT KLİK' : 'DOUBLE' }
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTone(t.id);
                clickerAudio.playClick(t.id, volume);
              }}
              className={`px-2.5 py-1 uppercase text-[11px] transition-all cursor-pointer ${
                tone === t.id
                  ? 'bg-red-600 text-white shadow-brutal-sm border border-black dark:border-white'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left = Clicker Box, Right = Timer & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: The Massive Brutalist Mechanical Clicker (Cols 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 shadow-brutal-sm space-y-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className={`w-4 h-4 ${flashEffect ? 'text-red-600 animate-ping' : 'text-zinc-400'}`} />
              <span className="font-mono text-xs font-black uppercase text-zinc-600 dark:text-zinc-400">
                {lang === 'tr' ? '0.5 SN KURALI: DAVRANIŞ ANINDA İŞARETLEYİN' : '0.5s RULE: MARK EXACTLY AS BEHAVIOR OCCURS'}
              </span>
            </div>

            {/* Mute / Volume */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 border border-black dark:border-white bg-white dark:bg-zinc-900 cursor-pointer text-black dark:text-white hover:bg-zinc-200"
                title={isMuted ? (lang === 'tr' ? 'Sesi Aç' : 'Unmute') : (lang === 'tr' ? 'Sesi Kapat' : 'Mute')}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-600" /> : volume > 0.6 ? <Volume2 className="w-4 h-4" /> : <Volume1 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0.2"
                max="1.0"
                step="0.1"
                value={volume}
                onChange={(e) => {
                  setVolume(Number(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-16 accent-red-600 cursor-pointer"
                title={lang === 'tr' ? 'Ses Seviyesi' : 'Volume'}
              />
            </div>
          </div>

          {/* The Actual Clicker Button */}
          <div className="flex flex-col items-center justify-center py-4">
            <button
              ref={buttonRef}
              onClick={triggerClick}
              type="button"
              className={`w-full max-w-sm h-48 sm:h-52 border-4 border-black dark:border-white font-mono font-black uppercase transition-all select-none cursor-pointer relative flex flex-col items-center justify-center gap-2 ${
                isPressing
                  ? 'bg-red-700 text-white translate-x-1.5 translate-y-1.5 shadow-none'
                  : flashEffect
                  ? 'bg-red-500 text-white shadow-brutal-md'
                  : 'bg-red-600 text-white hover:bg-red-500 shadow-brutal-lg'
              }`}
              style={{
                touchAction: 'manipulation'
              }}
              aria-label={lang === 'tr' ? 'Clicker Tetikle' : 'Trigger Clicker'}
            >
              {/* Metallic clicker indented plate design */}
              <div className="absolute inset-3 border-2 border-dashed border-white/60 pointer-events-none" />

              <Zap className={`w-12 h-12 transition-transform ${isPressing ? 'scale-90 text-yellow-300' : 'scale-100 text-white'}`} />
              
              <span className="text-3xl sm:text-4xl tracking-tighter drop-shadow-sm font-black">
                {lang === 'tr' ? 'KLİK!' : 'CLICK!'}
              </span>

              <span className="text-xs font-mono tracking-widest text-white/90 bg-black/40 px-3 py-0.5 border border-white/40">
                {lang === 'tr' ? '[ BOŞLUK / SPACE ] VEYA DOKUN' : '[ SPACEBAR ] OR TAP'}
              </span>
            </button>
          </div>

          {/* Clicker Counter & Reinforcement Guidance */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t-2 border-black dark:border-white">
            <div className="p-3 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white">
              <span className="font-mono text-[10px] font-black uppercase text-zinc-500">
                {lang === 'tr' ? 'BU SEANSTAKİ ÖDÜL KLİĞİ' : 'CLICKS THIS SESSION'}
              </span>
              <div className="text-2xl sm:text-3xl font-black text-black dark:text-white font-mono mt-0.5">
                {clickCount} <span className="text-xs font-normal text-zinc-500">{lang === 'tr' ? 'KLİK' : 'CLICKS'}</span>
              </div>
            </div>

            <div className="p-3 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white">
              <span className="font-mono text-[10px] font-black uppercase text-zinc-500">
                {lang === 'tr' ? 'DAKİKA BAŞINA ÖDÜL HIZI' : 'REWARD RATE / MIN'}
              </span>
              <div className={`text-2xl sm:text-3xl font-black font-mono mt-0.5 ${
                ratePerMinute >= 6 && ratePerMinute <= 12 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-zinc-700 dark:text-zinc-300'
              }`}>
                {ratePerMinute} <span className="text-xs font-normal text-zinc-500">{lang === 'tr' ? 'KLİK/DK' : 'CLK/MIN'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Micro-Session Timer & Controls (Cols 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 shadow-brutal-sm space-y-6">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {lang === 'tr' ? 'MİKRO SEANS KRONOMETRESİ' : 'MICRO-SESSION TIMER'}
              </span>
              <span className="font-mono text-[10px] font-bold uppercase text-zinc-500">
                {lang === 'tr' ? 'ÖNERİLEN: 3 DAKİKA' : 'RECOMMENDED: 3 MIN'}
              </span>
            </div>

            {/* Duration Preset Selector */}
            <div className="grid grid-cols-3 gap-2">
              {[2, 3, 5].map((mins) => (
                <button
                  key={mins}
                  onClick={() => handleReset(mins)}
                  className={`py-2 font-mono text-xs font-black uppercase border-2 transition-all cursor-pointer ${
                    targetMinutes === mins
                      ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-brutal-sm'
                      : 'bg-white dark:bg-zinc-900 text-black dark:text-white border-black dark:border-white hover:bg-zinc-200'
                  }`}
                >
                  {mins} {lang === 'tr' ? 'DAKİKA' : 'MIN'}
                </button>
              ))}
            </div>

            {/* Countdown Display Card */}
            <div className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-center space-y-2">
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-black dark:text-white">
                {formatTime(remainingSeconds)}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 border-2 border-black dark:border-white bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <div 
                  className="h-full bg-red-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] font-bold text-zinc-500 pt-1">
                <span>{lang === 'tr' ? `BAŞLANGIÇ: ${targetMinutes} DK` : `START: ${targetMinutes} MIN`}</span>
                <span>{progressPercent.toFixed(0)}% {lang === 'tr' ? 'TAMAMLANDI' : 'DONE'}</span>
              </div>
            </div>

            {/* Timer Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setHasStarted(true);
                  setIsTimerRunning(!isTimerRunning);
                }}
                className={`py-3 border-2 border-black dark:border-white font-mono text-xs font-black uppercase flex items-center justify-center gap-2 shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer ${
                  isTimerRunning
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                }`}
              >
                {isTimerRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>{lang === 'tr' ? 'DURAKLAT' : 'PAUSE'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>{hasStarted ? (lang === 'tr' ? 'DEVAM ET' : 'RESUME') : (lang === 'tr' ? 'SEANSI BAŞLAT' : 'START SESSION')}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleReset(targetMinutes)}
                className="py-3 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white border-2 border-black dark:border-white font-mono text-xs font-black uppercase flex items-center justify-center gap-1.5 hover:bg-zinc-300 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{lang === 'tr' ? 'SIFIRLA' : 'RESET'}</span>
              </button>
            </div>
          </div>

          {/* Quick Jackpot Button */}
          <div className="p-4 border-2 border-black dark:border-white bg-yellow-400/10 dark:bg-yellow-900/20 border-dashed space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-xs font-black uppercase text-yellow-700 dark:text-yellow-400">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'tr' ? 'JACKPOT & SERBEST BIRAK (MOLA)' : 'JACKPOT & RELEASE (BREAK)'}</span>
            </div>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
              {lang === 'tr'
                ? 'Köpeğiniz seansın en muazzam davranışını gösterdiğinde veya süre bittiğinde peş peşe 5 ödül verin ve "BİTTİ / SERBEST" diyerek seansı neşeyle bitirin.'
                : 'When your dog performs a breakthrough repetition or time expires, deliver 5 rewards in succession and cue "ALL DONE / FREE" with joy.'}
            </p>
          </div>

        </div>

      </div>

      {/* Session End Modal / Alert Banner */}
      {isSessionEnded && (
        <div className="p-5 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black shadow-brutal space-y-3 animate-in fade-in">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h4 className="text-lg font-black uppercase tracking-tight">
              {lang === 'tr' ? 'HARİKA İŞ! 3 DAKİKALIK MİKRO SEANS TAMAMLANDI.' : 'GREAT JOB! 3-MINUTE MICRO-SESSION COMPLETED.'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">
            {lang === 'tr'
              ? `Köpeğinizin beynine aşırı kortizol ve bilişsel yorgunluk yüklemeden en verimli nöronal pekiştirme sağlandı. Bu seansta ${clickCount} kez ödül verdiniz (Ödül Oranı: ${ratePerMinute} klik/dk). Köpeğinizi şimdi dinlenmeye bırakın.`
              : `Optimal neuronal reinforcement achieved without overloading cognitive fatigue or cortisol. You delivered ${clickCount} rewards this session (Reward Rate: ${ratePerMinute} clicks/min). Allow your dog to rest now.`}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={() => handleReset(3)}
              className="px-4 py-2 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-white dark:border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              {lang === 'tr' ? 'YENİ SEANS BAŞLAT' : 'START NEW SESSION'}
            </button>
          </div>
        </div>
      )}

      {/* Scientific Reference Footer */}
      <div className="p-4 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs space-y-2">
        <div className="flex items-center gap-2 text-red-600 font-black uppercase">
          <Info className="w-4 h-4" />
          <span>{lang === 'tr' ? 'ETOLOJİK VE OPERANT KURALLAR:' : 'ETHOLOGICAL & OPERANT RULES:'}</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
          <li>
            <strong>1. {lang === 'tr' ? 'Köprü Uyaran (Bridge):' : 'Bridge Stimulus:'}</strong> {lang === 'tr' 
              ? 'Klik sesi, köpeğin doğru yaptığı milisaniye ile mama ödülü arasındaki zaman boşluğunu dolduran nöronal işarettir.' 
              : 'The click sound bridges the temporal gap between the exact millisecond of correct behavior and food delivery.'}
          </li>
          <li>
            <strong>2. {lang === 'tr' ? '0.5 Saniye Kuralı:' : '0.5-Second Rule:'}</strong> {lang === 'tr' 
              ? 'Köpek poposunu yere koyduktan 2 saniye sonra tıklarsanız aradaki başka bir hareketi pekiştirirsiniz. Zamanlama keskin olmalıdır.' 
              : 'Clicking 2 seconds after the butt touches down reinforces intermediate movement. Timing must be laser-sharp.'}
          </li>
          <li>
            <strong>3. {lang === 'tr' ? 'Neden 3 Dakika?' : 'Why 3 Minutes?'}</strong> {lang === 'tr' 
              ? 'Köpeklerin yoğun öğrenme odağı 5 dakikadan sonra hızla düşer. Günde 1 kez 30 dakika yerine, günde 3 kez 3 dakika çalışmak 5 kat daha etkilidir.' 
              : 'Canine intensive focus decays rapidly after 5 minutes. Three 3-minute sessions daily are 5x more effective than one 30-minute block.'}
          </li>
        </ul>
      </div>

    </div>
  );
};

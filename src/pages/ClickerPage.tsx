import React, { useState } from 'react';
import { DisclaimerBar } from '@/components/common/Ui';
import { ClickerWidget } from '@/components/clicker/ClickerWidget';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BookOpen, 
  Sparkles, 
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ClickerPage: React.FC = () => {
  const { lang } = useLanguage();
  const [completedSessions, setCompletedSessions] = useState<
    Array<{ id: string; date: string; durationSeconds: number; clickCount: number; rate: number }>
  >([]);

  const handleSessionComplete = (stats: { durationSeconds: number; clickCount: number; ratePerMinute: number }) => {
    const newSession = {
      id: 'sess_' + Date.now(),
      date: new Date().toLocaleTimeString(lang === 'tr' ? 'tr-TR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
      durationSeconds: stats.durationSeconds,
      clickCount: stats.clickCount,
      rate: stats.ratePerMinute
    };
    setCompletedSessions((prev) => [newSession, ...prev]);
  };

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-mono font-black text-sm border-2 border-black">
            ⚡
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
            {lang === 'tr' 
              ? 'POZİTİF OPERANT KOŞULLANDIRMA VE NÖRONAL İŞARETLEME ARACI' 
              : 'POSITIVE OPERANT CONDITIONING & NEURONAL MARKER TOOL'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          {lang === 'tr' 
            ? 'DİJİTAL CLİCKER & MİKRO SEANS KRONOMETRESİ' 
            : 'DIGITAL CLICKER & MICRO-SESSION STOPWATCH'}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {lang === 'tr'
            ? 'Köpeğinizin doğru davranışı sergilediği milisaniyeyi Web Audio API ile sıfır gecikmeli işaretleyin. 3-5 dakikalık odak seanslarıyla beynin yorulmasını engelleyip öğrenme hızını katlayın.'
            : 'Mark the exact millisecond your dog performs the desired behavior with zero-latency Web Audio API. Prevent cognitive fatigue and accelerate learning with 3-5 minute micro-sessions.'}
        </p>
      </div>

      <DisclaimerBar variant="compact" />

      {/* Interactive Clicker & Timer Widget */}
      <ClickerWidget 
        defaultTimerMinutes={3} 
        onSessionComplete={handleSessionComplete}
      />

      {/* Completed Sessions Log (if any) */}
      {completedSessions.length > 0 && (
        <div className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
          <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2">
            <span className="font-mono text-xs font-black uppercase text-black dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              {lang === 'tr' 
                ? `BUGÜNKÜ TAMAMLANAN MİKRO SEANSLAR (${completedSessions.length})` 
                : `TODAY'S COMPLETED MICRO-SESSIONS (${completedSessions.length})`}
            </span>
            <span className="font-mono text-[10px] text-zinc-500 uppercase">
              {lang === 'tr' ? 'YEREL OTURUM GEÇMİŞİ' : 'LOCAL SESSION LOG'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {completedSessions.map((sess) => (
              <div 
                key={sess.id}
                className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs space-y-1"
              >
                <div className="flex items-center justify-between font-black text-red-600">
                  <span>{lang === 'tr' ? `SAAT ${sess.date}` : `TIME ${sess.date}`}</span>
                  <span>{Math.floor(sess.durationSeconds / 60)}{lang === 'tr' ? 'd' : 'm'} {sess.durationSeconds % 60}s</span>
                </div>
                <div className="text-black dark:text-white font-bold">
                  {lang === 'tr' 
                    ? `ÖDÜL: ${sess.clickCount} Klik (${sess.rate} Klik/Dk)` 
                    : `REWARD: ${sess.clickCount} Clicks (${sess.rate} Clicks/Min)`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Educational Guide: The Science of Clicker Training */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3">
            <BookOpen className="w-5 h-5 text-red-600" />
            <h3 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              {lang === 'tr' 
                ? 'CLİCKER EĞİTİMİNE BAŞLARKEN: "ŞARJ ETME" (CHARGING)' 
                : 'GETTING STARTED: "CHARGING THE CLICKER"'}
            </h3>
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {lang === 'tr'
              ? 'Köpekler doğuştan klik sesinin anlamını bilmez. Eğitime başlamadan önce köpeğin beyninde "Klik = Leziz Mama Geliyor" şartlanmasını kurmanız gerekir:'
              : 'Dogs do not instinctively understand the click sound. Before starting, you must establish the conditioned connection "Click = High-Value Treat":'}
          </p>

          <ol className="font-mono text-xs space-y-2 list-decimal list-inside text-zinc-700 dark:text-zinc-300">
            {lang === 'tr' ? (
              <>
                <li>Sessiz bir odaya geçin ve cebinize 15-20 küçük et/kaşar parçası koyun.</li>
                <li>Köpekten hiçbir komut veya hareket istemeyin.</li>
                <li>Clicker'a bir kez basın: <strong>KLİK!</strong></li>
                <li>Bastıktan tam 1 saniye sonra ağzına ödül maması verin.</li>
                <li>Bunu 15 kez tekrarlayın. Köpek klik sesini duyar duymaz heyecanla ellerinize bakıyorsa clicker <strong>şarj edilmiştir</strong>!</li>
              </>
            ) : (
              <>
                <li>Move to a quiet room with 15-20 small pieces of high-value treat (chicken/cheese).</li>
                <li>Do not ask for any command or action from the dog.</li>
                <li>Press the clicker once: <strong>CLICK!</strong></li>
                <li>Deliver the treat into the mouth exactly 1 second after the click.</li>
                <li>Repeat this 15 times. When the dog whips its head towards your hand expecting a treat upon hearing the click, the clicker is <strong>charged</strong>!</li>
              </>
            )}
          </ol>
        </div>

        <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <h3 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              {lang === 'tr' ? 'YAPILMAMASI GEREKEN 4 ÖLÜMCÜL HATA' : '4 CRITICAL MISTAKES TO AVOID'}
            </h3>
          </div>

          <ul className="space-y-3 font-mono text-xs text-zinc-700 dark:text-zinc-300">
            {lang === 'tr' ? (
              <>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Clicker'ı köpeği çağırmak için kullanmak:</strong> Clicker bir korna veya düdük değildir; sadece doğru davranış gerçekleştikten <em>sonra</em> basılır.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Tıkladıktan sonra ödül vermemek:</strong> Tıkladığınız her an ödül vermek zorundasınız. Yanlışlıkla bassanız dahi sözleşmeyi bozmayın.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Köpeğin kulağının dibinde basmak:</strong> Hassas köpekler korkabilir; ses seviyesini 'Yumuşak' tona alın veya cihazı cebinizde tutun.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Seansı 15-20 dakikaya uzatmak:</strong> Köpek sıkılır, dikkati dağılır ve eğitim oyundan çıkıp angaryaya döner. 3 dakika yeterlidir!</span>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Using the clicker to summon the dog:</strong> The clicker is not a whistle or horn; it is only pressed <em>after</em> the exact desired action occurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Failing to reward after a click:</strong> A click is an unalterable contract. Even if you clicked accidentally, always deliver a reward.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Clicking right next to ears:</strong> Sound-sensitive dogs may startle; choose 'Soft' tone or hold the device behind your back.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-black">❌</span>
                  <span><strong>Extending sessions to 15-20 minutes:</strong> Cognitive overload sets in and focus deteriorates. 3 minutes of high enthusiasm is optimal!</span>
                </li>
              </>
            )}
          </ul>
        </div>

      </div>

      {/* Call to Training Plans */}
      <div className="p-5 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-black uppercase text-yellow-400">
            {lang === 'tr' ? "CLİCKER'INIZ HAZIR MI?" : 'IS YOUR CLICKER CHARGED?'}
          </span>
          <h4 className="text-base sm:text-lg font-black uppercase mt-0.5">
            {lang === 'tr' 
              ? 'HAFTALIK EĞİTİM PLANI OLUŞTURUN VE EGZERSİZLERE BAŞLAYIN' 
              : 'BUILD A WEEKLY TRAINING PLAN AND START EXERCISES'}
          </h4>
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            {lang === 'tr'
              ? 'Otur, bekle, gevşek tasma ve pati verme gibi aşamalı egzersiz müfredatlarını inceleyin.'
              : 'Explore structured curricula for sit, stay, loose leash walking, and recall.'}
          </p>
        </div>

        <Link
          to="/egitim-planlari"
          className="px-5 py-2.5 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-white dark:border-black shadow-brutal-white hover:translate-x-0.5 hover:translate-y-0.5 transition-all whitespace-nowrap"
        >
          {lang === 'tr' ? 'EĞİTİM PLANLARINA GİT →' : 'GO TO TRAINING PLANS →'}
        </Link>
      </div>

    </div>
  );
};

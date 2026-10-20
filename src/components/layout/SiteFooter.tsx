import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { DisclaimerBar } from '@/components/common/Ui';
import { KuchuLogo } from '@/components/common/KuchuLogo';
import { ShieldCheck, Heart } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-black text-white border-t-2 border-black dark:border-white pt-14 pb-10 mt-auto">
      <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Disclaimer Banner Embedded */}
        <DisclaimerBar />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <KuchuLogo size="md" />
            </Link>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              {lang === 'tr' 
                ? 'Pozitif pekiştirme, Turid Rugaas sakinleşme sinyalleri ve çağdaş nöro-etoloji prensipleriyle geliştirilmiş köpek psikolojisi platformu.'
                : 'Canine psychology & behavior platform developed with positive reinforcement, calming signals and contemporary neuro-ethology principles.'}
            </p>
            <div className="inline-flex items-center gap-2 border-2 border-white px-2.5 py-1 font-mono text-[11px] font-bold uppercase bg-zinc-900 text-green-400 shadow-brutal-white-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'tr' ? '%100 FORCE-FREE STANDART' : '100% FORCE-FREE STANDARD'}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-red-500 border-b border-zinc-800 pb-1">
              {lang === 'tr' ? 'UYGULAMA MODÜLLERİ' : 'APP MODULES'}
            </h4>
            <ul className="space-y-2 font-mono text-xs font-bold uppercase">
              <li>
                <Link to="/hizli-cozum" className="hover:text-red-500 transition-colors text-yellow-400">
                  ⚡ {lang === 'tr' ? 'Hızlı Çözüm Sihirbazı' : 'Quick Fix Wizard'} (/hizli-cozum)
                </Link>
              </li>
              <li>
                <Link to="/clicker" className="hover:text-red-500 transition-colors">
                  🔊 {lang === 'tr' ? 'Sesli Clicker & Kronometre' : 'Audio Clicker & Stopwatch'} (/clicker)
                </Link>
              </li>
              <li>
                <Link to="/analiz" className="hover:text-red-500 transition-colors">
                  🧭 {lang === 'tr' ? 'Köpek Davranış Analizi' : 'Canine Behavior Analysis'} (/analiz)
                </Link>
              </li>
              <li>
                <Link to="/sorunlar" className="hover:text-red-500 transition-colors">
                  🩺 {lang === 'tr' ? 'Sorun Çözüm Merkezi' : 'Problem Solutions Hub'} (/sorunlar)
                </Link>
              </li>
              <li>
                <Link to="/zehirli-gidalar" className="hover:text-red-500 transition-colors">
                  ☣ {lang === 'tr' ? 'Zehirli Gıda Rehberi' : 'Toxic Food Detector'} (/zehirli-gidalar)
                </Link>
              </li>
              <li>
                <Link to="/egitim-planlari" className="hover:text-red-500 transition-colors">
                  📅 {lang === 'tr' ? 'Eğitim Planı Oluşturucu' : 'Training Plan Generator'} (/egitim-planlari)
                </Link>
              </li>
              <li>
                <Link to="/kutuphane" className="hover:text-red-500 transition-colors">
                  📖 {lang === 'tr' ? 'Bilgi Kütüphanesi' : 'Knowledge Library'} (/kutuphane)
                </Link>
              </li>
              <li>
                <Link to="/patiasistan" className="hover:text-red-500 transition-colors">
                  🤖 {lang === 'tr' ? 'PatiAsistan AI Sohbet' : 'PatiAsistan AI Chat'} (/patiasistan)
                </Link>
              </li>
            </ul>
          </div>

          {/* Scientific Foundation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-red-500 border-b border-zinc-800 pb-1">
              {lang === 'tr' ? 'BİLİMSEL LİTERATÜR' : 'SCIENTIFIC LITERATURE'}
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium">
              <li>Merck Veterinary Manual: 3M Klinik Modifikasyon Protokolü</li>
              <li>Merck Vet Manual: DISHAA Geriatrik Demans Kriterleri</li>
              <li>Turid Rugaas: Calming Signals & Stres Belirtileri</li>
              <li>Vallortigara & Quaranta: Tail Asymmetry (Current Biology)</li>
              <li>Dr. L. David Mech: Dominance Myth Debunked</li>
              <li>AVSAB: Humane Dog Training Standards</li>
            </ul>
          </div>

          {/* Legal & KVKK */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-red-500 border-b border-zinc-800 pb-1">
              {lang === 'tr' ? 'AÇIK KAYNAK & YASAL' : 'OPEN SOURCE & LEGAL'}
            </h4>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              {lang === 'tr'
                ? 'Kişisel veriler KVKK kapsamında yalnızca hesap, köpek profili ve eğitim planı ilerleme kayıtlarını saklamak amacıyla işlenir. Üçüncü taraflara aktarılmaz.'
                : 'Personal data is strictly processed locally to store profile and training milestones. Never sold or transferred to 3rd parties.'}
            </p>
            <div className="pt-1">
              <a 
                href="https://github.com/mserman90/kuchu" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-white hover:text-red-500 underline"
              >
                <span>{lang === 'tr' ? 'GİTHUB REPOSU (KODLAR) →' : 'GITHUB REPOSITORY (CODE) →'}</span>
              </a>
            </div>
            <p className="text-[11px] text-zinc-300 font-semibold border-l-2 border-red-500 pl-2">
              {lang === 'tr' 
                ? 'Uygulama veteriner hekim teşhis ve tedavisi sunmaz; genel etolojik rehberliktir.'
                : 'This platform does not provide veterinary diagnosis or medical prescriptions; it offers humane behavioral guidance.'}
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-zinc-500 font-bold uppercase gap-2">
          <p>© 2026 KUCHU PLATFORMU. {lang === 'tr' ? 'TÜM HAKLARI SAKLIDIR.' : 'ALL RIGHTS RESERVED.'}</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            SWISS MODERNISM & FORCE-FREE ETOLOJİ <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { ARTICLES, LibraryArticle } from '@/lib/content/articles';
import { DisclaimerBar } from '@/components/common/Ui';
import { FavoriteButton } from '@/components/common/FavoriteButton';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  X
} from 'lucide-react';

export const LibraryPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<LibraryArticle | null>(null);

  const categories = [
    { id: 'all', label: 'TÜM MAKALELER' },
    { id: 'clinical', label: 'MERCK VET KLİNİK REHBERİ' },
    { id: 'calming_signals', label: 'SAKİNLEŞME SİNYALLERİ' },
    { id: 'science', label: 'NÖRO-ETOLOJİ & BİLİM' },
    { id: 'training_tips', label: 'POZİTİF PEKİŞTİRME' },
    { id: 'puppy', label: 'YAŞ DÖNEMLERİ' }
  ];

  const filtered = ARTICLES.filter((art) => {
    const matchCat = category === 'all' || art.category === category;
    const matchSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.summary.toLowerCase().includes(search.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-mono font-black text-sm border-2 border-black">
            04
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
            HAKEMLİ AKADEMİK LİTERATÜR & ETOLOJİ KÜTÜPHANESİ
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          KÖPEK PSİKOLOJİSİ BİLGİ KÜTÜPHANESİ
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Turid Rugaas, Vallortigara ve AVSAB protokolleri ile köpek zihninin nörobiyolojik ve evrimsel haritası.
        </p>
      </div>

      <DisclaimerBar variant="compact" />

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal">
        
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`px-3 py-1.5 font-mono text-xs font-bold uppercase border-2 transition-all cursor-pointer ${
                category === c.id
                  ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-black dark:border-white hover:bg-zinc-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Makale ara..."
            className="w-full pl-9 pr-3 py-2 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase focus:outline-hidden"
          />
        </div>

      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((art) => (
          <div
            key={art.id}
            onClick={() => setActiveArticle(art)}
            className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all flex flex-col justify-between cursor-pointer space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-0.5">
                  {art.category.toUpperCase()}
                </span>
                <FavoriteButton
                  targetType="article"
                  targetId={art.id}
                  title={art.title}
                  category={art.category}
                />
              </div>

              <h3 className="text-base font-black uppercase text-black dark:text-white leading-snug">
                {art.title}
              </h3>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                {art.summary}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t-2 border-black dark:border-white">
              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {art.readTimeMinutes} DK OKUMA
                </span>
                <span>{art.publishedDate}</span>
              </div>

              <div className="flex items-center justify-between font-mono text-xs font-black uppercase text-red-600">
                <span>METNİ OKU</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal (Brutalist, Zero Blur) */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-brutal-xl dark:shadow-brutal-white-xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-white">
                  {activeArticle.readTimeMinutes} DK OKUMA • {activeArticle.author}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white mt-2">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-sm font-medium text-black dark:text-white p-4 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-950 leading-relaxed">
              {activeArticle.summary}
            </p>

            <div className="space-y-6">
              {activeArticle.content.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-black uppercase text-black dark:text-white border-l-4 border-red-600 pl-3">
                    {sec.heading}
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                  {sec.callout && (
                    <div className="p-3.5 border-2 border-black dark:border-white bg-red-50 dark:bg-zinc-950 text-xs font-bold text-red-700 dark:text-red-400">
                      💡 {sec.callout}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-black dark:border-white">
              {activeArticle.tags.map((t, idx) => (
                <span key={idx} className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 border border-black dark:border-white bg-zinc-100 dark:bg-zinc-800">
                  #{t}
                </span>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveArticle(null)}
                className="h-[40px] px-6 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                MAKALYİ KAPAT
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

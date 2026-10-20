import React, { useState, useRef } from 'react';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Scan, 
  Key, 
  ArrowRight,
  Info,
  RefreshCw,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { 
  SAMPLE_CANINE_PHOTOS, 
  SampleCaninePhoto, 
  VisionAnalysisResult,
  analyzeUploadedImageHeuristic,
  analyzeWithGeminiVision
} from '@/lib/vision/canineVisionEngine';
import { BehaviorInputState } from '@/lib/analysis/types';
import { toast } from 'sonner';

interface VisionScannerProps {
  className?: string;
  onApplyToAnalysis: (detectedState: Partial<BehaviorInputState>) => void;
}

export const VisionScanner: React.FC<VisionScannerProps> = ({
  className = '',
  onApplyToAnalysis
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(SAMPLE_CANINE_PHOTOS[0].imageUrl);
  const [analysisResult, setAnalysisResult] = useState<VisionAnalysisResult>(SAMPLE_CANINE_PHOTOS[0].preset);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [activeLandmarkId, setActiveLandmarkId] = useState<string | null>(null);

  // Optional Gemini API Key
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem('kuchu_gemini_api_key') || '');
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageElementRef = useRef<HTMLImageElement | null>(null);

  // Handle Preset Select
  const handleSelectSample = (sample: SampleCaninePhoto) => {
    setSelectedImage(sample.imageUrl);
    setAnalysisResult(sample.preset);
    setActiveLandmarkId(null);
  };

  // Handle User File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      setSelectedImage(dataUrl);
      setIsAnalyzing(true);
      setActiveLandmarkId(null);

      try {
        if (apiKey.trim()) {
          toast.info('Google Gemini Vision AI modeli ile analiz ediliyor...');
          const geminiResult = await analyzeWithGeminiVision(dataUrl, apiKey.trim());
          setAnalysisResult(geminiResult);
          toast.success('Yapay zeka analizi başarıyla tamamlandı!');
        } else {
          // Heuristic Client-side inference
          setTimeout(async () => {
            if (imageElementRef.current) {
              const res = await analyzeUploadedImageHeuristic(imageElementRef.current);
              setAnalysisResult(res);
            }
            setIsAnalyzing(false);
            toast.success('Görsel etolojik tarayıcı başarıyla çalıştı!');
          }, 800);
          return;
        }
      } catch (err: any) {
        toast.error(err.message || 'Görsel analiz edilirken bir sorun oluştu; yerel model devreye alındı.');
        if (imageElementRef.current) {
          const fallback = await analyzeUploadedImageHeuristic(imageElementRef.current);
          setAnalysisResult(fallback);
        }
      } finally {
        setIsAnalyzing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const getStatusColor = (status: 'positive' | 'warning' | 'alert') => {
    switch (status) {
      case 'positive':
        return 'bg-green-600 border-white text-white shadow-brutal-sm';
      case 'warning':
        return 'bg-yellow-400 border-black text-black shadow-brutal-sm';
      case 'alert':
        return 'bg-red-600 border-white text-white shadow-brutal-sm animate-pulse';
    }
  };

  return (
    <div className={`p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-6 ${className}`}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center font-mono font-black text-xs border border-black">
              AI
            </span>
            <span className="font-mono text-xs font-black uppercase tracking-wider text-red-600">
              GÖRSEL VÜCUT DİLİ TANIMA (CANINE VISION ENGINE)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white mt-1">
            FOTOĞRAFLA ETOLOJİK TARAMA VE POSTÜR ANALİZİ
          </h3>
        </div>

        {/* Action Buttons: Upload or Gemini Key */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="h-[38px] px-3.5 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-black uppercase flex items-center gap-1.5 border-2 border-black dark:border-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <Camera className="w-4 h-4 text-red-600" />
            <span>FOTOĞRAF YÜKLE / ÇEK</span>
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />

          <button
            type="button"
            onClick={() => setShowKeyModal(true)}
            className="h-[38px] p-2 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white cursor-pointer"
            title="Google Gemini Vision API Ayarı (Opsiyonel)"
          >
            <Key className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Reference Scenarios Bar */}
      <div className="space-y-2">
        <span className="font-mono text-[10px] font-black uppercase text-zinc-500">
          VEYA HAZIR ETOLOJİK VAKA ÖRNEĞİ SEÇİN:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {SAMPLE_CANINE_PHOTOS.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSelectSample(sample)}
              className={`p-2 border-2 text-left transition-all font-mono text-xs cursor-pointer ${
                selectedImage === sample.imageUrl
                  ? 'border-red-600 bg-red-50 dark:bg-red-950/30 shadow-brutal-sm'
                  : 'border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100'
              }`}
            >
              <div className="text-[10px] font-black text-red-600">{sample.tag}</div>
              <div className="font-bold truncate text-black dark:text-white">{sample.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Vision Canvas & Telemetry Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Image with Overlaid HUD Bounding Landmarks (Cols 7) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative border-4 border-black dark:border-white bg-black overflow-hidden shadow-brutal select-none group aspect-4/3 flex items-center justify-center">
            
            <img
              ref={imageElementRef}
              src={selectedImage}
              alt="Köpek Vücut Dili Analizi"
              className={`w-full h-full object-cover transition-opacity duration-300 ${isAnalyzing ? 'opacity-40 blur-xs' : 'opacity-100'}`}
              crossOrigin="anonymous"
            />

            {/* Scanning Laser Animation Bar */}
            {isAnalyzing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-20 space-y-3">
                <Scan className="w-12 h-12 text-red-500 animate-spin" />
                <span className="font-mono text-xs font-black uppercase text-white tracking-widest animate-pulse">
                  NÖRONAL ETOLOJİK TARAMA YAPILIYOR...
                </span>
              </div>
            )}

            {/* Overlaid HUD Landmarks */}
            {!isAnalyzing && analysisResult.landmarks.map((lm) => {
              const isSelected = activeLandmarkId === lm.id;
              const badgeStyle = getStatusColor(lm.status);

              return (
                <div
                  key={lm.id}
                  style={{
                    left: `${lm.xPercent}%`,
                    top: `${lm.yPercent}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                  onClick={() => setActiveLandmarkId(isSelected ? null : lm.id)}
                >
                  {/* Pulsing Target Dot */}
                  <div className={`px-2 py-1 border-2 font-mono text-[10px] font-black uppercase tracking-wider flex items-center gap-1 transition-transform ${badgeStyle} ${isSelected ? 'scale-110 ring-2 ring-red-600' : 'hover:scale-105'}`}>
                    <Eye className="w-3 h-3" />
                    <span>{lm.label}</span>
                  </div>

                  {/* Tooltip Card */}
                  {isSelected && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 p-2.5 bg-black text-white dark:bg-white dark:text-black border-2 border-white dark:border-black font-mono text-[11px] shadow-brutal-lg z-30 leading-snug">
                      <div className="font-black text-red-500 uppercase">{lm.label}</div>
                      <div className="mt-0.5">{lm.detail}</div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Corner Bracket Overlays (Swiss Modernist HUD) */}
            <div className="absolute top-2 left-2 font-mono text-[10px] bg-black text-white px-2 py-0.5 border border-white">
              HUD // CANINE_VISION_V2
            </div>
            <div className="absolute bottom-2 right-2 font-mono text-[10px] bg-black text-white px-2 py-0.5 border border-white">
              GÜVEN: %{analysisResult.confidenceScore}
            </div>
          </div>

          <span className="font-mono text-[10px] text-zinc-500 block">
            💡 Fotoğraftaki tespit etiketlerine (KULAK, GÖZ, vb.) tıklayarak etolojik ayrıntıyı inceleyin.
          </span>
        </div>

        {/* Right: Detected Diagnostics & Telemetry (Cols 5) */}
        <div className="lg:col-span-5 p-5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 shadow-brutal space-y-5">
          
          {/* Mood & Stress Banner */}
          <div className="border-b-2 border-black dark:border-white pb-3 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-black uppercase text-zinc-500">
                TESPİT EDİLEN RUH HALİ:
              </span>
              <span className={`px-2 py-0.5 font-mono text-[10px] font-black uppercase border border-black ${
                analysisResult.stressLevel === 'critical' || analysisResult.stressLevel === 'high'
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-green-600 text-white'
              }`}>
                {analysisResult.stressLevel === 'critical' ? '🚨 KRİTİK ALARM' : analysisResult.stressLevel === 'high' ? '⚠️ YÜKSEK STRES' : '🟢 DÜŞÜK RİSK'}
              </span>
            </div>

            <h4 className="text-lg font-black uppercase text-black dark:text-white leading-tight">
              {analysisResult.detectedMood}
            </h4>
          </div>

          {/* Observations */}
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              NÖRONAL GÖRSEL GÖZLEMLER:
            </span>
            <ul className="space-y-1 font-mono text-xs text-zinc-700 dark:text-zinc-300">
              {analysisResult.rawObservations.map((obs, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Etological Commentary */}
          <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-mono text-xs text-black dark:text-white leading-relaxed">
            <strong>MERCK KLİNİK ANALİZİ:</strong> {analysisResult.etologicalInsight}
          </div>

          {/* Transfer to Main Analysis Engine CTA */}
          <button
            type="button"
            onClick={() => {
              onApplyToAnalysis(analysisResult.suggestedState);
              toast.success('Parametreler Davranış Analiz Motoruna aktarıldı!');
            }}
            className="w-full py-3 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>BU BULGULARI ANALİZ MOTORUNA AKTAR</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Gemini API Key Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in">
          <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white max-w-md w-full p-6 space-y-4 shadow-brutal-xl">
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2">
              <h4 className="font-mono text-sm font-black uppercase text-black dark:text-white flex items-center gap-1.5">
                <Key className="w-4 h-4 text-red-600" />
                GOOGLE GEMINI VISION API AYARI
              </h4>
              <button 
                onClick={() => setShowKeyModal(false)}
                className="font-mono text-xs font-bold p-1 cursor-pointer"
              >
                KAPAT
              </button>
            </div>

            <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Kuçu, fotoğraf analizlerini varsayılan olarak cihazınızda sıfır maliyetli yerel görsel etoloji algoritması ile gerçekleştirir.
              İsterseniz Google Gemini 1.5 Flash Vision API anahtarınızı girerek bulut tabanlı multimodal yapay zeka modelini de aktifleştirebilirsiniz (Anahtarınız sadece tarayıcınızın `localStorage` alanında saklanır).
            </p>

            <div>
              <label className="block font-mono text-xs font-black uppercase mb-1">GEMINI API KEY:</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full p-2 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem('kuchu_gemini_api_key');
                  setApiKey('');
                  setShowKeyModal(false);
                  toast.info('API anahtarı temizlendi; yerel model aktif.');
                }}
                className="px-3 py-1.5 border border-zinc-400 text-xs font-mono font-bold"
              >
                TEMİZLE
              </button>
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem('kuchu_gemini_api_key', apiKey.trim());
                  setShowKeyModal(false);
                  toast.success('Gemini API anahtarı kaydedildi!');
                }}
                className="px-4 py-1.5 bg-red-600 text-white font-mono text-xs font-black uppercase border border-black shadow-brutal-sm"
              >
                KAYDET
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

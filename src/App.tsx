import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { AppAuthProvider } from '@/contexts/AppAuthContext';
import { DogProvider } from '@/context/DogContext';
import { AppLayout } from '@/components/layout/AppLayout';

// Modular Pages
import { Index } from '@/pages/Index';
import { BehaviorAnalysisPage } from '@/pages/BehaviorAnalysisPage';
import { ProblemCenterPage } from '@/pages/ProblemCenterPage';
import { TrainingPlannerPage } from '@/pages/TrainingPlannerPage';
import { LibraryPage } from '@/pages/LibraryPage';
import { PatiAsistanPage } from '@/pages/PatiAsistanPage';
import { AccountPanelPage } from '@/pages/AccountPanelPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AppAuthProvider>
        <DogProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Index />} />
                <Route path="analiz" element={<BehaviorAnalysisPage />} />
                <Route path="sorunlar" element={<ProblemCenterPage />} />
                <Route path="egitim-planlari" element={<TrainingPlannerPage />} />
                <Route path="kutuphane" element={<LibraryPage />} />
                <Route path="patiasistan" element={<PatiAsistanPage />} />
                <Route path="panel" element={<AccountPanelPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            <Toaster 
              position="top-right" 
              toastOptions={{
                className: 'rounded-none border-2 border-black dark:border-white shadow-brutal font-mono text-xs font-bold uppercase'
              }} 
            />
          </HashRouter>
        </DogProvider>
      </AppAuthProvider>
    </ThemeProvider>
  );
}

export default App;

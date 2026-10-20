import React from 'react';
import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { MobileBottomNav } from './MobileBottomNav';
import { PwaInstallPrompt } from '@/components/common/PwaInstallPrompt';
import { FloatingClickerButton } from '@/components/clicker/FloatingClickerButton';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white relative">
      <SiteHeader />
      {/* Mobile bottom padding to accommodate bottom navigation bar */}
      <main className="flex-1 pb-20 sm:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileBottomNav />
      <FloatingClickerButton />
      <PwaInstallPrompt />
    </div>
  );
};

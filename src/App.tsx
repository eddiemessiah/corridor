import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardStats } from './components/DashboardStats';
import { CorridorPerformance } from './components/CorridorPerformance';
import { RecentActivity } from './components/RecentActivity';
import { Footer } from './components/Footer';
import { TransferPage } from './components/TransferPage';
import { CompliancePage } from './components/CompliancePage';
import { BatchSettlementPage } from './components/BatchSettlementPage';
import { VaultsPage } from './components/VaultsPage';
import { SettingsPage } from './components/SettingsPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="ml-64 flex-1 flex flex-col relative pb-12">
        <Header onNewTransfer={() => setCurrentPage('transfers')} />
        
        <AnimatePresence mode="wait">
          {currentPage === 'overview' ? (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8 space-y-8"
            >
              <DashboardStats />
              <CorridorPerformance />
              <RecentActivity />
            </motion.div>
          ) : currentPage === 'transfers' ? (
            <motion.div 
              key="transfers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <TransferPage onBack={() => setCurrentPage('overview')} />
            </motion.div>
          ) : currentPage === 'batches' ? (
            <motion.div 
              key="batches"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8 h-full"
            >
              <BatchSettlementPage />
            </motion.div>
          ) : currentPage === 'vaults' ? (
            <motion.div 
              key="vaults"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <VaultsPage />
            </motion.div>
          ) : currentPage === 'compliance' ? (
            <motion.div 
              key="compliance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <CompliancePage />
            </motion.div>
          ) : currentPage === 'settings' ? (
            <motion.div 
              key="settings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <SettingsPage />
            </motion.div>
          ) : (
            <motion.div 
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 flex items-center justify-center h-[60vh] text-slate-400 uppercase font-bold tracking-widest"
            >
              {currentPage} module coming soon
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { Dashboard } from './components/Dashboard';
import { PriorityList } from './components/PriorityList';
import { PriorityDeepDive } from './components/PriorityDeepDive';
import { SubmitUpdate } from './components/SubmitUpdate';
import { MeetingConsole } from './components/MeetingConsole';
import { ActionTracker } from './components/ActionTracker';
import { Settings } from './components/Settings';
import { WeeklyBrief } from './components/WeeklyBrief';
import { RiskRegistry } from './components/RiskRegistry';
import { CapitalAllocation } from './components/CapitalAllocation';
import { Support } from './components/Support';
import { Archive } from './components/Archive';
import { Login } from './components/Login';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Loader2 } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { t } = useLanguage();
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'okr':
        return <PriorityList onSelectPriority={() => setActiveTab('deep-dive')} />;
      case 'deep-dive':
        return <PriorityDeepDive onBack={() => setActiveTab('okr')} />;
      case 'actions':
        return <ActionTracker />;
      case 'meetings':
        return <MeetingConsole />;
      case 'reports':
        return <WeeklyBrief />;
      case 'risk':
        return <RiskRegistry />;
      case 'capital':
        return <CapitalAllocation />;
      case 'settings':
        return <Settings />;
      case 'support':
        return <Support />;
      case 'archive':
        return <Archive />;
      case 'submit-update':
        return <SubmitUpdate onCancel={() => setActiveTab('dashboard')} />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-outline">
            <div className="text-center">
              <h2 className="text-2xl font-headline font-bold mb-2">{activeTab.toUpperCase()}</h2>
              <p>{t('此屏幕目前正在建设中。', 'This screen is currently under construction.')}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col min-w-0">
        <TopNav onNavigate={setActiveTab} />
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
          
          <footer className="mt-auto py-6 px-8 bg-surface-container-low border-t border-outline-variant/15 flex flex-col sm:flex-row justify-between items-center text-[10px] text-outline font-bold uppercase tracking-widest gap-4">
            <div>
              © 2024 THE EXECUTIVE LEDGER · {t('内部使用', 'INTERNAL ONLY')}
            </div>
            <div className="flex items-center gap-6">
              <span>{t('系统状态', 'System')}: OK</span>
              <span>{t('数据同步', 'Sync')}: 14:22 GMT+8</span>
              <span className="text-primary cursor-pointer hover:underline">{t('安全准则', 'Security Guidelines')}</span>
            </div>
          </footer>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setActiveTab('submit-update')}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all border-4 border-white/20"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Plus className="w-6 h-6" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

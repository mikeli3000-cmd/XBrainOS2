import React from 'react';
import { 
  LayoutDashboard, 
  Plus, 
  HelpCircle, 
  History
} from "lucide-react";
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { language, t } = useLanguage();

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 bg-surface-container-low py-6 gap-2 border-r border-outline-variant/15 sticky top-0 shrink-0">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded">
          <LayoutDashboard className="text-white w-6 h-6" />
        </div>
        <div>
          <div className="font-headline font-extrabold text-lg text-black">Global Ops</div>
          <div className="text-[10px] text-outline font-bold uppercase tracking-wider">
            {t('FY24 战略', 'FY24 Strategy')}
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const label = item.label[language];
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all rounded-md group ${
                isActive 
                  ? 'bg-white text-black font-bold shadow-sm' 
                  : 'text-secondary hover:bg-surface-container-high hover:text-black'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-secondary group-hover:text-black'}`} />
              <span className="text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-6 mt-auto space-y-4">
        <button 
          onClick={() => setActiveTab('submit-update')}
          className="w-full bg-primary text-white py-2.5 px-4 text-xs font-bold rounded-sm flex items-center justify-center gap-2 active:opacity-70 transition-opacity uppercase tracking-wider"
        >
          <Plus className="w-4 h-4" />
          {t('新倡议', 'New Initiative')}
        </button>
        <div className="pt-4 border-t border-outline-variant/15 space-y-1">
          <button 
            onClick={() => setActiveTab('support')}
            className={`w-full text-outline text-[10px] font-bold uppercase flex items-center gap-3 px-2 py-2 hover:text-primary transition-colors ${activeTab === 'support' ? 'text-primary' : ''}`}
          >
            <HelpCircle className="w-4 h-4" />
            {t('帮助', 'Support')}
          </button>
          <button 
            onClick={() => setActiveTab('archive')}
            className={`w-full text-outline text-[10px] font-bold uppercase flex items-center gap-3 px-2 py-2 hover:text-primary transition-colors ${activeTab === 'archive' ? 'text-primary' : ''}`}
          >
            <History className="w-4 h-4" />
            {t('存档', 'Archive')}
          </button>
        </div>
      </div>
    </aside>
  );
};

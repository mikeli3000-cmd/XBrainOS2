import React, { useState, useRef, useEffect } from 'react';
import { Search, Languages, Bell, Settings, User, LogOut, X, Command, TrendingUp, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

interface TopNavProps {
  onNavigate: (tab: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const notificationsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: t('Q1 战略回顾已发布', 'Q1 Strategy Review Published'), time: '2h ago', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 2, title: t('高风险警报: 供应链延迟', 'High Risk Alert: Supply Chain Delay'), time: '4h ago', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50' },
    { id: 3, title: t('OKR 进度更新: 收入目标', 'OKR Progress Update: Revenue Target'), time: '1d ago', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { id: 4, title: t('会议纪要已生成', 'Meeting Minutes Generated'), time: '2d ago', icon: CheckCircle2, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  const searchResults = searchQuery ? [
    { title: t('2024 战略支柱', '2024 Strategic Pillars'), category: t('战略', 'Strategy'), tab: 'dashboard' },
    { title: t('Q1 收入 OKR', 'Q1 Revenue OKR'), category: 'OKR', tab: 'okr' },
    { title: t('供应链风险分析', 'Supply Chain Risk Analysis'), category: t('风险', 'Risk'), tab: 'risk' },
    { title: t('资本配置报告', 'Capital Allocation Report'), category: t('财务', 'Finance'), tab: 'capital' },
  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  return (
    <header className="flex justify-between items-center px-6 h-16 w-full bg-white sticky top-0 z-40 border-b border-outline-variant/15 shadow-sm">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-tighter text-slate-900 font-headline">
          {t('战略账本', 'The Executive Ledger')}
        </span>
        <nav className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="text-black border-b-2 border-black pb-1 font-headline tracking-tight font-semibold text-sm"
          >
            {t('投资组合', 'Portfolio')}
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="text-outline hover:text-black font-headline tracking-tight font-semibold text-sm transition-colors"
          >
            {t('战略', 'Strategy')}
          </button>
          <button 
            onClick={() => onNavigate('okr')}
            className="text-outline hover:text-black font-headline tracking-tight font-semibold text-sm transition-colors"
          >
            {t('运营', 'Operations')}
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <div 
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-3 pl-4 pr-12 py-2 bg-surface-container-low border border-outline-variant/20 rounded-full text-xs w-64 cursor-text hover:bg-surface-container-lowest transition-all group"
          >
            <Search className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
            <span className="text-outline/60">{t('全局搜索...', 'Search Everything')}</span>
            <div className="absolute right-3 flex items-center gap-1 px-1.5 py-0.5 bg-white border border-outline-variant/30 rounded text-[9px] font-bold text-outline/40">
              <Command className="w-2.5 h-2.5" />
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(language === 'cn' ? 'en' : 'cn')}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-surface-container-low transition-colors rounded-full cursor-pointer border border-outline-variant/30"
          >
            <Languages className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-headline font-bold text-secondary uppercase tracking-tighter">
              {language === 'cn' ? 'English' : '中文'}
            </span>
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-2 hover:bg-surface-container-low transition-colors rounded-full cursor-pointer relative"
            >
              <Bell className="w-5 h-5 text-secondary" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>

            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-80 bg-white border border-outline-variant/20 rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-4 bg-surface-container-low border-b border-outline-variant/10 flex justify-between items-center">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-outline">{t('通知', 'Notifications')}</h4>
                    <button className="text-[10px] font-bold text-primary uppercase tracking-tighter hover:underline">{t('全部标记为已读', 'Mark all read')}</button>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-4 hover:bg-surface-container-lowest transition-colors cursor-pointer border-b border-outline-variant/5 group">
                        <div className="flex gap-3">
                          <div className={`w-8 h-8 rounded-full ${n.bg} flex items-center justify-center flex-shrink-0`}>
                            <n.icon className={`w-4 h-4 ${n.color}`} />
                          </div>
                          <div>
                            <p className="text-xs font-bold group-hover:text-primary transition-colors">{n.title}</p>
                            <p className="text-[10px] text-outline mt-1">{n.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-outline-variant/10">
                    <button className="text-[10px] font-bold text-outline uppercase tracking-widest hover:text-black">{t('查看所有通知', 'View All')}</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Settings */}
          <button 
            onClick={() => onNavigate('settings')}
            className="p-2 hover:bg-surface-container-low transition-colors rounded-full cursor-pointer"
          >
            <Settings className="w-5 h-5 text-secondary" />
          </button>

          {/* User Profile */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden ml-2 border border-outline-variant/30 hover:ring-2 hover:ring-primary/20 transition-all"
            >
              <img 
                alt="Executive User Profile" 
                src={user?.avatar || "https://picsum.photos/seed/exec/100/100"} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 bg-white border border-outline-variant/20 rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-4 bg-surface-container-low border-b border-outline-variant/10">
                    <p className="text-xs font-bold">{user?.name}</p>
                    <p className="text-[10px] text-outline mt-0.5">{user?.email}</p>
                    <div className="mt-2 inline-flex px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-bold rounded-full uppercase tracking-tighter">
                      {user?.role}
                    </div>
                  </div>
                  <div className="p-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-surface-container-low rounded-lg transition-colors text-xs font-medium">
                      <User className="w-4 h-4 text-outline" />
                      {t('个人资料', 'Profile')}
                    </button>
                    <button 
                      onClick={() => onNavigate('settings')}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-surface-container-low rounded-lg transition-colors text-xs font-medium"
                    >
                      <Settings className="w-4 h-4 text-outline" />
                      {t('设置', 'Settings')}
                    </button>
                    <div className="h-px bg-outline-variant/10 my-2" />
                    <button 
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors text-xs font-bold"
                    >
                      <LogOut className="w-4 h-4" />
                      {t('退出登录', 'Sign Out')}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-start justify-center pt-24 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-outline-variant/10 flex items-center gap-4">
                <Search className="w-5 h-5 text-primary" />
                <input 
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('搜索战略、OKR、风险或报告...', 'Search strategy, OKRs, risks, or reports...')}
                  className="flex-1 bg-transparent border-none outline-none text-lg font-headline font-medium placeholder:text-outline/30"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-outline" />
                </button>
              </div>
              
              <div className="max-h-[400px] overflow-y-auto p-4">
                {!searchQuery ? (
                  <div className="py-8 text-center">
                    <div className="inline-flex p-4 bg-surface-container-low rounded-full mb-4">
                      <Command className="w-8 h-8 text-outline/20" />
                    </div>
                    <p className="text-sm font-bold text-outline uppercase tracking-widest">{t('输入内容开始搜索', 'Type to start searching')}</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {[t('战略', 'Strategy'), 'OKR', t('风险', 'Risk'), t('财务', 'Finance')].map(tag => (
                        <button 
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1.5 bg-surface-container-low hover:bg-primary/10 hover:text-primary rounded-full text-[10px] font-bold uppercase tracking-widest transition-all"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((result, i) => (
                      <button 
                        key={i}
                        onClick={() => {
                          onNavigate(result.tab);
                          setIsSearchOpen(false);
                        }}
                        className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-bold">{result.title}</p>
                            <p className="text-[10px] text-outline uppercase tracking-widest mt-1">{result.category}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-outline opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-outline">
                    {t('未找到匹配结果', 'No results found')}
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-surface-container-low border-t border-outline-variant/10 flex justify-between items-center text-[10px] font-bold text-outline/40 uppercase tracking-widest">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><span className="px-1.5 py-0.5 bg-white border border-outline-variant/30 rounded text-[8px]">↑↓</span> {t('选择', 'Select')}</span>
                  <span className="flex items-center gap-1"><span className="px-1.5 py-0.5 bg-white border border-outline-variant/30 rounded text-[8px]">Enter</span> {t('打开', 'Open')}</span>
                </div>
                <span>{t('按 ESC 关闭', 'ESC to close')}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

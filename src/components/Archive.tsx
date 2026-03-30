import React from 'react';
import { History, Search, Filter, Download, MoreHorizontal, FileText, Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Archive: React.FC = () => {
  const { t, language } = useLanguage();

  const archivedItems = [
    { id: 1, title: { cn: '2023 战略回顾', en: '2023 Strategic Review' }, date: '2023-12-15', type: { cn: '报告', en: 'Report' }, owner: 'CFO Office' },
    { id: 2, title: { cn: 'Q4 运营会议纪要', en: 'Q4 Ops Meeting Minutes' }, date: '2023-11-20', type: { cn: '会议', en: 'Meeting' }, owner: 'CEO Office' },
    { id: 3, title: { cn: '东南亚市场调研', en: 'SEA Market Research' }, date: '2023-10-05', type: { cn: '文档', en: 'Document' }, owner: 'Strategy Team' },
    { id: 4, title: { cn: '2023 资本分配计划', en: '2023 Capital Allocation' }, date: '2023-01-10', type: { cn: '财务', en: 'Finance' }, owner: 'CFO Office' },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto w-full space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('历史记录', 'History')}</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">{t('档案库', 'Archive')}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
            <input 
              className="pl-10 pr-4 py-2 bg-white border border-outline-variant/20 shadow-sm rounded-md text-sm w-64 outline-none focus:ring-1 ring-primary" 
              placeholder={t('搜索档案...', 'Search archive...')}
              type="text" 
            />
          </div>
          <button className="p-2 hover:bg-surface-container-low rounded-md transition-colors border border-outline-variant/30"><Filter className="w-4 h-4 text-outline" /></button>
        </div>
      </div>

      <div className="bg-white rounded-md border border-outline-variant/10 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 bg-surface-container-low px-6 py-3 border-b border-outline-variant/10">
          <div className="col-span-5 text-[10px] font-bold text-outline uppercase tracking-widest">{t('项目名称', 'Item Name')}</div>
          <div className="col-span-2 text-[10px] font-bold text-outline uppercase tracking-widest">{t('日期', 'Date')}</div>
          <div className="col-span-2 text-[10px] font-bold text-outline uppercase tracking-widest">{t('类型', 'Type')}</div>
          <div className="col-span-2 text-[10px] font-bold text-outline uppercase tracking-widest">{t('所有者', 'Owner')}</div>
          <div className="col-span-1 text-[10px] font-bold text-outline uppercase tracking-widest text-right">{t('操作', 'Action')}</div>
        </div>
        <div className="divide-y divide-outline-variant/10">
          {archivedItems.map((item) => (
            <div key={item.id} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-lowest transition-colors group cursor-pointer">
              <div className="col-span-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-outline group-hover:bg-primary group-hover:text-white transition-all">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{item.title[language]}</h4>
              </div>
              <div className="col-span-2 text-xs font-bold text-on-surface flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-outline" />
                {item.date}
              </div>
              <div className="col-span-2">
                <span className="text-[10px] font-bold text-secondary bg-surface-container-high px-2 py-1 rounded-sm uppercase tracking-tighter">
                  {item.type[language]}
                </span>
              </div>
              <div className="col-span-2 text-xs font-bold text-on-surface flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-outline" />
                {item.owner}
              </div>
              <div className="col-span-1 text-right">
                <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors"><Download className="w-4 h-4 text-outline" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button className="text-xs font-bold text-outline uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
          {t('加载更多', 'Load More')} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

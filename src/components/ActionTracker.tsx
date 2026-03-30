import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MoreHorizontal, 
  ChevronRight,
  User,
  Calendar,
  Tag,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ActionTracker: React.FC = () => {
  const { t, language } = useLanguage();

  const actions = [
    { id: 1, title: { cn: '审核 Q3 东南亚物流合同', en: 'Review Q3 SEA Logistics Contracts' }, owner: 'Sarah J.', due: { cn: '今天', en: 'Today' }, priority: 'high', status: 'pending', category: 'Legal' },
    { id: 2, title: { cn: '雅加达试点技术架构评审', en: 'Jakarta Pilot Tech Architecture Review' }, owner: 'Marcus C.', due: { cn: '明天', en: 'Tomorrow' }, priority: 'high', status: 'pending', category: 'IT' },
    { id: 3, title: { cn: '更新董事会月度汇报 PPT', en: 'Update Board Monthly Report PPT' }, owner: 'David W.', due: { cn: '3天后', en: 'In 3 days' }, priority: 'med', status: 'completed', category: 'Admin' },
    { id: 4, title: { cn: '供应商多元化调研报告', en: 'Supplier Diversification Research Report' }, owner: 'Robert L.', due: { cn: '已逾期', en: 'Overdue' }, priority: 'high', status: 'critical', category: 'Ops' },
    { id: 5, title: { cn: '团队 Q4 OKR 设定会议', en: 'Team Q4 OKR Setting Meeting' }, owner: 'Marcus C.', due: { cn: '下周', en: 'Next Week' }, priority: 'low', status: 'upcoming', category: 'Strategy' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('执行追踪', 'Execution Tracking')}</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">{t('行动项', 'Action Items')}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
            <input 
              className="pl-10 pr-4 py-2 bg-white border border-outline-variant/20 shadow-sm rounded-md text-sm w-64 outline-none focus:ring-1 ring-primary" 
              placeholder={t('搜索行动项...', 'Search actions...')}
              type="text" 
            />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-sm font-bold text-sm shadow-lg flex items-center gap-2">
            <Plus className="w-4 h-4" />
            {t('新建行动', 'New Action')}
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        <button className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold whitespace-nowrap">{t('全部', 'All')} (24)</button>
        <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant/20 rounded-full text-xs font-bold whitespace-nowrap hover:bg-surface-container-low transition-colors">{t('待处理', 'Pending')} (12)</button>
        <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant/20 rounded-full text-xs font-bold whitespace-nowrap hover:bg-surface-container-low transition-colors">{t('已完成', 'Completed')} (8)</button>
        <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant/20 rounded-full text-xs font-bold whitespace-nowrap hover:bg-surface-container-low transition-colors">{t('逾期', 'Overdue')} (4)</button>
        <div className="h-8 w-px bg-outline-variant/30 mx-2"></div>
        <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant/20 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-2">
          <Filter className="w-3 h-3" />
          {t('筛选', 'Filter')}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Action List */}
        <div className="lg:col-span-8 space-y-4">
          {actions.map((action) => (
            <div key={action.id} className="bg-white p-5 rounded-md shadow-sm border border-outline-variant/10 hover:border-primary/30 transition-all group cursor-pointer flex items-center gap-6">
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                action.status === 'completed' ? 'bg-emerald-500 border-emerald-500' : 'border-outline-variant group-hover:border-primary'
              }`}>
                {action.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className={`text-sm font-bold ${action.status === 'completed' ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>{action.title[language]}</h4>
                  <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                    action.priority === 'high' ? 'bg-red-100 text-red-700' : 
                    action.priority === 'med' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {action.priority === 'high' ? t('高', 'High') : action.priority === 'med' ? t('中', 'Med') : t('低', 'Low')}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {action.owner}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {action.due[language]}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {action.category}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-high overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i}/100/100`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors opacity-0 group-hover:opacity-100">
                  <MoreHorizontal className="w-5 h-5 text-outline" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Detail Drawer (Simplified as a side panel for this view) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-md shadow-sm border border-outline-variant/10 sticky top-24">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{t('详情详情', 'Action Detail')}</span>
              <button className="text-outline hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
            
            <h3 className="text-xl font-headline font-extrabold mb-4">{t('审核 Q3 东南亚物流合同', 'Review Q3 SEA Logistics Contracts')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between py-3 border-b border-outline-variant/10">
                <span className="text-xs font-bold text-on-surface-variant uppercase">{t('状态', 'Status')}</span>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase">{t('待处理', 'Pending')}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-outline-variant/10">
                <span className="text-xs font-bold text-on-surface-variant uppercase">{t('负责人', 'Owner')}</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container-high overflow-hidden">
                    <img src="https://picsum.photos/seed/sarah/100/100" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold">Sarah Jenkins</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-outline-variant/10">
                <span className="text-xs font-bold text-on-surface-variant uppercase">{t('截止日期', 'Due')}</span>
                <span className="text-xs font-bold text-error">{t('今天', 'Today')}</span>
              </div>
              
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-on-surface-variant uppercase">{t('描述', 'Description')}</span>
                <p className="text-sm text-secondary leading-relaxed">
                  {t('需要与法务团队确认 Q3 季度在越南和印尼的新增仓储节点合同条款，重点关注不可抗力条款。', 'Need to confirm contract terms for new warehouse nodes in Vietnam and Indonesia for Q3, focusing on force majeure clauses.')}
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <span className="text-xs font-bold text-on-surface-variant uppercase">{t('评论', 'Comments')} (2)</span>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high shrink-0"></div>
                  <div className="bg-surface-container-low p-3 rounded-md flex-1">
                    <p className="text-xs text-on-surface">{t('法务部已经审核过初稿，有几处修改建议。', 'Legal has reviewed the first draft and has several suggestions.')}</p>
                    <span className="text-[9px] font-bold text-outline uppercase mt-1 block">{t('10分钟前', '10m ago')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button className="flex-1 py-3 bg-primary text-white rounded-sm font-bold text-xs uppercase tracking-widest shadow-lg">{t('完成任务', 'Complete')}</button>
              <button className="p-3 bg-surface-container-low text-primary rounded-sm hover:bg-surface-container-high transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

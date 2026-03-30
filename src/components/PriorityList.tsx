import React from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  Send,
  Download,
  Sparkles,
  MoreHorizontal
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PriorityListProps {
  onSelectPriority: (id: string) => void;
}

export const PriorityList: React.FC<PriorityListProps> = ({ onSelectPriority }) => {
  const { language, t } = useLanguage();

  const priorities = [
    {
      id: 'p1',
      title: { cn: '凤凰项目：Q3 云端迁移', en: 'Project Phoenix: Q3 Cloud Migration' },
      updated: { cn: '2小时前', en: '2h ago' },
      pillar: { cn: '卓越运营', en: 'Operational Excellence' },
      owner: 'Sarah J.',
      status: 'on-track',
      confidence: 3,
      actions: 12,
      nextReview: { cn: '2023年10月14日', en: 'Oct 14, 2023' }
    },
    {
      id: 'p2',
      title: { cn: '亚太市场准入：雅加达试点', en: 'APAC Market Entry: Jakarta Pilot' },
      updated: { cn: '1天前', en: '1d ago' },
      pillar: { cn: '业务增长', en: 'Business Growth' },
      owner: 'David Wu',
      status: 'at-risk',
      confidence: 2,
      actions: 4,
      nextReview: { cn: '2023年10月12日', en: 'Oct 12, 2023' }
    },
    {
      id: 'p3',
      title: { cn: '“泰坦”项目：供应链审计', en: 'Project Titan: Supply Chain Audit' },
      updated: { cn: '4小时前', en: '4h ago' },
      pillar: { cn: '卓越运营', en: 'Operational Excellence' },
      owner: 'Robert L.',
      status: 'critical',
      confidence: 1,
      actions: 28,
      nextReview: { cn: '已逾期', en: 'Overdue' },
      isOverdue: true
    },
    {
      id: 'p4',
      title: { cn: '领导力人才梯队评审', en: 'Leadership Talent Pipeline Review' },
      updated: { cn: '3天前', en: '3d ago' },
      pillar: { cn: '企业文化', en: 'Corporate Culture' },
      owner: 'Marcus C.',
      status: 'on-track',
      confidence: 3,
      actions: 3,
      nextReview: { cn: '2023年10月20日', en: 'Oct 20, 2023' }
    }
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            {t('中心枢纽', 'Central Hub')}
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">
            {t('优先级', 'Priorities')}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4 group-focus-within:text-primary transition-colors" />
            <input 
              className="pl-10 pr-4 py-2 bg-white border-none shadow-sm rounded-md text-sm focus:ring-2 ring-primary transition-all w-full md:w-64 outline-none" 
              placeholder={t('查找优先级...', 'Search Priorities...')} 
              type="text" 
            />
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-sm font-bold text-sm shadow-lg active:scale-95 transition-all">
            <Plus className="w-4 h-4" />
            {t('创建优先级', 'Create Priority')}
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <section className="bg-surface-container-low p-1 rounded-lg">
        <div className="bg-white flex flex-wrap items-center gap-6 px-6 py-4 rounded-md shadow-sm">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t('战略支柱', 'Strategic Pillar')}
            </label>
            <select className="border-none bg-surface-container-low rounded px-2 py-1 text-xs font-medium focus:ring-1 ring-outline-variant outline-none">
              <option>{t('所有支柱', 'All Pillars')}</option>
              <option>{t('市场扩张', 'Market Expansion')}</option>
              <option>{t('卓越运营', 'Operational Excellence')}</option>
              <option>{t('人才密度', 'Talent Density')}</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t('负责人', 'Owner')}
            </label>
            <select className="border-none bg-surface-container-low rounded px-2 py-1 text-xs font-medium focus:ring-1 ring-outline-variant outline-none">
              <option>{t('所有人', 'All Owners')}</option>
              <option>Marcus Chen</option>
              <option>Sarah Jenkins</option>
              <option>David Wu</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t('状态', 'Status')}
            </label>
            <select className="border-none bg-surface-container-low rounded px-2 py-1 text-xs font-medium focus:ring-1 ring-outline-variant outline-none">
              <option>{t('进行中状态', 'Active Status')}</option>
              <option>{t('正常推进', 'On Track')}</option>
              <option>{t('存在风险', 'At Risk')}</option>
              <option>{t('已延期', 'Delayed')}</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t('信心度', 'Confidence')}
            </label>
            <select className="border-none bg-surface-container-low rounded px-2 py-1 text-xs font-medium focus:ring-1 ring-outline-variant outline-none">
              <option>{t('所有级别', 'All Levels')}</option>
              <option>{t('高', 'High')}</option>
              <option>{t('中', 'Med')}</option>
              <option>{t('低', 'Low')}</option>
            </select>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-1 transition-all">
              <Filter className="w-3 h-3" />
              {t('高级筛选', 'Advanced Filters')}
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/30"></div>
            <button className="text-xs font-bold text-error flex items-center gap-1 transition-all hover:underline">
              {t('重置', 'Reset')}
            </button>
          </div>
        </div>
      </section>

      {/* Main Table */}
      <section className="bg-white rounded-md shadow-sm overflow-hidden border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline">
                  {t('优先计划', 'Priority Initiative')}
                </th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline">
                  {t('战略支柱', 'Strategic Pillar')}
                </th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline">
                  {t('负责人', 'Owner')}
                </th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline text-center">
                  {t('状态', 'Status')}
                </th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline text-center">
                  {t('信心度', 'Confidence')}
                </th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline">
                  {t('行动项', 'Actions')}
                </th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-outline">
                  {t('下次评审', 'Next Review')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {priorities.map((p, idx) => (
                <tr 
                  key={idx} 
                  onClick={() => onSelectPriority(p.id)}
                  className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <button className="block text-sm font-bold text-primary group-hover:underline decoration-2 underline-offset-4 text-left">
                      {p.title[language]}
                    </button>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      {t('更新于', 'Updated')} {p.updated[language]}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      p.pillar.en === 'Operational Excellence' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 
                      p.pillar.en === 'Business Growth' ? 'bg-blue-100 text-blue-800' : 'bg-violet-100 text-violet-800'
                    }`}>
                      {p.pillar[language]}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                        <img src={`https://picsum.photos/seed/${p.owner}/100/100`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold">{p.owner}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      p.status === 'on-track' ? 'bg-emerald-100 text-emerald-800' : 
                      p.status === 'at-risk' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {p.status === 'on-track' ? t('正常推进', 'On Track') : p.status === 'at-risk' ? t('存在风险', 'At Risk') : t('紧急', 'Critical')}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex justify-center gap-0.5">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`w-1 h-3 rounded-full ${
                          i <= p.confidence 
                            ? (p.status === 'on-track' ? 'bg-emerald-500' : p.status === 'at-risk' ? 'bg-amber-500' : 'bg-red-500') 
                            : 'bg-slate-200'
                        }`}></div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${p.status === 'critical' ? 'text-error' : 'text-outline'}`} />
                      <span className={`text-xs font-bold ${p.status === 'critical' ? 'text-error' : ''}`}>{p.actions}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-xs font-medium ${p.isOverdue ? 'text-red-600 font-bold' : ''}`}>
                      {p.nextReview[language]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Pagination */}
        <div className="px-6 py-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t(`已选 ${priorities.length} 项`, `Selected ${priorities.length} Items`)}
            </span>
            <div className="h-4 w-[1px] bg-outline-variant"></div>
            <div className="flex items-center gap-2">
              <button className="bg-primary text-white px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow hover:bg-slate-800 transition-all">
                <Send className="w-3 h-3" />
                {t('发送提醒', 'Send Reminder')}
              </button>
              <button className="bg-white border border-outline-variant/30 px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-all">
                <Download className="w-3 h-3" />
                {t('导出', 'Export')}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-surface-container-high transition-colors text-outline">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold mx-2">
              {t('第 1 页，共 8 页', 'Page 1 of 8')}
            </span>
            <button className="p-1 rounded hover:bg-surface-container-high transition-colors text-primary">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Intelligence Insight */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-primary-container text-white p-6 rounded-md relative overflow-hidden flex flex-col justify-between min-h-[160px] shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-tertiary-fixed-dim" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim">
                {t('智能综合分析', 'Intelligent Analysis')}
              </span>
            </div>
            <h3 className="text-xl font-bold font-headline leading-tight max-w-lg">
              {t('关键警报：受亚太地区人才依赖关系影响，目前有 14% 的高优先级计划处于“存在风险”状态。', 'Critical Alert: 14% of high-priority initiatives are "At Risk" due to APAC talent dependencies.')}
            </h3>
          </div>
          <button className="relative z-10 self-start text-xs font-bold uppercase tracking-widest border-b-2 border-tertiary-fixed-dim pb-1 mt-4 hover:text-tertiary-fixed-dim transition-all">
            {t('查看资源矩阵', 'View Resource Matrix')}
          </button>
          <div className="absolute -right-4 -bottom-4 w-48 h-48 bg-gradient-to-br from-tertiary-container to-transparent opacity-40 rounded-full blur-3xl"></div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3">
              {t('整体信心度', 'Overall Confidence')}
            </p>
            <div className="text-4xl font-extrabold font-headline text-primary tracking-tighter">82%</div>
            <p className="text-xs text-on-surface-variant mt-1">
              {t('较上一评审周期上升 4%', 'Up 4% from last review')}
            </p>
          </div>
          <div className="mt-4 flex gap-1 h-2">
            <div className="flex-[8] bg-emerald-500 rounded-full"></div>
            <div className="flex-[1] bg-amber-500 rounded-full"></div>
            <div className="flex-[1] bg-red-500 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

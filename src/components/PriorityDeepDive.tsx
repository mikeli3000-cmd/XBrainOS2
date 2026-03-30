import React from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown,
  Download,
  History,
  CheckSquare,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const PriorityDeepDive: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-[1400px] mx-auto w-full space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          {t('返回项目组合', 'Back to Portfolio')}
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
              <span>{t('战略支柱：数字化转型', 'Strategic Pillar: Digital Transformation')}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">{t('战略执行详情深挖', 'Strategic Execution Deep Dive')}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter font-headline text-on-surface mb-2">{t('下一代供应链韧性计划', 'Next-Gen Supply Chain Resilience')}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
                  <img alt="Priority Owner" src="https://picsum.photos/seed/owner/100/100" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-semibold text-on-surface-variant">{t('负责人: 张明 (COO)', 'Owner: Ming Zhang')}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span className="text-sm font-medium text-on-surface-variant">{t('截止日期', 'Deadline')}: 2024年Q4</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-primary px-4 py-2 rounded-sm border border-outline-variant/30 font-bold text-sm transition-colors hover:bg-surface-container-high">{t('导出简报', 'Export Brief')}</button>
            <button className="bg-primary text-white px-6 py-2 rounded-sm font-bold text-sm shadow-lg">{t('更新状态', 'Update Status')}</button>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Column 1: Weekly Update Timeline */}
        <section className="lg:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-md shadow-sm border border-outline-variant/10">
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">{t('每周动态', 'Weekly Updates')}</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-surface-container-high"></div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="block text-[10px] font-bold text-on-surface-variant mb-1">{t('本周', 'This Week')} (W12)</span>
                <h4 className="text-sm font-bold text-on-surface mb-1">{t('平稳进行', 'On Track')}</h4>
                <p className="text-xs text-secondary leading-relaxed">{t('东南亚供应商迁移完成 80%，关键路径无延误。', 'SEA supplier migration 80% complete.')}</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <span className="block text-[10px] font-bold text-on-surface-variant mb-1">{t('第11周', 'Week 11')}</span>
                <h4 className="text-sm font-bold text-on-surface mb-1">{t('有风险', 'At Risk')}</h4>
                <p className="text-xs text-secondary leading-relaxed">{t('物流成本超支 12%。', 'Logistics costs +12% over budget.')}</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="block text-[10px] font-bold text-on-surface-variant mb-1">{t('第10周', 'Week 10')}</span>
                <h4 className="text-sm font-bold text-on-surface mb-1">{t('平稳进行', 'On Track')}</h4>
                <p className="text-xs text-secondary leading-relaxed">{t('首批智能仓储系统上线。', 'First smart warehouse system live.')}</p>
              </div>
              
              <button className="w-full py-2 text-xs font-bold text-outline hover:text-primary transition-colors border-t border-surface-container-high mt-4 pt-4 flex items-center justify-center gap-2">
                <History className="w-3 h-3" />
                {t('查看历史', 'View History')}
              </button>
            </div>
          </div>
        </section>

        {/* Column 2: KPI & Strategic Blocker */}
        <section className="lg:col-span-5 space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-md shadow-sm border border-outline-variant/10">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">{t('准时交付率', 'OTIF Rate')}</span>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold font-headline">94.2%</span>
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> 2.1%
                </span>
              </div>
              <div className="mt-4 h-1 bg-surface-container-low rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[94.2%]"></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm border border-outline-variant/10">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">{t('库存周转', 'Inventory Turn')}</span>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold font-headline">42D</span>
                <span className="text-xs text-amber-600 font-bold flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" /> 4D
                </span>
              </div>
              <div className="mt-4 h-1 bg-surface-container-low rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[70%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-primary-container text-white p-8 rounded-md relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertCircle className="w-32 h-32" />
            </div>
            <h3 className="text-xs font-bold text-on-primary-container uppercase tracking-widest mb-4">{t('战略瓶颈', 'Strategic Blocker')}</h3>
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1 w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">{t('跨部门数据孤岛', 'Data Silos')}</h4>
                <p className="text-sm text-on-primary-container leading-relaxed">{t('由于ERP系统版本不一，ERP与SCM实时对账率仅为60%。', 'ERP/SCM real-time reconciliation at 60% due to version mismatch.')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <span className="text-xs font-medium text-on-primary-container">{t('影响团队', 'Teams')}: IT, Finance, Procurement</span>
              <button className="ml-auto bg-white text-primary px-4 py-1.5 rounded-sm font-bold text-xs hover:bg-slate-100 transition-colors">{t('请求干预', 'Request Intervention')}</button>
            </div>
          </div>
        </section>

        {/* Column 3: Actions & AI */}
        <section className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-md shadow-sm overflow-hidden border border-outline-variant/10">
            <div className="bg-surface-container-high px-6 py-4 flex justify-between items-center">
              <h3 className="text-xs font-bold text-on-surface uppercase tracking-widest">{t('待办事项', 'Open Actions')}</h3>
              <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">4 {t('进行中', 'Active')}</span>
            </div>
            <div className="divide-y divide-surface-container-low">
              <div className="p-6 hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded border-2 border-outline-variant mt-0.5 group-hover:border-primary transition-colors"></div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface mb-1">{t('审核Q3物流合同', 'Review Q3 Contracts')}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase">{t('截止', 'Due')}: Tomorrow</span>
                      <span className="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Legal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded border-2 border-outline-variant mt-0.5 group-hover:border-primary transition-colors"></div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface mb-1">{t('技术评审', 'Tech Review')}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase">{t('截止', 'Due')}: May 12</span>
                      <span className="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">IT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-4 text-xs font-bold text-primary hover:bg-surface-container-low transition-colors text-center border-t border-surface-container-low flex items-center justify-center gap-2">
              <CheckSquare className="w-4 h-4" />
              {t('添加任务', 'Add Action')}
            </button>
          </div>

          <div className="bg-tertiary-container text-white p-6 rounded-md relative border border-on-tertiary-container/10 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-on-tertiary-container" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container">{t('AI 智能建议', 'Next-Best-Actions')}</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-on-tertiary-container font-bold text-xs mt-0.5">01</span>
                <p className="text-xs leading-relaxed">{t('检测到物流成本异常波动，建议立即触发比价。', 'Unusual cost fluctuation detected, trigger bid worklow.')}</p>
              </li>
              <li className="flex gap-3">
                <span className="text-on-tertiary-container font-bold text-xs mt-0.5">02</span>
                <p className="text-xs leading-relaxed">{t('建议下周安排跨部门协调会。', 'Recommend cross-dept alignment meeting next week.')}</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

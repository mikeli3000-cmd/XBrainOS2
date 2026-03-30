import React from 'react';
import { 
  CircleDollarSign, 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Filter, 
  MoreHorizontal,
  Download,
  Target,
  Zap,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const CapitalAllocation: React.FC = () => {
  const { t, language } = useLanguage();

  const allocations = [
    { 
      id: 1, 
      pillar: { cn: '数字转型升级', en: 'Digital Transformation' }, 
      budget: '$12.5M', 
      spent: '$8.2M', 
      variance: '+4.2%', 
      roi: '18.5%',
      status: 'on-track'
    },
    { 
      id: 2, 
      pillar: { cn: '全球供应链优化', en: 'Global Supply Optimization' }, 
      budget: '$8.0M', 
      spent: '$7.4M', 
      variance: '-2.1%', 
      roi: '12.2%',
      status: 'warning'
    },
    { 
      id: 3, 
      pillar: { cn: '市场扩张 - 东南亚', en: 'Market Expansion - SEA' }, 
      budget: '$5.5M', 
      spent: '$2.1M', 
      variance: '+0.5%', 
      roi: 'N/A',
      status: 'on-track'
    },
    { 
      id: 4, 
      pillar: { cn: '研发与创新', en: 'R&D & Innovation' }, 
      budget: '$4.2M', 
      spent: '$3.8M', 
      variance: '-5.4%', 
      roi: '22.1%',
      status: 'critical'
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('资本治理', 'Capital Governance')}</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">{t('资本分配', 'Capital Allocation')}</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant/30 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all">
            <Download className="w-4 h-4" /> {t('下载报告', 'Export Report')}
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-sm font-bold text-sm shadow-lg flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            {t('重新分配', 'Reallocate')}
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-md text-primary">
              <CircleDollarSign className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12% vs LY</span>
          </div>
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('总战略预算', 'Total Strategy Budget')}</p>
          <h3 className="text-3xl font-headline font-extrabold mt-1">$30.2M</h3>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-100 rounded-md text-amber-600">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-full">72% Utilized</span>
          </div>
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('已分配资本', 'Allocated Capital')}</p>
          <h3 className="text-3xl font-headline font-extrabold mt-1">$21.5M</h3>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-100 rounded-md text-emerald-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Target: 15%</span>
          </div>
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('平均 ROI', 'Average ROI')}</p>
          <h3 className="text-3xl font-headline font-extrabold mt-1">16.8%</h3>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-error-container/20 rounded-md text-error">
              <ArrowDownRight className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-error bg-error-container/10 px-2 py-0.5 rounded-full">Critical</span>
          </div>
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('预算偏差', 'Budget Variance')}</p>
          <h3 className="text-3xl font-headline font-extrabold mt-1">-$1.2M</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Allocation Table */}
        <div className="lg:col-span-8 bg-white rounded-md border border-outline-variant/10 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
            <h3 className="text-sm font-bold uppercase tracking-widest">{t('支柱分配详情', 'Pillar Allocation Details')}</h3>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-surface-container-low rounded-md transition-colors"><Filter className="w-4 h-4 text-outline" /></button>
              <button className="p-1.5 hover:bg-surface-container-low rounded-md transition-colors"><MoreHorizontal className="w-4 h-4 text-outline" /></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/10">
                  <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest">{t('战略支柱', 'Strategic Pillar')}</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest">{t('预算', 'Budget')}</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest">{t('已支出', 'Spent')}</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest">{t('ROI', 'ROI')}</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest text-right">{t('状态', 'Status')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {allocations.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'critical' ? 'bg-error' : 
                          item.status === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}></div>
                        <span className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">{item.pillar[language]}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold">{item.budget}</td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold">{item.spent}</span>
                        <div className="w-24 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.status === 'critical' ? 'bg-error' : 'bg-primary'}`} 
                            style={{ width: `${(parseFloat(item.spent.slice(1)) / parseFloat(item.budget.slice(1))) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold ${item.roi === 'N/A' ? 'text-outline' : 'text-emerald-600'}`}>
                        {item.roi}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        item.status === 'critical' ? 'bg-error-container text-error' :
                        item.status === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {item.status === 'critical' ? t('超支', 'Over') : 
                         item.status === 'warning' ? t('预警', 'Warning') : t('正常', 'On Track')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Investment Mix / Trends */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">{t('投资组合构成', 'Investment Mix')}</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>{t('增长型', 'Growth')}</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[45%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>{t('防御型', 'Defensive')}</span>
                  <span>30%</span>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[30%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>{t('探索型', 'Exploratory')}</span>
                  <span>25%</span>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[25%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Capital Insight */}
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-md space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-widest">{t('AI 资本洞察', 'AI Capital Insight')}</h4>
            </div>
            <p className="text-xs text-on-surface leading-relaxed italic">
              {t('“研发与创新”支柱的 ROI 表现优异（22.1%），但预算利用率已达 90%。建议从“全球供应链”支柱中重新分配 $500K 以支持 Q4 的研发冲刺。', '"R&D & Innovation" pillar ROI is exceptional (22.1%), but budget utilization is at 90%. Recommend reallocating $500K from "Global Supply Chain" to support Q4 R&D sprints.')}
            </p>
            <button className="w-full py-2 bg-primary text-white font-bold text-[10px] uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
              {t('执行建议', 'Execute Recommendation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

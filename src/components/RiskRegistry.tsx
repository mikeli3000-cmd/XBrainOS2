import React from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Filter, 
  MoreHorizontal,
  ChevronRight,
  ArrowRight,
  Zap,
  Activity,
  Shield,
  Brain
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const RiskRegistry: React.FC = () => {
  const { t, language } = useLanguage();

  const risks = [
    { 
      id: 1, 
      title: { cn: '地缘政治关税波动', en: 'Geopolitical Tariff Volatility' }, 
      category: { cn: '宏观环境', en: 'Macro' }, 
      impact: 'high', 
      probability: 'high', 
      status: 'mitigating',
      owner: 'CFO Office',
      mitigation: { cn: '多元化供应商网络，增加东南亚采购比例。', en: 'Diversify supplier network, increase SEA sourcing ratio.' }
    },
    { 
      id: 2, 
      title: { cn: '核心技术人才流失', en: 'Key Tech Talent Attrition' }, 
      category: { cn: '人力资源', en: 'HR' }, 
      impact: 'high', 
      probability: 'med', 
      status: 'active',
      owner: 'CHRO',
      mitigation: { cn: '启动核心人才留任计划，优化长期激励机制。', en: 'Launch key talent retention program, optimize long-term incentives.' }
    },
    { 
      id: 3, 
      title: { cn: '数据隐私合规风险 (GDPR)', en: 'Data Privacy Compliance (GDPR)' }, 
      category: { cn: '法律合规', en: 'Legal' }, 
      impact: 'med', 
      probability: 'low', 
      status: 'stable',
      owner: 'General Counsel',
      mitigation: { cn: '完成年度合规审计，更新数据处理协议。', en: 'Complete annual compliance audit, update data processing agreements.' }
    },
    { 
      id: 4, 
      title: { cn: '供应链物流中断', en: 'Supply Chain Logistics Disruption' }, 
      category: { cn: '运营', en: 'Operations' }, 
      impact: 'high', 
      probability: 'med', 
      status: 'critical',
      owner: 'COO Office',
      mitigation: { cn: '建立冗余物流节点，增加安全库存水平。', en: 'Establish redundant logistics nodes, increase safety stock levels.' }
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('风险治理', 'Risk Governance')}</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">{t('风险登记册', 'Risk Registry')}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
            <input 
              className="pl-10 pr-4 py-2 bg-white border border-outline-variant/20 shadow-sm rounded-md text-sm w-64 outline-none focus:ring-1 ring-primary" 
              placeholder={t('搜索风险...', 'Search risks...')}
              type="text" 
            />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-sm font-bold text-sm shadow-lg flex items-center gap-2">
            <Zap className="w-4 h-4" />
            {t('AI 风险扫描', 'AI Risk Scan')}
          </button>
        </div>
      </div>

      {/* Risk Matrix Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('高危风险', 'Critical Risks')}</span>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-3xl font-headline font-extrabold text-error">04</span>
            <TrendingUp className="text-error w-5 h-5 mb-1" />
          </div>
          <div className="mt-4 h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-error w-2/3"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('缓解中', 'In Mitigation')}</span>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-3xl font-headline font-extrabold text-primary">12</span>
            <Activity className="text-primary w-5 h-5 mb-1" />
          </div>
          <div className="mt-4 h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/2"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('已解决 (本月)', 'Resolved (Month)')}</span>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-3xl font-headline font-extrabold text-emerald-600">08</span>
            <ShieldCheck className="text-emerald-600 w-5 h-5 mb-1" />
          </div>
          <div className="mt-4 h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/4"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('风险敞口', 'Risk Exposure')}</span>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-3xl font-headline font-extrabold text-on-surface">$4.2M</span>
            <TrendingDown className="text-emerald-500 w-5 h-5 mb-1" />
          </div>
          <p className="text-[10px] text-on-surface-variant font-bold mt-2 uppercase tracking-tighter">较上周下降 12% | -12% vs LW</p>
        </div>
      </div>

      {/* Risk List Table */}
      <div className="bg-white rounded-md border border-outline-variant/10 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 bg-surface-container-low px-6 py-3 border-b border-outline-variant/10">
          <div className="col-span-4 text-[10px] font-bold text-outline uppercase tracking-widest">{t('风险描述', 'Risk Description')}</div>
          <div className="col-span-2 text-[10px] font-bold text-outline uppercase tracking-widest">{t('类别', 'Category')}</div>
          <div className="col-span-2 text-[10px] font-bold text-outline uppercase tracking-widest text-center">{t('影响/概率', 'Impact/Prob')}</div>
          <div className="col-span-2 text-[10px] font-bold text-outline uppercase tracking-widest">{t('负责人', 'Owner')}</div>
          <div className="col-span-2 text-[10px] font-bold text-outline uppercase tracking-widest text-right">{t('状态', 'Status')}</div>
        </div>
        <div className="divide-y divide-outline-variant/10">
          {risks.map((risk) => (
            <div key={risk.id} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-lowest transition-colors group cursor-pointer">
              <div className="col-span-4 pr-4">
                <h4 className="text-sm font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{risk.title[language]}</h4>
                <p className="text-xs text-on-surface-variant line-clamp-1">{risk.mitigation[language]}</p>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-bold text-secondary bg-surface-container-high px-2 py-1 rounded-sm uppercase tracking-tighter">
                  {risk.category[language]}
                </span>
              </div>
              <div className="col-span-2 flex justify-center gap-1">
                <div className={`w-3 h-3 rounded-full ${risk.impact === 'high' ? 'bg-error' : risk.impact === 'med' ? 'bg-amber-500' : 'bg-emerald-500'}`} title="Impact"></div>
                <div className={`w-3 h-3 rounded-full ${risk.probability === 'high' ? 'bg-error' : risk.probability === 'med' ? 'bg-amber-500' : 'bg-emerald-500'}`} title="Probability"></div>
              </div>
              <div className="col-span-2 text-xs font-bold text-on-surface">
                {risk.owner}
              </div>
              <div className="col-span-2 text-right">
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                  risk.status === 'critical' ? 'bg-error-container text-error' :
                  risk.status === 'mitigating' ? 'bg-primary-container text-primary' :
                  risk.status === 'active' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {risk.status === 'critical' ? t('紧急', 'Critical') : 
                   risk.status === 'mitigating' ? t('缓解中', 'Mitigating') : 
                   risk.status === 'active' ? t('活跃', 'Active') : t('稳定', 'Stable')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-primary/5 border border-primary/20 p-8 rounded-md flex flex-col md:flex-row gap-8 items-center">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shrink-0 shadow-xl">
          <Brain className="w-8 h-8" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-headline font-extrabold text-primary">{t('XBrain 风险预警', 'XBrain Risk Alert')}</h3>
          <p className="text-sm text-on-surface leading-relaxed">
            {t('检测到东南亚物流节点的潜在延迟风险。建议在下周一前签署越南备选仓库协议，以对冲雅加达港口可能的罢工影响。', 'Detected potential delay risks in SEA logistics nodes. Recommend signing the Vietnam alternative warehouse agreement by next Monday to hedge against possible strike impacts at Jakarta port.')}
          </p>
        </div>
        <button className="px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-lg hover:brightness-110 transition-all whitespace-nowrap">
          {t('生成对策', 'Generate Response')}
        </button>
      </div>
    </div>
  );
};

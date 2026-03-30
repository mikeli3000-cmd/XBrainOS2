import React from 'react';
import { PILLARS, RISKS } from '../constants';
import { 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Brain, 
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Circle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export const Dashboard: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Summary Tiles */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-md flex flex-col gap-1 shadow-sm border border-outline-variant/10">
          <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
            {t('战略支柱', 'Pillars')}
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-4xl font-headline font-bold text-primary">06</span>
            <span className="text-xs text-on-surface-variant font-medium">
              {t('项核心能力', 'Core Capabilities')}
            </span>
          </div>
          <div className="mt-4 h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="bg-primary h-full w-full"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md flex flex-col gap-1 shadow-sm border border-outline-variant/10">
          <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
            {t('健康状态', 'Health Status')}
          </span>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xl font-headline font-bold">4</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-xl font-headline font-bold">1</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <span className="text-xl font-headline font-bold">1</span>
            </div>
          </div>
          <span className="text-[10px] text-on-surface-variant mt-2 uppercase font-bold">
            {t('实时监测', 'System Monitoring')}
          </span>
        </div>

        <div className="bg-white p-6 rounded-md flex flex-col gap-1 shadow-sm border border-outline-variant/10">
          <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
            {t('待办行动', 'Open Actions')}
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-4xl font-headline font-bold text-primary">24</span>
            <span className="text-xs text-on-surface-variant font-medium">
              {t('项进行中', 'In Progress')}
            </span>
          </div>
          <span className="text-[10px] text-on-surface-variant mt-4 font-bold uppercase tracking-tight">
            {t('环比上周', 'WoW')} +12%
          </span>
        </div>

        <div className="bg-white p-6 rounded-md flex flex-col gap-1 shadow-sm border border-outline-variant/10">
          <span className="text-[10px] font-bold text-error uppercase tracking-wider">
            {t('逾期事项', 'Overdue')}
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-4xl font-headline font-bold text-error">03</span>
            <span className="text-xs text-on-error-container font-medium">
              {t('项急需跟进', 'Urgent')}
            </span>
          </div>
          <button className="mt-4 text-[10px] font-bold text-primary hover:underline flex items-center gap-1 uppercase tracking-widest transition-all">
            {t('立即处理', 'Action Now')} <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* Main Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Pillar Health */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
            <h2 className="text-xl font-headline font-extrabold tracking-tight">
              {t('战略支柱健康度', 'Strategy Pillar Health')}
            </h2>
            <button className="text-[10px] font-bold text-outline hover:text-primary transition-colors uppercase tracking-widest">
              {t('查看全图', 'View Full Map')}
            </button>
          </div>

          {PILLARS.map((pillar) => (
            <div key={pillar.id} className={`bg-white rounded-md overflow-hidden border border-outline-variant/20 border-l-4 shadow-sm ${
              pillar.status === 'normal' ? 'border-l-emerald-500' : 'border-l-amber-500'
            }`}>
              <div className="bg-surface-container-high px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-headline font-bold text-lg">{pillar.title[language]}</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
                    {t(`支柱 ${pillar.id.slice(1)}`, `Pillar ${pillar.id.slice(1)}`)} · {t('负责人', 'Owner')}: {pillar.owner}
                  </p>
                </div>
                <div className={`px-3 py-1 text-[10px] font-bold rounded-full border uppercase ${
                  pillar.status === 'normal' 
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                    : 'bg-amber-100 text-amber-800 border-amber-200'
                }`}>
                  {pillar.status === 'normal' ? t('进行中', 'Normal') : t('预警', 'Warning')}
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-4">
                    {t('核心目标', 'Strategic Goals')}
                  </span>
                  <div className="space-y-4">
                    {pillar.goals.map((goal, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{goal.label[language]}</span>
                          <span className="text-sm font-headline font-bold">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-surface-container-low h-1 rounded-full">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${pillar.status === 'normal' ? 'bg-primary' : 'bg-amber-500'}`} 
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-4">
                    {t('顶级行动', 'Top Actions')}
                  </span>
                  <ul className="space-y-3">
                    {pillar.actions.map((action, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {action.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                        {action.status === 'pending' && <Clock className="w-4 h-4 text-amber-500" />}
                        {action.status === 'upcoming' && <Circle className="w-4 h-4 text-outline" />}
                        {action.status === 'critical' && <AlertCircle className="w-4 h-4 text-rose-500" />}
                        <span className={`text-sm ${action.status === 'critical' ? 'font-bold text-rose-600' : ''}`}>
                          {action.label[language]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Side Panels */}
        <div className="lg:col-span-4 space-y-8">
          {/* AI Insight Card */}
          <div className="relative overflow-hidden p-6 rounded-md bg-tertiary-container text-white shadow-lg border border-primary/20">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Brain className="w-16 h-16" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
              {t('每周 AI 洞察', 'Weekly AI Insight')}
            </span>
            <h4 className="text-xl font-headline font-extrabold mt-4 leading-tight">
              {t('风险预警: 供应链延迟正在外溢', 'Supply Chain Risk Overflow')}
            </h4>
            <p className="text-sm mt-4 leading-relaxed opacity-80">
              {t('Q4 交付可能延迟 12.5%。建议启动备选方案。', 'Logistics data suggests a 12.5% delay in Q4 delivery.')}
            </p>
            <div className="mt-6 p-3 bg-white/10 rounded-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider block mb-2">
                {t('优化建议', 'Optimization Recommendation')}
              </span>
              <p className="text-xs italic">
                {t('"通过自动化采购模块，可提升响应速度 30%"', '"Automation can boost response by 30%."')}
              </p>
            </div>
            <button className="mt-6 w-full py-2 bg-on-tertiary-container text-tertiary-container text-[10px] font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
              {t('生成详细报告', 'Generate Detailed Report')}
            </button>
          </div>

          {/* Strategic Risk Panel */}
          <div className="bg-white p-6 rounded-md shadow-sm border border-outline-variant/20">
            <div className="flex justify-between items-center mb-6 border-b border-outline-variant/10 pb-2">
              <h3 className="font-headline font-extrabold text-sm uppercase">
                {t('战略风险监测', 'Strategic Risks')}
              </h3>
              <MoreHorizontal className="w-5 h-5 text-outline cursor-pointer" />
            </div>
            <div className="space-y-6">
              {RISKS.map((risk, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`w-1 rounded-full ${
                    risk.level === 'high' ? 'bg-rose-500' : 
                    risk.level === 'med' ? 'bg-amber-500' : 'bg-slate-300'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-bold">{risk.label[language]}</span>
                      <span className={`text-[9px] font-bold uppercase border px-1 rounded ${
                        risk.level === 'high' ? 'text-rose-500 border-rose-200' : 
                        risk.level === 'med' ? 'text-amber-500 border-amber-200' : 'text-outline border-slate-200'
                      }`}>
                        {risk.level === 'high' ? t('高风险', 'High') : 
                         risk.level === 'med' ? t('中风险', 'Med') : t('稳定', 'Stable')}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1">{risk.desc[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Asset */}
          <div className="rounded-md overflow-hidden aspect-[4/3] relative group shadow-sm border border-outline-variant/20">
            <img 
              alt="Strategy Map Visual" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              src="https://picsum.photos/seed/map/800/600" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-80">Interactive Strategy Map</span>
              <h4 className="text-white font-headline font-bold">
                {t('交互式全域战略地图', 'Interactive Strategic Map')}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

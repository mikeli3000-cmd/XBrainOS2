import React from 'react';
import { 
  FileText, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Download,
  Share2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const WeeklyBrief: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-5xl mx-auto w-full space-y-10">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('2024年第12周', 'Week 12, 2024')}</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">{t('董事会每周简报', 'Board Weekly Brief')}</h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant/30 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all">
            <Download className="w-4 h-4" /> {t('导出 PDF', 'Export PDF')}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg hover:brightness-110 transition-all">
            <Share2 className="w-4 h-4" /> {t('分享简报', 'Share Brief')}
          </button>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="bg-white p-8 rounded-md shadow-sm border border-outline-variant/10 space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="w-5 h-5" />
          <h3 className="text-sm font-bold uppercase tracking-widest">{t('执行摘要', 'Executive Summary')}</h3>
        </div>
        <p className="text-lg font-medium leading-relaxed text-on-surface">
          {t('本周战略执行整体保持稳健。数字化转型支柱取得重大突破，东南亚物流迁移进度超前。然而，受地缘政治波动影响，Q4 采购成本面临潜在压力，需密切关注。', 'Strategic execution remains robust overall this week. The Digital Transformation pillar achieved major breakthroughs, with SEA logistics migration ahead of schedule. However, geopolitical fluctuations pose potential pressure on Q4 procurement costs, requiring close monitoring.')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-outline-variant/10">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('整体健康度', 'Overall Health')}</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xl font-bold font-headline">{t('良好', 'Good')}</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('关键进展', 'Key Progress')}</span>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-xl font-bold font-headline">+12.5%</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('待决决策', 'Pending Decisions')}</span>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span className="text-xl font-bold font-headline">{t('02 项', '02 Items')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Updates */}
      <section className="space-y-6">
        <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{t('支柱更新', 'Pillar Updates')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow-sm border border-outline-variant/10 border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-sm">{t('数字化转型', 'Digital Transformation')}</h4>
              <span className="text-[10px] font-bold text-emerald-600 uppercase">{t('正常', 'On Track')}</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                <span>{t('云原生架构迁移完成 85%，预计提前两周交付。', 'Cloud-native architecture migration 85% complete, expected 2 weeks early.')}</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                <span>{t('数据中台二期开发启动，重点关注实时分析能力。', 'Data platform Phase II development started, focusing on real-time analysis.')}</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm border border-outline-variant/10 border-l-4 border-l-amber-500">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-sm">{t('全球供应链', 'Global Supply Chain')}</h4>
              <span className="text-[10px] font-bold text-amber-600 uppercase">{t('预警', 'At Risk')}</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                <span>{t('受关税政策预期变动影响，原材料采购成本上升 5%。', 'Raw material procurement costs up 5% due to expected tariff policy changes.')}</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                <span>{t('东南亚物流节点选址完成，进入合同谈判阶段。', 'SEA logistics node site selection complete, entering contract negotiations.')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Critical Actions */}
      <section className="bg-surface-container-low p-8 rounded-md border border-outline-variant/10">
        <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">{t('关键行动项', 'Critical Actions')}</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-error-container text-error flex items-center justify-center">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">{t('批准 Q4 供应链应急预算', 'Approve Q4 Supply Chain Contingency Budget')}</p>
                <p className="text-[10px] text-outline font-bold uppercase mt-0.5">{t('负责人: CFO Office · 截止: 48小时内', 'Owner: CFO Office · Due: Within 48h')}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-outline group-hover:text-primary transition-all" />
          </div>
          <div className="bg-white p-4 rounded flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">{t('签署越南物流中心租赁协议', 'Sign Vietnam Logistics Center Lease Agreement')}</p>
                <p className="text-[10px] text-outline font-bold uppercase mt-0.5">{t('负责人: COO Office · 截止: 下周五', 'Owner: COO Office · Due: Next Friday')}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-outline group-hover:text-primary transition-all" />
          </div>
        </div>
      </section>
    </div>
  );
};

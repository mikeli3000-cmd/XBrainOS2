import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Sparkles, 
  Send, 
  Paperclip, 
  Mic, 
  Image as ImageIcon,
  ChevronDown,
  X
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const SubmitUpdate: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-4xl mx-auto w-full space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold font-headline tracking-tight">{t('提交每周动态', 'Submit Weekly Update')}</h2>
          <p className="text-sm text-on-surface-variant mt-1">{t('第 12 周：2024年3月24日 - 3月30日', 'Week 12: Mar 24 - Mar 30')}</p>
        </div>
        <button onClick={onCancel} className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
          <X className="w-6 h-6 text-outline" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Status Selector */}
          <section className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('当前状态', 'Current Status')}</label>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-3 p-4 rounded-md border-2 border-emerald-500 bg-emerald-50 transition-all">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                <span className="text-xs font-bold text-emerald-800 uppercase">{t('平稳进行', 'On Track')}</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-4 rounded-md border-2 border-outline-variant hover:border-amber-500 hover:bg-amber-50 transition-all">
                <Clock className="w-8 h-8 text-amber-500" />
                <span className="text-xs font-bold text-on-surface-variant uppercase">{t('有风险', 'At Risk')}</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-4 rounded-md border-2 border-outline-variant hover:border-rose-500 hover:bg-rose-50 transition-all">
                <AlertCircle className="w-8 h-8 text-rose-500" />
                <span className="text-xs font-bold text-on-surface-variant uppercase">{t('紧急', 'Critical')}</span>
              </button>
            </div>
          </section>

          {/* Text Areas */}
          <section className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('本周进展', 'What was achieved this week?')}</label>
              <textarea 
                className="w-full h-32 p-4 bg-white border border-outline-variant/30 rounded-md text-sm focus:ring-2 ring-primary outline-none resize-none"
                placeholder={t('描述关键里程碑和成果...', 'Describe key milestones and results...')}
              ></textarea>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('下周计划', 'Plans for next week?')}</label>
              <textarea 
                className="w-full h-32 p-4 bg-white border border-outline-variant/30 rounded-md text-sm focus:ring-2 ring-primary outline-none resize-none"
                placeholder={t('列出首要任务...', 'List top priorities...')}
              ></textarea>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('阻碍与风险', 'Blockers & Risks')}</label>
              <textarea 
                className="w-full h-24 p-4 bg-white border border-outline-variant/30 rounded-md text-sm focus:ring-2 ring-primary outline-none resize-none"
                placeholder={t('是否需要管理层干预？', 'Any intervention needed?')}
              ></textarea>
            </div>
          </section>

          {/* Attachments */}
          <section className="flex items-center gap-4 pt-4">
            <button className="flex items-center gap-2 text-xs font-bold text-outline hover:text-primary transition-colors">
              <Paperclip className="w-4 h-4" />
              {t('添加附件', 'Attach Files')}
            </button>
            <button className="flex items-center gap-2 text-xs font-bold text-outline hover:text-primary transition-colors">
              <ImageIcon className="w-4 h-4" />
              {t('图片', 'Images')}
            </button>
            <button className="flex items-center gap-2 text-xs font-bold text-outline hover:text-primary transition-colors">
              <Mic className="w-4 h-4" />
              {t('语音记录', 'Voice Note')}
            </button>
          </section>
        </div>

        {/* Sidebar / AI Assistance */}
        <div className="space-y-6">
          <div className="bg-tertiary-container text-white p-6 rounded-md shadow-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-on-tertiary-container" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container">{t('AI 辅助编写', 'AI Assistant')}</h3>
            </div>
            <p className="text-xs leading-relaxed opacity-80 mb-6">
              {t('基于您本周的行动项，我已为您准备了草稿。是否需要一键填充？', "I've drafted an update based on your actions. Want to auto-fill?")}
            </p>
            <button className="w-full py-2.5 bg-on-tertiary-container text-tertiary-container text-[10px] font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
              {t('使用 AI 草稿', 'Use AI Draft')}
            </button>
          </div>

          <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">{t('关联优先级', 'Linked Priority')}</h3>
            <div className="p-3 bg-surface-container-low rounded flex items-center justify-between group cursor-pointer">
              <span className="text-xs font-bold truncate pr-2">{t('下一代供应链韧性计划', 'Next-Gen Supply Chain Resilience')}</span>
              <ChevronDown className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
            </div>
          </div>

          <div className="pt-8">
            <button className="w-full py-4 bg-primary text-white rounded-sm font-bold text-sm shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Send className="w-4 h-4" />
              {t('正式发布更新', 'Publish Update')}
            </button>
            <p className="text-[10px] text-center text-outline font-bold uppercase tracking-widest mt-4">
              {t('发布后将同步至董事会简报', 'Syncs to Board Brief')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

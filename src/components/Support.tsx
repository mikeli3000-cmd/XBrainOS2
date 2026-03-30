import React from 'react';
import { HelpCircle, MessageSquare, Book, FileText, ExternalLink, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Support: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t('如何更新 OKR 进度？', 'How to update OKR progress?'), a: t('点击右下角的“+”按钮，选择“提交更新”，然后填写相关信息。', 'Click the "+" button at the bottom right, select "Submit Update", and fill in the details.') },
    { q: t('如何导出董事会报告？', 'How to export board reports?'), a: t('进入“董事报告”页面，点击右上角的“导出 PDF”按钮。', 'Go to the "Board Reports" page and click the "Export PDF" button in the top right.') },
    { q: t('如何添加新的团队成员？', 'How to add new team members?'), a: t('进入“设置” -> “团队管理”，点击“添加成员”按钮。', 'Go to "Settings" -> "Team Management" and click the "Add Member" button.') },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto w-full space-y-10">
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('帮助中心', 'Help Center')}</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">{t('支持与资源', 'Support & Resources')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Book className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-widest">{t('知识库', 'Knowledge Base')}</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">{t('浏览详细的文档和教程，了解如何使用战略账本。', 'Browse detailed documentation and tutorials on how to use the Executive Ledger.')}</p>
          <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
            {t('开始阅读', 'Start Reading')} <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-4">
          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-widest">{t('实时聊天', 'Live Chat')}</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">{t('与我们的支持团队实时沟通，解决您遇到的任何问题。', 'Chat with our support team in real-time to resolve any issues you encounter.')}</p>
          <button className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline">
            {t('发起对话', 'Start Chat')} <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-4">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-widest">{t('API 文档', 'API Docs')}</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">{t('了解如何将战略账本与您的其他企业系统集成。', 'Learn how to integrate the Executive Ledger with your other enterprise systems.')}</p>
          <button className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:underline">
            {t('查看文档', 'View Docs')} <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      <section className="space-y-6">
        <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{t('常见问题', 'Frequently Asked Questions')}</h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm">
              <h4 className="text-sm font-bold mb-2">{faq.q}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-surface-container-low p-8 rounded-md border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-headline font-extrabold">{t('还需要帮助吗？', 'Still need help?')}</h3>
          <p className="text-sm text-on-surface-variant">{t('我们的执行支持团队全天候为您服务。', 'Our executive support team is available 24/7.')}</p>
        </div>
        <button className="px-8 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-lg hover:brightness-110 transition-all">
          {t('联系支持', 'Contact Support')}
        </button>
      </div>
    </div>
  );
};

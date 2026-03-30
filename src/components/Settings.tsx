import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  ShieldCheck, 
  Cpu, 
  Languages, 
  Share2, 
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Key,
  Smartphone,
  Mail,
  Globe,
  Moon,
  Sun,
  Slack,
  Database,
  Webhook,
  MessageSquare,
  Users,
  UserPlus
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Settings: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('ai');

  const sections = [
    { id: 'account', label: t('账户设置', 'Account'), icon: User },
    { id: 'notifications', label: t('通知偏好', 'Notifications'), icon: Bell },
    { id: 'security', label: t('安全与权限', 'Security'), icon: ShieldCheck },
    { id: 'team', label: t('团队管理', 'Team'), icon: Users },
    { id: 'ai', label: t('AI 引擎配置', 'AI Engine'), icon: Cpu },
    { id: 'display', label: t('显示与语言', 'Display'), icon: Languages },
    { id: 'integrations', label: t('集成与 API', 'Integrations'), icon: Share2 },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <section className="space-y-6">
            <div className="border-b border-outline-variant/20 pb-4">
              <h3 className="text-xl font-headline font-extrabold">{t('账户设置', 'Account Settings')}</h3>
              <p className="text-sm text-on-surface-variant mt-1">{t('管理您的个人资料和账户安全。', 'Manage your profile and account security.')}</p>
            </div>
            <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary/20">
                  <img src="https://picsum.photos/seed/exec/200/200" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-sm shadow-md">{t('更换头像', 'Change Avatar')}</button>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">{t('支持 JPG, PNG. 最大 2MB', 'Supports JPG, PNG. Max 2MB')}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('姓名', 'Full Name')}</label>
                  <input className="w-full px-4 py-2 bg-surface-container-low border-none rounded-sm text-sm outline-none focus:ring-1 ring-primary" defaultValue="Marcus Chen" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('职位', 'Title')}</label>
                  <input className="w-full px-4 py-2 bg-surface-container-low border-none rounded-sm text-sm outline-none focus:ring-1 ring-primary" defaultValue="Chief Strategy Officer" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('电子邮箱', 'Email Address')}</label>
                  <input className="w-full px-4 py-2 bg-surface-container-low border-none rounded-sm text-sm outline-none focus:ring-1 ring-primary" defaultValue="m.chen@executiveledger.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-outline uppercase tracking-widest">{t('时区', 'Timezone')}</label>
                  <select className="w-full px-4 py-2 bg-surface-container-low border-none rounded-sm text-sm outline-none focus:ring-1 ring-primary appearance-none">
                    <option>GMT+8 (Beijing, Singapore)</option>
                    <option>GMT+0 (London)</option>
                    <option>GMT-5 (New York)</option>
                  </select>
                </div>
              </div>
              <div className="pt-4">
                <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-sm shadow-lg">{t('保存更改', 'Save Changes')}</button>
              </div>
            </div>
          </section>
        );
      case 'notifications':
        return (
          <section className="space-y-6">
            <div className="border-b border-outline-variant/20 pb-4">
              <h3 className="text-xl font-headline font-extrabold">{t('通知偏好', 'Notification Preferences')}</h3>
              <p className="text-sm text-on-surface-variant mt-1">{t('选择您希望接收通知的方式和频率。', 'Choose how and when you want to be notified.')}</p>
            </div>
            <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-8">
              <div className="space-y-4">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {t('邮件通知', 'Email Notifications')}
                </h4>
                <div className="space-y-3 pl-6">
                  {[
                    { id: 'n1', label: t('每周董事会简报生成', 'Weekly Board Brief generation'), checked: true },
                    { id: 'n2', label: t('关键风险预警', 'Critical risk alerts'), checked: true },
                    { id: 'n3', label: t('行动项逾期提醒', 'Overdue action item reminders'), checked: false },
                  ].map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <span className="text-sm text-on-surface">{item.label}</span>
                      <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${item.checked ? 'bg-primary' : 'bg-surface-container-highest'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${item.checked ? 'right-1' : 'left-1'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  {t('移动端推送', 'Mobile Push')}
                </h4>
                <div className="space-y-3 pl-6">
                  {[
                    { id: 'p1', label: t('实时会议摘要', 'Real-time meeting summaries'), checked: true },
                    { id: 'p2', label: t('提及我的评论', 'Comments mentioning me'), checked: true },
                  ].map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <span className="text-sm text-on-surface">{item.label}</span>
                      <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${item.checked ? 'bg-primary' : 'bg-surface-container-highest'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${item.checked ? 'right-1' : 'left-1'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case 'security':
        return (
          <section className="space-y-6">
            <div className="border-b border-outline-variant/20 pb-4">
              <h3 className="text-xl font-headline font-extrabold">{t('安全与权限', 'Security & Permissions')}</h3>
              <p className="text-sm text-on-surface-variant mt-1">{t('配置多因素认证和访问控制。', 'Configure multi-factor authentication and access control.')}</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">{t('双重身份验证 (2FA)', 'Two-Factor Authentication')}</h4>
                    <p className="text-xs text-on-surface-variant">{t('通过身份验证器应用增加额外的安全层。', 'Add an extra layer of security via authenticator app.')}</p>
                  </div>
                  <button className="px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-sm shadow-md">{t('已启用', 'Enabled')}</button>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">{t('API 访问令牌', 'API Access Tokens')}</h4>
                    <p className="text-xs text-on-surface-variant">{t('管理用于外部集成的安全令牌。', 'Manage secure tokens for external integrations.')}</p>
                  </div>
                  <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                    {t('管理令牌', 'Manage Tokens')} <Key className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-6">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  {t('数据隐私与安全', 'Data Privacy & Security')}
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-surface-container-low rounded-md flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold">{t('端到端加密已启用', 'E2E Encryption Active')}</h5>
                      <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                        {t('所有战略数据均经过 AES-256 加密。只有授权的高管终端可解密。', 'All data is AES-256 encrypted. Only authorized terminals can decrypt.')}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase">{t('数据留存期', 'Data Retention')}</span>
                    <span className="text-xs font-bold">{t('7 年', '7 Years')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-on-surface-variant uppercase">{t('审计日志', 'Audit Logs')}</span>
                    <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                      {t('查看日志', 'View Logs')} <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'team':
        return (
          <section className="space-y-6">
            <div className="border-b border-outline-variant/20 pb-4 flex justify-between items-end">
              <div>
                <h3 className="text-xl font-headline font-extrabold">{t('团队管理', 'Team Management')}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{t('管理您的团队成员及其访问权限。', 'Manage your team members and their access.')}</p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-sm text-xs font-bold flex items-center gap-2 shadow-md">
                <UserPlus className="w-4 h-4" />
                {t('添加成员', 'Add Member')}
              </button>
            </div>
            <div className="bg-white rounded-md border border-outline-variant/10 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/10">
                    <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest">{t('成员', 'Member')}</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest">{t('角色', 'Role')}</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest">{t('状态', 'Status')}</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-outline uppercase tracking-widest text-right">{t('操作', 'Actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    { name: 'Marcus Chen', email: 'm.chen@exec.com', role: 'Admin', status: 'Active', avatar: 'https://picsum.photos/seed/m/100/100' },
                    { name: 'Sarah Jenkins', email: 's.jenkins@exec.com', role: 'Editor', status: 'Active', avatar: 'https://picsum.photos/seed/s/100/100' },
                    { name: 'David Wu', email: 'd.wu@exec.com', role: 'Viewer', status: 'Pending', avatar: 'https://picsum.photos/seed/d/100/100' },
                  ].map((user, i) => (
                    <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={user.avatar} className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                          <div>
                            <p className="text-xs font-bold">{user.name}</p>
                            <p className="text-[10px] text-on-surface-variant">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold">{user.role}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs font-bold text-primary hover:underline">{t('编辑', 'Edit')}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      case 'ai':
        return (
          <section className="space-y-6">
            <div className="border-b border-outline-variant/20 pb-4">
              <h3 className="text-xl font-headline font-extrabold">{t('AI 引擎配置', 'AI Engine Configuration')}</h3>
              <p className="text-sm text-on-surface-variant mt-1">{t('管理 XBrain AI 的分析深度与自动化权限。', 'Manage AI analysis depth and permissions.')}</p>
            </div>

            {/* AI Model Selection */}
            <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold">{t('分析模型', 'Analysis Model')}</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">{t('当前使用：Gemini 1.5 Pro (超低延迟)', 'Current: Gemini 1.5 Pro (Ultra-Low Latency)')}</p>
                </div>
                <button className="text-xs font-bold text-primary border border-outline-variant/30 px-4 py-1.5 rounded-sm hover:bg-surface-container-low transition-all">{t('切换模型', 'Switch')}</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold">{t('预测性风险分析', 'Predictive Risk Analysis')}</span>
                    <p className="text-xs text-on-surface-variant">{t('自动扫描支柱并预测潜在瓶颈。', 'Auto-scan pillars for bottlenecks.')}</p>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold">{t('自动生成简报', 'Auto-generate Briefs')}</span>
                    <p className="text-xs text-on-surface-variant">{t('每周五 17:00 自动生成董事会简报。', 'Auto-generate briefs every Friday.')}</p>
                  </div>
                  <div className="w-12 h-6 bg-surface-container-highest rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="pt-4">
              <div className="bg-error-container/20 border border-error/20 p-6 rounded-md space-y-4">
                <h4 className="text-sm font-bold text-error flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {t('危险区域', 'Danger Zone')}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-on-error-container font-medium">{t('重置所有战略支柱与 OKR 数据。此操作不可逆。', 'Reset all strategy data. Irreversible.')}</p>
                  <button className="px-6 py-2 bg-error text-white text-xs font-bold rounded-sm shadow-lg hover:brightness-110 transition-all">{t('重置系统', 'Reset System')}</button>
                </div>
              </div>
            </div>
          </section>
        );
      case 'display':
        return (
          <section className="space-y-6">
            <div className="border-b border-outline-variant/20 pb-4">
              <h3 className="text-xl font-headline font-extrabold">{t('显示与语言', 'Display & Language')}</h3>
              <p className="text-sm text-on-surface-variant mt-1">{t('自定义界面的外观和语言设置。', 'Customize the appearance and language of the interface.')}</p>
            </div>
            <div className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm space-y-8">
              <div className="space-y-4">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  {t('系统语言', 'System Language')}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setLanguage('cn')}
                    className={`p-4 border rounded-md flex items-center justify-between transition-all ${language === 'cn' ? 'border-primary bg-primary/5' : 'border-outline-variant/20 hover:bg-surface-container-low'}`}
                  >
                    <span className="text-sm font-bold">简体中文</span>
                    {language === 'cn' && <CheckCircle2 className="w-4 h-4 text-primary" />}
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`p-4 border rounded-md flex items-center justify-between transition-all ${language === 'en' ? 'border-primary bg-primary/5' : 'border-outline-variant/20 hover:bg-surface-container-low'}`}
                  >
                    <span className="text-sm font-bold">English (US)</span>
                    {language === 'en' && <CheckCircle2 className="w-4 h-4 text-primary" />}
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Moon className="w-4 h-4 text-primary" />
                  {t('外观主题', 'Appearance Theme')}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'light', label: t('浅色', 'Light'), icon: Sun },
                    { id: 'dark', label: t('深色', 'Dark'), icon: Moon },
                    { id: 'system', label: t('跟随系统', 'System'), icon: Cpu },
                  ].map(theme => (
                    <button key={theme.id} className={`p-4 border border-outline-variant/20 rounded-md flex flex-col items-center gap-2 hover:bg-surface-container-low transition-all ${theme.id === 'light' ? 'border-primary bg-primary/5' : ''}`}>
                      <theme.icon className="w-5 h-5" />
                      <span className="text-xs font-bold">{theme.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case 'integrations':
        return (
          <section className="space-y-6">
            <div className="border-b border-outline-variant/20 pb-4">
              <h3 className="text-xl font-headline font-extrabold">{t('集成与 API', 'Integrations & API')}</h3>
              <p className="text-sm text-on-surface-variant mt-1">{t('连接您的企业工具并管理 Webhooks。', 'Connect your enterprise tools and manage webhooks.')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'slack', name: 'Slack', desc: t('将简报和预警发送至频道。', 'Send briefs and alerts to channels.'), icon: Slack, connected: true },
                { id: 'jira', name: 'Jira', desc: t('将行动项同步为 Jira 任务。', 'Sync action items as Jira tasks.'), icon: Database, connected: false },
                { id: 'teams', name: 'Microsoft Teams', desc: t('在 Teams 中进行实时协作。', 'Real-time collaboration in Teams.'), icon: MessageSquare, connected: false },
                { id: 'webhooks', name: 'Webhooks', desc: t('自定义事件触发器。', 'Custom event triggers.'), icon: Webhook, connected: true },
              ].map(item => (
                <div key={item.id} className="bg-white p-6 rounded-md border border-outline-variant/10 shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container-low rounded-md">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold">{item.name}</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className={`text-[10px] font-bold uppercase ${item.connected ? 'text-emerald-600' : 'text-outline'}`}>
                      {item.connected ? t('已连接', 'Connected') : t('未连接', 'Disconnected')}
                    </span>
                    <button className={`text-xs font-bold px-4 py-1.5 rounded-sm transition-all ${item.connected ? 'text-error border border-error/20 hover:bg-error/5' : 'bg-primary text-white shadow-md'}`}>
                      {item.connected ? t('断开', 'Disconnect') : t('连接', 'Connect')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto w-full space-y-10">
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('系统配置', 'System Configuration')}</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-primary font-headline">{t('设置', 'Settings')}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Sub-navigation */}
        <nav className="lg:col-span-3 space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button 
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-all group ${
                  isActive ? 'bg-primary text-white font-bold shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{section.label}</span>
                </div>
                {!isActive && <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />}
              </button>
            );
          })}
        </nav>

        {/* Right: Content Area */}
        <div className="lg:col-span-9">
          {renderSectionContent()}
        </div>
      </div>
    </div>
  );
};


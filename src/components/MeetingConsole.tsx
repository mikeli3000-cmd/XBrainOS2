import React from 'react';
import { 
  Mic, 
  Video, 
  ScreenShare, 
  PhoneOff, 
  MoreHorizontal, 
  MessageSquare, 
  Users, 
  Plus, 
  CheckCircle2, 
  Clock,
  ChevronRight,
  Gavel,
  Download,
  Link as LinkIcon
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const MeetingConsole: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-slate-950 text-white overflow-hidden">
      {/* Top Bar */}
      <div className="px-6 py-4 flex justify-between items-center border-b border-white/10 bg-slate-900/50">
        <div className="flex items-center gap-4">
          <div className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">LIVE | {t('实时', 'Live')}</div>
          <h2 className="text-lg font-headline font-bold">{t('Q3 战略对齐周会', 'Q3 Strategy Alignment')}</h2>
          <span className="text-xs text-white/40 font-medium">00:42:12</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Users className="w-5 h-5" /></button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><MessageSquare className="w-5 h-5" /></button>
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-1.5 rounded-sm font-bold text-sm flex items-center gap-2 transition-all">
            <PhoneOff className="w-4 h-4" />
            {t('结束会议', 'End')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Video/Visuals */}
        <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
            <div className="relative rounded-lg overflow-hidden bg-slate-800 border border-white/5 shadow-2xl">
              <img src="https://picsum.photos/seed/user1/800/600" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold">Sarah Jenkins (CEO)</div>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
            <div className="relative rounded-lg overflow-hidden bg-slate-800 border border-white/5 shadow-2xl">
              <img src="https://picsum.photos/seed/user2/800/600" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold">Marcus Chen (CTO)</div>
            </div>
          </div>
          
          {/* Shared Content / Presentation Area */}
          <div className="h-1/3 bg-slate-900 rounded-lg border border-white/10 p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t('当前共享', 'Now Sharing')}: Q3 Roadmap.pdf</span>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors"><Download className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors"><LinkIcon className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex-1 bg-slate-800/50 rounded flex items-center justify-center border border-dashed border-white/10">
              <div className="text-center space-y-2">
                <ScreenShare className="w-8 h-8 text-white/20 mx-auto" />
                <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{t('点击开始共享屏幕', 'Click to Share Screen')}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 py-2">
            <button className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all border border-white/10"><Mic className="w-5 h-5" /></button>
            <button className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all border border-white/10"><Video className="w-5 h-5" /></button>
            <button className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all border border-white/10"><ScreenShare className="w-5 h-5" /></button>
            <button className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all border border-white/10"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Right: Meeting Intelligence Sidebar */}
        <div className="w-96 bg-slate-900 border-l border-white/10 flex flex-col">
          <div className="flex border-b border-white/10">
            <button className="flex-1 py-4 text-[10px] font-bold uppercase tracking-widest border-b-2 border-white">{t('会议纪要', 'Notes')}</button>
            <button className="flex-1 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{t('议程', 'Agenda')}</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
            {/* Live Transcription / Notes */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t('实时速记', 'Live Transcription')}</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-rose-400">Sarah J. 14:42</span>
                  <p className="text-sm text-white/80 leading-relaxed">{t('“我们需要在下周五之前完成雅加达试点的风险评估。”', '“We need to complete the Jakarta risk assessment by next Friday.”')}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-blue-400">Marcus C. 14:43</span>
                  <p className="text-sm text-white/80 leading-relaxed">{t('“IT 团队已经准备好了，但需要法务部的合同确认。”', '“IT team is ready, but we need contract sign-off from Legal.”')}</p>
                </div>
              </div>
            </section>

            {/* Action Items Log */}
            <section className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t('行动项记录', 'Action Log')}</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded border border-white/10 flex items-start gap-3 group cursor-pointer hover:bg-white/10 transition-all">
                  <div className="w-4 h-4 rounded border border-white/30 mt-0.5 group-hover:border-white transition-colors"></div>
                  <div className="flex-1">
                    <p className="text-xs font-bold">{t('完成雅加达风险评估', 'Complete Jakarta Risk Assessment')}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[9px] font-bold text-white/40 uppercase">{t('负责人', 'Owner')}: David Wu</span>
                      <span className="text-[9px] font-bold text-rose-400 uppercase">{t('紧急', 'Critical')}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10 flex items-start gap-3 group cursor-pointer hover:bg-white/10 transition-all">
                  <div className="w-4 h-4 rounded border border-white/30 mt-0.5 group-hover:border-white transition-colors"></div>
                  <div className="flex-1">
                    <p className="text-xs font-bold">{t('同步法务合同模板', 'Sync Legal Templates')}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[9px] font-bold text-white/40 uppercase">{t('负责人', 'Owner')}: Legal Team</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full py-2 border border-dashed border-white/20 rounded text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:border-white/40 transition-all flex items-center justify-center gap-2">
                <Plus className="w-3 h-3" />
                {t('手动添加', 'Add Action')}
              </button>
            </section>

            {/* Decisions Made */}
            <section className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t('会议决议', 'Decisions')}</h3>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded flex gap-3">
                <Gavel className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-emerald-400">{t('批准 Q4 预算追加', 'Approve Q4 Budget Increase')}</p>
                  <p className="text-[10px] text-white/60 mt-1">{t('追加 15% 预算用于东南亚物流节点建设。', 'Add 15% budget for SEA logistics nodes.')}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Input */}
          <div className="p-4 border-t border-white/10 bg-slate-900">
            <div className="relative">
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-xs outline-none focus:ring-1 ring-white/30" 
                placeholder={t('输入纪要或指令...', 'Type note or command')}
                type="text" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

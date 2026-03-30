import { 
  LayoutDashboard, 
  Target, 
  AlertTriangle, 
  CircleDollarSign, 
  FileText, 
  Plus, 
  HelpCircle, 
  History,
  Search,
  Languages,
  Bell,
  Settings as SettingsIcon,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowRight,
  Brain,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  User,
  LogOut,
  Calendar,
  CheckSquare,
  MessageSquare,
  Rocket,
  Gavel,
  Mic,
  Video,
  ScreenShare,
  PhoneOff,
  Download,
  Link as LinkIcon,
  ArrowLeft,
  Sparkles,
  Eye,
  AlarmClock,
  ShieldCheck,
  Users,
  Cpu,
  Share2,
  ExternalLink,
  ListTodo
} from "lucide-react";

export const NAV_ITEMS = [
  { id: 'dashboard', label: { cn: '仪表盘', en: 'Dashboard' }, icon: LayoutDashboard },
  { id: 'okr', label: { cn: '目标追踪', en: 'OKR Tracker' }, icon: Target },
  { id: 'risk', label: { cn: '风险登记', en: 'Risk Registry' }, icon: AlertTriangle },
  { id: 'capital', label: { cn: '资本分配', en: 'Capital Allocation' }, icon: CircleDollarSign },
  { id: 'reports', label: { cn: '董事报告', en: 'Board Reports' }, icon: FileText },
  { id: 'actions', label: { cn: '行动项', en: 'Action Items' }, icon: ListTodo },
  { id: 'meetings', label: { cn: '会议', en: 'Meetings' }, icon: Calendar },
  { id: 'settings', label: { cn: '设置', en: 'Settings' }, icon: SettingsIcon },
];

export const PILLARS = [
  {
    id: 'p1',
    title: { cn: '数字转型升级', en: 'Digital Transformation' },
    owner: 'CTO Office',
    status: 'normal',
    goals: [
      { label: { cn: '云原生架构迁移', en: 'Cloud Migration' }, progress: 85 },
      { label: { cn: '数据中台建设', en: 'Data Platform' }, progress: 42 },
    ],
    actions: [
      { label: { cn: '完成架构评审', en: 'Q3 Review Completed' }, status: 'completed' },
      { label: { cn: '供应商终审', en: 'Vendor Audit (Delayed)' }, status: 'pending' },
      { label: { cn: '启动二阶段', en: 'Start Phase 2' }, status: 'upcoming' },
    ]
  },
  {
    id: 'p2',
    title: { cn: '全球供应链优化', en: 'Global Supply Optimization' },
    owner: 'COO Office',
    status: 'warning',
    goals: [
      { label: { cn: '采购成本降低', en: '15% Cost Reduction' }, progress: 8 },
      { label: { cn: '多源分销', en: 'Sourcing Diversification' }, progress: 22 },
    ],
    actions: [
      { label: { cn: '物流节点调查', en: 'Logistics Bottleneck Audit' }, status: 'critical' },
      { label: { cn: '签订区域商', en: 'Sign Regional Carriers' }, status: 'upcoming' },
    ]
  }
];

export const RISKS = [
  { label: { cn: '地缘政治', en: 'Geopolitical' }, level: 'high', desc: { cn: '关税政策变动影响毛利', en: 'Tariff shifts impact margins.' } },
  { label: { cn: '人才流失', en: 'Talent Churn' }, level: 'med', desc: { cn: '核心技术流失高于基准', en: 'Key tech attrition above baseline.' } },
  { label: { cn: '合规监管', en: 'Regulatory' }, level: 'stable', desc: { cn: '符合主要市场要求', en: 'Compliant with major markets.' } },
];

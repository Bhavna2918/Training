import { Users, MessageSquare, Bot, BarChart3 } from 'lucide-react';
import type { StatType } from '../types/hero';

export const heroStatsData: StatType[] = [
  {
    icon: <Users size={24} className="text-[#5B52F5]" />,
    iconBg: 'bg-[#5B52F5]/10',
    value: '500+',
    label: 'Happy Customers'
  },
  {
    icon: <MessageSquare size={24} className="text-emerald-500" />,
    iconBg: 'bg-emerald-500/10',
    value: '2M+',
    label: 'Messages Sent'
  },
  {
    icon: <Bot size={24} className="text-amber-500" />,
    iconBg: 'bg-amber-500/10',
    value: '100+',
    label: 'Automation Flows'
  },
  {
    icon: <BarChart3 size={24} className="text-blue-500" />,
    iconBg: 'bg-blue-500/10',
    value: '99.9%',
    label: 'Uptime'
  }
];

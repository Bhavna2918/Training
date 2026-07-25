import { Zap, MessageCircle, BarChart2, ShieldCheck } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-[#5B52F5]" />,
      iconBg: 'bg-[#5B52F5]/10',
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and save valuable time.'
    },
    {
      icon: <MessageCircle size={24} className="text-emerald-500" />,
      iconBg: 'bg-emerald-500/10',
      title: 'WhatsApp Integration',
      description: 'Seamless WhatsApp Business API integration.'
    },
    {
      icon: <BarChart2 size={24} className="text-blue-500" />,
      iconBg: 'bg-blue-500/10',
      title: 'Real-time Analytics',
      description: 'Track performance and improve with live insights.'
    },
    {
      icon: <ShieldCheck size={24} className="text-rose-500" />,
      iconBg: 'bg-rose-500/10',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee.'
    }
  ];

  return (
    <section className="pt-20 pb-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#5B52F5] uppercase mb-4">
            WHY CHOOSE TRYLITY
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#111827] tracking-tight">
            Everything You Need To Succeed
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

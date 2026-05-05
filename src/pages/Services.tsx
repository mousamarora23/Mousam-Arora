import { PageTransition } from '../components/PageTransition';
import { Target, Search, Share2, PenTool, Layout, Calendar, MessagesSquare, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive, data-backed strategic planning designed to achieve specific business objectives and maximize ROI.',
      icon: <Target size={24} />
    },
    {
      title: 'Meta Ads Management',
      description: 'End-to-end campaign creation, optimization, and scaling across Facebook and Instagram networks.',
      icon: <Layout size={24} />
    },
    {
      title: 'SEO Optimization',
      description: 'Advanced on-page and off-page optimization strategies to secure pre-eminent search engine positioning.',
      icon: <Search size={24} />
    },
    {
      title: 'Social Media Growth',
      description: 'Organic audience expansion, engagement strategies, and community management that builds loyal followers.',
      icon: <Share2 size={24} />
    },
    {
      title: 'Branding & Visual Identity',
      description: 'Crafting cohesive, premium visual languages that communicate brand prestige and market authority.',
      icon: <PenTool size={24} />
    },
    {
      title: 'Graphic Design Services',
      description: 'High-end collateral design including marketing materials, social assets, and corporate presentations.',
      icon: <PenTool size={24} />
    },
    {
      title: 'Creative Content Planning',
      description: 'Strategic content calendar creation aligning narrative arcs with marketing goals and seasonal trends.',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Event Coordination Support',
      description: 'Meticulous logistical planning, vendor management, and on-site execution for flawless corporate events.',
      icon: <Calendar size={24} />
    },
    {
      title: 'Client Communication',
      description: 'Professional liaison services ensuring seamless project handling, reporting, and stakeholder satisfaction.',
      icon: <MessagesSquare size={24} />
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-gold mb-6">Expertise & Offerings</h2>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">Premium Services</h1>
            <div className="w-16 h-px bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative p-10 bg-brand-charcoal border border-gray-800 hover:border-brand-gold transition-all duration-500 rounded-lg overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-8 w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-white group-hover:text-brand-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-semibold">
                  <span>Inquire</span>
                  <span className="w-4 h-px bg-brand-gold"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

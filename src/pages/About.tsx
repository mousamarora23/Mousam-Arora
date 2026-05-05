import { PageTransition } from '../components/PageTransition';
import { CheckCircle2, TrendingUp, Palette, Calendar } from 'lucide-react';

export default function About() {
  const expertise = [
    {
      title: 'Digital Marketing',
      description: 'Strategic planning, SEO optimization, and data-driven performance marketing to accelerate brand growth.',
      icon: <TrendingUp className="text-brand-gold mb-4" size={32} />
    },
    {
      title: 'Graphic Design',
      description: 'Crafting premium visual identities and compelling graphics that communicate brand value flawlessly.',
      icon: <Palette className="text-brand-gold mb-4" size={32} />
    },
    {
      title: 'Social Media Management',
      description: 'Curating engaging content, managing platforms, and building loyal communities across social channels.',
      icon: <CheckCircle2 className="text-brand-gold mb-4" size={32} />
    },
    {
      title: 'Event Coordination',
      description: 'Meticulous planning and execution of events, ensuring seamless experiences and flawless operations.',
      icon: <Calendar className="text-brand-gold mb-4" size={32} />
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-gold mb-4">About Me</h2>
              <h1 className="text-5xl md:text-6xl font-serif font-light leading-snug">
                The Architect <br />
                <span className="italic text-gray-400">behind the brand.</span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                I am a multidisciplinary professional bridging the gap between strategic marketing and compelling design, delivering results that matter.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            {/* Main Content Area */}
            <div className="lg:col-span-7 space-y-10">
              <div className="prose prose-invert prose-lg max-w-none font-light text-gray-300 leading-relaxed">
                <p>
                  As the <strong>Founder & CEO of Digital With Mousam</strong>, I have cultivated a deep understanding of what makes a brand successful in the modern digital landscape. My approach is holistic—I do not just look at isolated metrics; I orchestrate campaigns where every visual, every word, and every strategy works in synergy.
                </p>
                <p>
                  My professional journey has spanned dynamic roles, from operational management at Epay System and educational coordination at RKCL to taking the entrepreneurial leap. This diverse background equips me with a unique problem-solving perspective that balances creativity with operational excellence.
                </p>
                <p>
                  I pride myself on my meticulous attention to detail, strong client communication skills, and an unwavering commitment to achieving excellence. Whether I am architecting a high-conversion Meta Ads campaign or designing a luxury brand identity, my focus remains constant: elevating the brand to its highest potential.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-xl font-serif mb-8 text-white">Core Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {expertise.map((item, index) => (
                    <div key={index} className="bg-brand-charcoal border border-gray-800 p-8 rounded-2xl hover:border-brand-gold/50 transition-colors duration-300">
                      {item.icon}
                      <h4 className="text-lg font-serif mb-3 text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400 font-light leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / Aesthetic Image */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="aspect-[3/4] bg-brand-charcoal rounded-3xl relative overflow-hidden border border-gray-800 p-4">
                  <div className="w-full h-full bg-brand-black rounded-2xl relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-gold/10"></div>
                    <p className="font-serif italic text-gray-500 text-xl tracking-wide">Mousam Arora</p>
                  </div>
                  
                  {/* Decorative badge */}
                  <div className="absolute top-12 -right-4 bg-brand-gold text-black px-6 py-3 font-semibold uppercase tracking-widest text-xs transform rotate-90 origin-top-left shadow-lg">
                    Est. Digital With Mousam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

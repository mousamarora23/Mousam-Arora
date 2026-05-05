import { PageTransition } from '../components/PageTransition';
import { ArrowRight, MapPin, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 relative overflow-hidden flex items-center justify-center">
        {/* Luxury Glowing Orb Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-gold/5 blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center py-20 relative z-10 w-full">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Digital Marketing Expert & Founder
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] font-light">
                Elevating Brands <br /> Through <span className="text-brand-gold italic">Strategic</span> <br /> Excellence.
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide pt-2">
                MOUSAM ARORA
              </h2>
            </div>
            
            <p className="text-gray-400 font-light leading-relaxed max-w-lg text-lg">
              A premium digital marketing professional, graphic designer, and founder of <strong>Digital With Mousam</strong>. I craft high-end visual identities and compelling marketing strategies that drive results.
            </p>
            
            <div className="flex items-center gap-3 text-gray-500 font-light">
              <MapPin size={18} className="text-brand-gold" />
              <span>Mumbai / Thane, Maharashtra</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-brand-gold text-black uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/experience" 
                className="px-8 py-4 border border-gray-700 hover:border-brand-gold text-white uppercase tracking-widest text-sm font-medium hover:text-brand-gold transition-all duration-300 flex items-center justify-center"
              >
                Explore Experience
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-t-[10rem] overflow-hidden border border-gray-800 p-2 mask-oval">
              {/* Elegant profile image placeholder container */}
              <div className="w-full h-full rounded-t-[10rem] bg-brand-charcoal overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-charcoal to-brand-gold/10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  {/* Portrait Placeholder Icon/Text or subtle pattern */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full border border-gray-700 mx-auto mb-4 flex items-center justify-center">
                       <span className="font-serif text-3xl text-gray-500">M</span>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em]">Portrait Placement</p>
                  </div>
                </div>
                {/* Decorative lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-brand-gold to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-brand-gold to-transparent"></div>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-10 -left-10 lg:-left-20 bg-brand-charcoal border border-gray-800 p-6 rounded-2xl flex items-center gap-4 shadow-2xl z-20">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <MousePointerClick size={24} />
              </div>
              <div>
                <p className="text-white font-serif text-lg">Digital With Mousam</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

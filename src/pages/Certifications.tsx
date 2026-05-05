import { PageTransition } from '../components/PageTransition';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'RKCL Certification Course',
      issuer: 'Rajasthan Knowledge Corporation Ltd.',
      description: 'Comprehensive IT literacy course covering fundamentals of information technology and digital tools.'
    },
    {
      title: 'Diploma in Digital Marketing',
      issuer: 'Keerthi Institute',
      description: 'Advanced diploma covering SEO, SEM, SMM, email marketing, and holistic digital strategy.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6">
              <Award size={28} className="text-brand-gold" />
            </div>
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-gold mb-4">Credentials</h2>
            <h1 className="text-5xl font-serif font-light text-white">Certifications</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="relative bg-brand-charcoal border border-gray-800 p-10 rounded-2xl overflow-hidden group hover:border-brand-gold/50 transition-all duration-500"
              >
                {/* Abstract graphic */}
                <div className="absolute -right-10 -top-10 w-40 h-40 border border-gray-800 rounded-full group-hover:border-brand-gold/10 transition-colors opacity-20"></div>
                <div className="absolute -right-4 -top-4 w-20 h-20 border border-gray-800 rounded-full group-hover:border-brand-gold/20 transition-colors opacity-20"></div>

                <div className="relative z-10">
                  <div className="text-xs font-semibold tracking-widest text-brand-gold uppercase mb-6 flex items-center gap-2">
                    <span className="w-4 h-px bg-brand-gold"></span>
                    Verified Credential
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">{cert.title}</h3>
                  <p className="text-gray-300 font-medium tracking-wide mb-6">{cert.issuer}</p>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

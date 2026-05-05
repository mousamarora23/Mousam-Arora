import { PageTransition } from '../components/PageTransition';

export default function Education() {
  const education = [
    {
      degree: 'Diploma in Digital Marketing',
      institution: 'Keerthi Institute, Thane West',
      year: 'Professional Diploma'
    },
    {
      degree: 'Bachelor of Business Administration (BBA)',
      institution: 'Suresh Gyan Vihar University',
      year: 'Distance Learning'
    },
    {
      degree: 'RKCL Certification Course',
      institution: 'Rajasthan Knowledge Corporation Ltd.',
      year: 'Certification'
    },
    {
      degree: 'Higher Secondary (12th Commerce)',
      institution: 'Rajasthan Board',
      year: 'High School'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-gold mb-4">Academic Background</h2>
            <h1 className="text-5xl font-serif font-light text-white">Education</h1>
          </div>

          <div className="grid gap-6">
            {education.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 bg-brand-charcoal border border-gray-800 rounded-xl hover:border-brand-gold/40 transition-colors duration-300"
              >
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">{item.degree}</h3>
                  <p className="text-gray-400 font-light tracking-wide">{item.institution}</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 border border-gray-700 bg-brand-black rounded-full text-xs font-semibold tracking-widest text-brand-gold uppercase self-start md:self-auto group-hover:border-brand-gold transition-colors">
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

import { PageTransition } from '../components/PageTransition';

export default function Experience() {
  const experiences = [
    {
      role: 'Founder & CEO',
      company: 'Digital With Mousam',
      duration: 'Present',
      responsibilities: [
        'Established and currently directing a full-service digital marketing entity.',
        'Spearheading comprehensive brand strategies for a diverse portfolio of clients.',
        'Executing high-conversion Meta ad campaigns and advanced SEO initiatives.',
        'Managing end-to-end client relationships, ensuring premium service delivery.'
      ]
    },
    {
      role: 'Social Media & Event Manager',
      company: 'Freelance',
      duration: 'Prior to Founding Agency',
      responsibilities: [
        'Cultivated online brand presence through strategic content creation and scheduling.',
        'Directed end-to-end event coordination, managing logistics, vendors, and on-site operations.',
        'Developed tailored social media growth strategies resulting in significant audience expansion.',
        'Designed premium marketing collateral and visual assets for client campaigns.'
      ]
    },
    {
      role: 'Education Department Coordinator',
      company: 'RKCL',
      duration: 'Previous Role',
      responsibilities: [
        'Orchestrated departmental operations, ensuring seamless administrative workflows.',
        'Facilitated communication between stakeholders, staff, and management boards.',
        'Streamlined reporting processes and maintained extensive operational documentation.',
        'Coordinated departmental events, seminars, and training sessions.'
      ]
    },
    {
      role: 'System Operation Intern',
      company: 'Epay System',
      duration: 'Early Career',
      responsibilities: [
        'Gained foundational experience in technical system operations and troubleshooting.',
        'Assisted in data management, reporting, and operational efficiency analysis.',
        'Collaborated with cross-functional teams to ensure smooth daily operations.',
        'Maintained meticulous records and supported senior IT staff in project execution.'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-20 text-center">
             <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-gold mb-4">Professional Journey</h2>
            <h1 className="text-5xl font-serif font-light">Experience Timeline</h1>
          </div>

          <div className="relative border-l border-gray-800 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-16 relative pl-10 md:pl-16">
                {/* Timeline Node */}
                <div className="absolute w-4 h-4 rounded-full bg-brand-black border-2 border-brand-gold -left-[9px] top-2 z-10"></div>
                <div className="absolute w-8 h-px bg-gray-800 left-0 top-4"></div>

                <div className="bg-brand-charcoal p-8 md:p-10 border border-gray-800 rounded-xl hover:border-brand-gold/30 transition-colors duration-500 group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">{exp.role}</h3>
                      <p className="text-brand-gold tracking-wider text-sm uppercase font-semibold">{exp.company}</p>
                    </div>
                    <div className="px-4 py-2 border border-gray-700 rounded-full text-xs tracking-wider text-gray-400 uppercase font-medium bg-brand-black w-fit">
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-400 font-light text-sm md:text-base leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

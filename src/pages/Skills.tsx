import { PageTransition } from '../components/PageTransition';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Digital Marketing',
      skills: ['Digital Marketing', 'Meta Ads', 'SEO', 'Performance Marketing', 'Social Media Management']
    },
    {
      title: 'Design & Creative',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDRAW', 'Logo Design', 'Branding', 'Typography']
    },
    {
      title: 'Operations & Management',
      skills: ['Content Creation', 'Detailed Reporting', 'Strategic Scheduling', 'Project Coordination', 'Client Handling & Communication']
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20 pb-10 border-b border-gray-800">
            <div>
              <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-gold mb-4">Core Competencies</h2>
              <h1 className="text-6xl font-serif font-light">Professional<br /><span className="italic text-gray-400">Skills</span></h1>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full border border-gray-800 flex items-center justify-center relative">
                <div className="absolute inset-2 border border-brand-gold/20 rounded-full"></div>
                <span className="font-serif italic text-gray-500">M.A.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-8">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-4xl font-serif font-light text-gray-800 tracking-tighter">0{index + 1}</span>
                  <h3 className="text-xl font-serif text-white tracking-wide">{category.title}</h3>
                </div>
                
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group cursor-default">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-light tracking-wide uppercase text-sm group-hover:text-brand-gold transition-colors">{skill}</span>
                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full group-hover:bg-brand-gold transition-colors"></span>
                      </div>
                      <div className="w-full h-px bg-gray-800 group-hover:bg-brand-gold/30 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-brand-gold w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

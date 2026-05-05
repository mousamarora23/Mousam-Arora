import { PageTransition } from '../components/PageTransition';
import { Mail, Phone, ArrowUpRight, Send, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info Header */}
            <div>
              <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-gold mb-6">Let's Connect</h2>
              <h1 className="text-6xl md:text-7xl font-serif font-light mb-8 leading-tight">
                Start a <br /><span className="italic text-gray-400">Project.</span>
              </h1>
              <p className="text-gray-400 font-light leading-relaxed text-lg max-w-md mb-16">
                Whether you're looking for a comprehensive digital marketing strategy or a brand identity overhaul, I am here to bring your vision to life with precision and luxury.
              </p>

              <div className="space-y-8">
                <a href="mailto:digitalwithmousam@gmail.com" className="group flex items-center gap-6 p-6 border border-gray-800 bg-brand-charcoal rounded-xl hover:border-brand-gold transition-colors">
                  <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-black group-hover:border-transparent transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Email</h3>
                    <p className="text-white font-serif text-lg">digitalwithmousam@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+917014139929" className="group flex items-center gap-6 p-6 border border-gray-800 bg-brand-charcoal rounded-xl hover:border-brand-gold transition-colors">
                  <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-black group-hover:border-transparent transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Phone</h3>
                    <p className="text-white font-serif text-lg">+91 7014139929</p>
                  </div>
                </a>

                <a href="https://digitalwithmousam.co.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 border border-gray-800 bg-brand-charcoal rounded-xl hover:border-brand-gold transition-colors">
                  <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-black group-hover:border-transparent transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Website</h3>
                    <p className="text-white font-serif text-lg">digitalwithmousam.co.in</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="https://in.linkedin.com/in/mousam-arora-03b4392b1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 bg-brand-charcoal flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/digitalwithmousam/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 bg-brand-charcoal flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://x.com/digitalmousam?s=11" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 bg-brand-charcoal flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-charcoal p-10 md:p-14 border border-gray-800 rounded-2xl relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px]"></div>
              
              <h3 className="text-2xl font-serif text-white mb-8">Send an Inquiry</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Full Name</label>
                  <input type="text" id="name" className="w-full bg-brand-black border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="e.g. Jane Doe" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Email Address</label>
                  <input type="email" id="email" className="w-full bg-brand-black border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Subject</label>
                  <input type="text" id="subject" className="w-full bg-brand-black border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="Project Inquiry" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-brand-black border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors font-light resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 bg-brand-gold text-black rounded-lg font-semibold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 mt-4">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

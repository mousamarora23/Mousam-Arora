import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, ArrowUpRight, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        <div className="lg:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-widest uppercase text-white flex items-center gap-2 mb-6">
            <span>Mousam</span>
            <span className="text-brand-gold">Arora</span>
          </Link>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            A premium digital marketing professional & founder of Digital With Mousam, dedicated to elevating brands.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg tracking-wider mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['About', 'Services', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-brand-gold transition-colors font-light">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg tracking-wider mb-6">Services</h4>
          <ul className="space-y-4">
            {['Digital Marketing', 'Meta Ads', 'Social Media', 'Graphic Design'].map((item) => (
              <li key={item} className="text-gray-400 font-light flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg tracking-wider mb-6">Connect</h4>
          <div className="space-y-4">
            <a href="mailto:digitalwithmousam@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors font-light">
              <Mail size={18} className="text-brand-gold" />
              <span>digitalwithmousam@gmail.com</span>
            </a>
            <a href="tel:+917014139929" className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors font-light">
              <Phone size={18} className="text-brand-gold" />
              <span>+91 7014139929</span>
            </a>
            <div className="flex gap-4 mt-6">
              <a href="https://in.linkedin.com/in/mousam-arora-03b4392b1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/digitalwithmousam/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/digitalmousam?s=11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://digitalwithmousam.co.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 font-light text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Mousam Arora. All rights reserved.
        </p>
        <p className="text-gray-500 font-light text-sm">
          Founder of <span className="text-gray-300">Digital With Mousam</span>
        </p>
      </div>
    </footer>
  );
}

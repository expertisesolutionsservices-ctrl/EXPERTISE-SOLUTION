import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

// Custom Brand Logo Component
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradStroke" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0" stopColor="#3b82f6"/>
        <stop offset="1" stopColor="#22c55e"/>
      </linearGradient>
      <linearGradient id="gradBg" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0" stopColor="#0f172a"/>
        <stop offset="1" stopColor="#1e293b"/>
      </linearGradient>
      <linearGradient id="gradE" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0" stopColor="#3b82f6"/>
        <stop offset="1" stopColor="#2563eb"/>
      </linearGradient>
      <linearGradient id="gradSwoosh" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0" stopColor="#4ade80"/>
        <stop offset="1" stopColor="#16a34a"/>
      </linearGradient>
    </defs>
    
    {/* Circle Container */}
    <circle cx="50" cy="50" r="46" stroke="url(#gradStroke)" strokeWidth="3" fill="url(#gradBg)" />
    
    {/* The E shape */}
    <path 
      d="M32 30 H 75 L 72 45 H 48 V 50 H 68 L 65 65 H 48 V 72 H 80" 
      stroke="url(#gradE)" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    {/* The Swoosh */}
    <path 
      d="M20 78 Q 50 95 90 40" 
      stroke="url(#gradSwoosh)" 
      strokeWidth="6" 
      strokeLinecap="round" 
    />
    
    {/* Stars */}
    <path d="M82 22 L 84 26 L 89 28 L 84 30 L 82 34 L 80 30 L 75 28 L 80 26 Z" fill="#fbbf24" />
    <path d="M70 18 L 71 20 L 73 21 L 71 22 L 70 24 L 69 22 L 67 21 L 69 20 Z" fill="#fbbf24" opacity="0.8" />
  </svg>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Vendor Registration', path: '/vendor' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 relative transition-transform transform group-hover:scale-105">
                <Logo className="w-full h-full drop-shadow-lg" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'} transition-colors`}>
                Expertise Solutions
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    scrolled 
                      ? (isActive(link.path) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600') 
                      : (isActive(link.path) ? 'text-white' : 'text-slate-200 hover:text-white')
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => handleNavClick('/contact')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  scrolled 
                    ? 'bg-slate-900 text-white hover:bg-slate-800' 
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-base font-semibold px-4 py-3 rounded-lg ${
                    isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => handleNavClick('/contact')}
                className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold mx-4 mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Column */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 text-white mb-6">
                <div className="w-12 h-12">
                  <Logo className="w-full h-full" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Expertise Solutions</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
                We empower global enterprises with high-precision AI training data, native-quality localization, and accessible media services.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/expertisesolutions-official" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:business@expertisesol.com" 
                  className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/" onClick={() => handleNavClick('/')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Home</Link></li>
                  <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> About Us</Link></li>
                  <li><Link to="/contact" onClick={() => handleNavClick('/contact')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Contact</Link></li>
                  <li><Link to="/privacy-policy" onClick={() => handleNavClick('/privacy-policy')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Privacy Policy</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h3>
                <ul className="space-y-4 text-sm">
                  <li><Link to="/services" onClick={() => handleNavClick('/services')} className="hover:text-blue-400 transition-colors">AI Training Data</Link></li>
                  <li><Link to="/services" onClick={() => handleNavClick('/services')} className="hover:text-blue-400 transition-colors">Video Annotation</Link></li>
                  <li><Link to="/services" onClick={() => handleNavClick('/services')} className="hover:text-blue-400 transition-colors">Localization (230+)</Link></li>
                  <li><Link to="/services" onClick={() => handleNavClick('/services')} className="hover:text-blue-400 transition-colors">Media Services</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Get in Touch</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Hitech City, Hyderabad<br />Telangana – 500081</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="mailto:business@expertisesol.com" className="text-blue-500 hover:text-white transition-colors">
                      <Mail size={18} className="shrink-0" />
                    </a>
                    <a href="mailto:business@expertisesol.com" className="hover:text-white transition-colors">business@expertisesol.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2026 Expertise Solutions. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span> 
                ISO 9001:2015
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-400">
                 <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                 GDPR Compliant
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
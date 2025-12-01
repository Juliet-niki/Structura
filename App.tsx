import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import PropertyVerification from './components/PropertyVerification';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { NAV_ITEMS } from './constants';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      
      {/* Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
               S
             </div>
             <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
               Structura
             </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-primary-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${isScrolled ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 md:hidden flex flex-col gap-4">
             {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 bg-primary-600 text-white rounded-lg font-bold"
            >
              Get a Quote
            </a>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <PropertyVerification />
        <About />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
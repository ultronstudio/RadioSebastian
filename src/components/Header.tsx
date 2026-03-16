import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RADIO_CONFIG } from '../constants';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Vysielanie', 'Playlist', 'O nás', 'Kontakt'];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-brand-bg/80 backdrop-blur-xl py-4' 
        : 'py-8'
    } px-6 md:px-12`}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a href="/" className="group flex items-center gap-4" aria-label="Rádio Sebastián Domov">
            <img 
              src={RADIO_CONFIG.logo} 
              alt="Rádio Sebastián Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12" aria-label="Hlavná navigácia">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item === 'O nás' ? 'o-nas' : item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-brand-accent transition-colors relative group"
              aria-label={`Prejsť na sekciu ${item}`}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:block"
          >
            <a
              href={RADIO_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-brand-bg transition-all duration-300"
            >
              Instagram
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-brand-accent transition-colors"
            aria-label={isMenuOpen ? "Zatvoriť menu" : "Otvoriť menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg/95 backdrop-blur-xl border-b border-white/5 px-6 py-12 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item === 'O nás' ? 'o-nas' : item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-bold tracking-tighter hover:text-brand-accent transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href={RADIO_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 rounded-full bg-brand-accent text-brand-bg text-[12px] font-mono uppercase tracking-widest font-bold"
              >
                Sledujte nás na Instagrame
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

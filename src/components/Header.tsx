import React from 'react';
import { motion } from 'motion/react';
import { RADIO_CONFIG } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <a href="/" className="group flex flex-col">
            <span className="text-2xl font-display font-bold tracking-tighter leading-none group-hover:text-brand-accent transition-colors">
              RÁDIO<br />SEBASTIÁN
            </span>
            <span className="text-[10px] font-mono tracking-[0.3em] opacity-40 uppercase mt-1">Digital Broadcast</span>
          </a>
        </motion.div>

        <nav className="hidden md:flex items-center gap-12 pointer-events-auto">
          {['Vysielanie', 'Playlist', 'O nás', 'Kontakt'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-brand-accent transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
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
      </div>
    </header>
  );
};

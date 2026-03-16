import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { RADIO_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className="pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none">
              BUĎME V<br />
              <span className="text-brand-accent">KONTAKTE.</span>
            </h2>
            <p className="text-xl text-white/40 max-w-md">
              Máte otázky, pripomienky alebo chcete s nami spolupracovať? Sme tu pre vás.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a 
              href={`mailto:${RADIO_CONFIG.email}`}
              className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all"
            >
              <Mail className="text-brand-accent mb-6" size={32} />
              <h3 className="text-lg font-display font-bold mb-2">Napíšte nám</h3>
              <p className="text-sm text-white/40 mb-4">{RADIO_CONFIG.email}</p>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Poslať správu <ArrowRight size={12} />
              </div>
            </a>

            <a 
              href={RADIO_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all"
            >
              <Instagram className="text-brand-accent mb-6" size={32} />
              <h3 className="text-lg font-display font-bold mb-2">Sledujte nás</h3>
              <p className="text-sm text-white/40 mb-4">@radiosebastian_sk</p>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Zobraziť profil <ArrowRight size={12} />
              </div>
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-display font-bold tracking-tighter">RÁDIO SEBASTIÁN</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mt-1">© 2026 Všetky práva vyhradené</span>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href={RADIO_CONFIG.credit}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono uppercase tracking-widest text-white/20 hover:text-white transition-colors flex items-center gap-2"
            >
              Web vytvoril {RADIO_CONFIG.creditName} <ExternalLink size={12} />
            </a>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">
              Slovensko, EU
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

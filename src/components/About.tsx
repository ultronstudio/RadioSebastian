import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_TEXT, FEATURED_CONTENT } from '../constants';
import { PlayCircle, Podcast, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="o-nás" className="py-24 px-6 md:px-12 bg-white/2 text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Story */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <span className="text-[12px] font-mono uppercase tracking-[0.4em] text-brand-accent font-bold">Identita</span>
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              HUDBA JE NAŠA<br />
              <span className="text-stroke">DNA.</span>
            </h2>
          </div>
          
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed whitespace-pre-line">
              {ABOUT_TEXT}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <span className="text-4xl font-display font-bold text-brand-accent">24/7</span>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Nonstop vysielanie</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl font-display font-bold text-brand-accent">100%</span>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Digitálna kvalita</p>
            </div>
          </div>
        </div>

        {/* Right Column: Featured */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <span className="text-[12px] font-mono uppercase tracking-[0.4em] text-white/40">Odporúčaný obsah</span>
            
            <div className="space-y-6">
              {FEATURED_CONTENT.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="block p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-brand-accent/10 text-brand-accent">
                      {item.type === 'video' ? <PlayCircle size={24} /> : <Podcast size={24} />}
                    </div>
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-brand-accent transition-colors" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {item.date && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{item.date}</span>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-dashed border-white/10 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
              <Radio size={24} />
            </div>
            <p className="text-sm text-white/40 font-mono uppercase tracking-widest">
              Sme súčasťou slovenskej<br />hudobnej scény
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Radio } from 'lucide-react';

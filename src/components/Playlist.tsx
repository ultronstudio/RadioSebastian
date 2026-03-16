import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, Music } from 'lucide-react';
import { PLAYLIST_DATA } from '../constants';

export const Playlist: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = PLAYLIST_DATA.filter(
    track => 
      track.artist.toLowerCase().includes(search.toLowerCase()) ||
      track.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="playlist" className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <span className="text-[12px] font-mono uppercase tracking-[0.4em] text-brand-accent font-bold">V rotácii</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none">
            PLAY<span className="text-stroke">LIST</span>
          </h2>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <input
            type="text"
            placeholder="Hľadať skladby..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
        {filtered.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-brand-accent/30 transition-colors"
          >
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-mono text-white/20 group-hover:text-brand-accent transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="space-y-1">
                <h3 className="text-xl font-display font-medium group-hover:text-brand-accent transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-white/40 uppercase tracking-widest font-mono">
                  {track.artist}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Music size={16} className="text-brand-accent/20 group-hover:text-brand-accent transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-white/20 font-mono uppercase tracking-widest">
          Nenašli sa žiadne skladby
        </div>
      )}
    </section>
  );
};

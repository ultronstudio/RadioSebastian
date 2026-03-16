import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';
import { RADIO_CONFIG } from '../constants';

interface PlayerProps {
  metadata: { artist?: string; title?: string };
}

export const Player: React.FC<PlayerProps> = ({ metadata }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [audio] = useState(new Audio(RADIO_CONFIG.streamUrl));

  useEffect(() => {
    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted, audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="relative group">
      {/* Visualizer Background */}
      <div className="absolute -inset-4 bg-brand-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative player-glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Play Button Circle */}
        <button
          onClick={togglePlay}
          className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white text-brand-bg hover:scale-105 transition-transform duration-300 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        >
          {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} className="ml-2" fill="currentColor" />}
          
          {/* Equalizer Animation */}
          {isPlaying && (
            <div className="absolute -bottom-2 flex gap-1 items-end h-8">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [8, 24, 12, 28, 8] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-brand-accent rounded-full"
                />
              ))}
            </div>
          )}
        </button>

        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <AnimatePresence mode="wait">
              <motion.h2
                key={metadata.title || 'Rádio Sebastián'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight"
              >
                {metadata.title || 'Rádio Sebastián'}
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={metadata.artist || 'Hráme tie najväčšie hity'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg md:text-xl text-white/40 font-light"
              >
                {metadata.artist || 'Hráme tie najväčšie hity'}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center md:justify-start pt-2">
            <div className="flex items-center gap-4 group/vol w-full max-w-[240px]">
              <button onClick={toggleMute} className="text-white/20 hover:text-brand-accent transition-colors shrink-0">
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <div className="relative flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-brand-accent"
                  initial={false}
                  animate={{ width: `${volume * 100}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />
              </div>
              <span className="text-[10px] font-mono text-white/20 w-10 text-right">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Player } from './components/Player';
import { Playlist } from './components/Playlist';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { RADIO_CONFIG } from './constants';
import { RadioMetadata } from './types';

export default function App() {
  const [metadata, setMetadata] = useState<RadioMetadata>({ streamTitle: 'Rádio Sebastián' });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = 'Rádio Sebastián | Moderné online rádio';
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const eventSource = new EventSource(RADIO_CONFIG.metadataUrl);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.streamTitle) {
          const parts = data.streamTitle.split(' - ');
          setMetadata({
            streamTitle: data.streamTitle,
            artist: parts[0] || '',
            title: parts[1] || data.streamTitle
          });
        }
      } catch (e) {
        console.error('Metadata parse error', e);
      }
    };

    return () => eventSource.close();
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg">
      <Header scrolled={scrolled} />

      <main id="main-content">
        {/* Hero Section */}
        <section id="live" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden" aria-labelledby="hero-heading">
          {/* Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.03, scale: 1 }}
              transition={{ duration: 2 }}
              className="text-[40vw] md:text-[30vw] font-display font-black tracking-tighter leading-none whitespace-nowrap"
            >
              SEBASTIÁN
            </motion.h1>
          </div>

          <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-brand-accent" />
                  <span className="text-[12px] font-mono uppercase tracking-[0.5em] text-brand-accent font-bold">Práve vysielame</span>
                </div>
                <h2 id="hero-heading" className="text-5xl sm:text-7xl md:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] uppercase">
                  ZVUK<br />
                  <span className="text-stroke">DNEŠKA.</span>
                </h2>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.5 }}
                className="max-w-md text-lg font-light leading-relaxed"
              >
                Najväčšie hity bez prestávky. Vaša denná dávka energie v digitálnej kvalite. Počúvajte nás kdekoľvek a kedykoľvek.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-5"
              aria-label="Prehrávač rádia"
            >
              <Player metadata={metadata} />
            </motion.div>
          </div>

          {/* Bottom Rail */}
          <AnimatePresence>
            {!scrolled && (
              <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-center items-end" aria-hidden="true">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-20">Posunúť</span>
                    <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent" />
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>

        <Playlist />
        <About />
      </main>

      <Footer />

      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (

<section id="about" className="pt-32 pb-10 px-6 md:px-20 bg-black overflow-hidden">
      
      {/* 1. THE STATEMENT (The "Solution Creator" Hook) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mb-24"
      >
        <h2 className="text-red-600 font-mono text-xs uppercase tracking-[0.4em] mb-8 font-bold">// Strategic Vision</h2>
        <p className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-10">
          Bridging the gap between <br />
          <span className="text-zinc-600 italic">Technical Complexity</span> and <br />
          <span className="text-white underline decoration-red-600 underline-offset-8">Visual Impact.</span>
        </p>
        <p className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed border-l border-zinc-800 pl-8">
          Based in Sunderland, I specialize in high-pressure live production and cinematography, 
          transforming complex technical requirements into seamless visual narratives.
        </p>
      </motion.div>

      {/* 2. THE CORE COMPETENCIES (Staggered Loading) */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Capability 01 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group bg-zinc-900/20 p-8 border border-white/5 rounded-sm hover:border-red-600/50 transition-colors"
        >
          <span className="text-red-600 font-mono text-[10px] block mb-6">01 / LIVE SYSTEMS</span>
          <h3 className="text-white text-lg font-bold uppercase mb-4 tracking-wider">Production Architecture</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Expertise in vision mixing and technical setups for live environments. I manage the "under-the-hood" systems to ensure flawless execution from lens to screen.
          </p>
        </motion.div>

        {/* Capability 02 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group bg-zinc-900/20 p-8 border border-white/5 rounded-sm hover:border-red-600/50 transition-colors"
        >
          <span className="text-red-600 font-mono text-[10px] block mb-6">02 / CINEMATOGRAPHY</span>
          <h3 className="text-white text-lg font-bold uppercase mb-4 tracking-wider">Visual Storytelling</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Utilizing advanced camerawork and aerial drone technology to capture perspectives that elevate the narrative, whether for commercial ads or short-form cinema.
          </p>
        </motion.div>

        {/* Capability 03 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="group bg-zinc-900/20 p-8 border border-white/5 rounded-sm hover:border-red-600/50 transition-colors"
        >
          <span className="text-red-600 font-mono text-[10px] block mb-6">03 / POST-PRODUCTION</span>
          <h3 className="text-white text-lg font-bold uppercase mb-4 tracking-wider">Precision Editing</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            A solution-oriented approach to DaVinci Resolve and Premiere Pro, ensuring that the final output maintains the technical integrity and creative intent of the shoot.
          </p>
        </motion.div>

      </div>

      {/* 3. LOGO BAR (CREDIBILITY) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-start gap-x-16 gap-y-8 grayscale opacity-50 font-mono text-[11px] tracking-[0.4em] text-white"
      >
      </motion.div>
    </section>
  );
};

export default About;
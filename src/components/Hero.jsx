import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black flex items-center"
    >
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        {/* Dark gradient to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* VIEWPORT DECOR (Camera Frame) */}
      <div className="absolute top-24 left-10 border-t-2 border-l-2 border-white/10 w-12 h-12 z-20" />
      <div className="absolute bottom-10 right-10 border-b-2 border-r-2 border-white/10 w-12 h-12 z-20" />

      {/* REC INDICATOR */}
      <div className="absolute top-28 left-12 md:left-24 flex items-center gap-2 z-20">
        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
        <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-bold">
          Rec
        </span>
      </div>

      {/* CONTENT LAYER */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <p className="text-red-600 font-mono text-xs mb-4 tracking-[0.4em] uppercase font-bold">
          // Hello there, I'm
          {/* mnn */}
        </p>

        <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
          Yanmife
          <br />
          <span className="outline-text">Oyekan</span>
        </h1>

        <div className="mt-10 border-l-2 border-red-600 pl-6">
          <p className="max-w-md text-zinc-300 text-lg md:text-xl leading-relaxed">
            Media Production student specializing in
            <span className="text-white"> Camerawork</span> and
            <span className="text-white"> Live Production</span>.
          </p>
        </div>
      </motion.div>

      {/* TECHNICAL OVERLAY (ISO/F-STOP) */}
      <div className="absolute bottom-12 left-6 md:left-20 flex gap-10 font-mono text-[10px] text-zinc-500 uppercase tracking-widest z-20">
        <div>
          <span className="text-zinc-700">ISO</span> 400
        </div>
        <div>
          <span className="text-zinc-700">F-STOP</span> f/2.8
        </div>
        <div>
          <span className="text-zinc-700">LOC</span> Sunderland, UK
        </div>
      </div>

      {/* SCROLL INDICATOR (Optional visual touch) */}
      <div className="absolute bottom-12 right-10 hidden md:block z-20">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-zinc-600 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

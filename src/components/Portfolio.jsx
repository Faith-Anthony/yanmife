import React from 'react';
import { motion } from 'framer-motion';


import woodfireImg from '../assets/woodfire.JPG';
import itsmyshoutImg from '../assets/itsmyshout.jpg';
import skillswalesImg from '../assets/skillswales.JPG';
import gwylcefniImg from '../assets/gwylcefni.jpg';

const projects = [
  {
    id: 1,
    title: "Wood Fire Shack",
    category: "Commercial Advert",
    role: "Director & Editor",
    description: "Screened at Pontio Cinema. High-impact visual storytelling.",
    link: "https://youtu.be/rNeFzKZR338",
    size: "md:col-span-2 md:row-span-2",
    img: woodfireImg
  },
  {
    id: 2,
    title: "It's My Shout",
    category: "BBC / S4C Production",
    role: "Camera Assistant",
    description: "Professional broadcast sets for major UK networks.",
    link: "https://www.bbc.co.uk/programmes/p05nkz6t", 
    size: "md:col-span-1 md:row-span-1",
    img: itsmyshoutImg
  },
  {
    id: 3,
    title: "Skills Wales",
    category: "Music Competition",
    role: "Camera Operator",
    description: "Multi-camera setups and live vision mixing.",
    link: "https://youtu.be/BABslqTz5KE?list=RDBABslqTz5KE",
    size: "md:col-span-1 md:row-span-1",
    img: skillswalesImg
  },
  {
    id: 4,
    title: "Gwyl Cefni Festival",
    category: "Aerial Production",
    role: "UAV Operator",
    description: "Capturing unique perspectives and sweeping cinematic angles.",
    link: "https://menteriaithmon.cymru/en/the-community/gwyl-cefni",
    size: "md:col-span-2 md:row-span-1",
    img: gwylcefniImg
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-20 bg-black">
      <div className="mb-12">
        <h2 className="text-red-600 font-mono text-xs uppercase tracking-[0.4em] mb-4 font-bold">
          // Selected Works
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Case <span className="text-zinc-600 italic">Studies</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.size} relative group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900`}
          >
            {/* 1. BACKGROUND IMAGE LAYER */}
            <div className="absolute inset-0 z-0">
              {project.img ? (
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              ) : (
                <div className="w-full h-full bg-zinc-800 opacity-20" /> // Fallback if no image
              )}
              {/* Overlay to keep text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* 2. CONTENT LAYER */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
              <span className="text-red-600 font-mono text-[10px] uppercase tracking-widest block mb-2 font-bold">
                {project.category}
              </span>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
                {project.title}
              </h4>
              <p className="text-zinc-400 text-sm font-medium mb-3">
                {project.role}
              </p>
              <p className="text-zinc-300 text-xs leading-relaxed max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {project.description}
              </p>
            </div>

            {/* 3. FUNCTIONAL LINK ARROW */}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-8 right-8 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center z-20 hover:bg-red-600 hover:border-red-600 text-white transition-all duration-300 pointer-events-auto"
              title="View Project"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-20 flex justify-between items-center backdrop-blur-md bg-black/60 border-b border-white/5">
      
      {/* 1. LOGO SECTION */}
      <div className="text-white font-black uppercase tracking-tighter text-2xl flex-shrink-0">
        Yanmife <span className="text-red-600">Oyekan</span>
      </div>

      {/* 2. CENTERED NAVIGATION - Bolder and Centered */}
      <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
        {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`} // This creates #home, #about, etc.
            className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 hover:text-white hover:scale-110 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex-shrink-0">
        <a 
          href="/Yanmife_CV.pdf" 
          download 
          className="px-5 py-2 border border-red-600 text-red-600 text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-red-600 hover:text-white transition-all duration-300 rounded-sm"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
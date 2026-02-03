import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowRight, CheckCircle2, X } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // New state for custom modal

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Transmitting...");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      setIsSuccess(true); // Open the custom white modal
      event.target.reset(); 
    } else {
      setResult(data.message);
      alert("Transmission failed: " + data.message);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-20 bg-black border-t border-white/5">
      
      {/* --- CUSTOM SUCCESS MODAL --- */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-10 md:p-14 rounded-[2rem] max-w-sm w-full text-center relative shadow-2xl"
            >
              <button 
                onClick={() => setIsSuccess(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-3">
                Transmitted
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-10">
                Inquiry received. Yanmife will establish contact shortly.
              </p>

              <button 
                onClick={() => setIsSuccess(false)}
                className="w-full bg-black text-white font-black uppercase tracking-widest py-5 rounded-xl hover:bg-red-600 transition-all duration-300 text-xs"
              >
                Continue
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid md:grid-cols-2 gap-16">
        {/* LEFT: SOCIAL COMMS */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-red-600 font-mono text-xs uppercase tracking-[0.4em] mb-6 font-bold">// Establish Contact</h2>
            <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-8">
              Let's build the <br />
              <span className="text-zinc-600 italic">Next Narrative.</span>
            </h3>
            <p className="text-zinc-400 max-w-sm mb-12">Currently based in Sunderland, UK. Available for worldwide travel and remote post-production.</p>
          </div>

          <div className="flex gap-8 items-center">
            <a href="https://www.instagram.com/yanmifeofficial" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-red-600 transition-colors"><Instagram size={28} /></a>
            <a href="https://www.linkedin.com/in/oluwayanmife-oyekan-744294341" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-red-600 transition-colors"><Linkedin size={28} /></a>
            <a href="mailto:yanmifeoyekan@gmail.com" className="text-zinc-500 hover:text-red-600 transition-colors"><Mail size={28} /></a>
          </div>
        </motion.div>

        {/* RIGHT: THE INQUIRY FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/20 border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Name</label>
                <input name="name" type="text" required className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-red-600 outline-none transition-colors" placeholder="YOUR NAME" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Email</label>
                <input name="email" type="email" required className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-red-600 outline-none transition-colors" placeholder="EMAIL@OFFICE.COM" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Project Description</label>
              <textarea name="message" required rows="4" className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-red-600 outline-none transition-colors resize-none" placeholder="DESCRIBE THE SCOPE..." />
            </div>

            <button type="submit" className="w-full group flex items-center justify-center gap-3 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-widest py-4 transition-all duration-500">
              {result ? result : "Transmit Inquiry"}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* FOOTER CREDITS */}
      <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">© 2026 Yanmife Oyekan // All Rights Reserved</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Available for Bookings</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
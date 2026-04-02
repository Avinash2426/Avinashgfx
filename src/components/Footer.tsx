import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { Instagram, Twitter, ArrowRight, Sparkles } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "About Me", href: "#about" },
  { label: "Analytics", href: "#analytics" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer id="footer" className="bg-[#1A1A2E] pt-20 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* CTA Block */}
        <div className="text-center mb-16">
          <h2 className="font-syne font-black text-white text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Ready to grow your
            <br />
            <span className="text-gradient-pink">channel?</span>
          </h2>
          <p className="font-jakarta text-white/50 text-lg mb-8 max-w-md mx-auto">
            Let's create thumbnails that stop the scroll and drive real growth.
          </p>
          <div className="relative inline-flex">
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full animate-pulse-ring" />
            <button
              onClick={openModal}
              className="relative font-jakarta font-semibold text-white px-10 py-4 rounded-full gradient-pink flex items-center gap-2 text-lg transition-all duration-250 hover:scale-105 hover:shadow-xl hover:shadow-pink-400/40"
            >
              Book a free call <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-10" />

        {/* Middle row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10 w-auto" />
            <span className="font-syne font-bold text-white text-lg">Avinash GFX</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="font-jakarta text-white/50 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/avinash_thumbnails/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF0080] hover:text-white transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF0080] hover:text-white transition-all duration-200"
            >
              <FaDiscord className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF0080] hover:text-white transition-all duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <p className="text-center font-jakarta text-white/30 text-sm">
           © {new Date().getFullYear()} Avinash GFX. All rights reserved. Made with{" "}
          <span className="text-[#FF0080]">♥</span> for Content Creators.
        </p>
      </div>

      {/* Contact Modal */}
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </footer>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {

const [state, handleSubmit] = useForm("mgopzllr"); // 👈 apna Form ID

useEffect(() => {
  if (state.succeeded) {
    setTimeout(() => {
      onClose();
    }, 2500);
  }
}, [state.succeeded, onClose]);


  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl p-8 w-full max-w-lg z-10 shadow-2xl">
        {state.succeeded ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-3xl">✓</span>
            </div>
            <h3 className="font-syne font-black text-[#1A1A2E] text-2xl mb-2">Message Sent!</h3>
            <p className="font-jakarta text-[#1A1A2E]/60">I'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-syne font-black text-[#1A1A2E] text-2xl">Book a Free Call</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#F3F3F0] flex items-center justify-center text-[#1A1A2E]/40 hover:bg-pink-100 hover:text-[#FF0080] transition-colors"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
    type="hidden" 
    name="formType" 
    value="Contact Form"
  />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-jakarta text-xs font-medium text-[#1A1A2E]/60 uppercase tracking-wider block mb-1">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    className="w-full border border-[#1A1A2E]/10 rounded-xl px-4 py-3 font-jakarta text-sm text-[#1A1A2E] focus:outline-none focus:border-[#FF0080] focus:ring-2 focus:ring-[#FF0080]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-jakarta text-xs font-medium text-[#1A1A2E]/60 uppercase tracking-wider block mb-1">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
  
                    className="w-full border border-[#1A1A2E]/10 rounded-xl px-4 py-3 font-jakarta text-sm text-[#1A1A2E] focus:outline-none focus:border-[#FF0080] focus:ring-2 focus:ring-[#FF0080]/20 transition-all"
                    placeholder="your@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              <div>
                <label className="font-jakarta text-xs font-medium text-[#1A1A2E]/60 uppercase tracking-wider block mb-1" >
                  YouTube Channel (optional)
                </label>
                <input

                  className="w-full border border-[#1A1A2E]/10 rounded-xl px-4 py-3 font-jakarta text-sm text-[#1A1A2E] focus:outline-none focus:border-[#FF0080] focus:ring-2 focus:ring-[#FF0080]/20 transition-all"
                  placeholder="youtube.com/c/yourchannel"
                  name="channel"
                />
              </div>
              <div>
                <label className="font-jakarta text-xs font-medium text-[#1A1A2E]/60 uppercase tracking-wider block mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  name="message"
                  className="w-full border border-[#1A1A2E]/10 rounded-xl px-4 py-3 font-jakarta text-sm text-[#1A1A2E] focus:outline-none focus:border-[#FF0080] focus:ring-2 focus:ring-[#FF0080]/20 transition-all resize-none"
                  placeholder="Tell me about your channel and what you're looking for..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
               type="submit"
               disabled={state.submitting}
               className="w-full font-jakarta font-semibold text-white py-4 rounded-xl gradient-pink transition-all duration-250 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-300/40"
               >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

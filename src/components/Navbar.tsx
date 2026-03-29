import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "About Me", href: "#about" },
  { label: "Analytics", href: "#analytics" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Update active section
      const sections = ["home", "works", "about", "analytics", "reviews", "faq"];
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${sec}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
           <img src="/logo.png" alt="logo" className="h-10 w-auto" /> 
            <span className="font-syne font-800 text-[#1A1A2E] text-lg font-bold tracking-tight">
              Avinash GFX
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-jakarta text-sm font-500 transition-colors duration-200 relative ${
                  activeLink === link.href
                    ? "text-[#FF0080] font-semibold"
                    : "text-[#1A1A2E]/70 hover:text-[#1A1A2E]"
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-pink rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("#footer")}
              className="font-jakarta text-sm font-semibold text-white px-5 py-2.5 rounded-full gradient-pink transition-all duration-250 hover:scale-105 hover:shadow-lg hover:shadow-pink-300/40"
            >
              Contact me
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#1A1A2E] p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1A1A2E] flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-pink flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-syne text-white text-lg font-bold">
                CreatorStudio
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-syne text-white text-2xl font-700 hover:text-gradient-pink transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#footer")}
              className="font-jakarta text-white px-8 py-3 rounded-full gradient-pink text-lg font-semibold mt-4"
            >
              Contact me
            </button>
          </div>
        </div>
      )}
    </>
  );
}

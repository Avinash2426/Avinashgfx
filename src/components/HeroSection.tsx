import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
const isOnline = true; // true = online, false = offline

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCTA = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#FAFAF8] flex items-center overflow-hidden pt-16"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #FF3CAC 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #FF3CAC 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left Text Block */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

<div
  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-all duration-200
  ${
    isOnline
      ? "bg-green-50 text-green-500 border-green-200"
      : "bg-pink-50 text-pink-400 border-pink-300"
  }`}
>
  <span
    className={`w-1.5 h-1.5 rounded-full animate-pulse ${
      isOnline ? "bg-green-500" : "bg-pink-400"
    }`}
  ></span>

  {isOnline ? "Online & Available" : "Available for new projects"}
</div>

          <h1 className="font-syne font-black text-[#1A1A2E] leading-[1.05] mb-6"
            style={{ fontSize: "clamp(48px, 6vw, 88px)" }}
          >
            Creating for
            <br />
            <span className="text-gradient-pink">creators</span>
          </h1>

          <p className="font-jakarta text-[#1A1A2E]/60 text-lg leading-relaxed mb-8 max-w-md">
            I design YouTube thumbnails and visual branding that stop the scroll, 
            drive clicks, and grow channels. Premium quality, fast delivery.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCTA}
              className="animate-pulse-soft font-jakarta font-semibold text-white px-8 py-4 rounded-full gradient-pink flex items-center gap-2 transition-all duration-250 hover:scale-105 hover:shadow-xl hover:shadow-pink-300/40"
            >
              Contact me <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleWorks}
              className="font-jakarta font-semibold text-[#1A1A2E] px-8 py-4 rounded-full border-2 border-[#1A1A2E]/10 flex items-center gap-2 hover:border-[#FF0080]/40 hover:text-[#FF0080] transition-all duration-250"
            >
              <Play className="w-4 h-4 fill-current" /> View Work
            </button>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <div className="flex -space-x-3">
              {["?w=60&q=80&fit=crop&crop=face&auto=format", "?w=60&q=80&fit=crop&crop=faces&auto=format", "?w=60&q=80&fit=crop&crop=face&auto=format"].map((q, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${i === 0 ? "1494790108377-be9c29b29330" : i === 1 ? "1507003211169-0a1dd7228f2d" : "1534528741775-53994a69daeb"}${q}`}
                    alt="client"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <p className="font-jakarta text-xs text-[#1A1A2E]/50 mt-0.5">50+ happy creators</p>
            </div>
          </div>
        </div>

        {/* Right floating illustration */}
        <div
          className={`flex justify-center items-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl opacity-40"
              style={{ background: "radial-gradient(circle, #FF3CAC 0%, transparent 70%)", transform: "scale(1.3)" }}
            />
            {/* Main card */}
            <div className="animate-float relative z-10 w-80 h-80 rounded-2xl overflow-hidden gradient-pink p-[3px]">
              <div className="w-full h-full rounded-2xl bg-[#FAFAF8] flex items-center justify-center overflow-hidden">
                <img
                  src="/img.jpeg"
                  alt="Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-8 bg-white rounded-xl p-3 shadow-lg card-shadow z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-pink flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
                <div>
                  <p className="font-syne font-bold text-[#1A1A2E] text-sm">250+</p>
                  <p className="font-jakarta text-[#1A1A2E]/50 text-xs">Thumbnails made</p>
                </div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-4 -right-8 bg-white rounded-xl p-3 shadow-lg card-shadow z-20">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <div>
                  <p className="font-syne font-bold text-[#1A1A2E] text-sm">5.0</p>
                  <p className="font-jakarta text-[#1A1A2E]/50 text-xs">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

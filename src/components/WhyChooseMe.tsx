import { useRef, useEffect, useState } from "react";
import { Zap, Clock, RefreshCw, Star, Target, Palette } from "lucide-react";

function useIntersection(ref: React.RefObject<HTMLElement>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

const cards = [
  {
    icon: Target,
    title: "Conversion Focused",
    desc: "Every design decision is made to maximize click-through rate and drive real results for your channel.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Professional quality thumbnails delivered within 24–48 hours. No waiting, no delays.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    desc: "Not happy? I'll keep refining until you're 100% satisfied. Your vision, perfectly executed.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Industry-leading design standards with attention to every pixel, color, and composition detail.",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    desc: "I maintain your visual identity across every thumbnail so your channel looks cohesive and professional.",
  },
  {
    icon: Clock,
    title: "Always Available",
    desc: "Fast communication and dedicated support. I'm always here when you need a quick turnaround.",
  },
];

export default function WhyChooseMe() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const visible = useIntersection(sectionRef);

  return (
    <section
      className="py-24 bg-[#FAFAF8]"
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-jakarta text-[#FF0080] font-medium text-sm uppercase tracking-widest mb-2">
            The Difference
          </p>
          <h2 className="font-syne font-black text-[#1A1A2E] text-4xl md:text-5xl">
            Why Choose Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-[20px] p-6 gradient-pink overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-400/30 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Inner top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/30 rounded-t-[20px]" />
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-white/20" />

                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-syne font-bold text-white text-xl mb-2">{card.title}</h3>
                <p className="font-jakarta text-white/80 text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

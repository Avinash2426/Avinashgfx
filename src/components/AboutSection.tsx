import { useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";

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

const bullets = [
  "3+ years designing for YouTube creators",
  "Expert in conversion-optimized thumbnail design",
  "Deep understanding of creator branding & visual identity",
  "Fast turnaround — 24–48 hour delivery",
  "Unlimited revisions until you're 100% satisfied",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const visible = useIntersection(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-jakarta text-[#FF0080] font-medium text-sm uppercase tracking-widest mb-2">
            Who I Am
          </p>
          <h2 className="font-syne font-black text-[#1A1A2E] text-4xl md:text-5xl mb-6">
            About Me
          </h2>
          <p className="font-jakarta text-[#1A1A2E]/60 text-lg leading-relaxed mb-8">
            I'm a passionate graphic designer specializing in YouTube thumbnails 
            and visual branding for content creators. Over the past 5 years, I've 
            helped 200+ YouTubers grow their channels through strategic, eye-catching 
            design. My work sits at the intersection of psychology and aesthetics — 
            every design is built to convert.
          </p>
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="mt-0.5 w-5 h-5 rounded-full gradient-pink flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="font-jakarta text-[#1A1A2E]/80 text-base">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image */}
        <div
          className={`flex justify-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Gradient border ring */}
            <div className="w-[340px] h-[400px] rounded-2xl gradient-pink p-[3px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#FAFAF8]">
                <img
                  src="/logo.png"
                  alt="About designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg card-shadow">
              <p className="font-bricolage font-black text-3xl text-gradient-pink">3+</p>
              <p className="font-jakarta text-[#1A1A2E]/60 text-xs mt-0.5">Years Experience</p>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full gradient-pink opacity-30 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

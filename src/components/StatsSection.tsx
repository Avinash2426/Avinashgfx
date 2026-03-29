import { useRef, useEffect, useState } from "react";

function useIntersection(ref: React.RefObject<HTMLElement>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

function useCounter(target: number, started: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return value;
}

const stats = [
  { value: 250, suffix: "+", label: "Thumbnails Created", desc: "Across 100+ channels" },
  { value: 98, suffix: "%", label: "Client Satisfaction", desc: "5-star avg. rating" },
  { value: 100, suffix: "+", label: "Happy Creators", desc: "From 30+ countries" },
  { value: 5, suffix: "M+", label: "Views Generated", desc: "For our clients" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const visible = useIntersection(sectionRef);

  const c0 = useCounter(stats[0].value, visible);
  const c1 = useCounter(stats[1].value, visible);
  const c2 = useCounter(stats[2].value, visible);
  const c3 = useCounter(stats[3].value, visible);
  const counters = [c0, c1, c2, c3];

  return (
    <section
      id="analytics"
      ref={sectionRef}
      className="py-20"
      style={{ background: "linear-gradient(135deg, #fff5f9 0%, #faf5ff 50%, #fff5f9 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 md:p-8 text-center card-shadow transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p
                className="font-bricolage font-black text-gradient-pink mb-1"
                style={{ fontSize: "clamp(40px, 4vw, 60px)", lineHeight: 1 }}
              >
                {counters[i]}{stat.suffix}
              </p>
              <p className="font-syne font-bold text-[#1A1A2E] text-base mb-1">{stat.label}</p>
              <p className="font-jakarta text-[#1A1A2E]/40 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

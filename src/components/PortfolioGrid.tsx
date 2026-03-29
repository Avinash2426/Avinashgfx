import { useState, useRef, useEffect } from "react";

type FilterType = "all" | "youtube" | "branding";

const thumbnails = [
  {
    id: 1,
    category: "youtube",
    title: "Gaming Thumbnail",
    img: "Thumbnails/Untitled-18.jpg",
  },
  {
    id: 2,
    category: "youtube",
    title: "Gaming Thumbnail",
    img: "Thumbnails/7 Noob to pro.jpg",
  },
  {
    id: 3,
    category: "branding",
    title: "Documentary Thumbnail",
    img: "Thumbnails/Untitled-20.jpg",
  },
  {
    id: 4,
    category: "youtube",
    title: "Documentary Thumbnail",
    img: "Thumbnails/16 olympic.jpg"
  },
  {
    id: 5,
    category: "branding",
    title: "Documentary Thumbnail",
    img: "Thumbnails/11 THE-LOST-CONTINENT-THUMBNAIL.jpg"
  },
  {
    id: 6,
    category: "youtube",
    title: "Finance Thumbnail",
    img: "Thumbnails/Untitled-17.jpg",
  },
  {
    id: 7,
    category: "youtube",
    title: "Ai Thumbnail",
    img: "Thumbnails/TUBE SENSEIO THUMBNAIL.png",
  },
  {
    id: 8,
    category: "branding",
    title: "Comparison Thumbnail",
    img: "Thumbnails/9 TIK TOK BATER THEN YOUTUB THUMBNAIL.jpg",
  },
  {
    id: 9,
    category: "youtube",
    title: "Bhajan Thumbnail",
    img: "Thumbnails/Untitled-13.jpg",
  },
];

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

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<FilterType>("all");
  const sectionRef = useRef<HTMLDivElement>(null!);
  const visible = useIntersection(sectionRef);

  const filtered = filter === "all" ? thumbnails : thumbnails.filter(t => t.category === filter);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="py-24 bg-[#FAFAF8]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <p className="font-jakarta text-[#FF0080] font-medium text-sm uppercase tracking-widest mb-2">Portfolio</p>
              <h2 className="font-syne font-black text-[#1A1A2E] text-4xl md:text-5xl">My Work</h2>
            </div>
            {/* Filter Tabs */}
            <div className="flex gap-2 bg-[#F3F3F0] p-1 rounded-full w-fit">
              {(["all", "youtube", "branding"] as FilterType[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-jakarta font-medium transition-all duration-200 capitalize ${
                    filter === f
                      ? "gradient-pink text-white shadow-sm"
                      : "text-[#1A1A2E]/60 hover:text-[#1A1A2E]"
                  }`}
                >
                  {f === "all" ? "All" : f === "youtube" ? "YouTube" : "Branding"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden aspect-video cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-syne font-bold text-white text-sm leading-tight">{item.title}</p>
              </div>
              {/* Glow border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#FF0080]/60 transition-all duration-300 pointer-events-none"
                style={{ boxShadow: "0 0 0 0 transparent" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

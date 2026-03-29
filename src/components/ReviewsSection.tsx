import { useRef, useEffect, useState } from "react";

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

const reviews = [
  {
    name: "Alex Thompson",
    handle: "@alexcreates",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face",
    text: "Absolutely transformed my channel's look! My CTR went from 3.2% to 7.8% after switching to these thumbnails. Worth every penny.",
    stars: 5,
    channel: "Tech & Gaming | 450K subs",
  },
  {
    name: "Sarah Chen",
    handle: "@sarahfinance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop&crop=face",
    text: "Professional, creative, and incredibly fast. My thumbnails look better than creators with 10x my budget. Highly recommend!",
    stars: 5,
    channel: "Personal Finance | 200K subs",
  },
  {
    name: "Marcus Rivera",
    handle: "@marcuscooks",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&fit=crop&crop=face",
    text: "I've worked with 5 designers before. None of them understood YouTube like this. Game-changing results in just 2 months.",
    stars: 5,
    channel: "Food & Cooking | 80K subs",
  },
  {
    name: "Emma Wilson",
    handle: "@emmafitness",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&fit=crop&crop=face",
    text: "Outstanding work! The thumbnails are visually stunning and my audience loves the new brand identity. Couldn't be happier.",
    stars: 5,
    channel: "Health & Fitness | 150K subs",
  },
  {
    name: "Jordan Lee",
    handle: "@jordantravel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&fit=crop&crop=face",
    text: "Fast delivery, stunning quality, great communication. My channel finally has a consistent, professional look I'm proud of.",
    stars: 5,
    channel: "Travel & Vlog | 320K subs",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const visible = useIntersection(sectionRef);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-jakarta text-[#FF0080] font-medium text-sm uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="font-syne font-black text-[#1A1A2E] text-4xl md:text-5xl">
            Client Reviews
          </h2>
        </div>

        {/* Desktop grid: 3 + 2 layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-5 mb-5">
            {reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={i} review={review} visible={visible} delay={i * 80} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 max-w-[800px] mx-auto">
            {reviews.slice(3, 5).map((review, i) => (
              <ReviewCard key={i + 3} review={review} visible={visible} delay={(i + 3) * 80} />
            ))}
          </div>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, i) => (
            <div key={i} className="snap-start shrink-0 w-[280px]">
              <ReviewCard review={review} visible={visible} delay={0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  visible,
  delay,
}: {
  review: (typeof reviews)[0];
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 card-shadow border-l-4 border-[#FF3CAC] transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-syne font-bold text-[#1A1A2E] text-sm">{review.name}</p>
          <p className="font-jakarta text-[#FF0080] text-xs">{review.handle}</p>
        </div>
      </div>
      <div className="flex text-yellow-400 text-base mb-3">
        {"★".repeat(review.stars)}
      </div>
      <p className="font-jakarta text-[#1A1A2E]/70 text-sm leading-relaxed mb-3">
        "{review.text}"
      </p>
      <p className="font-jakarta text-[#1A1A2E]/40 text-xs">{review.channel}</p>
    </div>
  );
}

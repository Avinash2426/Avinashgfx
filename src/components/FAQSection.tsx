import { useRef, useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

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

const faqs = [
  {
    q: "What information do you need to start?",
    a: "I'll need your video title, main topic, any specific style preferences, and examples of thumbnails you like. A brief description of your target audience also helps me create something that resonates.",
  },
  {
    q: "Can I request revisions?",
    a: "Absolutely! Every project includes unlimited revisions until you're completely satisfied. I want you to love your final design, so I'll keep refining until it's perfect.",
  },
  {
    q: "What are your prices?",
    a: "Pricing depends on the scope and quantity. Single thumbnails start from $10, with bulk packages offering better value. Channel rebrand packages including templates are also available. Contact me for a custom quote.",
  },
  {
    q: "What is the delivery time?",
    a: "Standard delivery is 24–48 hours for single thumbnails. Rush orders (under 12 hours) are available for an additional fee. Larger projects like brand packages typically take 3–5 business days.",
  },
  {
    q: "Can you match a custom style?",
    a: "Yes! I specialize in adapting to existing brand guidelines and visual styles. Share examples of your preferred style, and I'll match it perfectly — or help you develop a new signature look.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const visible = useIntersection(sectionRef);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 bg-[#FAFAF8]"
    >
      <div className="max-w-[720px] mx-auto px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-jakarta text-[#FF0080] font-medium text-sm uppercase tracking-widest mb-2">
            Questions
          </p>
          <h2 className="font-syne font-black text-[#1A1A2E] text-4xl md:text-5xl">
            FAQ
          </h2>
        </div>

        <div
          className={`space-y-0 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#1A1A2E]/10 last:border-b-0">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span
                  className={`font-syne font-bold text-base transition-colors duration-200 ${
                    openIndex === i ? "text-[#FF0080]" : "text-[#1A1A2E] group-hover:text-[#FF0080]"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === i
                      ? "gradient-pink"
                      : "bg-[#F3F3F0] group-hover:bg-pink-100"
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#1A1A2E]/60" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="font-jakarta text-[#1A1A2E]/60 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

 
<div className="mt-12 flex justify-center">
  <div className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-full 
  transition-all duration-300 hover:scale-105 hover:shadow-lg">
    
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs">
        ?
      </div>
      <span className="text-sm">Still Have a Question</span>
    </div>

    <button
      onClick={() => setOpenModal(true)}
      className="bg-pink-500 px-4 py-1.5 rounded-full text-sm 
      transition-all duration-300 hover:bg-pink-600 hover:scale-105 active:scale-95"
    >
      Ask
    </button>

  </div>
</div>


    </section>

{openModal && (
  <div
    onClick={() => setOpenModal(false)}
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    {/* Modal Box */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white p-8 rounded-2xl w-[90%] max-w-[500px] shadow-2xl 
      animate-fadeIn"
    >
      
      <h2 className="text-2xl font-bold mb-5 text-[#1A1A2E] text-center">
        Ask a Question
      </h2>

      {/* FORM START */}
      <form
         onSubmit={(e) => {
         e.preventDefault();
         setOpenModal(false);   // modal बंद
         setShowSuccess(true);  // popup दिखाओ

         setTimeout(() => {
         setShowSuccess(false); // 3 sec बाद hide
         }, 3000);
        }}
        className="space-y-4"
         >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <textarea
          placeholder="Your Message"
          required
          rows={4}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>

        <div className="flex justify-between items-center pt-2">
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="text-gray-500 transition hover:text-black hover:scale-105"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-pink-500 text-white px-5 py-2 rounded-lg 
            transition-all duration-200 hover:bg-pink-600 hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* FORM END */}

    </div>
  </div>
)}

{showSuccess && (
  <div className="fixed inset-0 flex items-center justify-center z-[60] pointer-events-none">
    
    <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl text-center animate-fadeIn">
      
      {/* Pink Circle */}
      <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white text-2xl">✔</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#1A1A2E]">
        Message Sent!
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mt-1">
        I will answer your questions within 24 hours.
      </p>

    </div>

  </div>
)}

</>
  );
}

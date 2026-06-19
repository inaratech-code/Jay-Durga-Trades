import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { STOCK_IMAGES } from "../constants/images";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const { scrollToSection } = useScrollToSection();

  const cards = [
    {
      id: "skincare",
      title: "Clinical Skincare",
      tag: "01 / ADVANCED DERMA",
      desc: "Antioxidants & Active Actives",
      image: STOCK_IMAGES.skincare,
      rotate: -4,
      z: 10,
    },
    {
      id: "cosmetics",
      title: "Cosmetics Luxe",
      tag: "02 / COLOUR ARTISTRY",
      desc: "Pigments & Velvet Finishes",
      image: STOCK_IMAGES.cosmeticsLuxe,
      rotate: 4,
      z: 20,
    },
    {
      id: "haircare",
      title: "Hair Artistry",
      tag: "03 / SALON NUTRIENTS",
      desc: "Keratin & Botanical Essences",
      image: STOCK_IMAGES.haircare,
      rotate: -2,
      z: 30,
    },
  ];

  const handleScrollToSection = (id: string) => {
    scrollToSection(`#${id}`);
  };

  return (
    <section id="home" className="relative bg-[#F8F5F0] overflow-hidden min-h-[calc(100vh-120px)] flex flex-col justify-between pt-8 lg:pt-16">
      {/* Decorative luxury architectural lines/grid in background */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-[#A61E22]/15" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-[#A61E22]/15" />
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-[#A61E22]/15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Editorial Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#A61E22]/25 bg-[#A61E22]/5 px-3.5 py-1.5 w-fit rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A61E22]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#A61E22] uppercase">
              Trusted Importer & Distributor
            </span>
          </motion.div>

          {/* Headline - Editorial Styling */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08] font-normal"
          >
            Trusted <span className="font-serif-italic text-[#A61E22]">Beauty</span> Brands,<br />
            Delivered With <span className="font-serif-italic font-light">Excellence</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#1A1A1A]/85 text-base md:text-lg max-w-xl font-sans font-light leading-relaxed"
          >
            Jay Durga International Trade specializes in premium skincare, cosmetic, and hair care products, connecting worlds and distributing leading international brands across the Kingdom of Nepal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
               onClick={() => handleScrollToSection("brands")}
               className="group flex items-center gap-2 bg-[#A61E22] hover:bg-[#8B0000] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 border border-[#A61E22] transition-all duration-300 shadow-xl shadow-[#A61E22]/15 hover:shadow-[#A61E22]/30 hover:-translate-y-0.5"
            >
              Explore Brands
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="flex items-center gap-2 bg-transparent hover:bg-black/5 text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 border border-[#1A1A1A] transition-all duration-300"
            >
              Contact Us
              <Compass className="w-4 h-4 text-[#A61E22]" />
            </button>
          </motion.div>

          {/* Minor trust factor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-6 grid grid-cols-3 gap-6 max-w-lg border-t border-[#A61E22]/10"
          >
            <div>
              <p className="text-xl md:text-2xl font-serif text-[#A61E22] font-semibold">19+</p>
              <p className="text-[10px] tracking-wider text-[#1A1A1A]/60 uppercase font-bold">Premium Brands</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif text-[#A61E22] font-semibold">100%</p>
              <p className="text-[10px] tracking-wider text-[#1A1A1A]/60 uppercase font-bold">Authenticity</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif text-[#A61E22] font-semibold">Nepal</p>
              <p className="text-[10px] tracking-wider text-[#1A1A1A]/60 uppercase font-bold">Nationwide Reach</p>
            </div>
          </motion.div>
        </div>

        {/* Visual Editorial Image Column - Visually rich luxury beauty composition with layered cards */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-6 select-none">
          <div className="relative w-full max-w-[420px] h-[450px] sm:h-[500px]">
            {/* Elegant Double Border Reference Style Backdrop */}
            <div className="absolute inset-4 border border-[#A61E22]/10 bg-transparent pointer-events-none z-0" />
            
            {/* The Floating Cards Container */}
            {cards.map((card, idx) => {
              const isHovered = hoveredIndex === idx;
              const hasAnyHovered = hoveredIndex !== null;
              // determine zIndex hierarchy dynamically
              const currentZ = isHovered ? 50 : card.z;
              const currentScale = isHovered ? 1.06 : hasAnyHovered ? 0.96 : 1;
              const currentRotate = isHovered ? 0 : card.rotate;
              const currentY = isHovered ? -12 : 0;
              const isError = imageError[card.id];

              return (
                <motion.div
                  key={card.id}
                  style={{ zIndex: currentZ }}
                  animate={{
                    scale: currentScale,
                    rotate: currentRotate,
                    y: currentY,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`absolute bg-white border border-[#A61E22]/15 p-2 sm:p-2.5 shadow-xl transition-shadow duration-300 hover:shadow-2xl cursor-pointer ${
                    idx === 0
                      ? "w-[170px] sm:w-[200px] aspect-[3/4] left-[2%] top-[5%]"
                      : idx === 1
                      ? "w-[170px] sm:w-[200px] aspect-[3/4] right-[2%] top-[12%]"
                      : "w-[160px] sm:w-[190px] aspect-[3/4] left-[15%] sm:left-[21%] bottom-[4%]"
                  }`}
                >
                  <div className="relative w-full h-full overflow-hidden flex flex-col">
                    {/* Inner narrow gold line border */}
                    <div className="absolute inset-1 border border-[#A61E22]/10 pointer-events-none z-20" />
                    
                    {/* Floating pill/badge inside card */}
                    <div className="absolute top-2 left-2 z-30 bg-[#1A1A1A]/85 backdrop-blur-md px-1.5 py-0.5 border border-[#A61E22]/20">
                      <p className="text-[7px] sm:text-[8px] font-sans font-bold tracking-widest text-[#F8F5F0]">
                        {card.tag}
                      </p>
                    </div>

                    {/* Image Area */}
                    <div className="relative flex-grow bg-[#F8F5F0] overflow-hidden">
                      {isError ? (
                        <div className="w-full h-full bg-gradient-to-tr from-[#1A1A1A] to-[#2A1012] flex flex-col items-center justify-center p-3 text-center">
                          <div className="w-8 h-8 rounded-full border border-[#A61E22]/20 flex items-center justify-center text-[10px] font-serif text-[#A61E22] mb-1 font-bold">
                            JDU
                          </div>
                          <span className="text-[7px] tracking-wider text-[#A61E22] uppercase font-bold">Genuine</span>
                          <span className="text-[9px] font-serif text-[#1A1A1A]/70 font-semibold">{card.title}</span>
                        </div>
                      ) : (
                        <img
                          src={card.image}
                          alt={card.title}
                          width={400}
                          height={300}
                          loading={card.id === "skincare" ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={card.id === "skincare" ? "high" : "auto"}
                          onError={() => {
                            setImageError((prev) => ({ ...prev, [card.id]: true }));
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      )}
                    </div>

                    {/* Card Title/Desc Panel */}
                    <div className="pt-2 pb-1 px-1 text-left">
                      <h4 className="text-[10px] sm:text-xs font-serif text-[#1A1A1A] font-semibold tracking-wide truncate">
                        {card.title}
                      </h4>
                      <p className="text-[8px] sm:text-[9px] text-[#1A1A1A]/70 font-sans tracking-wide truncate">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* floating brand stamp design, offset to the bottom-left of card cluster */}
            <div className="absolute -bottom-2 -left-4 bg-[#A61E22] text-[#F8F5F0] py-2 px-3.5 font-serif text-center shadow-2xl border border-[#A61E22]/20 select-none z-40">
              <span className="block text-xl font-serif-italic leading-none">Est.</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest leading-none">Nepal HUB</span>
            </div>

            {/* Accent gold circle badge, offset to the top-right of card cluster */}
            <div className="absolute -top-4 -right-4 w-15 h-15 rounded-full bg-[#1A1A1A] border-2 border-[#A61E22]/30 flex flex-col items-center justify-center p-1 text-center text-[7px] tracking-widest text-[#A61E22] uppercase font-bold shadow-xl z-40">
              <span className="leading-tight">100%</span>
              <span className="leading-tight">GENUINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ribbon Ticker inspired by the pink ticker band in the user reference image */}
      <div className="relative w-full overflow-hidden bg-[#A61E22] py-4 border-y border-[#A61E22]/25 mt-12 select-none">
        <div className="flex whitespace-nowrap scroll-ticker-loop">
          <div className="flex gap-12 text-[#F8F5F0] text-xs font-bold uppercase tracking-[0.3em] font-sans">
            {Array.from({ length: 4 }).map((_, idx) => (
              <span key={idx} className="flex gap-12 items-center">
                <span>✧ Premium Skincare Importer</span>
                <span>✧ Authentic Global Brands</span>
                <span>✧ Professional Cosmetics</span>
                <span>✧ Reliable Retail Distribution</span>
                <span>✧ Verified Origin Guarantee</span>
                <span>✧ Kathmandu Valley Hub</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .scroll-ticker-loop {
          animation: scroll-ticker 30s linear infinite;
        }
        .scroll-ticker-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

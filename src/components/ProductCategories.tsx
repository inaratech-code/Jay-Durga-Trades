import { CATEGORIES } from "../data";
import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function ProductCategories() {
  const { scrollToSection } = useScrollToSection();

  const handleScrollToSegment = (id: string) => {
    scrollToSection(`#${id}`);
  };

  return (
    <section id="categories" className="bg-white py-24 border-b border-[#A61E22]/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-[11px] font-sans font-extrabold tracking-[0.3em] text-[#A61E22] uppercase block">
              Market Specialties & Segments
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] tracking-tight font-normal leading-tight">
              A Wide Spectrum of <span className="font-serif-italic text-[#A61E22]">Aesthetic</span> Formulations
            </h2>
          </div>
          <div>
            <button
              onClick={() => handleScrollToSegment("brands")}
              className="inline-flex items-center gap-2 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-[#1A1A1A] hover:text-white transition-all cursor-pointer"
            >
              Browse By Brand
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              key={cat.id}
              className="group relative bg-[#F8F5F0] border border-[#A61E22]/10 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[320px] sm:min-h-[420px] md:min-h-[500px]"
            >
              {/* Outer frame styling */}
              <div className="absolute inset-2 sm:inset-3 border border-[#A61E22]/10 pointer-events-none z-20 group-hover:inset-2.5 transition-all duration-300" />

              {/* Box Image with elegant zoom trigger */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#A61E22]/10">
                <div className="absolute inset-0 bg-[#A61E22]/10 mix-blend-overlay z-10 transition-opacity opacity-0 group-hover:opacity-100 duration-300" />
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating Category Number */}
                <span className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 font-serif text-xl sm:text-3xl font-bold text-white/90 drop-shadow-md select-none bg-[#A61E22] w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                  0{i + 1}
                </span>

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 z-20 flex items-center gap-1 text-[8px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] text-[#F8F5F0] uppercase">
                  <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A61E22]" />
                  Distribution
                </span>
              </div>

              {/* Category Info Container */}
              <div className="p-3 sm:p-6 md:p-8 space-y-3 sm:space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5 sm:space-y-3">
                  <h3 className="text-base sm:text-xl md:text-2xl font-serif text-charcoal leading-tight line-clamp-2">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#1A1A1A]/75 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {cat.description}
                  </p>
                </div>

                {/* Tags and Key Partners */}
                <div className="space-y-2 sm:space-y-4 pt-2 sm:pt-4 border-t border-black/5">
                  <div className="hidden sm:block">
                    <h4 className="text-[9px] tracking-widest font-sans font-extrabold uppercase text-[#1A1A1A]/40 mb-2">
                      Key Portfolio Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white text-charcoal text-[9px] uppercase tracking-wider font-semibold border border-[#A61E22]/15 px-2.5 py-1 rounded-none hover:bg-[#A61E22] hover:text-white hover:border-[#A61E22] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[8px] sm:text-[9px] tracking-widest font-sans font-extrabold uppercase text-[#1A1A1A]/40 mb-1">
                      Featured In Nepal
                    </h4>
                    <p className="font-serif text-[10px] sm:text-xs font-bold text-[#A61E22] tracking-wide line-clamp-2">
                      {cat.featuredBrand}
                    </p>
                  </div>
                </div>

                {/* Grid Footer Card Trigger */}
                <button
                  onClick={() => {
                    handleScrollToSegment("brands");
                  }}
                  className="w-full text-center border-t border-[#A61E22]/10 pt-2 sm:pt-4 mt-1 sm:mt-2 text-[8px] sm:text-[10px] uppercase font-sans tracking-[0.1em] sm:tracking-[0.2em] text-[#1A1A1A]/70 group-hover:text-[#A61E22] group-hover:translate-x-1 duration-300 transition-all font-semibold"
                >
                  Explore Importers →
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Award, Eye, ShieldCheck, Heart } from "lucide-react";
import { STOCK_IMAGES } from "../constants/images";

export default function AboutUs() {
  const values = [
    {
      title: "Ethical Sourcing",
      description: "Direct ties with official laboratories and brand creators to guarantee absolute compliance and batch tracking.",
      icon: ShieldCheck
    },
    {
      title: "Nepal's Premier Network",
      description: "Fast-developing distribution services that route global essentials directly to cosmetics stores, salons, and modern pharmacies.",
      icon: Award
    },
    {
      title: "Partner Value",
      description: "Uncompromised wholesale rates and marketing backing to ensure profitability and sustained growth for local retailers.",
      icon: Heart
    }
  ];

  return (
    <section id="about" className="bg-white py-24 border-b border-[#A61E22]/10 relative">
      {/* Editorial Decorative Coordinates and watermark background */}
      <div className="absolute right-10 bottom-10 font-serif text-[120px] text-black/[0.01] pointer-events-none select-none font-bold uppercase leading-none">
        JDU
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Picture Grid Element on Left Column (Editorial frame) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 border border-[#A61E22]/15 translate-x-3 translate-y-3 pointer-events-none z-0" />
              <div className="relative bg-[#F8F5F0] p-3 border border-black/10 shadow-xl z-10">
                <img
                  src={STOCK_IMAGES.aboutTrade}
                  alt="Premium Skincare Sourcing and Purity"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover grayscale-[15%] brightness-[0.97]"
                />
                
                {/* Embedded credit note for quality */}
                <div className="absolute right-6 bottom-6 bg-white py-3.5 px-5 shadow-2xl border border-[#A61E22]/10">
                  <p className="text-[10px] tracking-widest text-[#1A1A1A]/50 uppercase font-sans font-bold">Standard</p>
                  <p className="font-serif text-[#A61E22] text-sm font-semibold">Nepal Approved Quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Content Column on Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] font-sans font-extrabold tracking-[0.3em] text-[#A61E22] uppercase block">
                Corporate Legacy & Purity
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] tracking-tight font-normal leading-tight">
                Authentic trade curated for the <span className="font-serif-italic text-[#A61E22]">discerning</span> buyer.
              </h2>
              <div className="h-[2px] w-20 bg-[#A61E22] mt-4" />
            </div>

            <p className="text-[#1A1A1A]/85 text-base font-light leading-relaxed font-sans">
              Founded on the pillars of transparency, reliability, and ultimate skincare science,
              <strong className="font-semibold text-black"> Jay Durga International Trade</strong> acts as Kathmandu’s definitive link to standard world-class brands. Managed by <strong className="font-semibold text-black">Narayan Kumar Agrawal</strong>, our trading infrastructure brings high-performance beauty and hair essentials securely to Nepal's markets.
            </p>

            {/* Mission & Vision Bento Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
              {/* Mission Card */}
              <div className="bg-[#F8F5F0] p-3 sm:p-6 md:p-8 border border-[#A61E22]/10 shadow-sm space-y-2 sm:space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#A61E22] transition-all duration-300 group-hover:w-2" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#A61E22]/10 flex items-center justify-center rounded-none border border-[#A61E22]/25 shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#A61E22]" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-serif tracking-wide text-[#1A1A1A] font-medium leading-snug">Our Mission</h3>
                </div>
                <p className="text-[10px] sm:text-[13px] text-[#1A1A1A]/90 font-light leading-relaxed font-sans">
                  "Our mission is to provide access to high-quality skincare, cosmetic, and personal care products through reliable sourcing, ethical business practices, and efficient distribution, ensuring value and satisfaction for our partners and customers."
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-[#F8F5F0] p-3 sm:p-6 md:p-8 border border-[#A61E22]/10 shadow-sm space-y-2 sm:space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#8B0000] transition-all duration-300 group-hover:w-2" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#8B0000]/10 flex items-center justify-center rounded-none border border-[#8B0000]/25 shrink-0">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B0000]" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-serif tracking-wide text-[#1A1A1A] font-medium leading-snug">Our Vision</h3>
                </div>
                <p className="text-[10px] sm:text-[13px] text-[#1A1A1A]/90 font-light leading-relaxed font-sans">
                  "To be a trusted global partner in the beauty and personal care industry by connecting premium international brands with diverse markets, delivering authentic products, fostering long-term partnerships, and setting new standards of excellence in international trade."
                </p>
              </div>
            </div>

            {/* Core Values Minimal Row */}
            <div className="border-t border-[#A61E22]/10 pt-8">
              <h4 className="text-[11px] font-sans font-extrabold tracking-widest uppercase text-[#1A1A1A]/60 mb-6">
                Our Operating Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {values.map((v, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <v.icon className="w-4 h-4 text-[#A61E22]" />
                      <h5 className="font-serif text-[15px] font-semibold text-[#1A1A1A]">{v.title}</h5>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/70 font-sans leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

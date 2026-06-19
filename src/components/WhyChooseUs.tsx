import { WHY_CHOOSE_US } from "../data";
import { ShieldCheck, Handshake, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Handshake: Handshake,
  Sparkles: Sparkles,
  Award: Award
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#F8F5F0] py-24 border-b border-[#A61E22]/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-6 max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-[#A61E22]" />
            <span className="text-[11px] font-sans font-extrabold tracking-[0.25em] text-[#A61E22] uppercase">
              Trading Standards & Quality
            </span>
            <div className="h-[1px] w-8 bg-[#A61E22]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight font-normal">
            Why Beauty Outlets Trust <span className="font-serif-italic">Jay Durga</span>
          </h2>
          <p className="text-[#1A1A1A]/75 text-sm md:text-base font-sans font-light">
            We operate with world-class supply standards, deep local experience, and transparent ethics that guarantee long-term market leadership.
          </p>
        </div>

        {/* Feature Cards Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const IconComponent = iconMap[item.iconName] || Award;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                key={item.id}
                className="group relative bg-white border border-[#A61E22]/10 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#A61E22]/50 text-left flex flex-col justify-between"
              >
                {/* Thin internal border */}
                <div className="absolute inset-2.5 border border-[#A61E22]/10 pointer-events-none group-hover:border-[#A61E22]/20 transition-all duration-300" />
                
                <div className="space-y-6 relative z-10">
                  {/* Luxury Icon Ring */}
                  <div className="w-12 h-12 bg-[#F8F5F0] border border-[#A61E22]/20 flex items-center justify-center group-hover:bg-[#A61E22] group-hover:border-[#A61E22] transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-[#A61E22] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-serif text-charcoal font-semibold group-hover:text-[#A61E22] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/75 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Accent number line */}
                <div className="mt-8 pt-4 border-t border-black/5 flex justify-between items-center relative z-10">
                  <span className="text-[10px] tracking-widest text-[#1A1A1A]/30 uppercase font-sans font-bold">
                    System Checked
                  </span>
                  <span className="font-serif text-[11px] font-bold text-[#A61E22]/30 group-hover:text-[#A61E22] transition-colors">
                    0{i + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

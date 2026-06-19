import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import BrandShowcase from "./components/BrandShowcase";
import ProductCategories from "./components/ProductCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useScrollToSection } from "./hooks/useScrollToSection";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [showToTopBtn, setShowToTopBtn] = useState(false);
  const { scrollToTop } = useScrollToSection();

  useLenis((lenis) => {
    setShowToTopBtn(lenis.scroll > 500);
  });

  return (
    <div className="relative bg-[#F8F5F0] text-[#1A1A1A] font-sans antialiased selection:bg-[#A61E22] selection:text-white min-h-screen">
      
      {/* Luxury Sticky Navigation Bar */}
      <Header />

      {/* Main Sections */}
      <main className="relative">
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT US SECTION */}
        <AboutUs />

        {/* BRANDS SHOWCASE GRID */}
        <BrandShowcase />

        {/* SEGMENT PRODUCT CATEGORIES */}
        <ProductCategories />

        {/* LOGISTICS WHY CHOOSE US CARDS */}
        <WhyChooseUs />

        {/* INTERACTIVE FORM & COORDINATES */}
        <ContactUs />
      </main>

      {/* LUXURY NO-SOCIAL EMBEDDED FOOTER */}
      <Footer />

      <WhatsAppButton />

      {/* Elegant Back to Top Floating Action button */}
      <AnimatePresence>
        {showToTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-24 sm:right-28 z-40 bg-[#A61E22] text-white p-3 rounded-none shadow-2xl border border-[#D4AF37]/35 hover:bg-[#8B0000] hover:-translate-y-0.5 duration-300 transition-all flex items-center justify-center cursor-pointer"
            title="Scroll To Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

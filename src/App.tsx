import { lazy, Suspense, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useScrollToSection } from "./hooks/useScrollToSection";

const AboutUs = lazy(() => import("./components/AboutUs"));
const BrandShowcase = lazy(() => import("./components/BrandShowcase"));
const ProductCategories = lazy(() => import("./components/ProductCategories"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}

export default function App() {
  const [showToTopBtn, setShowToTopBtn] = useState(false);
  const { scrollToTop } = useScrollToSection();

  useLenis((lenis) => {
    setShowToTopBtn(lenis.scroll > 500);
  });

  return (
    <div className="relative bg-[#F8F5F0] text-[#1A1A1A] font-sans antialiased selection:bg-[#A61E22] selection:text-white min-h-screen">
      <Header />

      <main className="relative">
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <AboutUs />
          <BrandShowcase />
          <ProductCategories />
          <WhyChooseUs />
          <ContactUs />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {showToTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-[#A61E22] text-white p-3 rounded-none shadow-2xl border border-[#D4AF37]/35 hover:bg-[#8B0000] hover:-translate-y-0.5 duration-300 transition-all flex items-center justify-center cursor-pointer opacity-100"
          title="Scroll To Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}

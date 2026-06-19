import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useLenis } from "lenis/react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
} from "../constants/contact";
import WhatsAppLink from "./WhatsAppLink";
import { useScrollToSection } from "../hooks/useScrollToSection";

const SECTIONS = ["home", "about", "brands", "categories", "why-choose-us", "contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScrollToSection();

  useLenis(() => {
    setScrolled(window.scrollY > 40);

    const current = SECTIONS.find((sect) => {
      const el = document.getElementById(sect);
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      }
      return false;
    });
    if (current) {
      setActiveSection(current);
    }
  });

  const navMenuItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Brands Showcase", href: "#brands", id: "brands" },
    { label: "Categories", href: "#categories", id: "categories" },
    { label: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top micro bar for corporate info */}
      <div className="bg-[#1A1A1A] text-[#F8F5F0]/80 text-[11px] py-2 px-4 md:px-8 flex justify-between items-center border-b border-[#D4AF37]/20 z-50 relative font-sans">
        <div className="flex items-center gap-4 md:gap-6">
          <WhatsAppLink className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
            {CONTACT_PHONE_DISPLAY}
          </WhatsAppLink>
          <span className="hidden sm:flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] font-bold">Landline:</span> 01-5321836
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={CONTACT_MAILTO}
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            {CONTACT_EMAIL}
          </a>
          <span className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            Kathmandu, Nepal
          </span>
        </div>
      </div>

      {/* Main Luxury Sticky Header */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F5F0]/95 backdrop-blur-md shadow-md border-b border-[#D4AF37]/10 py-2.5"
            : "bg-[#F8F5F0]/90 border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo with serif style details */}
          <a href="#home" onClick={(e) => handleScrollToSegment(e, "#home")} className="hover:opacity-90 transition-opacity">
            <Logo size={scrolled ? "sm" : "md"} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navMenuItems.map((item) => {
              const isAct = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSegment(e, item.href)}
                  className={`relative py-2 text-xs uppercase font-semibold tracking-widest transition-colors font-sans`}
                  style={{ color: isAct ? "#A61E22" : "#1A1A1A" }}
                >
                  <span className="hover:text-[#A61E22] transition-colors">{item.label}</span>
                  {isAct && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A61E22]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <WhatsAppLink className="bg-[#A61E22] hover:bg-[#8B0000] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-none border border-[#A61E22] transition-all duration-300 hover:shadow-lg shadow-[#A61E22]/10">
              Get In Touch
            </WhatsAppLink>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#A61E22] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer with smooth Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden w-full bg-[#F8F5F0] border-t border-[#D4AF37]/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5 border-b border-[#D4AF37]/15 shadow-inner">
                {navMenuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToSegment(e, item.href)}
                    className={`text-sm uppercase tracking-widest font-semibold py-1 border-b border-black/5 transition-colors ${
                      activeSection === item.id ? "text-[#A61E22] font-bold" : "text-[#1A1A1A] hover:text-[#A61E22]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSegment(e, "#contact")}
                  className="bg-[#A61E22] text-white text-center text-xs font-bold uppercase tracking-widest py-3 rounded-none mt-2 shadow-md hover:bg-[#8B0000] transition-colors"
                >
                  Contact Importer
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

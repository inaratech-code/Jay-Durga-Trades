import React from "react";
import Logo from "./Logo";
import { Mail, MapPin, Award } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_ADDRESS,
  CONTACT_MAP_URL,
  CONTACT_LANDLINES,
} from "../constants/contact";
import WhatsAppIcon from "./WhatsAppIcon";
import TelephoneIcon from "./TelephoneIcon";
import WhatsAppLink from "./WhatsAppLink";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollToSection } = useScrollToSection();

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href, -85);
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F8F5F0] pt-20 pb-12 border-t border-[#A61E22]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Centered brand logo */}
        <div className="flex flex-col items-center text-center pb-10 sm:pb-12 border-b border-[#A61E22]/10 mb-10 sm:mb-12">
          <Logo size="lg" />
          <p className="text-[#F8F5F0]/70 text-[10px] sm:text-xs leading-relaxed max-w-md mx-auto mt-4 sm:mt-6">
            Jay Durga International Trade operates as Kathmandu’s trusted importer and nationwide distributor of leading clinical skincare, dynamic color cosmetics, and professional beauty essentials.
          </p>
          <div className="flex items-center gap-2 sm:gap-2.5 bg-[#A61E22]/10 border border-[#A61E22]/30 px-3 py-1.5 sm:px-4 sm:py-2 w-fit mx-auto mt-4 sm:mt-5">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A61E22] shrink-0" />
            <span className="text-[8px] sm:text-[10px] tracking-widest font-extrabold uppercase text-[#A61E22]">
              Licensed Importer • Nepal Govt. Approved
            </span>
          </div>
        </div>

        {/* Navigation + contact grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 pb-12 sm:pb-16 border-b border-[#A61E22]/10">

          {/* Column 1: Quick Links */}
          <div className="col-span-1 md:col-span-6 space-y-3 sm:space-y-5 text-left md:text-center md:items-center md:flex md:flex-col">
            <h4 className="font-serif text-xs sm:text-sm tracking-widest text-[#A61E22] uppercase font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:inline-block md:text-left">
              {[
                { label: "Home Base", href: "#home" },
                { label: "Corporate About", href: "#about" },
                { label: "Global Brands", href: "#brands" },
                { label: "Product Categories", href: "#categories" },
                { label: "Quality Assurance", href: "#why-choose-us" },
                { label: "Contact Importer", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                     href={link.href}
                     onClick={(e) => handleScrollToSegment(e, link.href)}
                     className="text-[10px] sm:text-xs text-[#F8F5F0]/75 hover:text-[#A61E22] transition-colors leading-[1.6] sm:leading-[1.8] inline-block font-sans hover:translate-x-1 duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Complete Contact info */}
          <div className="col-span-1 md:col-span-6 space-y-3 sm:space-y-5 text-left md:text-center md:items-center md:flex md:flex-col text-[10px] sm:text-xs">
            <h4 className="font-serif text-xs sm:text-sm tracking-widest text-[#A61E22] uppercase font-bold">
              Registry Office
            </h4>
            
            <ul className="space-y-3 sm:space-y-4 text-[#F8F5F0]/80 md:inline-block md:text-left">
              {/* Contact Person */}
              <li className="space-y-0.5">
                <span className="block text-[8px] sm:text-[9px] tracking-widest uppercase text-[#F8F5F0]/40 font-bold">
                  Managing Rep.
                </span>
                <span className="text-xs sm:text-sm font-semibold font-serif text-white leading-snug">
                  Narayan Kumar Agrawal
                </span>
              </li>

              {/* Physical Location */}
              <li className="flex gap-2 items-start">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A61E22] shrink-0 mt-0.5" />
                <a
                  href={CONTACT_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-[#A61E22] transition-colors underline-offset-2 hover:underline"
                >
                  {CONTACT_ADDRESS}
                </a>
              </li>

              {/* Mobile / WhatsApp */}
              <li className="flex gap-2 items-start">
                <WhatsAppLink className="flex items-start gap-2 text-white hover:text-[#25D366] font-semibold transition-colors leading-snug">
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-[#A61E22]" />
                  <span>{CONTACT_PHONE_DISPLAY}</span>
                </WhatsAppLink>
              </li>

              {/* Landlines */}
              <li className="flex gap-2 items-start">
                <TelephoneIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {CONTACT_LANDLINES.map((line, index) => (
                    <span key={line.display}>
                      {index > 0 && (
                        <span className="text-[#F8F5F0]/60"> / </span>
                      )}
                      <a
                        href={line.tel}
                        className="hover:text-[#A61E22] transition-colors"
                      >
                        {line.display}
                      </a>
                    </span>
                  ))}
                </span>
              </li>

              {/* Email Address */}
              <li className="flex gap-2 items-start">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A61E22] shrink-0 mt-0.5" />
                <a href={CONTACT_MAILTO} className="hover:text-[#A61E22] transition-colors break-all leading-snug">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing copyright notice without any prohibited social links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#F8F5F0]/50">
          <p className="font-sans">
            &copy; {currentYear} Jay Durga International Trade &amp; Inara Tech (
            <a
              href="https://www.inaratech.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F8F5F0]/50 no-underline hover:text-[#F8F5F0]/70 hover:no-underline transition-colors"
            >
              www.inaratech.com.np
            </a>
            ). All Rights Reserved.
          </p>
          <p className="font-sans tracking-wide">
            Designed to Premium Standards • Kathmandu, Nepal
          </p>
        </div>

      </div>
    </footer>
  );
}

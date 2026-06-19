import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, User } from "lucide-react";
import { motion } from "motion/react";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "../constants/contact";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-white py-24 border-b border-[#A61E22]/10 relative overflow-hidden">
      {/* Decorative luxury background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8F5F0]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A61E22]/2 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-sans font-extrabold tracking-[0.3em] text-[#A61E22] uppercase block mb-2">
              Trade Office Coordinates
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] tracking-tight font-normal leading-tight">
              Connect With Our <span className="font-serif-italic text-[#A61E22]">Import</span> Desk
            </h2>
            <div className="h-[2px] w-20 bg-[#A61E22] mx-auto mt-4" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#1A1A1A]/75 text-sm md:text-base font-sans font-light leading-relaxed pt-2"
          >
            Jay Durga International Trade welcomes corporate partnerships, high-volume stock inquiries, and direct brand representations from manufacturers in South Korea, the USA, France, and Switzerland.
          </motion.p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Principal Representative Card - Grand Highlight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#F8F5F0] border border-[#A61E22]/15 p-8 md:p-10 shadow-lg relative flex flex-col justify-between"
          >
            {/* Elegant double border design consistent with Jay Durga premium aesthetic */}
            <div className="absolute inset-4 border border-[#A61E22]/10 pointer-events-none" />
            
            <div className="relative z-10 space-y-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white border border-[#A61E22]/20 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <User className="w-5 h-5 text-[#A61E22]" />
                </div>
                <span className="text-[10px] tracking-widest text-[#A61E22] uppercase font-bold font-sans block mb-1">
                  Managing Director / Proprietor
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#1A1A1A] leading-tight">
                  Narayan Kumar Agrawal
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 font-sans mt-2 leading-relaxed">
                  Principal trade delegate directing Kathmandu's trusted channel for high-tier global cosmetic, clinical skincare, and personal care conglomerates.
                </p>
              </div>

              {/* Verified Trust Seal */}
              <div className="pt-8 border-t border-[#A61E22]/10 mt-8 flex items-center gap-3">
                <ShieldCheck className="w-5.5 h-5.5 text-[#A61E22] shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-extrabold text-[#1A1A1A] font-sans">
                    Verified Trade Registry
                  </p>
                  <p className="text-[11px] text-[#1A1A1A]/60 font-sans">
                    Registered Importer under the Department of Commerce, Nepal.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Interactive Information Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Base Coordinate: Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#A61E22]/10 hover:border-[#A61E22]/25 p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#F8F5F0] border border-[#A61E22]/10 flex items-center justify-center">
                  <MapPin className="w-4.5 h-4.5 text-[#A61E22]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#1A1A1A]/50 font-sans">
                    Corporate Headquarters
                  </h4>
                  <p className="text-base font-serif font-bold text-[#1A1A1A] mt-1.5">
                    Makhan, Kathmandu, Nepal
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 font-sans mt-4 pt-4 border-t border-[#F8F5F0]">
                Centralized market district location for domestic clearance and strategic imports.
              </p>
            </motion.div>

            {/* Contact Coordinate: Phone Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#A61E22]/10 hover:border-[#A61E22]/25 p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#F8F5F0] border border-[#A61E22]/10 flex items-center justify-center">
                  <Phone className="w-4.5 h-4.5 text-[#A61E22]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#1A1A1A]/50 font-sans">
                    Direct Voice Portals
                  </h4>
                  <WhatsAppLink className="block text-base font-sans font-bold text-[#1A1A1A] mt-1.5 hover:text-[#A61E22] transition-colors">
                    {CONTACT_PHONE_DISPLAY}
                  </WhatsAppLink>
                  <WhatsAppLink className="inline-flex items-center gap-2 mt-3 text-xs font-bold uppercase tracking-wider text-[#25D366] hover:text-[#1ebe57] transition-colors">
                    <WhatsAppIcon className="w-4 h-4" />
                    Chat on WhatsApp
                  </WhatsAppLink>
                  <a
                    href={CONTACT_PHONE_TEL}
                    className="block text-[11px] text-[#1A1A1A]/60 font-sans mt-2 hover:text-[#A61E22] transition-colors"
                  >
                    Or call directly
                  </a>
                  <div className="text-xs text-[#1A1A1A]/75 font-sans mt-1">
                    <span className="font-semibold text-[#1A1A1A]/40 block text-[9px] uppercase tracking-wider mt-2">Landlines</span>
                    <span className="block font-medium mt-0.5">01-5321836</span>
                    <span className="block font-medium">01-5324305</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 font-sans mt-4 pt-4 border-t border-[#F8F5F0]">
                Immediate direct connection for registered trade partners and manufacturers.
              </p>
            </motion.div>

            {/* Coordinate: Safe Inboxes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#A61E22]/10 hover:border-[#A61E22]/25 p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#F8F5F0] border border-[#A61E22]/10 flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5 text-[#A61E22]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#1A1A1A]/50 font-sans">
                    Electronic Correspondence
                  </h4>
                  <a
                    href={CONTACT_MAILTO}
                    className="block text-base font-serif font-bold text-[#A61E22] hover:underline mt-1.5 break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 font-sans mt-4 pt-4 border-t border-[#F8F5F0]">
                Monitored trade inbox for incoming brand portfolios and bulk procurement proposals.
              </p>
            </motion.div>

            {/* Coordinate: Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#A61E22]/10 hover:border-[#A61E22]/25 p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#F8F5F0] border border-[#A61E22]/10 flex items-center justify-center">
                  <Clock className="w-4.5 h-4.5 text-[#A61E22]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-[#1A1A1A]/50 font-sans">
                    Desk Operations
                  </h4>
                  <p className="text-sm font-sans font-bold text-[#1A1A1A] mt-1.5">
                    Sun – Fri: 10:00 AM – 6:30 PM (NPT)
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 font-sans mt-4 pt-4 border-t border-[#F8F5F0]">
                Closed on Saturdays and Nepalese gazetted public holidays.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

import { CONTACT_PHONE_DISPLAY } from "../constants/contact";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      aria-label={`Chat on WhatsApp at ${CONTACT_PHONE_DISPLAY}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe57] text-white pl-4 pr-5 py-3.5 rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
        WhatsApp
      </span>
    </WhatsAppLink>
  );
}

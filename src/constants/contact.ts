export const CONTACT_PHONE_DISPLAY = "+977 9851048223";
export const CONTACT_PHONE_TEL = "tel:+9779851048223";
export const CONTACT_LANDLINES = [
  { display: "01-5321836", tel: "tel:+97715321836" },
  { display: "01-5324305", tel: "tel:+97715324305" },
] as const;
export const CONTACT_EMAIL = "agrawalnarayan@hotmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_ADDRESS = "Makhan Tole, Kathmandu, Nepal";
export const CONTACT_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Makhan+Tole,+Kathmandu,+Nepal";

const WHATSAPP_PHONE = "9779851048223";
const WHATSAPP_MESSAGE =
  "Hello, I would like to inquire about Jay Durga International Trade.";

const WHATSAPP_WEB_URL = `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const MOBILE_USER_AGENT =
  /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i;

/** Opens WhatsApp — only called from a direct user click, not from page markup */
export function openWhatsApp(): void {
  const encodedText = encodeURIComponent(WHATSAPP_MESSAGE);

  if (MOBILE_USER_AGENT.test(navigator.userAgent)) {
    window.location.assign(`whatsapp://send?phone=${WHATSAPP_PHONE}&text=${encodedText}`);
    return;
  }

  window.open(WHATSAPP_WEB_URL, "_blank", "noopener,noreferrer");
}

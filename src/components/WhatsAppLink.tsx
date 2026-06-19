import type { ButtonHTMLAttributes, ReactNode } from "react";
import { openWhatsApp } from "../constants/contact";

type WhatsAppLinkProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  children: ReactNode;
};

/** Opens WhatsApp on click — no external /send URL in the page markup */
export default function WhatsAppLink({
  children,
  className = "",
  onClick,
  ...props
}: WhatsAppLinkProps) {
  return (
    <button
      type="button"
      onClick={(event) => {
        openWhatsApp();
        onClick?.(event);
      }}
      className={`cursor-pointer text-left ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

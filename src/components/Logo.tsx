import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const heights: Record<string, string> = {
    sm: "h-12 sm:h-14",
    md: "h-16 sm:h-24 md:h-32",
    lg: "h-24 sm:h-32 md:h-40",
  };

  return (
    <div className={`flex items-center justify-center gap-3 select-none ${className}`}>
      <picture>
        <source
          srcSet="/logo.webp 1x, /logo-768.webp 2x"
          type="image/webp"
        />
        <img
          src="/logo.png"
          alt="Jay Durga International Trade Logo"
          width={384}
          height={256}
          className={`${heights[size]} w-auto object-contain flex-shrink-0`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable={false}
        />
      </picture>
    </div>
  );
}

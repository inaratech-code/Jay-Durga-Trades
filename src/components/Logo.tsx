import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  // Sizing heights for different navbar scroll states
  const heights: Record<string, string> = {
  sm: "h-14 sm:h-16",
  md: "h-24 sm:h-32",
  lg: "h-32 sm:h-40",
};

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Jay Durga International Trade Logo"
        className={`${heights[size]} w-auto object-contain flex-shrink-0`}
        loading="eager"
        draggable={false}
      />
    </div>
  );
}

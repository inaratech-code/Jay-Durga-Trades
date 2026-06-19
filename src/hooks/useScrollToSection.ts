import { useCallback } from "react";
import { useLenis } from "lenis/react";

const HEADER_OFFSET = -80;
const SCROLL_DURATION = 1.2;

export function useScrollToSection() {
  const lenis = useLenis();

  const scrollToSection = useCallback(
    (target: string | HTMLElement, offset = HEADER_OFFSET) => {
      const element =
        typeof target === "string" ? document.querySelector(target) : target;

      if (!element) return;

      if (lenis) {
        lenis.scrollTo(element as HTMLElement, {
          offset,
          duration: SCROLL_DURATION,
        });
        return;
      }

      const top =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    },
    [lenis]
  );

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: SCROLL_DURATION });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lenis]);

  return { scrollToSection, scrollToTop };
}

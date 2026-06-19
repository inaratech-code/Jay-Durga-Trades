import { useEffect, useState, type ReactNode } from "react";

type LenisRootProps = {
  children: ReactNode;
};

export default function SmoothScrollRoot({ children }: LenisRootProps) {
  const [LenisProvider, setLenisProvider] = useState<
    ((props: LenisRootProps) => ReactNode) | null
  >(null);

  useEffect(() => {
    const schedule =
      window.requestIdleCallback ??
      ((callback: IdleRequestCallback) => window.setTimeout(callback, 200));

    const idleId = schedule(() => {
      void import("lenis/react").then(({ ReactLenis }) => {
        setLenisProvider(() => function LenisWrapper({ children: innerChildren }: LenisRootProps) {
          return (
            <ReactLenis
              root
              options={{
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 2,
              }}
            >
              {innerChildren}
            </ReactLenis>
          );
        });
      });
    });

    return () => {
      if (typeof idleId === "number" && window.cancelIdleCallback) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, []);

  if (!LenisProvider) {
    return children;
  }

  return <LenisProvider>{children}</LenisProvider>;
}

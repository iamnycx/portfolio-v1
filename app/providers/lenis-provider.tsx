"use client";

import { ReactLenis } from "lenis/react";
import { type FC, type ReactNode } from "react";

type LenisScrollProviderProps = {
  children: ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        smoothWheel: true,
        syncTouch: true,
        lerp: 0.1,
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        touchMultiplier: 1,
        autoResize: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

LenisScrollProvider.displayName = "LenisScrollProvider";

export default LenisScrollProvider;

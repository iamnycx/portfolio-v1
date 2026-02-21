"use client";

import { ReactLenis } from "lenis/react";
import { FC, type ReactNode, useRef } from "react";

type LenisScrollProviderProps = {
  children: ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;

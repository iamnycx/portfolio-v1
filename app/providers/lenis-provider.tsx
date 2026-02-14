"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, ReactNode, useRef } from "react";

type LenisScrollProviderProps = {
  children: ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.03, duration: 1.5, smoothWheel: true, syncTouch: false }}
    >
      {children as any}
    </ReactLenis>
  );
};

export default LenisScrollProvider;

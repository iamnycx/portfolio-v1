"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { memo, type FC, type ReactNode, useMemo } from "react";

type LenisScrollProviderProps = {
  children: ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const options = useMemo<LenisOptions>(
    () => ({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.2,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1,
      autoResize: true,
    }),
    [],
  );

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
};

LenisScrollProvider.displayName = "LenisScrollProvider";

export default memo(LenisScrollProvider);

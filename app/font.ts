import localFont from "next/font/local";

export const rx100 = localFont({
  src: [
    {
      path: "../public/font/RX100-Regular.woff2",
      style: "normal",
    },
  ],
  variable: "--font-rx100",
});

export const offBit = localFont({
  src: [
    {
      path: "../public/font/OffBitTrial-Bold.woff2",
      style: "normal",
    },
  ],
  variable: "--font-offbit",
});

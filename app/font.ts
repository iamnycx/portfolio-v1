import localFont from "next/font/local";

export const offBit = localFont({
  src: [
    {
      path: "../public/font/OffBitTrial-Bold.woff2",
      style: "normal",
    },
  ],
  variable: "--font-offbit",
});

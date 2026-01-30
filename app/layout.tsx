import type { Metadata } from "next";
import "./globals.css";
import { mono } from "./font";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import ClientComponents from "@/components/client-components";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { DirectionProvider } from "@/app/providers/direction-provider";
import LenisScrollProvider from "./providers/lenis-provider";

export const metadata: Metadata = {
  title: "nycx@dev",
  description:
    "nycx@dev is a software developer from India building fast, scalable web applications using modern frontend, backend, and cloud technologies.",
  metadataBase: new URL("https://nycx.is-a.dev"),
  openGraph: {
    title: "nycx@dev",
    description: "software developer based in india",
    url: "https://nycx.is-a.dev/",
    siteName: "nycx@dev",
    images: [
      {
        url: "https://nycx.is-a.dev/og.png",
        width: 1200,
        height: 630,
        alt: "nycx@dev",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "nycx@dev",
    description: "software developer based in india",
    images: ["https://nycx.is-a.dev/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <LenisScrollProvider>
            <DirectionProvider> {children} </DirectionProvider>
          </LenisScrollProvider>
          <Footer />
          <ClientComponents />
        </ThemeProvider>
      </body>
    </html>
  );
}

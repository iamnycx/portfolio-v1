import type { Metadata } from "next";
import "./globals.css";
import { mono } from "./font";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import ClientComponents from "@/components/client-components";
import { DirectionProvider } from "@/components/DirectionContext";
import { AnimatePresence } from "motion/react";

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
          <DirectionProvider>
            <AnimatePresence mode="sync">{children}</AnimatePresence>
          </DirectionProvider>
          <Footer />
          <ClientComponents />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { mono } from "./font";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { Suspense } from "react";
import ClientComponents from "@/components/client-components";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { DirectionProvider } from "@/app/providers/direction-provider";
import LenisScrollProvider from "./providers/lenis-provider";

export const metadata: Metadata = {
  title: "nycx@dev",
  description:
    "nycx@dev is a software developer from India building fast, scalable web applications using modern frontend, backend, and cloud technologies.",
  metadataBase: new URL("https://nycx.is-a.dev"),
  keywords: [
    "nycx",
    "nycx@dev",
    "developer",
    "software developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "fullstack developer",
    "india",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "nodejs",
    "cloud",
    "aws",
    "devops",
    "programmer",
    "coding",
    "technology",
    "blog",
    "portfolio",
  ],
  authors: [
    {
      name: "nycx",
      url: "https://nycx.is-a.dev",
    },
  ],
  creator: "nycx",
  openGraph: {
    title: "nycx@dev",
    description:
      "nycx@dev is a software developer from India building fast, scalable web applications using modern frontend, backend, and cloud technologies.",
    url: "https://nycx.is-a.dev/",
    siteName: "nycx@dev",
    images: [
      {
        url: "https://nycx.is-a.dev/opengraph-image.png",
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
    description:
      "nycx@dev is a software developer from India building fast, scalable web applications using modern frontend, backend, and cloud technologies.",
    images: ["https://nycx.is-a.dev/opengraph-image.png"],
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
        <Suspense>
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
        </Suspense>
      </body>
    </html>
  );
}

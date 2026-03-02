import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import React, { Suspense } from "react";
import { ThemeProvider } from "@/app/providers/theme-provider";
import LenisScrollProvider from "./providers/lenis-provider";
import { GeistPixelSquare } from "geist/font/pixel";

export const metadata: Metadata = {
  title: "nycx@dev",
  description:
    "nycx@dev is a software developer from India building fast, scalable web applications using modern frontend, backend, and cloud technologies.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
    description:
      "nycx@dev is a software developer from India building fast, scalable web applications using modern frontend, backend, and cloud technologies.",
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
      <body className={`${GeistPixelSquare.className} antialiased`}>
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisScrollProvider>
              <div className="relative">
                <Navbar />
                {children}
                <Footer />
              </div>
            </LenisScrollProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}

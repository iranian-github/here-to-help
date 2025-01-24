import type { Metadata, Viewport } from "next";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Here to Help | اینجائیم برای کمک",
  description: "منابع و خدمات رایگان برای کمک به شما در مواقع بحرانی",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://heretohelp.ir/",
    title: "Here to Help | اینجائیم برای کمک",
    description: "منابع و خدمات رایگان برای کمک به شما در مواقع بحرانی",
    countryName: "Iran",
    siteName: "Here to Help",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased m-0 leading-relaxed min-h-screen relative">
        <Image
          src="images/background.svg"
          alt="Background image"
          className="fixed top-0 left-0 w-full h-full -z-10 blur-[100px] opacity-75"
          width={1920}
          height={1080}
        />
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

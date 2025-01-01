// check
"use client";
import Cursor from "@/components/cursor/Cursor";
import Loader from "@/components/loader/Loader";
import Navbar from "@/components/navbar/Navbar";
import ProgressScroll from "@/components/progress-scroll/ProgressScroll";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Jost } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "../../public/css/plugins.css";
import "../../public/css/style.css";

const JostFont = Jost({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.body.classList.add("home-startup", "main-bg");
    return () => document.body.classList.remove("home-startup", "main-bg");
  }, []);

  return (
    <html lang="en">
      <head></head>
      <body className={JostFont.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}

        <Cursor />
        <ProgressScroll />

        <Loader />

        <Script
          strategy="beforeInteractive"
          src="/assets/js/plugins.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/script.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="https://maps.googleapis.com/maps/api/js?sensor=false"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/ScrollTrigger.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/ScrollSmoother.min.js"
        ></Script>
      </body>
    </html>
  );
}

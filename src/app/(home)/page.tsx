//@ts-nocheck
"use client";
import Heading from "@/components/heading/Heading";
import dynamic from "next/dynamic";
import { lazy, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "./SectionImage.css";
import useMediaQuery from "./components/useMediaQuery";

export default function Home() {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <ParallaxProvider>
      <main className="mw-100">
       
        <div style={{ background: "white", padding: "60px 0" }}>
          <div className="heading">
           
            <div className="mt-100 text-center">
            <h3 style={{color:"#172639"}}>Coming soon</h3>
            </div>
          </div>        
        </div>
    
      </main>
    </ParallaxProvider>
  );
}


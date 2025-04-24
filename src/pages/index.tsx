import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectCarousel from "@/components/ProjectCarousel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const TITLE = 'Games by Carter';

export default function Home() {
  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
      <Navbar />
      <h1 className='section-header' style={{ margin: "0.5%" }}>Professional Experience</h1>
      <HeroCarousel />
      <br/>
      <h1 className='section-header' style={{ margin: "0.5%" }}>Personal Projects</h1>
      <ProjectCarousel />
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

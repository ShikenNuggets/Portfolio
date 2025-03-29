import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

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

const TITLE = 'Weird Hamster Ball Game - Games by Carter';

export default function Home() {
  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
      <Navbar />
      <Projects />
    </>
  );
}

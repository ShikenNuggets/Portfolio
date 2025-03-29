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

const TITLE = 'Games by Carter';

//import Background from "/background.png"

import Background from "../../public/background.png"

const sectionStyle = {
  outerWidth: "100%",
  outerHeight: "100%",
  backgroundImage: "url(" + { Background } + ")"
};

export function Test(){
  return (
    <section style={ sectionStyle }>
    </section>
  );
};

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

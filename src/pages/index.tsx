import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectCarousel from "@/components/ProjectCarousel";
import MiscProjectCarousel from "@/components/MiscProjectCarousel";

import { GetStaticProps } from "next";
import { LoadAllMarkdowns } from "@/utils/FileContentsHelper";

export const getStaticProps: GetStaticProps = async () => {
  const markdowns = LoadAllMarkdowns();
  return {
    props: {
      markdowns,
    }
  }
}

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
//export const getStaticProps = getStaticPropsFromFile('content/clay.md');

interface HomePageProps {
	markdowns: Record<string, string>
}

const Home: React.FC<HomePageProps> = ({ markdowns }) => {
  useEffect(() => {
    document.title = TITLE;
  }, []);

  console.log('markdowns contains key "clay":', 'clay' in markdowns);

  return (
    <>
      <Navbar />
      <h1 className='section-header' style={{ margin: "0.5%" }}>Professional Experience</h1>
      <HeroCarousel />
      <br/>
      <h1 className='section-header' style={{ margin: "0.5%" }}>Game Projects</h1>
      <ProjectCarousel />
      <br/>
      <h1 className='section-header' style={{ margin: "0.5%" }}>Other Projects</h1>
      <MiscProjectCarousel projectName="Clay Software Corporation" markdownContents={markdowns} />
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default Home;

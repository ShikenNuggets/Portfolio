import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from "@/components/Navbar";
import ProjectInfo from "@/components/ProjectInfo"
import Projects from "@/components/Projects";
import VideoFrame from "@/components/VideoFrame";
import MarkdownText from "@/components/MarkdownText";
import getStaticPropsFromFile from '@/utils/FileContentsHelper'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

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
export const getStaticProps = getStaticPropsFromFile('content/whbg.md');

export default function WHBG({ fileContent }: { fileContent: string }) {
  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
      <Navbar />
	  <div>
		<h1 style={{justifySelf: "center", fontSize: "xx-large", marginBottom: "0.5%"}}>Weird Hamster Ball Game</h1>
		<div className="article-content">
			<MarkdownText markdownText={fileContent} />
		</div>
	  </div>
    </>
  );
}

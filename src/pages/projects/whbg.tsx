import { Inter } from "next/font/google";
import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from "@/components/Navbar";
import MarkdownText from "@/components/MarkdownText";
import getStaticPropsFromFile from '@/utils/FileContentsHelper'
import ProjectContent from "@/components/ProjectContent";

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
		<ProjectContent title="Weird Hamster Ball Game" markdownContent={fileContent} />
		</>
	);
}

import { Inter } from "next/font/google";
import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import getStaticPropsFromFile from "@/utils/FileContentsHelper";

const inter = Inter({
	variable: "--font-inter-sans",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

const TITLE = 'Disney Magic Kingdoms - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('content/dmk.md');

export default function DMK({ fileContent }: { fileContent: string }) {
	useEffect(() => {
		document.title = TITLE;
	}, []);

	return (
		<>
		<Navbar />
		<div>
		<ProjectContent title="Disney Magic Kingdoms" markdownContent={fileContent} />
		</div>
		</>
	);
}

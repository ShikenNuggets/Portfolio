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

const ProjectName = 'Battleship Text Game';
const TITLE = ProjectName + ' - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('content/battleship.md');

export default function Battleship({ fileContent }: { fileContent: string }) {
	useEffect(() => {
		document.title = TITLE;
	}, []);

	return (
		<>
		<Navbar />
		<div>
		<ProjectContent title={ProjectName} markdownContent={fileContent} />
		</div>
		</>
	);
}

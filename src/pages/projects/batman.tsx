import { Inter } from "next/font/google";
import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import getStaticPropsFromFile from "@/utils/FileContentsHelper";

const inter = Inter({
	variable: "--font-inter-sans",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

const ProjectName = 'Batman NES Remake';
const TITLE = ProjectName + ' - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('content/batman.md');

export default function Batman({ fileContent }: { fileContent: string }) {
	return (
		<>
		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>
		<Navbar />
		<div>
		<ProjectContent title={ProjectName} markdownContent={fileContent} />
		</div>
		</>
	);
}

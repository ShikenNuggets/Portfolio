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

const TITLE = 'Secret Identity - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('content/secret-identity.md');

export default function SecretIdentity({ fileContent }: { fileContent: string }) {
	return (
		<>
		<Helmet>
			<title>{ TITLE }</title>
		</Helmet>
		<Navbar />
		<div>
		<ProjectContent title="Secret Identity" markdownContent={fileContent} />
		</div>
		</>
	);
}

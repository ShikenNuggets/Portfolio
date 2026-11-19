import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import getStaticPropsFromFile from "@/utils/FileContentsHelper";

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

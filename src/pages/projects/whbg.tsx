import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import getStaticPropsFromFile from '@/utils/FileContentsHelper'
import ProjectContent from "@/components/ProjectContent";

const TITLE = 'Weird Hamster Ball Game - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('whbg.md');

export default function WHBG({ fileContent }: { fileContent: string }) {
	useEffect(() => {
		document.title = TITLE;
	}, []);

	return (
		<>
		<Navbar />
		<ProjectContent title="Weird Hamster Ball Game" markdownContent={fileContent} />
		</>
	);
}

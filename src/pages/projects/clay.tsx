import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import getStaticPropsFromFile from "@/utils/FileContentsHelper";

const ProjectName = 'Clay Software Corporation';
const TITLE = ProjectName + ' - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('clay.md');

export default function Clay({ fileContent }: { fileContent: string }) {
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

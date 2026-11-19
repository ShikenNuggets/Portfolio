import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import getStaticPropsFromFile from "@/utils/FileContentsHelper";

const ProjectName = 'Peggle Clone';
const TITLE = ProjectName + ' - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('content/peggle.md');

export default function Peggle({ fileContent }: { fileContent: string }) {
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

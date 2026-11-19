import React, { useEffect } from 'react';

import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import getStaticPropsFromFile from "@/utils/FileContentsHelper";

const TITLE = 'Secret Identity - Games by Carter';
export const getStaticProps = getStaticPropsFromFile('secret-identity.md');

export default function SecretIdentity({ fileContent }: { fileContent: string }) {
	useEffect(() => {
		document.title = TITLE;
	}, []);

	return (
		<>
		<Navbar />
		<div>
		<ProjectContent title="Secret Identity" markdownContent={fileContent} />
		</div>
		</>
	);
}

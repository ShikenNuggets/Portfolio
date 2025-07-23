import { GetServerSideProps, GetStaticProps } from "next";
import fs from 'fs'
import path from 'path'

export const getStaticFileContents = (filePath: string): GetStaticProps => {
	return async() => {
		const absolutePath = path.join(process.cwd(), filePath) // ensure correct path resolution
		const fileContent = fs.readFileSync(absolutePath, 'utf-8')

		return {
			props: {
				fileContent,
			},
		}
	}
}

export function LoadAllMarkdowns(){
	const contentDir = path.join(process.cwd(), 'content');
	const files = fs.readdirSync(contentDir);

	const markdownMap: Record<string, string> = {}

	files.forEach((file => {
		if (file.endsWith(".md")){
			const slug = file.replace(/\.md$/, '');
			const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
			markdownMap[slug] = content;
		}
	}));

	return markdownMap;
}

export default getStaticFileContents;

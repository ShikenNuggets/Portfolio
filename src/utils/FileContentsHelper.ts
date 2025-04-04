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

export default getStaticFileContents;

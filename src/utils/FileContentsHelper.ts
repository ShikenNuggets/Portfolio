import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { getVisibleProjects, type Project } from "@/data/projects";

export function readContentFile(fileName: string): string {
  const absolutePath = path.join(process.cwd(), "content", fileName);
  return fs.readFileSync(absolutePath, "utf-8");
}

export const getStaticFileContents = (fileName: string): GetStaticProps => {
  return async () => {
    const fileContent = readContentFile(fileName);

    return {
      props: {
        fileContent,
      },
    };
  };
};

export function loadProjectMarkdowns(
  projects: readonly Project[] = getVisibleProjects()
): Record<string, string> {
  return Object.fromEntries(
    projects.map((project) => [project.slug, readContentFile(project.markdownFile)])
  );
}

export default getStaticFileContents;

import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import { readContentFile } from "@/utils/FileContentsHelper";

interface ProjectPageProps {
  title: string;
  fileContent: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllProjectSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProjectPageProps,
  { slug: string }
> = async ({ params }) => {
  const slug = params?.slug;
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return { notFound: true };
  }

  const fileContent = readContentFile(project.markdownFile);

  return {
    props: {
      title: project.title,
      fileContent,
    },
  };
};

export default function ProjectPage({ title, fileContent }: ProjectPageProps) {
  return (
    <>
      <Head>
        <title>{`${title} - Games by Carter`}</title>
      </Head>
      <Navbar />
      <div>
        <ProjectContent title={title} markdownContent={fileContent} />
      </div>
    </>
  );
}

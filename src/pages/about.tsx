import React, { useEffect } from "react";

import Navbar from "@/components/Navbar";
import ProjectContent from "@/components/ProjectContent";
import getStaticPropsFromFile from "@/utils/FileContentsHelper";

const ProjectName = "About Me";
const TITLE = ProjectName + " - Games by Carter";
export const getStaticProps = getStaticPropsFromFile("content/about.md");

export default function AboutMe({ fileContent }: { fileContent: string }) {
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

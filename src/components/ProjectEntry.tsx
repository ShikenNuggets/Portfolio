"use client";
import Image from "next/image";
import React from "react";

export type Project = {
  title: string;
  type: string;
  tech: string;
  years: string;
};

interface ProjectProps {
  project: Project;
  shortName: string;
  onClick?: (title: string, shortName: string) => void;
  priority?: boolean;
}

function ProjectEntry({
  project,
  shortName,
  onClick,
  priority = false,
}: ProjectProps) {
  const imageName = "/" + shortName + ".png";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.(project.title, shortName);
  };

  return (
    <div className="project-container" onClick={handleClick}>
      <Image
        src={imageName}
        width={1200}
        height={800}
        alt={project.title}
        priority={priority}
      />
      <div className="project-text">
        <h2>{project.type}</h2>
        <h2>{project.tech}</h2>
        <h2>{project.years}</h2>
      </div>
    </div>
  );
}

export default ProjectEntry;

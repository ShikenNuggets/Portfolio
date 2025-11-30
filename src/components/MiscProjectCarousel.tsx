import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry, { Project } from "./ProjectEntry";
import ProjectModal from "./ProjectModal";
import { useState, useEffect } from "react";

import { UseHashModal } from "@/utils/UseHashModal";

const responsive = {
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 3,
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1,
	}
};

const projects: Record<string, Project> = {
	"portfolio": { title: 'Portfolio', type: 'Web Front-End', tech: 'React/TypeScript', years: '2025' },
	"route-tracker": { title: 'Arkham Speedrun Route Tracker', type: 'Desktop Application', tech: 'C#', years: '2020 - 2025' },
	"speed-archive": { title: 'SpeedArchive', type: 'Console Utility', tech: 'C#', years: '2019 - 2022' },
	"batbot": { title: 'Batbot', type: 'Discord Bot', tech: 'C#', years: '2019 - 2022' },
}

type MiscrProjectCarouselProps = {
	markdownContents: Record<string, string>;
}

export default function MiscProjectCarousel({ markdownContents} : MiscrProjectCarouselProps){
	const {
		modalOpen,
		activeProject,
		activeTitle,
		openModal,
		closeModal
	} = UseHashModal(projects);

  return (
    <>
	<div style={{ position: "relative", zIndex: 1, margin: "1%" }}>

      <Carousel
	  	arrows={true}
		swipeable={true}
		draggable={false}
		showDots={false}
		responsive={responsive}
		ssr={true} // means to render carousel on server-side.
		infinite={false}
		autoPlay={false}
		customTransition="transform 500ms ease-in-out"
		transitionDuration={500}
		containerClass="carousel-container"
		deviceType="desktop"
		dotListClass="custom-dot-list-style"
		itemClass="carousel-item-padding-40-px"
		slidesToSlide={1}
		>
		{Object.entries(projects).map(([shortName, project]) => (
			<div key={shortName}>
				<ProjectEntry project={project} shortName={shortName} onClick={openModal} />
			</div>
		))}
      </Carousel>
	  </div>
	  {modalOpen && activeProject && activeTitle && (
	  	<ProjectModal shortName={activeProject} onClose={closeModal} title={activeTitle} markdownContent={markdownContents[activeProject]} />
	  )}
    </>
  );
}

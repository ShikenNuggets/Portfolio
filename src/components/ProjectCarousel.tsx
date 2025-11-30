import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry, { Project } from "./ProjectEntry";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";

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
	"whbg": { title: "Weird Hamster Ball Game", type: "Game Jam", tech: "C++", years: "2024"},
	"secret-identity": { title: "Secret Identity", type: "Personal Project", tech: "UE5 / C++", years: "2024" },
	"gadget": { title: "Gadget Engine", type: "Personal Game Engine", tech: "C++", years: "2022 - 2024" },
	"roof-toppers": { title: "Roof Toppers / PizzaBox Game Engine", type: "School Project", tech: "C++", years: "2017 - 2019" },
	"splinter-gear": { title: "Splinter Gear", type: "School Project", tech: "Unity / C#", years: "2017-2018" },
	//"java-chess": { title: "Java Chess", type: "School Project", tech: "Java", years: "2017-2018" },
	"batman": { title: "Batman NES Remake", type: "School Project", tech: "Unity / C#", years: "2017" },
	//"peggle": { title: "Peggle Clone", type: "School Project", tech: "C++", years: "2017" },
	//"js-fighter": { title: "JavaScript Fighter", type: "School Project", tech: "JavaScript", years: "2017" },
	//"battleship": { title: "Battleship", type: "School Project", tech: "C#", years: "2016" },
}

type ProjectCarouselProps = {
	markdownContents: Record<string, string>;
}

export default function ProjectCarousel({ markdownContents } : ProjectCarouselProps){
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

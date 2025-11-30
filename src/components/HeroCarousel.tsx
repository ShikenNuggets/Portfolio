import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry, { Project } from "./ProjectEntry";
import { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import { UseHashModal } from "@/utils/UseHashModal";

const responsive = {
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 2,
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1,
	}
};

const projects: Record<string, Project> = {
	clay: { title: "Clay Software Corporation", type: "Clay Software Corporation", tech: "Unreal Engine Software Developer", years: "2024 - Present" },
	dmk: { title: "Disney Magic Kingdoms", type: "Gameloft Toront", tech: "Programmer (C++)", years: "2019 - 2024" },
};

type HeroCarouselProps = {
	markdownContents: Record<string, string>;
};

export default function HeroCarousel({ markdownContents }: HeroCarouselProps){
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
		removeArrowOnDeviceType={["desktop"]}
		containerClass="carousel-container"
		dotListClass="custom-dot-list-style"
		itemClass="carousel-item-padding-40-px"
		>
        <div><ProjectEntry project={projects["clay"]} shortName='clay' onClick={openModal} priority={true} /></div>
        <div><ProjectEntry project={projects["dmk"]} shortName='dmk' onClick={openModal} /></div>
      </Carousel>
	  </div>
	  {modalOpen && activeProject && activeTitle && (
	  	<ProjectModal shortName={activeProject} onClose={closeModal} title={activeTitle} markdownContent={markdownContents[activeProject]} />
	  )}
    </>
  );
}

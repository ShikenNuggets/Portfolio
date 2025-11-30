import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";
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

type HeroCarouselProps = {
	markdownContents: Record<string, string>;
};

export default function HeroCarousel({ markdownContents }: HeroCarouselProps){
	const projectTitles: Record<string, string> = {
		clay: "Clay Software Corporation",
		dmk: "Disney Magic Kingdoms"
	};

	const {
		modalOpen,
		activeProject,
		activeTitle,
		openModal,
		closeModal
	} = UseHashModal(projectTitles);


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
        <div><ProjectEntry title='Clay Software Corporation' type='Clay Software Corporation' tech='Unreal Engine Software Developer' years='2024 - Present' shortName='clay' onClick={openModal} priority={true} /></div>
        <div><ProjectEntry title='Disney Magic Kingdoms' type='Gameloft Toronto' tech='Programmer (C++)' years='2019 - 2024' shortName='dmk' onClick={openModal} /></div>
      </Carousel>
	  </div>
	  {modalOpen && activeProject && activeTitle && (
	  	<ProjectModal shortName={activeProject} onClose={closeModal} title={activeTitle} markdownContent={markdownContents[activeProject]} />
	  )}
    </>
  );
}

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectEntry from "./ProjectEntry";
import { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";

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

const projectTitles: Record<string, string> = {
	clay: "Clay Software Corporation",
	dmk: "Disney Magic Kingdoms"
};

type HeroCarouselProps = {
	markdownContents: Record<string, string>;
};

export default function HeroCarousel({ markdownContents }: HeroCarouselProps){
	const [modalOpen, setModalOpen] = useState(false);
	const [activeProject, setActiveProject] = useState<string | null>(null);
	const [activeTitle, setActiveProjectTitle] = useState<string | null>(null);

	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash.replace("#", "");

			if (hash && markdownContents[hash]) {
				setActiveProject(hash);
				setActiveProjectTitle(projectTitles[hash]);
				setModalOpen(true);
			} else {
				// No matching hash → ensure modal is closed
				setModalOpen(false);
				setActiveProject(null);
				setActiveProjectTitle(null);
			}
		};

		handleHash(); // run once on load
		window.addEventListener("hashchange", handleHash);
		return () => window.removeEventListener("hashchange", handleHash);
	}, [markdownContents]);

	const openModal = (title: string, shortName: string) => {
		window.location.hash = shortName;
		setActiveProject(shortName);
		setActiveProjectTitle(title);
		setModalOpen(true);
	};
	
	const closeModal = () => {
		history.replaceState(null, "", " ");
		setActiveProject(null);
		setActiveProjectTitle(null);
		setModalOpen(false);
	};

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
